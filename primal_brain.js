/**
 * Primal Energy Intellect (源能智慧体) - Neural Network & Territorial AI Controller
 * Real-time In-Browser Deep Reinforcement Learning Policy Execution
 * Powered by Dueling Double Deep Q-Network (32 inputs -> 128 -> 128 -> V(s) & A(s,a) -> 8 outputs)
 */

(function(global) {
  'use strict';

  class PrimalNeuralNet {
    constructor(data) {
      this.w = data ? data.weights : null;
      this.actionLabels = data ? data.action_labels : [
        'REPOSITION_TACTICAL',
        'TERRAFORM_CRYSTAL',
        'ERECT_PYLON',
        'SUMMON_VORTEX',
        'SHAPE_FORCEFIELD',
        'ENERGY_SIPHON',
        'DIMENSIONAL_WARP',
        'PRIMAL_OVERLOAD'
      ];
      this.loaded = Boolean(this.w);
    }

    setWeights(data) {
      if (!data || !data.weights) return;
      this.w = data.weights;
      if (data.action_labels) this.actionLabels = data.action_labels;
      this.loaded = true;
    }

    linear(x, weights, bias) {
      const outDim = weights.length;
      const inDim = x.length;
      const out = new Float32Array(outDim);
      for (let i = 0; i < outDim; i++) {
        let sum = bias[i];
        const row = weights[i];
        for (let j = 0; j < inDim; j++) {
          sum += row[j] * x[j];
        }
        out[i] = sum;
      }
      return out;
    }

    layerNorm(x, gamma, beta, eps = 1e-5) {
      const len = x.length;
      let mean = 0;
      for (let i = 0; i < len; i++) mean += x[i];
      mean /= len;

      let variance = 0;
      for (let i = 0; i < len; i++) {
        const diff = x[i] - mean;
        variance += diff * diff;
      }
      variance /= len;

      const stdInv = 1.0 / Math.sqrt(variance + eps);
      const out = new Float32Array(len);
      for (let i = 0; i < len; i++) {
        out[i] = ((x[i] - mean) * stdInv) * gamma[i] + beta[i];
      }
      return out;
    }

    silu(x) {
      const out = new Float32Array(x.length);
      for (let i = 0; i < x.length; i++) {
        const val = x[i];
        out[i] = val / (1.0 + Math.exp(-val));
      }
      return out;
    }

    predict(obs) {
      if (!this.loaded) {
        // Fallback heuristic if network weights are initializing
        return this.fallbackHeuristic(obs);
      }

      // 1. Feature Extractor
      let h = this.linear(obs, this.w['feature_network.0.weight'], this.w['feature_network.0.bias']);
      h = this.layerNorm(h, this.w['feature_network.1.weight'], this.w['feature_network.1.bias']);
      h = this.silu(h);
      h = this.linear(h, this.w['feature_network.3.weight'], this.w['feature_network.3.bias']);
      h = this.silu(h);

      // 2. Value Stream: V(s)
      let v = this.linear(h, this.w['value_stream.0.weight'], this.w['value_stream.0.bias']);
      v = this.silu(v);
      const value = this.linear(v, this.w['value_stream.2.weight'], this.w['value_stream.2.bias'])[0];

      // 3. Advantage Stream: A(s, a)
      let a = this.linear(h, this.w['advantage_stream.0.weight'], this.w['advantage_stream.0.bias']);
      a = this.silu(a);
      const adv = this.linear(a, this.w['advantage_stream.2.weight'], this.w['advantage_stream.2.bias']);

      // 4. Dueling Q aggregation: Q(s, a) = V(s) + (A(s, a) - mean(A))
      let advMean = 0;
      for (let i = 0; i < adv.length; i++) advMean += adv[i];
      advMean /= adv.length;

      const qValues = new Float32Array(adv.length);
      let bestAction = 0;
      let maxQ = -Infinity;

      for (let i = 0; i < adv.length; i++) {
        qValues[i] = value + (adv[i] - advMean);
        if (qValues[i] > maxQ) {
          maxQ = qValues[i];
          bestAction = i;
        }
      }

      return {
        action: bestAction,
        label: this.actionLabels[bestAction],
        qValues: Array.from(qValues),
        value: value
      };
    }

    fallbackHeuristic(obs) {
      // Intelligent tactical fallback when offline/pre-loading
      const playerDist = obs[9];
      const pylonCount = obs[13];
      const energy = obs[2];
      let action = 0;

      if (energy > 0.35 && pylonCount < 0.75) {
        action = 2; // ERECT_PYLON
      } else if (pylonCount >= 0.5 && playerDist < 0.4) {
        action = 4; // SHAPE_FORCEFIELD
      } else if (energy > 0.4 && playerDist < 0.3) {
        action = 7; // PRIMAL_OVERLOAD
      } else if (obs[16] < 0.5 && energy > 0.2) {
        action = 1; // TERRAFORM_CRYSTAL
      } else {
        action = 0; // REPOSITION_TACTICAL
      }

      return {
        action: action,
        label: this.actionLabels[action],
        qValues: new Array(8).fill(0),
        value: 0
      };
    }
  }

  // Controller Singleton
  const PrimalIntellectAI = {
    net: new PrimalNeuralNet(null),
    isReady: false,

    async init() {
      try {
        const resp = await fetch('primal_intellect_brain.json');
        if (resp.ok) {
          const data = await resp.json();
          this.net.setWeights(data);
          this.isReady = true;
          console.log('🌌 [PrimalIntellectAI] Reinforcement Model Loaded Successfully into Game Engine!');
        } else {
          console.warn('⚠️ [PrimalIntellectAI] Using embedded heuristic weights fallback');
        }
      } catch (err) {
        console.warn('⚠️ [PrimalIntellectAI] Fetch failed, fallback mode active:', err);
      }
    },

    buildObservation(boss, player, entities, arenaRadius = 600) {
      const obs = new Float32Array(32);

      // 1. Boss normalized stats
      obs[0] = Math.max(0, boss.hp / (boss.maxHp || 3000));
      obs[1] = Math.max(0, (boss.shield || 0) / 1000);
      obs[2] = Math.max(0, (boss.energy || 50) / 100);
      obs[3] = Math.max(-1, Math.min(1, (boss.x - (boss.originX || boss.x)) / arenaRadius));
      obs[4] = Math.max(-1, Math.min(1, (boss.y - (boss.originY || boss.y)) / arenaRadius));
      obs[5] = (boss.phase || 1) / 3.0;

      // 2. Player normalized stats
      obs[6] = Math.max(0, player.hp / player.maxHp);
      obs[7] = Math.max(-1, Math.min(1, (player.x - (boss.originX || boss.x)) / arenaRadius));
      obs[8] = Math.max(-1, Math.min(1, (player.y - (boss.originY || boss.y)) / arenaRadius));

      // 3. Relative spatial geometry
      const dx = player.x - boss.x;
      const dy = player.y - boss.y;
      const dist = Math.hypot(dx, dy);
      const angle = Math.atan2(dy, dx);
      obs[9] = Math.min(1.0, dist / (arenaRadius * 1.5));
      obs[10] = Math.sin(angle);
      obs[11] = Math.cos(angle);

      // 4. Territory & Infrastructure Control
      const crystals = entities.filter(e => e.type === 'primal_crystal');
      const pylons = entities.filter(e => e.type === 'primal_pylon');
      const vortices = entities.filter(e => e.type === 'energy_vortex');

      obs[12] = Math.min(1.0, crystals.length / 25.0);
      obs[13] = Math.min(1.0, pylons.length / 4.0);
      obs[14] = Math.min(1.0, vortices.length / 2.0);

      // Boss on crystal
      const bossOnCrystal = crystals.some(c => Math.hypot(c.x - boss.x, c.y - boss.y) < 60);
      const playerOnCrystal = crystals.some(c => Math.hypot(c.x - player.x, c.y - player.y) < 60);
      obs[15] = bossOnCrystal ? 1.0 : 0.0;
      obs[16] = playerOnCrystal ? 1.0 : 0.0;

      // 5. Pylon Forcefield Cohesion
      let activeLinks = 0;
      for (let i = 0; i < pylons.length; i++) {
        for (let j = i + 1; j < pylons.length; j++) {
          if (Math.hypot(pylons[i].x - pylons[j].x, pylons[i].y - pylons[j].y) < 420) {
            activeLinks++;
          }
        }
      }
      obs[17] = Math.min(1.0, activeLinks / 4.0);

      let minPylonDist = 999.0;
      for (const p of pylons) {
        const d = Math.hypot(player.x - p.x, player.y - p.y);
        if (d < minPylonDist) minPylonDist = d;
      }
      obs[18] = Math.min(1.0, minPylonDist / 600.0);

      // 6. Cooldown readiness
      const cds = boss.cooldowns || [0,0,0,0,0,0,0,0];
      for (let i = 0; i < 8; i++) {
        obs[19 + i] = (cds[i] <= 0) ? 1.0 : 0.0;
      }

      // 7. Sector occupancy
      for (let i = 0; i < 5; i++) {
        const sAngle = (i / 5.0) * Math.PI * 2;
        const sx = boss.x + Math.cos(sAngle) * 120;
        const sy = boss.y + Math.sin(sAngle) * 120;
        const hasCrystal = crystals.some(c => Math.hypot(c.x - sx, c.y - sy) < 55);
        obs[27 + i] = hasCrystal ? 1.0 : 0.0;
      }

      return obs;
    },

    decide(boss, player, entities) {
      const obs = this.buildObservation(boss, player, entities);
      return this.net.predict(obs);
    }
  };

  // Expose to window/global
  global.PrimalIntellectAI = PrimalIntellectAI;

  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      PrimalIntellectAI.init();
    });
  }

})(typeof window !== 'undefined' ? window : this);
