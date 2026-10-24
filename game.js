/**
 * Don't Starve: Reign of the Wilderness (饥荒：永恒之境)
 * High-Fidelity Survival Sandbox Engine
 * Complete with Seasons, Temperature, Moisture, Prototyping Tech Tree,
 * Crock Pot Cooking, Food Freshness, Beefalo Herds, Pigs, Hounds, Bosses & Mini-map.
 */

// --- 1. Procedural Web Audio Synthesizer ---
class SoundSynth {
  constructor() {
    this.ctx = null;
    this.initialized = false;
    this.enabled = localStorage.getItem('dst_pocket_sfx') !== '0';
  }

  canPlay() {
    return Boolean(this.ctx && this.enabled && !document.hidden);
  }

  init() {
    if (this.initialized) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      this.ctx = new AudioContext();
      this.initialized = true;
    }
  }

  playChop() {
    if (!this.canPlay()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.08);
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.08);
  }

  playMine() {
    if (!this.canPlay()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(650, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.06);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.06);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.06);
  }

  playPickup() {
    if (!this.canPlay()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(480, now);
    osc.frequency.exponentialRampToValueAtTime(960, now + 0.09);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.09);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.09);
  }

  playCraft() {
    if (!this.canPlay()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.setValueAtTime(480, now + 0.08);
    osc.frequency.setValueAtTime(640, now + 0.16);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.28);
  }

  playEat() {
    if (!this.canPlay()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(240, now);
    osc.frequency.linearRampToValueAtTime(160, now + 0.12);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.12);
  }

  playHit() {
    if (!this.canPlay()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(190, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.15);
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.15);
  }

  playCharlieAttack() {
    if (!this.canPlay()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(950, now);
    osc.frequency.linearRampToValueAtTime(90, now + 0.38);
    gain.gain.setValueAtTime(0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.4);
  }

  playHoundGrowl() {
    if (!this.canPlay()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.linearRampToValueAtTime(160, now + 0.25);
    osc.frequency.linearRampToValueAtTime(60, now + 0.6);
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.6);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.6);
  }

  playBeefaloGrunt() {
    if (!this.canPlay()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(65, now);
    osc.frequency.linearRampToValueAtTime(45, now + 0.5);
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.5);
  }

  playThunder() {
    if (!this.canPlay()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(90, now);
    osc.frequency.exponentialRampToValueAtTime(25, now + 0.9);
    gain.gain.setValueAtTime(0.6, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.9);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.9);
  }

  playCookingBubbles() {
    if (!this.canPlay()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300 + Math.random() * 200, now);
    osc.frequency.linearRampToValueAtTime(600, now + 0.08);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.08);
  }

  playChester() {
    if (!this.canPlay()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.linearRampToValueAtTime(780, now + 0.09);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.12);
  }

  playMagic() {
    if (!this.canPlay()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(960, now + 0.35);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.38);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.38);
  }

  playBossRoar() {
    if (!this.canPlay()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(65, now);
    osc.frequency.linearRampToValueAtTime(35, now + 0.8);
    gain.gain.setValueAtTime(0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.85);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.85);
  }

  playWind() {
    if (!this.canPlay()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.linearRampToValueAtTime(260, now + 0.2);
    osc.frequency.linearRampToValueAtTime(90, now + 0.5);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.55);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.55);
  }

  playLaser() {
    if (!this.canPlay()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.3);
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.3);
  }

  playWolfHowl() {
    if (!this.canPlay()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(380, now);
    osc.frequency.linearRampToValueAtTime(540, now + 0.4);
    osc.frequency.linearRampToValueAtTime(260, now + 0.9);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.95);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.95);
  }
}

const audio = new SoundSynth();

// --- 1.5. Playable Survivors Roster (70h Character System) ---
const CHARACTERS = {
  wilson: {
    id: 'wilson',
    name: '威尔逊',
    title: '绅士科学家',
    avatar: '👨‍🔬',
    maxHp: 150,
    maxHunger: 150,
    maxSanity: 200,
    speed: 165,
    beardStage: 0,
    desc: '全能均衡，生长胡须抵御冬寒，剃须可获珍贵胡须与理智。'
  },
  wendy: {
    id: 'wendy',
    name: '温蒂',
    title: '丧亲哀恸者',
    avatar: '👧',
    maxHp: 150,
    maxHunger: 150,
    maxSanity: 200,
    speed: 165,
    startItem: 'abigail_flower',
    damageMod: 0.75,
    sanityAuraMod: 0.75,
    desc: '自带阿比盖尔之花，黄昏夜间召唤孪生姐姐鬼魂群攻助战！'
  },
  wolfgang: {
    id: 'wolfgang',
    name: '沃尔夫冈',
    title: '大力士',
    avatar: '🏋️',
    maxHp: 200,
    maxHunger: 300,
    maxSanity: 200,
    speed: 165,
    desc: '饱食度高于220化身肌肉巨汉，输出翻倍、移速大幅提升！'
  },
  wx78: {
    id: 'wx78',
    name: 'WX-78',
    title: '机器人',
    avatar: '🤖',
    maxHp: 100,
    maxHunger: 100,
    maxSanity: 100,
    speed: 165,
    gearsEaten: 0,
    desc: '吞吃齿轮永久升级三维上限！雷击过载发光加速，怕水。'
  },
  wigfrid: {
    id: 'wigfrid',
    name: '薇格弗德',
    title: '女武神',
    avatar: '🛡️',
    maxHp: 200,
    maxHunger: 120,
    maxSanity: 120,
    speed: 165,
    damageMod: 1.25,
    armorMod: 0.25,
    onlyMeat: true,
    startItem: 'battle_spear',
    desc: '纯肉食狂热战士，战吼打击吸血吸脑，专属长矛战盔！'
  }
};

// --- 2. Complete Items & Food Registry ---
const ITEMS = {
  // Raw resources
  twig: { id: 'twig', name: '树枝', icon: '🌿', desc: '坚韧细小的树枝，制作工具的基础。', stack: 40 },
  grass: { id: 'grass', name: '干草', icon: '🌾', desc: '干燥的野草，用来编织绳索和引火。', stack: 40 },
  flint: { id: 'flint', name: '燧石', icon: '🪨', desc: '边缘锋利的石块，制造工具的刃部。', stack: 40 },
  rock: { id: 'rock', name: '石块', icon: '🗿', desc: '坚硬的大石头，建筑和工具材料。', stack: 40 },
  gold: { id: 'gold', name: '金块', icon: '🪙', desc: '稀有的贵重金属，科技研发的核心。', stack: 40 },
  log: { id: 'log', name: '木头', icon: '🪵', desc: '伐木获得的优质燃料和建材。', stack: 40 },
  charcoal: { id: 'charcoal', name: '木炭', icon: '⬛', desc: '烧毁树木后获得的碳块，制造烹饪锅必备。', stack: 40 },
  manure: { id: 'manure', name: '牛粪', icon: '💩', desc: '皮弗娄牛排泄物，极优肥料与燃料。', stack: 40 },
  pinecone: { id: 'pinecone', name: '松果', icon: '🌰', desc: '松树种子，种在地上长出松树，安抚树人。', stack: 40 },
  beefalo_wool: { id: 'beefalo_wool', name: '牛毛', icon: '🧶', desc: '温暖浓密的牛毛，制作保暖衣物。', stack: 40 },
  hound_tooth: { id: 'hound_tooth', name: '犬牙', icon: '🦷', desc: '凶恶猎犬的锋利牙齿，制作犬牙陷阱。', stack: 40 },
  silk: { id: 'silk', name: '蜘蛛丝', icon: '🕸️', desc: '强韧的丝线，制作捕虫网与帐篷。', stack: 40 },
  gland: { id: 'gland', name: '蜘蛛腺体', icon: '💧', desc: '有刺激性的黏液腺体，可制成药膏。', stack: 40, food: { hunger: 0, hp: 8, sanity: -3 } },
  deerclops_eye: { id: 'deerclops_eye', name: '巨鹿眼球', icon: '👁️', desc: '击杀冬季霸主掉落的战利品，制成眼球伞。', stack: 1 },

  // Foods (with freshness decay, max Freshness = 180s in-game)
  berry: { id: 'berry', name: '生浆果', icon: '🫐', desc: '新鲜酸甜的浆果。+10饥饿。', stack: 40, maxFresh: 180, food: { hunger: 10, hp: 1, sanity: 0, cookable: 'berry_cooked', fruitVal: 1 } },
  berry_cooked: { id: 'berry_cooked', name: '烤浆果', icon: '🥧', desc: '烘烤后的香甜浆果。+18饥饿，+3生命。', stack: 40, maxFresh: 120, food: { hunger: 18, hp: 3, sanity: 1, fruitVal: 1 } },
  carrot: { id: 'carrot', name: '胡萝卜', icon: '🥕', desc: '生胡萝卜。+12饥饿，+1生命。', stack: 40, maxFresh: 240, food: { hunger: 12, hp: 1, sanity: 0, cookable: 'carrot_cooked', vegVal: 1 } },
  carrot_cooked: { id: 'carrot_cooked', name: '烤胡萝卜', icon: '🍢', desc: '烘烤后的甜胡萝卜。+16饥饿，+3生命。', stack: 40, maxFresh: 160, food: { hunger: 16, hp: 3, sanity: 1, vegVal: 1 } },
  meat: { id: 'meat', name: '生大肉', icon: '🥩', desc: '生猎物肉。生吃有微毒，最好煮熟。', stack: 40, maxFresh: 150, food: { hunger: 25, hp: -2, sanity: -5, cookable: 'meat_cooked', meatVal: 1 } },
  meat_cooked: { id: 'meat_cooked', name: '烤熟肉排', icon: '🍖', desc: '喷香扑鼻的烤肉！+40饥饿，+15生命，+5理智。', stack: 40, maxFresh: 200, food: { hunger: 40, hp: 15, sanity: 5, meatVal: 1 } },
  morsel: { id: 'morsel', name: '生小肉', icon: '🍗', desc: '兔肉等小块肉。+12饥饿。', stack: 40, maxFresh: 140, food: { hunger: 12, hp: 1, sanity: 0, cookable: 'morsel_cooked', meatVal: 0.5 } },
  morsel_cooked: { id: 'morsel_cooked', name: '烤小肉', icon: '🥓', desc: '香脆小肉。+18饥饿，+5生命。', stack: 40, maxFresh: 180, food: { hunger: 18, hp: 5, sanity: 2, meatVal: 0.5 } },
  monster_meat: { id: 'monster_meat', name: '怪物肉', icon: '🟣🥩', desc: '剧毒散发恶臭的怪物肉。生吃伤神害命！', stack: 40, maxFresh: 140, food: { hunger: 18, hp: -15, sanity: -15, cookable: 'monster_meat_cooked', meatVal: 1, isMonster: true } },
  monster_meat_cooked: { id: 'monster_meat_cooked', name: '烤怪物肉', icon: '🟣🍖', desc: '烤过仍有毒性，可放入烹饪锅稀释。', stack: 40, maxFresh: 160, food: { hunger: 20, hp: -5, sanity: -8, meatVal: 1, isMonster: true } },
  flower: { id: 'flower', name: '花瓣', icon: '🌸', desc: '采摘的小野花，恢复理智，可编织花环。', stack: 40, maxFresh: 150, food: { hunger: 2, hp: 1, sanity: 5 } },
  rot: { id: 'rot', name: '腐烂物', icon: '🍂💩', desc: '食物腐烂后形成的渣滓，可用作优质农作物肥料。', stack: 40 },

  // Crock Pot Delicacies
  meatballs: { id: 'meatballs', name: '经典肉丸', icon: '🧆', desc: '荒野生存的无上恩典！+62.5饥饿，+3生命，+5理智。', stack: 40, maxFresh: 220, food: { hunger: 62.5, hp: 3, sanity: 5 } },
  meaty_stew: { id: 'meaty_stew', name: '炖大肉汤', icon: '🍲', desc: '浓郁扎实的浓肉汤！+150极高饥饿，+12生命。', stack: 40, maxFresh: 200, food: { hunger: 150, hp: 12, sanity: 5 } },
  dragonpie: { id: 'dragonpie', name: '火龙果派', icon: '🥧', desc: '奢华香甜的红色烘焙派！+40高额生命，+75饥饿。', stack: 40, maxFresh: 250, food: { hunger: 75, hp: 40, sanity: 5 } },
  bacon_eggs: { id: 'bacon_eggs', name: '培根煎蛋', icon: '🍳', desc: '丰盛早餐！+75饥饿，+20生命，超长保质期。', stack: 40, maxFresh: 400, food: { hunger: 75, hp: 20, sanity: 5 } },
  monster_lasagna: { id: 'monster_lasagna', name: '怪物千层饼', icon: '🤢', desc: '怪物肉过量的黑暗料理！-20生命，-20理智。', stack: 40, maxFresh: 140, food: { hunger: 37.5, hp: -20, sanity: -20 } },

  // Refined Materials
  rope: { id: 'rope', name: '绳索', icon: '🪢', desc: '结实耐磨的草绳。精炼材料。', stack: 40 },
  boards: { id: 'boards', name: '木板', icon: '🪵🪚', desc: '平整厚实的木板，高级建筑核心。', stack: 40 },
  cut_stone: { id: 'cut_stone', name: '石砖', icon: '🧱', desc: '坚固整齐的石砖，建造炼金引擎与火坑。', stack: 40 },

  // Tools & Handheld Equipment
  axe: { id: 'axe', name: '草柄斧', icon: '🪓', desc: '砍伐树木必备工具。', equipSlot: 'hand', durability: 80, toolType: 'axe' },
  pickaxe: { id: 'pickaxe', name: '鹤嘴锄', icon: '⛏️', desc: '开采巨石与矿脉。', equipSlot: 'hand', durability: 60, toolType: 'pickaxe' },
  shovel: { id: 'shovel', name: '铲子', icon: '🔨', desc: '挖掘浆果丛、草根、树苗，移植到基地。', equipSlot: 'hand', durability: 50, toolType: 'shovel' },
  torch: { id: 'torch', name: '火把', icon: '🔥', desc: '随身移动照明，驱散黑夜查理。', equipSlot: 'hand', durability: 75, isLight: true },
  lantern: { id: 'lantern', name: '提灯', icon: '🏮', desc: '高亮提灯，可拿在手也可放置地面照亮基地。', equipSlot: 'hand', durability: 240, isLight: true },
  umbrella: { id: 'umbrella', name: '雨伞', icon: '☂️', desc: '雨季防淋湿，夏季抵御中暑。', equipSlot: 'hand', durability: 200, rainProtect: 0.8 },
  spear: { id: 'spear', name: '长矛', icon: '🗡️', desc: '基础近战武器，攻击力 35。', equipSlot: 'hand', durability: 120, weaponDamage: 35 },
  hambat: { id: 'hambat', name: '火腿棒', icon: '🍖🔨', desc: '用大肉制作的钝器，伤害高达 59，无耐久但会腐烂。', equipSlot: 'hand', maxFresh: 250, weaponDamage: 59 },
  darksword: { id: 'darksword', name: '暗夜剑', icon: '🟣🗡️', desc: '噩梦材质锻造，极高 68 伤害，挥动消耗理智。', equipSlot: 'hand', durability: 100, weaponDamage: 68, sanityDrainOnHit: 1.5 },

  // Head Equipment
  garland: { id: 'garland', name: '花环', icon: '👑', desc: '佩戴在头上，持续缓慢恢复理智。', equipSlot: 'head', durability: 120, sanityRegen: 0.6 },
  straw_hat: { id: 'straw_hat', name: '草帽', icon: '👒', desc: '防晒降温，轻度防雨。', equipSlot: 'head', durability: 150, heatProtect: 0.5 },
  winter_hat: { id: 'winter_hat', name: '冬帽', icon: '🧢', desc: '温暖毛线帽，严冬延缓体温下降。', equipSlot: 'head', durability: 240, coldProtect: 1.0 },
  beefalo_hat: { id: 'beefalo_hat', name: '牛角帽', icon: '🐂👑', desc: '极度保暖，并且牛群发情期不会攻击你！', equipSlot: 'head', durability: 300, coldProtect: 2.0 },
  football_helmet: { id: 'football_helmet', name: '猪皮头盔', icon: '🪖', desc: '坚韧的猪皮盔，吸收 80% 伤害！', equipSlot: 'head', durability: 200, armorDefense: 0.8 },

  // Body Equipment
  armor_grass: { id: 'armor_grass', name: '草甲', icon: '🦺', desc: '吸收 60% 伤害的简易胸甲。', equipSlot: 'body', durability: 120, armorDefense: 0.6 },
  armor_wood: { id: 'armor_wood', name: '木甲', icon: '🛡️', desc: '坚实原木甲，吸收 80% 伤害！', equipSlot: 'body', durability: 250, armorDefense: 0.8 },
  armor_night: { id: 'armor_night', name: '暗夜甲', icon: '🟣🛡️', desc: '暗影护盾，吸收 95% 巨额伤害，受击扣理智。', equipSlot: 'body', durability: 350, armorDefense: 0.95 },
  backpack: { id: 'backpack', name: '旅行背包', icon: '🎒', desc: '背在身上，额外提供 8 格背包栏！', equipSlot: 'body', isBackpack: true },

  // Pocket items & Placeables
  thermal_stone: { id: 'thermal_stone', name: '暖石/恒温石', icon: '🪨✨', desc: '靠近火堆吸收热量变为发热红石，随身维持体温！', stack: 1, heatStored: 0 },
  salve: { id: 'salve', name: '治疗药膏', icon: '🧪', desc: '处理伤口，恢复 25 点生命。', stack: 20, food: { hunger: 0, hp: 25, sanity: 2 } },
  campfire_item: { id: 'campfire_item', name: '临时营火', icon: '⛺', desc: '临时光源与烤制食物。', isPlaceable: 'campfire' },
  firepit_item: { id: 'firepit_item', name: '石质火坑', icon: '🪨🔥', desc: '永久基地火坑，熄灭后可添柴。', isPlaceable: 'firepit' },
  science_machine_item: { id: 'science_machine_item', name: '科学仪器', icon: '🔬', desc: '一本科技！解锁木甲、铲子、炼金引擎配方。', isPlaceable: 'science_machine' },
  alchemy_engine_item: { id: 'alchemy_engine_item', name: '炼金引擎', icon: '⚙️', desc: '二本科技！解锁冰箱、烹饪锅、帐篷等高阶蓝图。', isPlaceable: 'alchemy_engine' },
  chest_item: { id: 'chest_item', name: '储物木箱', icon: '📦', desc: '基地设施，提供 9 格专属储物。', isPlaceable: 'chest' },
  crockpot_item: { id: 'crockpot_item', name: '瓦罐烹饪锅', icon: '🍳', desc: '将4样食材炖制成大餐！', isPlaceable: 'crockpot' },
  icebox_item: { id: 'icebox_item', name: '雪柜/冰箱', icon: '🧊', desc: '将食物保质期延长 3 倍！', isPlaceable: 'icebox' },
  tent_item: { id: 'tent_item', name: '野营帐篷', icon: '⛺💤', desc: '黄昏/黑夜进入睡眠，消耗饥饿回满血和理智。', isPlaceable: 'tent' },
  lightning_rod_item: { id: 'lightning_rod_item', name: '避雷针', icon: '⚡📍', desc: '吸引闪电雷击，保护基地免受火灾。', isPlaceable: 'lightning_rod' },
  tooth_trap_item: { id: 'tooth_trap_item', name: '犬牙陷阱', icon: '🪤', desc: '布置在地面，踩中造成 60 点巨额穿刺伤害。', isPlaceable: 'tooth_trap' },
  meat_effigy_item: { id: 'meat_effigy_item', name: '肉块雕像', icon: '🗿🩸', desc: '扣除30生命上限绑定灵魂，死亡时在此雕像满血复活！', isPlaceable: 'meat_effigy' },

  // --- 3h+ Content Expansion Items ---
  eyebone: { id: 'eyebone', name: '眼骨', icon: '🦴👁️', desc: '跳动眼骨，召唤并引导忠诚伙伴切斯特。', stack: 1 },
  blue_gem: { id: 'blue_gem', name: '蓝宝石', icon: '💎🔷', desc: '极度冰寒的宝石，制作冰魔杖与雪切斯特。', stack: 40 },
  red_gem: { id: 'red_gem', name: '红宝石', icon: '💎🔴', desc: '炽热燃烧的宝石，制作火魔杖与生命护符。', stack: 40 },
  purple_gem: { id: 'purple_gem', name: '紫宝石', icon: '💎🟣', desc: '红蓝调和的暗影宝石，制造暗影操纵仪。', stack: 40 },
  nightmare_fuel: { id: 'nightmare_fuel', name: '噩梦燃料', icon: '🔮🖤', desc: '猎杀实体影怪获得的纯净暗影余烬。', stack: 40 },
  living_log: { id: 'living_log', name: '活木', icon: '🪵👀', desc: '古老树人守卫掉落的流泪木块。', stack: 40 },
  thulecite: { id: 'thulecite', name: '铥矿', icon: '🪙🔶', desc: '地下远古遗迹挖掘的合金，制造顶级防具。', stack: 40 },
  thulecite_suit: { id: 'thulecite_suit', name: '铥矿战甲', icon: '🛡️🔶', desc: '远古神装胸甲，吸收 90% 伤害！', equipSlot: 'body', durability: 650, armorDefense: 0.90 },
  thulecite_crown: { id: 'thulecite_crown', name: '远古皇冠', icon: '👑🔶', desc: '受击时触发吸收力场，吸收 90% 伤害！', equipSlot: 'head', durability: 500, armorDefense: 0.90 },
  pan_flute: { id: 'pan_flute', name: '排箫', icon: '🪈✨', desc: '吹响天籁音律，催眠范围所有狂暴敌人！', stack: 1, durability: 10 },
  life_amulet: { id: 'life_amulet', name: '生命护符', icon: '📿💖', desc: '佩戴缓慢消耗耐久回血，死亡时当场消耗护符神圣复活！', equipSlot: 'amulet', durability: 120, lifeRevive: true },
  chilled_amulet: { id: 'chilled_amulet', name: '极寒护符', icon: '📿❄️', desc: '散发极寒灵气避暑，受击时直接冻结来犯敌人！', equipSlot: 'amulet', durability: 120 },
  nightmare_amulet: { id: 'nightmare_amulet', name: '梦魇护符', icon: '📿🔮', desc: '佩戴大幅降低理智，可随意穿梭现实与暗影维度。', equipSlot: 'amulet', durability: 120 },
  cane: { id: 'cane', name: '步行手杖', icon: '🦯✨', desc: '手持移速提升 25%！荒野探图跑位神器。', equipSlot: 'hand', speedBonus: 1.25 },
  fire_staff: { id: 'fire_staff', name: '火魔杖', icon: '🪄🔥', desc: '远程施放烈焰法球，引燃目标造成高额火焰伤害！', equipSlot: 'hand', durability: 20, weaponDamage: 25, isStaff: 'fire' },
  ice_staff: { id: 'ice_staff', name: '冰魔杖', icon: '🪄❄️', desc: '发射寒冰飞弹，冰冻敌人使其无法移动攻击！', equipSlot: 'hand', durability: 20, weaponDamage: 12, isStaff: 'ice' },
  bat_bat: { id: 'bat_bat', name: '蝙蝠棒', icon: '🦇🏏', desc: '吸血武器！42点攻击，击中吸取 7 点生命！', equipSlot: 'hand', durability: 75, weaponDamage: 42, lifesteal: 7 },
  lightbulb: { id: 'lightbulb', name: '荧光果', icon: '💡✨', desc: '地下洞穴发光果实，填装提灯燃料。', stack: 40, maxFresh: 180 },
  slurtle_slime: { id: 'slurtle_slime', name: '蛞蝓龟黏液', icon: '🟢💧', desc: '洞穴蛞蝓龟的分泌物，可做火药燃料。', stack: 40 },
  seeds: { id: 'seeds', name: '种子', icon: '🌱', desc: '野生植物种子，在改良农田种植作物。', stack: 40 },
  dragonfruit: { id: 'dragonfruit', name: '火龙果', icon: '🐉🍎', desc: '稀有神果！制作火龙果派的核心。+25饥饿，+10生命。', stack: 40, maxFresh: 180, food: { hunger: 25, hp: 10, sanity: 5, fruitVal: 1, cookable: 'dragonfruit_cooked' } },
  dragonfruit_cooked: { id: 'dragonfruit_cooked', name: '烤火龙果', icon: '🐉🥧', desc: '烤制火龙果，+30饥饿，+20生命。', stack: 40, maxFresh: 200, food: { hunger: 30, hp: 20, sanity: 5, fruitVal: 1 } },
  pumpkin: { id: 'pumpkin', name: '大南瓜', icon: '🎃', desc: '饱满大南瓜，+37.5饥饿，+8生命。', stack: 40, maxFresh: 240, food: { hunger: 37.5, hp: 8, sanity: 5, vegVal: 1, cookable: 'pumpkin_cooked' } },
  pumpkin_cooked: { id: 'pumpkin_cooked', name: '烤南瓜', icon: '🍢🎃', desc: '香烤南瓜，+45饥饿，+12生命。', stack: 40, maxFresh: 200, food: { hunger: 45, hp: 12, sanity: 5, vegVal: 1 } },
  egg: { id: 'egg', name: '禽蛋', icon: '🥚', desc: '新鲜鸟蛋，制作饺子和培根煎蛋。', stack: 40, maxFresh: 200, food: { hunger: 10, hp: 1, sanity: 0, eggVal: 1 } },
  honey: { id: 'honey', name: '纯蜂蜜', icon: '🍯', desc: '蜜蜂采集的甘甜蜂蜜。制作蜜汁火腿与太妃糖。', stack: 40, maxFresh: 600, food: { hunger: 15, hp: 3, sanity: 0, sweetVal: 1 } },
  fish: { id: 'fish', name: '活鱼', icon: '🐟', desc: '池塘捕捞的新鲜生鱼，制作炸鱼排！', stack: 40, maxFresh: 120, food: { hunger: 18, hp: 1, sanity: 0, fishVal: 1, cookable: 'fish_cooked' } },
  fish_cooked: { id: 'fish_cooked', name: '香烤鱼排', icon: '🍣', desc: '焦香鱼排，+25饥饿，+20生命。', stack: 40, maxFresh: 160, food: { hunger: 25, hp: 20, sanity: 3, fishVal: 1 } },
  pierogi: { id: 'pierogi', name: '波兰饺子', icon: '🥟', desc: '回血神级料理！+40大额生命，+37.5饥饿！', stack: 40, maxFresh: 280, food: { hunger: 37.5, hp: 40, sanity: 5 } },
  honey_ham: { id: 'honey_ham', name: '蜜汁火腿', icon: '🍖🍯', desc: '金黄多汁的大肉排！+75大额饥饿，+30生命，+5理智。', stack: 40, maxFresh: 240, food: { hunger: 75, hp: 30, sanity: 5 } },
  fishsticks: { id: 'fishsticks', name: '炸鱼排', icon: '🥢🐟', desc: '鲜嫩酥脆！鱼肉与树枝烹制，+40生命，+37.5饥饿。', stack: 40, maxFresh: 200, food: { hunger: 37.5, hp: 40, sanity: 5 } },
  taffy: { id: 'taffy', name: '太妃糖', icon: '🍬', desc: '极度甜美！恢复 15 点理智，+25饥饿。', stack: 40, maxFresh: 300, food: { hunger: 25, hp: -3, sanity: 15 } },
  pig_skin: { id: 'pig_skin', name: '猪皮', icon: '🐽', desc: '击杀猪人获得的坚实皮层。', stack: 40 },
  horn: { id: 'horn', name: '牛角', icon: '📯', desc: '皮弗娄牛的巨角，制作牛角帽。', stack: 1 },
  bearger_fur: { id: 'bearger_fur', name: '熊獾毛皮', icon: '🐻🧥', desc: '秋季巨兽【熊獾】的厚皮毛，顶级保温材料。', stack: 10 },
  dragon_scales: { id: 'dragon_scales', name: '龙鳞', icon: '🐉✨', desc: '夏季霸主【龙蝇】的灼热鳞片，制作鳞片胸甲。', stack: 10 },
  scale_mail: { id: 'scale_mail', name: '鳞片胸甲', icon: '🛡️🔥', desc: '吸收 85% 伤害，免疫火焰并点燃攻击者！', equipSlot: 'body', durability: 500, armorDefense: 0.85, fireImmune: true },
  prestihatitator_item: { id: 'prestihatitator_item', name: '灵子分解器', icon: '🎩✨', desc: '一阶魔法科技！解锁暗夜剑、影甲、排箫、火魔杖。', isPlaceable: 'prestihatitator' },
  shadow_manipulator_item: { id: 'shadow_manipulator_item', name: '暗影操纵仪', icon: '🔮🪐', desc: '二阶暗影科技！解锁生命护符、远古铥矿装备。', isPlaceable: 'shadow_manipulator' },
  farmplot_item: { id: 'farmplot_item', name: '改良农田', icon: '🌾🟫', desc: '开辟沃土农田，播撒种子种植高产作物。', isPlaceable: 'farmplot' },

  // Interactive Creature Drops & Biome Curios
  rabbit_item: { id: 'rabbit_item', name: '活兔子', icon: '🐇', desc: '活蹦乱跳的小野兔，可存放在包裹中，或杀掉获得生小肉。', stack: 10 },
  tallbird_egg: { id: 'tallbird_egg', name: '高脚鸟蛋', icon: '🥚', desc: '从高脚鸟巢盗取的蓝斑巨蛋！营养极为丰富。', stack: 10, maxFresh: 300, food: { hunger: 25, hp: 3, sanity: 0, eggVal: 4, cookable: 'tallbird_egg_cooked' } },
  tallbird_egg_cooked: { id: 'tallbird_egg_cooked', name: '煎高脚鸟蛋', icon: '🍳', desc: '金黄嫩滑的巨型煎蛋！+37.5饥饿，+60大额生命！', stack: 10, maxFresh: 250, food: { hunger: 37.5, hp: 60, sanity: 5, eggVal: 4 } },
  tentacle_spike: { id: 'tentacle_spike', name: '触手尖刺', icon: '🗡️', desc: '击杀潜伏沼泽触手获得的带刺战鞭，攻击力高达 51！', equipSlot: 'hand', durability: 100, weaponDamage: 51 },
  tentacle_spots: { id: 'tentacle_spots', name: '触手皮', icon: '🩹', desc: '沼泽触手的坚韧滑腻表皮，可用于制作高阶防具。', stack: 40 },
  frog_legs: { id: 'frog_legs', name: '生青蛙腿', icon: '🍗', desc: '滑腻的蛙腿。微毒，最好煮熟。+12.5饥饿。', stack: 40, maxFresh: 140, food: { hunger: 12.5, hp: -3, sanity: -3, cookable: 'frog_legs_cooked', meatVal: 0.5 } },
  frog_legs_cooked: { id: 'frog_legs_cooked', name: '香烤蛙腿', icon: '🍖', desc: '外焦里嫩的烤蛙腿！+18.7饥饿，+5生命。', stack: 40, maxFresh: 180, food: { hunger: 18.7, hp: 5, sanity: 2, meatVal: 0.5 } },
  evil_flower: { id: 'evil_flower', name: '恶魔花瓣', icon: '🥀', desc: '满月受暗影侵蚀的花瓣，采摘消耗理智，可提炼噩梦燃料。', stack: 40, food: { hunger: 0, hp: -5, sanity: -5 } },
  trinket: { id: 'trinket', name: '远古小玩意', icon: '🏺', desc: '古老坟墓中挖掘出的神秘小文物，交给猪王可换取大量金块！', stack: 40 },

  // --- 70h Content Expansion: Survival, Base Automation, Nautical & Celestial ---
  abigail_flower: { id: 'abigail_flower', name: '阿比盖尔之花', icon: '🌺', desc: '温蒂的孪生信物。黄昏或夜间点击使用，召唤姐姐阿比盖尔幽灵助战！', stack: 1 },
  saddle: { id: 'saddle', name: '简易牛鞍', icon: '🏇', desc: '套在驯养度大于20%的皮弗娄牛背上，开启全速骑乘战斗！', stack: 1 },
  flingomatic_item: { id: 'flingomatic_item', name: '雪球灭火机', icon: '❄️⚙️', desc: '全自动基地防御设施！夏季自动侦测火情并射击雪球灭火冷却。', isPlaceable: 'flingomatic' },
  drying_rack_item: { id: 'drying_rack_item', name: '晾肉架', icon: '🥩🪵', desc: '风干生肉与怪物肉，制作不易腐败的高额回复大肉干！', isPlaceable: 'drying_rack' },
  birdcage_item: { id: 'birdcage_item', name: '镀金鸟笼', icon: '🦜🏯', desc: '囚禁鸟雀。喂肉产蛋，喂果蔬产出高产特异良种。', isPlaceable: 'birdcage' },
  bird_trap: { id: 'bird_trap', name: '捕鸟陷阱', icon: '🕸️🪤', desc: '置于地面撒入种子，诱捕野生乌鸦与红雀。', isPlaceable: 'bird_trap' },
  bird_item: { id: 'bird_item', name: '捕获的小鸟', icon: '🐦', desc: '活鸟雀，可放入鸟笼或宰杀。', stack: 10 },
  beebox_item: { id: 'beebox_item', name: '蜂箱', icon: '🐝🍯', desc: '人工养殖蜜蜂，周期性稳定产出甘甜蜂蜜。', isPlaceable: 'beebox' },
  bugnet: { id: 'bugnet', name: '捕虫网', icon: '🥅', desc: '捕捉飞舞的蜜蜂和蝴蝶。', equipSlot: 'hand', durability: 30, weaponDamage: 4 },
  live_bee: { id: 'live_bee', name: '活蜜蜂', icon: '🐝', desc: '捕获的工蜂，制作蜂箱的核心原料。', stack: 20 },
  honeycomb: { id: 'honeycomb', name: '蜂巢碎片', icon: '🍯🟨', desc: '摧毁野生杀人蜂巢获得的坚实蜂蜡。', stack: 10 },
  boat_kit: { id: 'boat_kit', name: '远洋造船套件', icon: '⛵', desc: '置于海岸边缘，组装并登上一艘远洋探险海船！', isPlaceable: 'boat' },
  boat_oar: { id: 'boat_oar', name: '简易船桨', icon: '🛶', desc: '手持划桨，提升 50% 航海划行速度。', equipSlot: 'hand', durability: 100, weaponDamage: 15 },
  jerky: { id: 'jerky', name: '优质大肉干', icon: '🍖✨', desc: '求生神器！+20生命，+25饥饿，+15理智，保质期极长。', stack: 40, maxFresh: 600, food: { hunger: 25, hp: 20, sanity: 15, meatVal: 1 } },
  monster_jerky: { id: 'monster_jerky', name: '怪物肉干', icon: '🥓🖤', desc: '风干怪物肉，+18饥饿，-5理智，+0生命。', stack: 40, maxFresh: 500, food: { hunger: 18, hp: 0, sanity: -5, meatVal: 1 } },
  moon_rock: { id: 'moon_rock', name: '月岩', icon: '🌑', desc: '天体月岛采集的奇异月球陨石。', stack: 40 },
  moon_shard: { id: 'moon_shard', name: '月光碎片', icon: '💎🌙', desc: '闪烁纯净月华的晶体，制造天体科技与玻璃刀。', stack: 40 },
  glass_cutter: { id: 'glass_cutter', name: '玻璃切割刀', icon: '🗡️🌙', desc: '天体神兵！68 点极高斩击伤害，对暗影生物有额外破甲。', equipSlot: 'hand', durability: 75, weaponDamage: 68 },
  celestial_altar_item: { id: 'celestial_altar_item', name: '天体祭坛基座', icon: '🌙🏛️', desc: '天体月岛的核心祭坛，供奉解锁天体远古科技。', isPlaceable: 'celestial_altar' },
  teleportato_wooden: { id: 'teleportato_wooden', name: '木质基座', icon: '🪵🌀', desc: '麦斯威尔传送阵的底座基石。', isPlaceable: 'teleportato_wooden' },
  teleportato_ring: { id: 'teleportato_ring', name: '传送门圆环', icon: '⭕✨', desc: '传送机零件 1/4。', stack: 1 },
  teleportato_crank: { id: 'teleportato_crank', name: '传送门曲柄', icon: '🔧⚡', desc: '传送机零件 2/4。', stack: 1 },
  teleportato_box: { id: 'teleportato_box', name: '传送门箱子', icon: '📦🔮', desc: '传送机零件 3/4。', stack: 1 },
  teleportato_potato: { id: 'teleportato_potato', name: '金属土豆', icon: '🥔🔩', desc: '传送机零件 4/4。神秘的超导核心组件。', stack: 1 },
  divining_rod: { id: 'divining_rod', name: '寻矿罗盘', icon: '🧭✨', desc: '靠近麦斯威尔传送零件时发出急促鸣响！', equipSlot: 'hand', durability: 100 },
  battle_spear: { id: 'battle_spear', name: '战斗长矛', icon: '🔱', desc: '薇格弗德专属神矛！42点高额伤害，200次高耐久。', equipSlot: 'hand', durability: 200, weaponDamage: 42 },
  battle_helm: { id: 'battle_helm', name: '战斗头盔', icon: '🪖✨', desc: '薇格弗德专属战盔！80%伤害吸收，750次超高耐久。', equipSlot: 'head', durability: 750, armorDefense: 0.8 },
  razor: { id: 'razor', name: '剃刀', icon: '🪒', desc: '夜晚入睡前剃除胡须获取胡须与理智，或剪取熟睡牛毛。', stack: 1 },
  trap: { id: 'trap', name: '草编陷阱', icon: '🪤', desc: '布置在兔子洞口或池塘边，捕获活兔与青蛙。', isPlaceable: 'trap' },
  krampus_sack: { id: 'krampus_sack', name: '坎普斯背包', icon: '🎒👿', desc: '击溃冬季隐藏霸主【克劳斯】的传奇战利品！14 格顶级巨无霸容量！', equipSlot: 'body', backpackSlots: 14 },
  guardian_horn: { id: 'guardian_horn', name: '远古守护者之角', icon: '📯🔶', desc: '洞穴遗迹迷宫击溃【远古犀牛】的至高战利品！+80 生命与神威长角。', stack: 1 },
  gears: { id: 'gears', name: '齿轮', icon: '⚙️', desc: '发条机械核心零件，可升级WX78、制作灭火机与冰箱', stack: 20 },
  butterfly_wings: { id: 'butterfly_wings', name: '蝴蝶翅膀', icon: '🦋', desc: '轻柔美丽的蝴蝶双翅，生食回复 8 生命与 9.4 饥饿', stack: 20, isFood: true, food: { hunger: 9.4, hp: 8, sanity: 0, rotDays: 6 } },
  butter: { id: 'butter', name: '黄油', icon: '🧈', desc: '稀世美味！食用回复 40 生命、25 饥饿与 10 理智', stack: 20, isFood: true, food: { hunger: 25, hp: 40, sanity: 10, rotDays: 40 } },
  stinger: { id: 'stinger', name: '蜂刺', icon: '🐝', desc: '蜜蜂尾部的锐利毒刺，可制作吹箭与道具', stack: 40 },
  cactus_flesh: { id: 'cactus_flesh', name: '仙人掌肉', icon: '🌵', desc: '多汁而带刺的沙漠植物，生食损失 5 生命，回复 12.5 饥饿', stack: 20, isFood: true, food: { hunger: 12.5, hp: -5, sanity: 0, rotDays: 10, cookable: 'cactus_flesh_cooked' } },
  cactus_flesh_cooked: { id: 'cactus_flesh_cooked', name: '烤仙人掌肉', icon: '🔥🌵', desc: '沙漠求生圣品！回复 12.5 饥饿、1 生命与 15 理智！', stack: 20, isFood: true, food: { hunger: 12.5, hp: 1, sanity: 15, rotDays: 15 } },
  trunk: { id: 'trunk', name: '考拉象鼻', icon: '🐘', desc: '猎杀考拉象获得的新鲜象鼻，丰厚多肉', stack: 10, isFood: true, food: { hunger: 75, hp: 30, sanity: 0, rotDays: 6, cookable: 'trunk_cooked' } },
  trunk_cooked: { id: 'trunk_cooked', name: '烤象鼻', icon: '🔥🐘', desc: '烤至流油的鲜美象鼻，食用回复 75 饥饿与 40 生命！', stack: 10, isFood: true, food: { hunger: 75, hp: 40, sanity: 0, rotDays: 15 } },
  glommer_flower: { id: 'glommer_flower', name: '格罗姆之花', icon: '🌺', desc: '满月之夜在格罗姆雕像绽放的奇花，吸引格罗姆跟随', stack: 1 },
  glommer_fuel: { id: 'glommer_fuel', name: '格罗姆黏液', icon: '🧪', desc: '格罗姆分泌的高能黏液，极佳的火堆燃料与肥料，食用回复40血但扣50理智', stack: 20, isFood: true, food: { hunger: 9, hp: 40, sanity: -50, rotDays: 999 } },
  jet_feather: { id: 'jet_feather', name: '黑羽毛', icon: '🪶', desc: '乌鸦掉落的乌黑羽毛，可制作吹箭', stack: 20 },
  crimson_feather: { id: 'crimson_feather', name: '红羽毛', icon: '🪶', desc: '红雀掉落的鲜红羽毛', stack: 20 },
  azure_feather: { id: 'azure_feather', name: '蓝羽毛', icon: '🪶', desc: '雪雀掉落的蔚蓝羽毛', stack: 20 },

  // --- Automation Machinery ---
  auto_harvester_item: { id: 'auto_harvester_item', name: '全自动机械收割机', icon: '⚙️🌾', desc: '发条机械自动化！自动收割周围220px内成熟浆果、农作物、树枝与草并整齐归拢入箱。', isPlaceable: 'auto_harvester' },
  vacuum_chest_item: { id: 'vacuum_chest_item', name: '虚空吸附整理箱', icon: '📦🌀', desc: '暗影漏斗箱！自动吸入周围180px地面所有掉落物并自动整理堆叠入箱。', isPlaceable: 'vacuum_chest' },
  sprinkler_item: { id: 'sprinkler_item', name: '自动喷灌机', icon: '🚿💦', desc: '360度旋转喷灌！滋润农田加速作物成长，夏季防止农作物枯萎与自燃。', isPlaceable: 'sprinkler' },
  houndius_shootius_item: { id: 'houndius_shootius_item', name: '远古眼球激光塔', icon: '🏰👁️', desc: '远古伪科学守卫！自动锁定敌对怪物发射超视距高能毁灭射线！', isPlaceable: 'houndius_shootius' },
  scaled_furnace_item: { id: 'scaled_furnace_item', name: '龙鳞壁炉', icon: '🔥🏮', desc: '永不熄灭的龙鳞壁炉！散发永恒光明与融融暖意，冬日庇护所核心设施。', isPlaceable: 'scaled_furnace' },
  auto_feeder_item: { id: 'auto_feeder_item', name: '智能牲畜饲料槽', icon: '🌾🪵', desc: '全自动牧场养殖设施！自动投喂周围皮弗娄牛与猪人，持续提升驯化度与忠诚度。', isPlaceable: 'auto_feeder' },
  solar_lantern_item: { id: 'solar_lantern_item', name: '日耀感光路灯', icon: '🏮☀️', desc: '白天吸收日光蓄能，入夜全自动绽放180px永恒极光结界！免添燃料绝对防御查理！', isPlaceable: 'solar_lantern' },
  beefalo_bell: { id: 'beefalo_bell', name: '皮弗娄牛铃铛', icon: '🔔🐂', desc: '轻摇铜铃与皮弗娄牛缔结永恒灵魂契约！使牛牛寸步不离跟随主人护卫与随时骑乘。', equipSlot: 'hand', durability: 50 },
  weather_pain: { id: 'weather_pain', name: '天气之痛', icon: '🌪️🪶', desc: '春季莫斯鹅羽绒黑科技！挥动召唤呼啸狂风龙卷，追踪狂暴撕裂敌人并粉碎树木矿石！', equipSlot: 'hand', durability: 15, isStaff: 'tornado' },
  luxury_fan: { id: 'luxury_fan', name: '豪华羽毛风扇', icon: '🪭✨', desc: '莫斯鹅羽绒精制神物！挥动掀起清凉飓风，瞬间扑灭周围全域烈火并将体温骤降至清爽20度！', equipSlot: 'hand', durability: 15 },

  // --- Simulation & Taming ---
  beefalo_brush: { id: 'beefalo_brush', name: '牛毛刷', icon: '🪮🐂', desc: '每日梳理皮弗娄牛毛发，大幅提升服从度与驯化速度，并掉落额外优质牛毛。', equipSlot: 'hand', durability: 75 },
  mushroom_planter_item: { id: 'mushroom_planter_item', name: '蘑菇栽培木桩', icon: '🍄🪵', desc: '湿润菌木桩！可栽培红蘑菇、绿蘑菇或蓝蘑菇，施肥可实现持续高产。', isPlaceable: 'mushroom_planter' },
  red_mushroom: { id: 'red_mushroom', name: '红蘑菇', icon: '🍄', desc: '鲜艳有毒的红伞菌，生食-20生命但微量恢复饥饿。', stack: 20, isFood: true, food: { hunger: 12.5, hp: -20, sanity: 0, rotDays: 10, cookable: 'red_mushroom_cooked' } },
  red_mushroom_cooked: { id: 'red_mushroom_cooked', name: '熟红蘑菇', icon: '🔥🍄', desc: '烤熟的红蘑菇，损失10理智，微弱恢复1生命。', stack: 20, isFood: true, food: { hunger: 0, hp: 1, sanity: -10, rotDays: 10 } },
  green_mushroom: { id: 'green_mushroom', name: '绿蘑菇', icon: '🍄‍🟫', desc: '生食扣除50点巨额理智，快速进入疯狂状态刷噩梦燃料之神器！', stack: 20, isFood: true, food: { hunger: 12.5, hp: 0, sanity: -50, rotDays: 10, cookable: 'green_mushroom_cooked' } },
  green_mushroom_cooked: { id: 'green_mushroom_cooked', name: '熟绿蘑菇', icon: '🔥🍄‍🟫', desc: '烤熟后散发安神香气，食用恢复15理智，微损1点生命。', stack: 20, isFood: true, food: { hunger: 0, hp: -1, sanity: 15, rotDays: 10 } },
  blue_mushroom: { id: 'blue_mushroom', name: '蓝蘑菇', icon: '🍄🔵', desc: '荒野急救灵药！生食回复20巨额生命，损失15理智。', stack: 20, isFood: true, food: { hunger: 12.5, hp: 20, sanity: -15, rotDays: 10, cookable: 'blue_mushroom_cooked' } },
  blue_mushroom_cooked: { id: 'blue_mushroom_cooked', name: '熟蓝蘑菇', icon: '🔥🍄🔵', desc: '烤熟后温和可口，食用回复10点理智，损失3点生命。', stack: 20, isFood: true, food: { hunger: 0, hp: -3, sanity: 10, rotDays: 10 } },
  dragonfruit_seeds: { id: 'dragonfruit_seeds', name: '火龙果特异良种', icon: '🌱🐉', desc: '喂食鸟雀火龙果精选出的纯正特异种子，种植100%长出火龙果！', stack: 40 },
  down_feather: { id: 'down_feather', name: '羽绒', icon: '🪶✨', desc: '击溃春季莫斯鹅获得的轻柔羽绒，保暖御寒。', stack: 20 },

  // --- Ancient Gemstones ---
  yellow_gem: { id: 'yellow_gem', name: '黄宝石', icon: '💎🟡', desc: '凝聚太阳耀斑的极耀魔石，制作魔光护符与呼星法杖的秘宝。', stack: 20 },
  orange_gem: { id: 'orange_gem', name: '橙宝石', icon: '💎🟠', desc: '掌控空间与吸附力场的虚空橙晶，制作瞬移懒人杖与懒人护符。', stack: 20 },
  green_gem: { id: 'green_gem', name: '绿宝石', icon: '💎🟢', desc: '蕴藏构筑与逆反本质的翠绿神石，制作分解法杖与建造神装。', stack: 20 },

  // --- Magic Expansion ---
  magiluminescence: { id: 'magiluminescence', name: '魔光护符', icon: '📿🟡', desc: '佩戴散发永恒耀眼光环、提升20%移速并每秒安抚回复理智！', equipSlot: 'amulet', durability: 480 },
  the_lazy_forager: { id: 'the_lazy_forager', name: '懒人搜集护符', icon: '📿🟠', desc: '虚空磁吸！佩戴时自动将半径150px内的地面掉落物隔空吸入背包。', equipSlot: 'amulet', durability: 225 },
  the_lazy_explorer: { id: 'the_lazy_explorer', name: '瞬移懒人杖', icon: '🪄🟠', desc: '手持此杖点击地图任意位置瞬间闪烁传送！穿越障碍无影无踪。', equipSlot: 'hand', durability: 25 },
  telelocator_staff: { id: 'telelocator_staff', name: '远距传送法杖', icon: '🪄🟣', desc: '引动雷云风暴，瞬间将施法者传送回科学大本营！', equipSlot: 'hand', durability: 10 },
  deconstruction_staff: { id: 'deconstruction_staff', name: '绿晶分解法杖', icon: '🪄🟢', desc: '逆转万物法则！对准建筑施法将其无损分解为100%全额初始材料。', equipSlot: 'hand', durability: 8 },
  star_caller_staff: { id: 'star_caller_staff', name: '呼星者法杖', icon: '🪄🟡', desc: '从苍穹召唤一颗散发永恒炽光与温暖的【矮人恒星】降临地面！', equipSlot: 'hand', durability: 12 },
  codex_umbra: { id: 'codex_umbra', name: '暗影秘典', icon: '📖🟣', desc: '麦斯威尔的黑魔法禁典！召唤暗影伐木傀儡、矿工傀儡或暗影角斗士！', stack: 1 },
  eyebrella: { id: 'eyebrella', name: '眼球伞', icon: '👁️☂️', desc: '独眼巨鹿眼球精制的至宝！100%绝对防水防雷击，夏季提供绝对遮阳！', equipSlot: 'head', durability: 450, coldProtect: 0 },
  bearger_vest: { id: 'bearger_vest', name: '冬眠熊皮背心', icon: '🦺🐻', desc: '击溃暴食熊獾的终极御寒战利品！极寒免疫，每秒大幅恢复理智与抵御严冬。', equipSlot: 'body', durability: 600, coldProtect: 2.5 },
  spiderhat: { id: 'spiderhat', name: '蜘蛛女王帽', icon: '👑🕷️', desc: '佩戴化身蜘蛛领主！半径320px内所有蜘蛛俯首称臣，协助作战！', equipSlot: 'head', durability: 240 },
  spidereggsack: { id: 'spidereggsack', name: '蜘蛛卵巢包', icon: '🥚🕸️', desc: '可将蜘蛛卵种植在任意空地，繁育成新的蜘蛛族群生态。', isPlaceable: 'spider_den' }
};

// --- 3. Complete Tech Tree Recipes ---
const RECIPES = [
  // Category: Light
  { id: 'campfire_item', cat: 'light', tier: 0, name: '临时营火', icon: '⛺', req: { grass: 3, log: 2 }, desc: '临时光源与取暖' },
  { id: 'torch', cat: 'light', tier: 0, name: '火把', icon: '🔥', req: { twig: 2, grass: 2 }, desc: '随身移动光明' },
  { id: 'firepit_item', cat: 'light', tier: 0, name: '石质火坑', icon: '🪨🔥', req: { log: 2, rock: 6 }, desc: '永久基地火坑' },
  { id: 'lantern', cat: 'light', tier: 2, name: '提灯', icon: '🏮', req: { twig: 3, rope: 2, gold: 2 }, desc: '高科技随身与地面提灯' },

  // Category: Tools
  { id: 'axe', cat: 'tools', tier: 0, name: '草柄斧', icon: '🪓', req: { twig: 1, flint: 1 }, desc: '伐木必备' },
  { id: 'pickaxe', cat: 'tools', tier: 0, name: '鹤嘴锄', icon: '⛏️', req: { twig: 2, flint: 2 }, desc: '采掘矿石' },
  { id: 'shovel', cat: 'tools', tier: 1, name: '铲子', icon: '🔨', req: { twig: 2, flint: 2 }, desc: '挖掘植物移植基地' },

  // Category: Survival
  { id: 'garland', cat: 'survival', tier: 0, name: '花环', icon: '👑', req: { flower: 8 }, desc: '佩戴恢复理智' },
  { id: 'straw_hat', cat: 'survival', tier: 0, name: '草帽', icon: '👒', req: { grass: 6 }, desc: '防暑降温' },
  { id: 'razor', cat: 'survival', tier: 0, name: '坚固剃刀', icon: '🪒', req: { twig: 2, flint: 2 }, desc: '剃除胡须/剪取牛毛' },
  { id: 'trap', cat: 'survival', tier: 0, name: '草编陷阱', icon: '🪤', req: { grass: 6, twig: 2 }, desc: '捕获活兔与青蛙' },
  { id: 'bugnet', cat: 'survival', tier: 1, name: '捕虫网', icon: '🥅', req: { twig: 4, silk: 2, rope: 1 }, desc: '捕捉飞舞的蜜蜂与蝴蝶' },
  { id: 'umbrella', cat: 'survival', tier: 1, name: '雨伞', icon: '☂️', req: { twig: 4, silk: 2, pig_skin: 1 }, desc: '春季防雨夏季遮阳' },
  { id: 'winter_hat', cat: 'survival', tier: 1, name: '冬帽', icon: '🧢', req: { beefalo_wool: 4, silk: 2 }, desc: '冬季抵御严寒' },
  { id: 'beefalo_hat', cat: 'survival', tier: 2, name: '牛角帽', icon: '🐂👑', req: { beefalo_wool: 8, horn: 1 }, desc: '终极防冻与牛群伪装' },
  { id: 'thermal_stone', cat: 'survival', tier: 1, name: '暖石', icon: '🪨✨', req: { rock: 10, flint: 3, pickaxe: 1 }, desc: '吸收火源热量随身保暖' },
  { id: 'salve', cat: 'survival', tier: 1, name: '治疗药膏', icon: '🧪', req: { gland: 1, flower: 2, rock: 1 }, desc: '恢复 25 点生命' },
  { id: 'backpack', cat: 'survival', tier: 1, name: '旅行背包', icon: '🎒', req: { grass: 4, twig: 4 }, desc: '扩充额外 8 格背包栏' },
  { id: 'saddle', cat: 'survival', tier: 2, name: '简易牛鞍', icon: '🏇', req: { pig_skin: 4, beefalo_wool: 4, cut_stone: 2 }, desc: '骑乘驯化皮弗娄牛' },
  { id: 'divining_rod', cat: 'survival', tier: 2, name: '寻矿罗盘', icon: '🧭✨', req: { twig: 1, gold: 4, nightmare_fuel: 1 }, desc: '鸣叫定位麦斯威尔遗物' },

  // Category: Weapons & Combat
  { id: 'spear', cat: 'weapons', tier: 0, name: '长矛', icon: '🗡️', req: { twig: 2, rope: 1, flint: 1 }, desc: '基础武器 35 攻击' },
  { id: 'battle_spear', cat: 'weapons', tier: 0, name: '战斗长矛', icon: '🔱', req: { twig: 2, flint: 2, gold: 1 }, desc: '42高额伤害专属战矛' },
  { id: 'battle_helm', cat: 'weapons', tier: 0, name: '战斗头盔', icon: '🪖✨', req: { gold: 2, rock: 2 }, desc: '80%超高减伤专属战盔' },
  { id: 'armor_grass', cat: 'weapons', tier: 0, name: '草甲', icon: '🦺', req: { grass: 8, twig: 2 }, desc: '吸收 60% 伤害' },
  { id: 'armor_wood', cat: 'weapons', tier: 1, name: '木甲', icon: '🛡️', req: { log: 8, rope: 2 }, desc: '吸收 80% 核心护甲' },
  { id: 'football_helmet', cat: 'weapons', tier: 1, name: '猪皮头盔', icon: '🪖', req: { rope: 1, meat: 1 }, desc: '吸收 80% 头部防护' },
  { id: 'hambat', cat: 'weapons', tier: 2, name: '火腿棒', icon: '🍖🔨', req: { twig: 2, meat: 2 }, desc: '59 点巨额近战重创' },
  { id: 'scale_mail', cat: 'weapons', tier: 2, name: '鳞片胸甲', icon: '🛡️🔥', req: { dragon_scales: 1, armor_wood: 1, gold: 2 }, desc: '吸收85%伤害并引燃反伤' },
  { id: 'tooth_trap_item', cat: 'weapons', tier: 1, name: '犬牙陷阱', icon: '🪤', req: { log: 1, rope: 1, hound_tooth: 1 }, desc: '对踩中敌人造成60伤害' },

  // Category: Magic & Ancient
  { id: 'prestihatitator_item', cat: 'magic', tier: 1, name: '灵子分解器', icon: '🎩✨', req: { boards: 4, straw_hat: 1, gold: 2 }, desc: '一阶魔法！解锁暗夜剑与法杖' },
  { id: 'darksword', cat: 'magic', tier: 3, name: '暗夜剑', icon: '🟣🗡️', req: { nightmare_fuel: 5, living_log: 1 }, desc: '68 巨额攻击力' },
  { id: 'armor_night', cat: 'magic', tier: 3, name: '暗夜甲', icon: '🟣🛡️', req: { nightmare_fuel: 5, rope: 2 }, desc: '95% 超强防护暗影护甲' },
  { id: 'fire_staff', cat: 'magic', tier: 3, name: '火魔杖', icon: '🪄🔥', req: { red_gem: 2, twig: 2, nightmare_fuel: 2 }, desc: '远程烈焰暴击' },
  { id: 'ice_staff', cat: 'magic', tier: 3, name: '冰魔杖', icon: '🪄❄️', req: { blue_gem: 2, twig: 2, nightmare_fuel: 2 }, desc: '远程冰封冻结敌人' },
  { id: 'pan_flute', cat: 'magic', tier: 3, name: '排箫', icon: '🪈✨', req: { twig: 4, silk: 2, flower: 6 }, desc: '天籁音律令全场狂暴沉睡' },
  { id: 'purple_gem', cat: 'magic', tier: 3, name: '紫宝石', icon: '💎🟣', req: { red_gem: 1, blue_gem: 1 }, desc: '暗影核心魔石' },
  { id: 'shadow_manipulator_item', cat: 'magic', tier: 2, name: '暗影操纵仪', icon: '🔮🪐', req: { living_log: 3, purple_gem: 1, nightmare_fuel: 7 }, desc: '二阶暗影古法仪器' },
  { id: 'life_amulet', cat: 'magic', tier: 4, name: '生命护符', icon: '📿💖', req: { red_gem: 2, gold: 3, nightmare_fuel: 2 }, desc: '佩戴回血，死亡就地复活' },
  { id: 'bat_bat', cat: 'magic', tier: 4, name: '蝙蝠棒', icon: '🦇🏏', req: { living_log: 1, purple_gem: 1, hound_tooth: 3 }, desc: '42攻击+击中吸取7点生命' },
  { id: 'thulecite_suit', cat: 'magic', tier: 4, name: '远古铥矿战甲', icon: '🛡️🔶', req: { thulecite: 6, nightmare_fuel: 4 }, desc: '90%减伤的远古防具神装' },
  { id: 'thulecite_crown', cat: 'magic', tier: 4, name: '远古皇冠', icon: '👑🔶', req: { thulecite: 4, nightmare_fuel: 4 }, desc: '触发暗影护盾力场' },

  // Category: Science
  { id: 'science_machine_item', cat: 'science', tier: 0, name: '科学仪器', icon: '🔬', req: { gold: 1, log: 4, rock: 4 }, desc: '一本科技！解锁高级图纸' },
  { id: 'alchemy_engine_item', cat: 'science', tier: 1, name: '炼金引擎', icon: '⚙️', req: { boards: 4, cut_stone: 2, gold: 4 }, desc: '二本科技！解锁全部顶级生产' },
  { id: 'lightning_rod_item', cat: 'science', tier: 1, name: '避雷针', icon: '⚡📍', req: { cut_stone: 1, gold: 2 }, desc: '吸引闪电防止火灾' },

  // Category: Food & Agriculture
  { id: 'crockpot_item', cat: 'food', tier: 1, name: '瓦罐烹饪锅', icon: '🍳', req: { cut_stone: 3, charcoal: 3, twig: 3 }, desc: '炖制肉丸与营养大餐' },
  { id: 'farmplot_item', cat: 'food', tier: 1, name: '改良农田', icon: '🌾🟫', req: { cut_stone: 2, manure: 4, grass: 6 }, desc: '种植火龙果、南瓜等高产作物' },
  { id: 'icebox_item', cat: 'food', tier: 2, name: '雪柜/冰箱', icon: '🧊', req: { boards: 1, cut_stone: 1, gold: 2 }, desc: '保质期延长 3 倍' },

  // Category: Structures & Refinement
  { id: 'rope', cat: 'structures', tier: 0, name: '绳索', icon: '🪢', req: { grass: 3 }, desc: '基础精炼编织品' },
  { id: 'boards', cat: 'structures', tier: 1, name: '木板', icon: '🪵🪚', req: { log: 4 }, desc: '平整加固木板' },
  { id: 'cut_stone', cat: 'structures', tier: 1, name: '石砖', icon: '🧱', req: { rock: 3 }, desc: '坚固石砌砖块' },
  { id: 'chest_item', cat: 'structures', tier: 1, name: '储物木箱', icon: '📦', req: { boards: 3 }, desc: '9 格基地储物箱' },
  { id: 'tent_item', cat: 'structures', tier: 2, name: '野营帐篷', icon: '⛺💤', req: { silk: 4, twig: 4, rope: 2 }, desc: '睡觉回血回理智' },
  { id: 'meat_effigy_item', cat: 'structures', tier: 2, name: '肉块雕像', icon: '🗿🩸', req: { boards: 4, meat: 4, charcoal: 2 }, desc: '死亡后在此满血复活' },
  { id: 'drying_rack_item', cat: 'structures', tier: 1, name: '晾肉架', icon: '🥩🪵', req: { twig: 3, charcoal: 2, rope: 3 }, desc: '风干肉类制成大肉干' },
  { id: 'birdcage_item', cat: 'structures', tier: 1, name: '镀金鸟笼', icon: '🦜🏯', req: { boards: 2, gold: 6, seeds: 2 }, desc: '喂肉产蛋/喂果蔬产良种' },
  { id: 'beebox_item', cat: 'structures', tier: 1, name: '蜂箱', icon: '🐝🍯', req: { boards: 2, honeycomb: 1, live_bee: 4 }, desc: '稳定生产蜂蜜' },
  { id: 'flingomatic_item', cat: 'structures', tier: 2, name: '雪球灭火机', icon: '❄️⚙️', req: { gears: 2, ice: 15, cut_stone: 2 }, desc: '自动扑灭火险与降温' },

  // Category: Nautical & Celestial (远洋航海与天体)
  { id: 'boat_kit', cat: 'nautical', tier: 1, name: '远洋造船套件', icon: '⛵', req: { boards: 4, rope: 3 }, desc: '出海扬帆远航' },
  { id: 'boat_oar', cat: 'nautical', tier: 0, name: '简易船桨', icon: '🛶', req: { twig: 2, log: 1 }, desc: '提升出海航速' },
  { id: 'glass_cutter', cat: 'nautical', tier: 4, name: '玻璃切割刀', icon: '🗡️🌙', req: { moon_rock: 1, moon_shard: 6 }, desc: '68点月华斩击伤害' },
  { id: 'celestial_altar_item', cat: 'nautical', tier: 4, name: '天体祭坛基座', icon: '🌙🏛️', req: { moon_rock: 4, moon_shard: 8 }, desc: '激活月岛启蒙科技' },

  // --- Automation Machinery ---
  { id: 'auto_harvester_item', cat: 'science', tier: 2, name: '全自动收割机', icon: '⚙️🌾', req: { gears: 2, cut_stone: 3, rope: 2 }, desc: '自动采收周围成熟植物与农作物' },
  { id: 'vacuum_chest_item', cat: 'structures', tier: 2, name: '虚空整理箱', icon: '📦🌀', req: { chest_item: 1, nightmare_fuel: 4, gears: 1 }, desc: '自动吸纳整理地面掉落物入箱' },
  { id: 'sprinkler_item', cat: 'science', tier: 2, name: '自动喷灌机', icon: '🚿💦', req: { gears: 1, cut_stone: 2, ice: 6 }, desc: '360度喷灌灌溉农田，防枯萎防自燃' },
  { id: 'houndius_shootius_item', cat: 'magic', tier: 4, name: '远古眼球激光塔', icon: '🏰👁️', req: { deerclops_eye: 1, guardian_horn: 1, thulecite: 5 }, desc: '全自动超视距激光守卫' },
  { id: 'scaled_furnace_item', cat: 'structures', tier: 3, name: '龙鳞壁炉', icon: '🔥🏮', req: { dragon_scales: 1, charcoal: 6, cut_stone: 4 }, desc: '永不熄灭的永恒光明与融融暖炉' },
  { id: 'auto_feeder_item', cat: 'structures', tier: 1, name: '智能牲畜饲料槽', icon: '🌾🪵', req: { boards: 4, rope: 2, manure: 2 }, desc: '全自动投喂周围皮弗娄牛与猪人' },
  { id: 'solar_lantern_item', cat: 'light', tier: 2, name: '日耀感光路灯', icon: '🏮☀️', req: { gold: 2, cut_stone: 2, lightbulb: 1 }, desc: '全自动昼夜感应发光，永恒庇护' },
  { id: 'beefalo_bell', cat: 'survival', tier: 1, name: '皮弗娄牛铃铛', icon: '🔔🐂', req: { flint: 2, rope: 1, gold: 2 }, desc: '与皮弗娄牛建立神圣灵魂契约永久跟随' },
  { id: 'weather_pain', cat: 'magic', tier: 3, name: '天气之痛', icon: '🌪️🪶', req: { down_feather: 6, tentacle_spots: 1, gears: 1 }, desc: '发射旋风龙卷追踪敌怪并伐木碎石' },
  { id: 'luxury_fan', cat: 'survival', tier: 2, name: '豪华羽毛扇', icon: '🪭✨', req: { down_feather: 5, boards: 2, rope: 2 }, desc: '强力扑灭大火并极速降温' },

  // --- Simulation & Taming ---
  { id: 'beefalo_brush', cat: 'survival', tier: 1, name: '牛毛刷', icon: '🪮🐂', req: { twig: 2, beefalo_wool: 3, rope: 1 }, desc: '日常梳理提升牛牛驯化与服从' },
  { id: 'mushroom_planter_item', cat: 'food', tier: 1, name: '蘑菇栽培木桩', icon: '🍄🪵', req: { living_log: 1, rot: 4, manure: 2 }, desc: '培育各色蘑菇' },

  // --- Magic System ---
  { id: 'magiluminescence', cat: 'magic', tier: 3, name: '魔光护符', icon: '📿🟡', req: { yellow_gem: 2, gold: 3, nightmare_fuel: 2 }, desc: '移动光明+20%移速+持续回理智' },
  { id: 'the_lazy_forager', cat: 'magic', tier: 3, name: '懒人搜集护符', icon: '📿🟠', req: { orange_gem: 2, gold: 3, nightmare_fuel: 2 }, desc: '自动虚空吸纳地面掉落物入包' },
  { id: 'the_lazy_explorer', cat: 'magic', tier: 4, name: '瞬移懒人杖', icon: '🪄🟠', req: { orange_gem: 2, cane: 1, nightmare_fuel: 4 }, desc: '点击地面瞬间闪烁瞬移' },
  { id: 'telelocator_staff', cat: 'magic', tier: 3, name: '远距传送法杖', icon: '🪄🟣', req: { purple_gem: 2, living_log: 2, nightmare_fuel: 4 }, desc: '瞬间风暴传送回基地' },
  { id: 'deconstruction_staff', cat: 'magic', tier: 4, name: '绿晶分解法杖', icon: '🪄🟢', req: { green_gem: 2, living_log: 2, nightmare_fuel: 4 }, desc: '将建筑100%无损分解为原料' },
  { id: 'star_caller_staff', cat: 'magic', tier: 4, name: '呼星者法杖', icon: '🪄🟡', req: { yellow_gem: 2, living_log: 2, nightmare_fuel: 4 }, desc: '召唤地面长明矮人恒星' },
  { id: 'codex_umbra', cat: 'magic', tier: 2, name: '暗影秘典', icon: '📖🟣', req: { nightmare_fuel: 6, boards: 2 }, desc: '召唤暗影伐木/矿工/角斗士傀儡' },
  { id: 'eyebrella', cat: 'survival', tier: 2, name: '眼球伞', icon: '👁️☂️', req: { deerclops_eye: 1, twig: 6, silk: 4 }, desc: '100%全防水全防雷眼球伞' },
  { id: 'bearger_vest', cat: 'survival', tier: 3, name: '冬眠熊皮背心', icon: '🦺🐻', req: { bearger_fur: 1, rope: 3, beefalo_wool: 4 }, desc: '终极保暖抗冻神器' }
];

// --- 4. Main Game State & Survival Diary ---
function initDiary() {
  return {
    daysSurvived: 1,
    monstersKilled: 0,
    bossesDefeated: 0,
    recipesCrafted: 0,
    dishesCooked: 0,
    cavesExplored: 0,
    beefaloTamed: 0,
    worldsJumped: 0,
    chaptersCompleted: 0,
    chapters: {
      ch1: false, // 荒野筑基 (建造科学仪器与瓦罐烹饪锅)
      ch2: false, // 凛冬苦寒 (击溃冬季独眼巨鹿)
      ch3: false, // 万物生息 (驯养皮弗娄牛与搭建蜂箱)
      ch4: false, // 酷暑炼狱 (建造雪球灭火机并击溃夏季龙蝇)
      ch5: false, // 深渊织影 (探索地下洞穴斩杀远古守护者犀牛)
      ch6: false, // 扬帆天体 (造船远航并登顶天体月岛)
      ch7: false  // 维度飞升 (集齐零件组装麦斯威尔跳世界机)
    },
    milestones: {
      survive_night: false,
      science_rev: false,
      master_chef: false,
      find_chester: false,
      enter_caves: false,
      magic_apprentice: false,
      slay_deerclops: false,
      tame_beefalo: false,
      slay_bearger: false,
      slay_dragonfly: false,
      slay_guardian: false,
      slay_klaus: false,
      sail_boat: false,
      reach_lunar: false,
      four_seasons: false,
      teleportato_jump: false,
      eternal_lord: false
    }
  };
}

// --- 3.5. Authentic Don't Starve Seasonal Day/Night Engine ---
function getTimePhaseSplit(season = (state ? state.season : 'autumn')) {
  // In Don't Starve, each day has 16 clock segments:
  // Autumn: Day 8 (50%), Dusk 4 (25%), Night 4 (25%) -> Balanced golden autumn
  // Winter: Day 4 (25%), Dusk 4 (25%), Night 8 (50%) -> Brutally long freezing nights (80s!), brief day (40s)
  // Spring: Day 6 (37.5%), Dusk 6 (37.5%), Night 4 (25%) -> Rainy extended dusk
  // Summer: Day 10 (62.5%), Dusk 3 (18.75%), Night 3 (18.75%) -> Scorching long days (100s), short nights (30s)
  let daySegs = 8, duskSegs = 4, nightSegs = 4;
  if (season === 'winter') {
    daySegs = 4; duskSegs = 4; nightSegs = 8;
  } else if (season === 'spring') {
    daySegs = 6; duskSegs = 6; nightSegs = 4;
  } else if (season === 'summer') {
    daySegs = 10; duskSegs = 3; nightSegs = 3;
  }

  const segDuration = 10; // 10s per segment -> 160s full day
  const totalSec = 16 * segDuration; // 160s
  const daySec = daySegs * segDuration;
  const duskSec = duskSegs * segDuration;
  const nightSec = nightSegs * segDuration;
  const dayEnd = daySec;
  const duskEnd = daySec + duskSec;

  return {
    daySegs, duskSegs, nightSegs,
    totalSec,
    daySec, duskSec, nightSec,
    dayEnd, duskEnd
  };
}

function getDayPhases() {
  const currentSeason = (state && state.season) ? state.season : 'autumn';
  const split = getTimePhaseSplit(currentSeason);
  if (state) state.dayLength = split.totalSec;
  const t = (state && state.timeInDay !== undefined) ? (state.timeInDay % split.totalSec) : 0;
  const isDay = t < split.dayEnd;
  const isDusk = t >= split.dayEnd && t < split.duskEnd;
  const isNight = t >= split.duskEnd;
  return { isDay, isDusk, isNight, split };
}

const state = {
  started: false,
  gameOver: false,
  character: 'wilson',
  worldCycle: 1,
  day: 1,
  timeInDay: 0,
  dayLength: 160,

  // World Layer: 'surface' or 'caves'
  worldLayer: 'surface',
  surfaceEntities: null,
  surfacePlayerPos: { x: 1900, y: 1900 },
  caveEntities: null,
  cavePlayerPos: { x: 1600, y: 1600 },
  caveVisited: false,

  // Beefalo Riding Mount
  beefaloRiding: false,
  beefaloMountHp: 500,
  beefaloMountMaxHp: 500,

  // Abigail Companion (for Wendy)
  abigail: {
    active: false,
    x: 1900,
    y: 1900,
    hp: 300,
    maxHp: 300,
    attackTimer: 0
  },

  // Sailing & Lunar
  sailing: false,
  onLunarIsland: false,

  // Teleportato Jump Machine
  teleportato: {
    assembled: false,
    parts: {
      wooden: false,
      ring: false,
      crank: false,
      box: false,
      potato: false
    }
  },

  // Chester Companion State
  chester: {
    active: false,
    x: 1900,
    y: 1900,
    vx: 0,
    vy: 0,
    hopTick: 0,
    slots: new Array(9).fill(null),
    type: 'normal' // 'normal', 'snow', 'shadow'
  },
  openedChester: false,

  // Season System (Autumn -> Winter -> Spring -> Summer, 15 days each)
  season: 'autumn', // 'autumn', 'winter', 'spring', 'summer'
  seasonDay: 1,
  seasonLength: 15,

  // Weather & Environment
  weather: 'clear', // 'clear', 'rain', 'snow', 'thunder'
  rainIntensity: 0,
  temperature: 25, // Celsius (0-70)
  targetTemp: 25,

  // World bounds
  worldWidth: 3800,
  worldHeight: 3800,

  // Prototyping Tech Tier (0: Basic, 1: Science, 2: Alchemy, 3: Magic Prestihatitator, 4: Shadow Manipulator / Ancient)
  currentTechTier: 0,
  prototypedRecipes: new Set(),

  // Player State
  player: {
    x: 1900,
    y: 1900,
    vx: 0,
    vy: 0,
    speed: 165,
    radius: 18,
    facing: 'down',
    walking: false,
    animTick: 0,
    actionTick: 0,

    // Three core survival meters
    hp: 150,
    maxHp: 150,
    hunger: 150,
    maxHunger: 150,
    sanity: 200,
    maxSanity: 200,

    // Secondary environmental meters
    temp: 25, // Player body temp
    wetness: 0, // 0 to 100%

    // Dark & Charlie
    inDarknessTimer: 0,
    whisperTimer: 0,

    // Equipped slots (Hand, Head, Body, Amulet)
    equipped: {
      hand: null,
      head: null,
      body: null,
      amulet: null
    },

    // 10 Hotbar slots + 8 Backpack slots
    inventory: new Array(10).fill(null),
    backpack: new Array(8).fill(null)
  },

  camera: { x: 0, y: 0 },
  entities: [],
  particles: [],

  // Survival Difficulty ('easy', 'normal', 'hard')
  difficulty: 'normal',
  blueprint: null,

  // Hound pack cycle
  houndTimer: 600,
  houndWarning: false,

  // Four Seasonal Giants Flags
  deerclopsSpawned: false,
  beargerSpawned: false,
  mooseGooseSpawned: false,
  dragonflySpawned: false,

  // Survival Diary & Milestones
  diary: initDiary(),

  // UI & Input
  keys: {},
  selectedSlot: null, // { source: 'inv'|'backpack'|'chest'|'chester'|'crockpot', index: 0 }
  openedChest: null,
  openedCrockpot: null,

  // Settings (SFX & Touch Haptic Feedback)
  settings: {
    sfx: localStorage.getItem('dst_pocket_sfx') !== '0', // default true
    vibrate: localStorage.getItem('dst_pocket_vibrate') === '1' // default false (NEVER vibrate by default)
  },

  joystick: {
    active: false,
    startX: 0,
    startY: 0,
    dx: 0,
    dy: 0
  }
};

function triggerTouchVibrate(pattern = 10) {
  if (state.settings && state.settings.vibrate && !document.hidden && navigator.vibrate) {
    try {
      navigator.vibrate(pattern);
    } catch (e) {}
  }
}

// Canvas references
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const clockCanvas = document.getElementById('clock-canvas');
const clockCtx = clockCanvas.getContext('2d');

function dist(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

function showToast(msg) {
  const toast = document.getElementById('toast-message');
  toast.innerText = msg;
  toast.classList.remove('hidden');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 2300);
}

// --- 5. Inventory & Container Storage Logic ---
function getSlotArray(source) {
  if (source === 'inv') return state.player.inventory;
  if (source === 'backpack') return state.player.backpack;
  if (source === 'chest' && state.openedChest) return state.openedChest.items;
  if (source === 'chester' && state.chester) return state.chester.slots;
  return null;
}

function addToPlayer(itemId, count = 1, options = {}) {
  const def = ITEMS[itemId];
  if (!def) return false;

  // Try stack into main inventory first
  for (let i = 0; i < state.player.inventory.length; i++) {
    const slot = state.player.inventory[i];
    if (slot && slot.id === itemId && slot.count < def.stack) {
      const take = Math.min(count, def.stack - slot.count);
      slot.count += take;
      count -= take;
      if (count <= 0) {
        updateInventoryUI();
        return true;
      }
    }
  }

  // Try stack into backpack
  const bodyItemDefForRem = state.player.equipped.body ? ITEMS[state.player.equipped.body.id] : null;
  if (bodyItemDefForRem && bodyItemDefForRem.backpackSlots) {
    for (let i = 0; i < state.player.backpack.length; i++) {
      const slot = state.player.backpack[i];
      if (slot && slot.id === itemId && slot.count < def.stack) {
        const take = Math.min(count, def.stack - slot.count);
        slot.count += take;
        count -= take;
        if (count <= 0) {
          updateInventoryUI();
          return true;
        }
      }
    }
  }

  // Find empty slot in main inventory
  for (let i = 0; i < state.player.inventory.length; i++) {
    if (!state.player.inventory[i]) {
      state.player.inventory[i] = {
        id: itemId,
        count: count,
        durability: def.durability || null,
        freshness: def.maxFresh ? 1.0 : null,
        heatStored: options.heatStored || 0
      };
      updateInventoryUI();
      return true;
    }
  }

  // Find empty slot in backpack (dynamic for regular backpack and 14-slot krampus_sack)
  const bodyItemDef = state.player.equipped.body ? ITEMS[state.player.equipped.body.id] : null;
  if (bodyItemDef && bodyItemDef.backpackSlots) {
    for (let i = 0; i < state.player.backpack.length; i++) {
      if (!state.player.backpack[i]) {
        state.player.backpack[i] = {
          id: itemId,
          count: count,
          durability: def.durability || null,
          freshness: def.maxFresh ? 1.0 : null,
          heatStored: options.heatStored || 0
        };
        updateInventoryUI();
        return true;
      }
    }
  }

  showToast('行囊与背包已满！');
  return false;
}

function countTotalItem(itemId) {
  let total = 0;
  for (const s of state.player.inventory) {
    if (s && s.id === itemId) total += s.count;
  }
  const bodyItemDefForCount = state.player.equipped.body ? ITEMS[state.player.equipped.body.id] : null;
  if (bodyItemDefForCount && bodyItemDefForCount.backpackSlots) {
    for (const s of state.player.backpack) {
      if (s && s.id === itemId) total += s.count;
    }
  }
  return total;
}

function removeTotalItem(itemId, count = 1) {
  for (let i = 0; i < state.player.inventory.length; i++) {
    const s = state.player.inventory[i];
    if (s && s.id === itemId) {
      if (s.count > count) {
        s.count -= count;
        updateInventoryUI();
        return true;
      } else {
        count -= s.count;
        state.player.inventory[i] = null;
        if (count <= 0) {
          updateInventoryUI();
          return true;
        }
      }
    }
  }

  if (state.player.equipped.body && state.player.equipped.body.id === 'backpack') {
    for (let i = 0; i < state.player.backpack.length; i++) {
      const s = state.player.backpack[i];
      if (s && s.id === itemId) {
        if (s.count > count) {
          s.count -= count;
          updateInventoryUI();
          return true;
        } else {
          count -= s.count;
          state.player.backpack[i] = null;
          if (count <= 0) {
            updateInventoryUI();
            return true;
          }
        }
      }
    }
  }
  updateInventoryUI();
  return false;
}

function updateInventoryUI() {
  const container = document.getElementById('inventory-bar');
  container.innerHTML = '';

  state.player.inventory.forEach((slot, idx) => {
    const div = createSlotElement(slot, 'inv', idx);
    container.appendChild(div);
  });

  // Backpack Bar (Dynamic for 8-slot backpack & 14-slot krampus_sack)
  const backpackBar = document.getElementById('backpack-bar');
  const backpackContainer = document.getElementById('backpack-slots');
  const equippedBodyDef = state.player.equipped.body ? ITEMS[state.player.equipped.body.id] : null;
  if (equippedBodyDef && equippedBodyDef.backpackSlots) {
    const targetSlots = equippedBodyDef.backpackSlots;
    while (state.player.backpack.length < targetSlots) state.player.backpack.push(null);
    if (state.player.backpack.length > targetSlots) state.player.backpack.length = targetSlots;
    backpackBar.classList.remove('hidden');
    const titleEl = backpackBar.querySelector('.backpack-title');
    if (titleEl) {
      titleEl.innerText = equippedBodyDef.id === 'krampus_sack' ? '🎒 坎普斯背包 (+14格顶级容量)' : '🎒 旅行背包 (+8格容量)';
    }
    backpackContainer.innerHTML = '';
    state.player.backpack.forEach((slot, idx) => {
      const div = createSlotElement(slot, 'backpack', idx);
      backpackContainer.appendChild(div);
    });
  } else {
    backpackBar.classList.add('hidden');
  }

  // Update 4 Equipped Slots (Hand, Head, Body, Amulet)
  const handDef = state.player.equipped.hand ? ITEMS[state.player.equipped.hand.id] : null;
  document.getElementById('icon-equip-hand').innerText = handDef ? handDef.icon : '空';
  const headDef = state.player.equipped.head ? ITEMS[state.player.equipped.head.id] : null;
  document.getElementById('icon-equip-head').innerText = headDef ? headDef.icon : '空';
  const bodyDef = state.player.equipped.body ? ITEMS[state.player.equipped.body.id] : null;
  document.getElementById('icon-equip-body').innerText = bodyDef ? bodyDef.icon : '空';
  const amuletDef = state.player.equipped.amulet ? ITEMS[state.player.equipped.amulet.id] : null;
  const amuletIconEl = document.getElementById('icon-equip-amulet');
  if (amuletIconEl) amuletIconEl.innerText = amuletDef ? amuletDef.icon : '空';

  // Durability bars
  ['hand', 'head', 'body', 'amulet'].forEach(slotKey => {
    const el = document.getElementById(`dur-${slotKey}`);
    if (!el) return;
    const eq = state.player.equipped[slotKey];
    if (eq && eq.durability !== null && ITEMS[eq.id]?.durability) {
      const pct = Math.max(0, (eq.durability / ITEMS[eq.id].durability) * 100);
      el.style.width = pct + '%';
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  });

  updateRecipesUI();
}

function createSlotElement(slot, source, index) {
  const div = document.createElement('div');
  const isSelected = state.selectedSlot && state.selectedSlot.source === source && state.selectedSlot.index === index;
  div.className = `inv-slot ${isSelected ? 'active' : ''}`;

  if (slot) {
    const def = ITEMS[slot.id];
    div.innerHTML = `<span class="slot-icon">${def ? def.icon : '❓'}</span>`;
    if (slot.count > 1) {
      div.innerHTML += `<span class="slot-count">${slot.count}</span>`;
    }
    // Freshness dot
    if (slot.freshness !== null && slot.freshness !== undefined) {
      const freshClass = slot.freshness > 0.5 ? 'freshness-good' : (slot.freshness > 0.2 ? 'freshness-stale' : 'freshness-spoiled');
      div.innerHTML += `<div class="slot-freshness ${freshClass}"></div>`;
    }
  }

  div.onclick = (e) => {
    e.stopPropagation();
    onSlotClicked(source, index);
  };
  return div;
}

function onSlotClicked(source, index) {
  let slot = null;
  if (source === 'equip') {
    slot = state.player.equipped[index];
  } else {
    const slots = getSlotArray(source);
    if (!slots) return;
    slot = slots[index];
  }
  if (!slot) {
    closePopover();
    return;
  }

  const def = ITEMS[slot.id];
  // Mobile Quick-Equip & Quick-Unequip (Instantly equip/unequip gear on single tap!)
  if (source === 'equip') {
    useCurrentItem(source, index);
    return;
  }
  if (def && def.equipSlot) {
    useCurrentItem(source, index);
    return;
  }

  state.selectedSlot = { source, index };
  const popover = document.getElementById('item-popover');
  document.getElementById('popover-title').innerText = `${def.icon} ${def.name}`;
  document.getElementById('popover-desc').innerText = def.desc;

  // Freshness bar in popover
  const freshBar = document.getElementById('popover-freshness-bar');
  const freshFill = document.getElementById('freshness-fill');
  if (slot.freshness !== null && slot.freshness !== undefined) {
    freshBar.classList.remove('hidden');
    freshFill.style.width = `${Math.ceil(slot.freshness * 100)}%`;
    freshFill.style.background = slot.freshness > 0.5 ? '#2ecc71' : (slot.freshness > 0.2 ? '#f1c40f' : '#e74c3c');
  } else {
    freshBar.classList.add('hidden');
  }

  const btnUse = document.getElementById('btn-action-use');
  const btnCook = document.getElementById('btn-action-cook');

  if (source === 'equip') {
    btnUse.innerText = '卸下装备';
    btnUse.style.display = 'inline-block';
  } else if (slot.id === 'rabbit_item') {
    btnUse.innerText = '杀掉 (生小肉)';
    btnUse.style.display = 'inline-block';
  } else if (slot.id === 'abigail_flower') {
    btnUse.innerText = '召唤阿比盖尔';
    btnUse.style.display = 'inline-block';
  } else if (slot.id === 'gears' && state.character === 'wx78') {
    btnUse.innerText = '吞噬升级';
    btnUse.style.display = 'inline-block';
  } else if (slot.id === 'codex_umbra') {
    btnUse.innerText = '召唤暗影傀儡';
    btnUse.style.display = 'inline-block';
  } else if (slot.id === 'telelocator_staff') {
    btnUse.innerText = '引渡回基地';
    btnUse.style.display = 'inline-block';
  } else if (slot.id === 'star_caller_staff') {
    btnUse.innerText = '召唤矮人恒星';
    btnUse.style.display = 'inline-block';
  } else if (slot.id === 'beefalo_bell') {
    btnUse.innerText = '摇铃契约绑定';
    btnUse.style.display = 'inline-block';
  } else if (slot.id === 'luxury_fan') {
    btnUse.innerText = '扇起飓风降温灭火';
    btnUse.style.display = 'inline-block';
  } else if (def.food) {
    btnUse.innerText = '食用';
    btnUse.style.display = 'inline-block';
  } else if (def.equipSlot) {
    btnUse.innerText = '装备';
    btnUse.style.display = 'inline-block';
  } else if (def.isPlaceable) {
    btnUse.innerText = '建造放置';
    btnUse.style.display = 'inline-block';
  } else {
    btnUse.style.display = 'none';
  }

  // Check if near burning campfire for instant roasting
  const nearCampfire = state.entities.some(e =>
    (e.type === 'campfire' || e.type === 'firepit') &&
    e.fuel > 0 &&
    dist(state.player.x, state.player.y, e.x, e.y) < 110
  );

  if (def.food && def.food.cookable && nearCampfire) {
    btnCook.classList.remove('hidden');
    btnCook.onclick = () => cookCurrentItem(source, index);
  } else {
    btnCook.classList.add('hidden');
  }

  btnUse.onclick = () => useCurrentItem(source, index);
  document.getElementById('btn-action-drop').onclick = () => dropCurrentItem(source, index);
  document.getElementById('btn-action-cancel').onclick = closePopover;

  popover.classList.remove('hidden');
  updateInventoryUI();
}

function closePopover() {
  document.getElementById('item-popover').classList.add('hidden');
  state.selectedSlot = null;
  updateInventoryUI();
}

function useCurrentItem(source, index) {
  if (source === 'equip') {
    const eq = state.player.equipped[index];
    if (eq) {
      if (addToPlayer(eq.id, eq.count || 1, { durability: eq.durability, freshness: eq.freshness, heatStored: eq.heatStored })) {
        state.player.equipped[index] = null;
        audio.playPickup();
        showToast(`卸下了 ${ITEMS[eq.id]?.name || eq.id}`);
        closePopover();
        updateInventoryUI();
      } else {
        showToast('随身背包已满，无法卸下！');
      }
    }
    return;
  }
  const slots = getSlotArray(source);
  if (!slots) return;
  const slot = slots[index];
  if (!slot) return;
  const def = ITEMS[slot.id];
  const p = state.player;

  if (slot.id === 'rabbit_item') {
    audio.playHit();
    slot.count--;
    if (slot.count <= 0) slots[index] = null;
    addToPlayer('morsel', 1);
    showToast('🔪 将活野兔屠宰，获得了鲜美的生小肉！');
    closePopover();
    updateInventoryUI();
    return;
  }

  if (slot.id === 'abigail_flower') {
    spawnAbigail();
    closePopover();
    updateInventoryUI();
    return;
  }

  if (slot.id === 'gears' && state.character === 'wx78') {
    audio.playEat();
    p.maxHp += 20;
    p.maxHunger += 20;
    p.maxSanity += 20;
    p.hp = p.maxHp;
    p.hunger = p.maxHunger;
    p.sanity = p.maxSanity;
    slot.count--;
    if (slot.count <= 0) slots[index] = null;
    showToast('🤖 吞噬齿轮！核心硬件已永久升级三维系统上限！');
    closePopover();
    updateInventoryUI();
    updateHUD();
    return;
  }

  if (slot.id === 'codex_umbra') {
    if (countTotalItem('nightmare_fuel') < 2) {
      showToast('📖 暗影秘典需要至少 2 份【噩梦燃料】作为禁忌施法媒介！');
      return;
    }
    removeTotalItem('nightmare_fuel', 2);
    p.sanity = Math.max(0, p.sanity - 30);
    audio.playMagic();
    createHitParticles(p.x, p.y, '#9c27b0');
    // Rotate shadow minions: Lumberjack -> Miner -> Duelist
    state.shadowPuppetCycle = ((state.shadowPuppetCycle || 0) + 1) % 3;
    const puppetType = state.shadowPuppetCycle === 0 ? 'shadow_lumberjack' : (state.shadowPuppetCycle === 1 ? 'shadow_miner' : 'shadow_duelist');
    const puppetNames = { shadow_lumberjack: '暗影伐木傀儡', shadow_miner: '暗影矿工傀儡', shadow_duelist: '暗影角斗士' };
    state.entities.push({
      type: puppetType,
      x: p.x + (Math.random() - 0.5) * 40,
      y: p.y + (Math.random() - 0.5) * 40,
      hp: puppetType === 'shadow_duelist' ? 250 : 120,
      maxHp: puppetType === 'shadow_duelist' ? 250 : 120,
      radius: 18,
      speed: 110
    });
    showToast(`📖 吟诵暗影禁咒！从虚空中召唤出【${puppetNames[puppetType]}】助战！(-30理智)`);
    closePopover();
    updateInventoryUI();
    return;
  }

  if (slot.id === 'telelocator_staff') {
    p.sanity = Math.max(0, p.sanity - 25);
    slot.durability = (slot.durability !== undefined ? slot.durability : 10) - 1;
    audio.playMagic();
    createHitParticles(p.x, p.y, '#ab47bc');
    // Find nearest base station or default spawn
    let targetX = 1900, targetY = 1900;
    const baseStation = state.entities.find(e => e.type === 'alchemy_engine' || e.type === 'science_machine');
    if (baseStation) {
      targetX = baseStation.x + 35;
      targetY = baseStation.y + 35;
    }
    p.x = targetX;
    p.y = targetY;
    createHitParticles(p.x, p.y, '#ab47bc');
    if (slot.durability <= 0) {
      slots[index] = null;
      showToast('远距传送法杖魔力耗尽破碎！(-25理智)');
    } else {
      showToast(`⚡ 紫电轰鸣！传送法杖将你安全引渡回基地！剩余耐久: ${slot.durability}`);
    }
    closePopover();
    updateInventoryUI();
    return;
  }

  if (slot.id === 'star_caller_staff') {
    p.sanity = Math.max(0, p.sanity - 20);
    slot.durability = (slot.durability !== undefined ? slot.durability : 12) - 1;
    audio.playMagic();
    const starX = p.x + (p.facing === 'left' ? -60 : 60);
    const starY = p.y;
    state.entities.push({
      type: 'dwarf_star',
      x: starX, y: starY,
      radius: 26,
      lifetime: 180
    });
    createHitParticles(starX, starY, '#ffb300');
    if (slot.durability <= 0) {
      slots[index] = null;
      showToast('呼星法杖耗尽极光威能消散！');
    } else {
      showToast(`🌟 从苍穹引落炽热的【矮人恒星】！持续发光放热3分钟！剩余耐久: ${slot.durability}`);
    }
    closePopover();
    updateInventoryUI();
    return;
  }

  if (slot.id === 'beefalo_bell') {
    let nearestBeefalo = null;
    let minD = 220;
    for (const b of state.entities) {
      if (b.type === 'beefalo') {
        const d = dist(p.x, p.y, b.x, b.y);
        if (d < minD) {
          minD = d;
          nearestBeefalo = b;
        }
      }
    }
    if (!nearestBeefalo) {
      showToast('🔔 附近220px内未发现皮弗娄牛！靠近牛群后再轻摇铜铃！');
      return;
    }
    audio.playMagic();
    createHitParticles(nearestBeefalo.x, nearestBeefalo.y, '#ffd54f');
    createHitParticles(p.x, p.y, '#ffd54f');
    nearestBeefalo.isBonded = true;
    nearestBeefalo.domestication = 100;
    nearestBeefalo.obedience = 100;
    nearestBeefalo.target = p;
    nearestBeefalo.name = '契约皮弗娄牛';
    slot.durability = (slot.durability || 50) - 1;
    showToast('🔔 悠扬铃音共鸣！皮弗娄牛与你缔结了灵魂血契！成为忠诚护卫与全时坐骑！');
    closePopover();
    updateInventoryUI();
    return;
  }

  if (slot.id === 'luxury_fan') {
    audio.playWind();
    slot.durability = (slot.durability !== undefined ? slot.durability : 15) - 1;
    let firesOut = 0;
    for (const ent of state.entities) {
      if (ent.burning && dist(p.x, p.y, ent.x, ent.y) < 380) {
        ent.burning = 0;
        firesOut++;
        createHitParticles(ent.x, ent.y, '#81d4fa');
      }
    }
    p.temperature = 20;
    createHitParticles(p.x, p.y, '#b2ebf2');
    createHitParticles(p.x, p.y, '#e0f7fa');
    if (slot.durability <= 0) {
      slots[index] = null;
      showToast('豪华羽毛风扇羽毛耗尽消散！');
    } else {
      showToast(`🪭 呼啸清爽狂风席卷！扑灭了${firesOut}处大火，体温骤降至清凉20°C！剩余耐久: ${slot.durability}`);
    }
    closePopover();
    updateInventoryUI();
    return;
  }

  if (def.food) {
    if (state.character === 'wigfrid' && !def.food.isMeat) {
      showToast('薇格弗德怒斥：高贵的战士从不吃草木素食！');
      return;
    }
    audio.playEat();
    // Freshness penalty: Stale gives -33% hunger, Spoiled gives -50% hunger & drops sanity
    let hungerMult = 1.0;
    let sanityMult = 1.0;
    if (slot.freshness !== null && slot.freshness !== undefined) {
      if (slot.freshness <= 0.2) {
        hungerMult = 0.5;
        p.sanity = Math.max(0, p.sanity - 10);
        showToast('食物已经严重变质！吃坏了肚子...');
      } else if (slot.freshness <= 0.5) {
        hungerMult = 0.67;
        p.sanity = Math.max(0, p.sanity - 3);
        showToast('食物有些陈旧不新鲜。');
      }
    }

    p.hunger = Math.min(p.maxHunger, p.hunger + (def.food.hunger || 0) * hungerMult);
    p.hp = Math.min(p.maxHp, Math.max(0, p.hp + (def.food.hp || 0)));
    p.sanity = Math.min(p.maxSanity, Math.max(0, p.sanity + (def.food.sanity || 0) * sanityMult));

    showToast(`食用了 ${def.name}`);
    slot.count--;
    if (slot.count <= 0) slots[index] = null;
  } else if (def.equipSlot) {
    const slotKey = def.equipSlot;
    const oldEquip = p.equipped[slotKey];
    p.equipped[slotKey] = slot;
    slots[index] = oldEquip;
    audio.playPickup();
    showToast(`装备了 ${def.name}`);
  } else if (def.isPlaceable) {
    closePopover();
    startBlueprintPlacement(def.isPlaceable, 'inventory', { source, index });
    return;
  }

  closePopover();
  updateInventoryUI();
}

function cookCurrentItem(source, index) {
  const slots = getSlotArray(source);
  if (!slots) return;
  const slot = slots[index];
  if (!slot || !ITEMS[slot.id]?.food?.cookable) return;

  const cookedId = ITEMS[slot.id].food.cookable;
  slot.count--;
  if (slot.count <= 0) slots[index] = null;

  addToPlayer(cookedId, 1);
  audio.playEat();
  showToast(`营火烘烤完成了 ${ITEMS[cookedId].name}！`);
  closePopover();
  updateInventoryUI();
}

function dropCurrentItem(source, index) {
  const slots = getSlotArray(source);
  if (!slots) return;
  const slot = slots[index];
  if (!slot) return;

  dropWorldItem(slot.id, state.player.x + (Math.random() - 0.5) * 40, state.player.y + (Math.random() - 0.5) * 40, slot.count, {
    durability: slot.durability,
    freshness: slot.freshness,
    heatStored: slot.heatStored
  });

  slots[index] = null;
  audio.playPickup();
  closePopover();
  updateInventoryUI();
}

function deployStructure(type, x, y, rotation) {
  audio.playCraft();
  const rot = rotation || 0;
  createHitParticles(x, y, '#d4a373');
  if (type === 'campfire') {
    state.entities.push({ type: 'campfire', x, y, fuel: 85, maxFuel: 100, radius: 24, isPermanent: false, rotation: rot });
    showToast('建造了临时营火！');
  } else if (type === 'firepit') {
    state.entities.push({ type: 'firepit', x, y, fuel: 110, maxFuel: 150, radius: 24, isPermanent: true, rotation: rot });
    showToast('建造了石质火坑！');
  } else if (type === 'science_machine') {
    state.entities.push({ type: 'science_machine', x, y, radius: 28, rotation: rot });
    showToast('发明了【科学仪器】！一本科技已解锁！');
  } else if (type === 'alchemy_engine') {
    state.entities.push({ type: 'alchemy_engine', x, y, radius: 30, rotation: rot });
    showToast('发明了【炼金引擎】！二本科技已解锁！');
  } else if (type === 'chest') {
    state.entities.push({ type: 'chest', x, y, radius: 22, items: new Array(9).fill(null), rotation: rot });
    showToast('建造了储物木箱！');
  } else if (type === 'crockpot') {
    state.entities.push({ type: 'crockpot', x, y, radius: 26, ingredients: [null, null, null, null], cooking: false, cookTimer: 0, rotation: rot });
    showToast('建造了瓦罐烹饪锅！');
  } else if (type === 'icebox') {
    state.entities.push({ type: 'icebox', x, y, radius: 24, items: new Array(9).fill(null), rotation: rot });
    showToast('建造了雪柜冰箱！');
  } else if (type === 'tent') {
    state.entities.push({ type: 'tent', x, y, radius: 32, uses: 6, rotation: rot });
    showToast('搭建了野营帐篷！');
  } else if (type === 'lightning_rod') {
    state.entities.push({ type: 'lightning_rod', x, y, radius: 20, rotation: rot });
    showToast('安装了避雷针！');
  } else if (type === 'tooth_trap') {
    state.entities.push({ type: 'tooth_trap', x, y, radius: 16, armed: true, rotation: rot });
    showToast('布置了犬牙陷阱！');
  } else if (type === 'meat_effigy') {
    state.entities.push({ type: 'meat_effigy', x, y, radius: 22, active: true });
    showToast('祭献肉块雕像！获得一次复活契约！');
  } else if (type === 'prestihatitator') {
    state.entities.push({ type: 'prestihatitator', x, y, radius: 28 });
    showToast('🔮 发明了【灵子分解器】！一阶魔法科技已解锁！');
    if (state.diary) state.diary.milestones.magic_apprentice = true;
  } else if (type === 'shadow_manipulator') {
    state.entities.push({ type: 'shadow_manipulator', x, y, radius: 32 });
    showToast('🪐 发明了【暗影操纵仪】！二阶暗影古法已解锁！');
    if (state.diary) state.diary.milestones.magic_apprentice = true;
  } else if (type === 'farmplot') {
    state.entities.push({ type: 'farmplot', x, y, radius: 28, crop: null, stage: 0, growTimer: 0 });
    showToast('🌾 开辟了改良农田！手持种子即可播种！');
  } else if (type === 'flingomatic') {
    state.entities.push({ type: 'flingomatic', x, y, radius: 30, active: true, fuel: 100, maxFuel: 100, range: 260, rotation: rot });
    showToast('❄️ 建造了雪球灭火机！将在夏季自动侦测火情发射雪球灭火！');
    if (state.diary) state.diary.chapters.ch4 = true;
  } else if (type === 'drying_rack') {
    state.entities.push({ type: 'drying_rack', x, y, radius: 24, meat: null, timer: 0, ready: false, rotation: rot });
    showToast('🥩 搭建了晾肉架！可将大肉或怪物肉悬挂风干成高饱食大肉干！');
  } else if (type === 'birdcage') {
    state.entities.push({ type: 'birdcage', x, y, radius: 26, hasBird: false, birdType: null, rotation: rot });
    showToast('🦜 建造了镀金鸟笼！可将捕获的活鸟放入驯养，喂肉产蛋/喂果蔬产良种！');
  } else if (type === 'beebox') {
    state.entities.push({ type: 'beebox', x, y, radius: 26, honey: 0, maxHoney: 6, prodTimer: 0, rotation: rot });
    showToast('🐝 搭建了蜂箱！工蜂将开始酿造纯正天然蜂蜜！');
    if (state.diary) state.diary.chapters.ch3 = true;
  } else if (type === 'boat') {
    state.entities.push({ type: 'boat', x, y, radius: 45, hp: 500, maxHp: 500 });
    showToast('⛵ 远洋海船已下水！靠近登船即可扬帆远征海洋！');
    if (state.diary) {
      state.diary.milestones.sail_boat = true;
      state.diary.chapters.ch6 = true;
    }
  } else if (type === 'celestial_altar') {
    state.entities.push({ type: 'celestial_altar', x, y, radius: 32, active: true });
    showToast('🌙 激活了天体祭坛基座！天体科技与理智启蒙场已建立！');
    if (state.diary) state.diary.milestones.reach_lunar = true;
  } else if (type === 'teleportato_wooden') {
    state.entities.push({ type: 'teleportato_base', x, y, radius: 36, assembled: false });
    showToast('🌀 安放了木质基座！靠近可组装麦斯威尔跳世界机！');
  } else if (type === 'houndius_shootius') {
    state.entities.push({
      type: 'houndius_shootius',
      x, y, radius: 28, rotation: rot,
      hp: 1200, maxHp: 1200,
      shootCooldown: 0,
      laserTimer: 0,
      target: null
    });
    showToast('🏰 构筑了【远古眼球激光炮塔】！基地守卫已就绪！');
  } else if (type === 'scaled_furnace') {
    state.entities.push({
      type: 'scaled_furnace',
      x, y, radius: 30, rotation: rot,
      isPermanent: true
    });
    showToast('🔥 建造了【龙鳞火炉】！永恒光源与舒适温度已激活！');
  } else if (type === 'spider_den') {
    state.entities.push({
      type: 'spider_den',
      x, y, radius: 26, level: 1, spawnTimer: 8, rotation: rot
    });
    showToast('🕸️ 成功移植种植了蜘蛛巢穴！');
  } else if (type === 'auto_harvester') {
    state.entities.push({
      type: 'auto_harvester',
      x, y, radius: 28, rotation: rot,
      timer: 0,
      range: 220,
      armAngle: 0
    });
    showToast('⚙️ 建造了【全自动机械收割机】！发条动力自动收割周边作物！');
  } else if (type === 'vacuum_chest') {
    state.entities.push({
      type: 'vacuum_chest',
      x, y, radius: 24, rotation: rot,
      items: new Array(9).fill(null),
      timer: 0,
      range: 180
    });
    showToast('📦🌀 建造了【虚空吸附整理箱】！自动隔空吸纳整理地面物资！');
  } else if (type === 'sprinkler') {
    state.entities.push({
      type: 'sprinkler',
      x, y, radius: 26, rotation: rot,
      timer: 0,
      range: 220,
      sprayAngle: 0
    });
    showToast('🚿 建造了【自动喷灌机】！滋养农田加速生长，防御炎夏枯萎！');
  } else if (type === 'mushroom_planter') {
    state.entities.push({
      type: 'mushroom_planter',
      x, y, radius: 24, rotation: rot,
      shroom: null,
      timer: 0,
      ready: false
    });
    showToast('🍄🪵 放置了【蘑菇栽培木桩】！靠近即可播种各色蘑菇！');
  } else if (type === 'auto_feeder') {
    state.entities.push({
      type: 'auto_feeder',
      x, y, radius: 24, rotation: rot,
      timer: 0,
      range: 220,
      feedCount: 30
    });
    showToast('🌾🪵 建造了【智能牲畜饲料槽】！靠近的皮弗娄牛与猪人将自动进食并加深感情！');
  } else if (type === 'solar_lantern') {
    state.entities.push({
      type: 'solar_lantern',
      x, y, radius: 20, rotation: rot,
      active: true,
      lightRadius: 185
    });
    showToast('🏮☀️ 构筑了【日耀感光路灯】！入夜自动绽放极光护盾，永不熄灭！');
  }
}

// Chest Container Modal Logic
function openChestUI(chestEnt) {
  window.lastModalOpenTime = Date.now();
  state.openedChest = chestEnt;
  const modal = document.getElementById('chest-modal');
  modal.classList.remove('hidden');
  updateChestSlots();

  document.getElementById('btn-close-chest').onclick = () => {
    modal.classList.add('hidden');
    state.openedChest = null;
  };
}

function updateChestSlots() {
  if (!state.openedChest) return;
  const grid = document.getElementById('chest-grid');
  grid.innerHTML = '';
  // 1. Chest own slots
  state.openedChest.items.forEach((slot, idx) => {
    const el = createSlotElement(slot, 'chest', idx);
    el.onclick = (e) => {
      e.stopPropagation();
      if (slot) {
        if (addToPlayer(slot.id, slot.count, { durability: slot.durability, freshness: slot.freshness, heatStored: slot.heatStored })) {
          state.openedChest.items[idx] = null;
          audio.playPickup();
          updateChestSlots();
          updateInventoryUI();
        } else {
          showToast('随身背包已满！');
        }
      }
    };
    grid.appendChild(el);
  });

  // 2. Player Inventory Grid inside Chest Modal
  const playerGrid = document.getElementById('chest-player-grid');
  if (playerGrid) {
    playerGrid.innerHTML = '';
    state.player.inventory.forEach((invSlot, invIdx) => {
      const el = createSlotElement(invSlot, 'inv', invIdx);
      el.onclick = (e) => {
        e.stopPropagation();
        if (invSlot) {
          let deposited = false;
          const itemDef = ITEMS[invSlot.id];
          if (itemDef?.stack && itemDef.stack > 1) {
            for (let c = 0; c < state.openedChest.items.length; c++) {
              const cs = state.openedChest.items[c];
              if (cs && cs.id === invSlot.id && cs.count < itemDef.stack) {
                const space = itemDef.stack - cs.count;
                const addAmt = Math.min(space, invSlot.count);
                cs.count += addAmt;
                invSlot.count -= addAmt;
                if (invSlot.count <= 0) state.player.inventory[invIdx] = null;
                deposited = true;
                break;
              }
            }
          }
          if (!deposited) {
            for (let c = 0; c < state.openedChest.items.length; c++) {
              if (!state.openedChest.items[c]) {
                state.openedChest.items[c] = { ...invSlot };
                state.player.inventory[invIdx] = null;
                deposited = true;
                break;
              }
            }
          }
          if (deposited) {
            audio.playPickup();
            updateChestSlots();
            updateInventoryUI();
          } else {
            showToast('木箱储物格已满！');
          }
        }
      };
      playerGrid.appendChild(el);
    });
  }
}

// Chester Companion Modal Logic
function openChesterUI() {
  window.lastModalOpenTime = Date.now();
  state.openedChester = true;
  const modal = document.getElementById('chester-modal');
  modal.classList.remove('hidden');
  updateChesterSlots();

  const tip = document.getElementById('chester-type-tip');
  if (state.chester.type === 'snow') {
    tip.innerText = '❄️ 冰雪切斯特：内部极度严寒，食物腐烂速度减半，冰镇暖石！';
  } else if (state.chester.type === 'shadow') {
    tip.innerText = '🔮 暗影切斯特：暗影维度异化，内部储物空间扩充至 12 格！';
  } else {
    tip.innerText = '🐾 忠诚的眼骨伙伴切斯特，随身跟随并吞吐珍稀宝物。';
  }

  document.getElementById('btn-close-chester').onclick = () => {
    modal.classList.add('hidden');
    state.openedChester = false;
    checkChesterTransformation();
  };
}

function updateChesterSlots() {
  const grid = document.getElementById('chester-grid');
  grid.innerHTML = '';
  const slotCount = state.chester.type === 'shadow' ? 12 : 9;
  if (state.chester.slots.length < slotCount) {
    while (state.chester.slots.length < slotCount) state.chester.slots.push(null);
  }

  // 1. Chester own slots
  state.chester.slots.slice(0, slotCount).forEach((slot, idx) => {
    const el = createSlotElement(slot, 'chester', idx);
    el.onclick = (e) => {
      e.stopPropagation();
      if (slot) {
        if (addToPlayer(slot.id, slot.count, { durability: slot.durability, freshness: slot.freshness, heatStored: slot.heatStored })) {
          state.chester.slots[idx] = null;
          audio.playChester();
          updateChesterSlots();
          updateInventoryUI();
        } else {
          showToast('随身背包已满！');
        }
      }
    };
    grid.appendChild(el);
  });

  // 2. Player Inventory Grid inside Chester Modal
  const playerGrid = document.getElementById('chester-player-grid');
  if (playerGrid) {
    playerGrid.innerHTML = '';
    state.player.inventory.forEach((invSlot, invIdx) => {
      const el = createSlotElement(invSlot, 'inv', invIdx);
      el.onclick = (e) => {
        e.stopPropagation();
        if (invSlot) {
          let deposited = false;
          const itemDef = ITEMS[invSlot.id];
          if (itemDef?.stack && itemDef.stack > 1) {
            for (let c = 0; c < slotCount; c++) {
              const cs = state.chester.slots[c];
              if (cs && cs.id === invSlot.id && cs.count < itemDef.stack) {
                const space = itemDef.stack - cs.count;
                const addAmt = Math.min(space, invSlot.count);
                cs.count += addAmt;
                invSlot.count -= addAmt;
                if (invSlot.count <= 0) state.player.inventory[invIdx] = null;
                deposited = true;
                break;
              }
            }
          }
          if (!deposited) {
            for (let c = 0; c < slotCount; c++) {
              if (!state.chester.slots[c]) {
                state.chester.slots[c] = { ...invSlot };
                state.player.inventory[invIdx] = null;
                deposited = true;
                break;
              }
            }
          }
          if (deposited) {
            audio.playChester();
            updateChesterSlots();
            updateInventoryUI();
          } else {
            showToast('切斯特储物格已满！');
          }
        }
      };
      playerGrid.appendChild(el);
    });
  }
}

function checkChesterTransformation() {
  if (!state.chester || !state.chester.active) return;
  // If holds 9 blue gems -> Snow Chester!
  const blueCount = state.chester.slots.filter(s => s && s.id === 'blue_gem').reduce((acc, s) => acc + s.count, 0);
  if (blueCount >= 9 && state.chester.type !== 'snow') {
    state.chester.type = 'snow';
    // Consume 9 gems
    let toRemove = 9;
    for (let i = 0; i < state.chester.slots.length; i++) {
      const s = state.chester.slots[i];
      if (s && s.id === 'blue_gem') {
        const take = Math.min(toRemove, s.count);
        s.count -= take;
        toRemove -= take;
        if (s.count <= 0) state.chester.slots[i] = null;
        if (toRemove <= 0) break;
      }
    }
    audio.playMagic();
    showToast('❄️ 切斯特吸收了寒冰魔能，蜕变为【冰雪切斯特】（随身移动冰箱）！');
  }

  // If holds 9 nightmare fuels -> Shadow Chester!
  const shadowCount = state.chester.slots.filter(s => s && s.id === 'nightmare_fuel').reduce((acc, s) => acc + s.count, 0);
  if (shadowCount >= 9 && state.chester.type !== 'shadow') {
    state.chester.type = 'shadow';
    while (state.chester.slots.length < 12) state.chester.slots.push(null);
    let toRemove = 9;
    for (let i = 0; i < state.chester.slots.length; i++) {
      const s = state.chester.slots[i];
      if (s && s.id === 'nightmare_fuel') {
        const take = Math.min(toRemove, s.count);
        s.count -= take;
        toRemove -= take;
        if (s.count <= 0) state.chester.slots[i] = null;
        if (toRemove <= 0) break;
      }
    }
    audio.playMagic();
    showToast('🔮 切斯特吞噬了噩梦余烬，蜕变为【暗影切斯特】（空间扩充至12格）！');
  }
}

// --- 5.5. Beefalo Mount & Companion & Teleportato Mechanics ---
function mountBeefalo(beefaloEnt) {
  state.beefaloRiding = true;
  state.beefaloMountHp = beefaloEnt.hp || 500;
  state.beefaloMountMaxHp = 500;
  state.player.speed = 250;
  const badge = document.getElementById('mount-badge');
  if (badge) badge.classList.remove('hidden');
  updateMountBadge();
  showToast('🐂 翻身跃上牛背！全速疾驰，冲锋与践踏已激活！');
  audio.playBeefaloGrunt();
}

function dismountBeefalo() {
  state.beefaloRiding = false;
  state.player.speed = CHARACTERS[state.character]?.speed || 165;
  const badge = document.getElementById('mount-badge');
  if (badge) badge.classList.add('hidden');
  showToast('下了牛背。');
}

function updateMountBadge() {
  if (!state.beefaloRiding) return;
  const pct = Math.max(0, Math.min(100, (state.beefaloMountHp / state.beefaloMountMaxHp) * 100));
  const fill = document.getElementById('mount-hp-fill');
  if (fill) fill.style.width = pct + '%';
}

function spawnAbigail() {
  if (state.abigail.active) {
    showToast('姐姐阿比盖尔已经在身边陪伴着你。');
    return;
  }
  state.abigail.active = true;
  state.abigail.x = state.player.x - 25;
  state.abigail.y = state.player.y - 25;
  state.abigail.hp = 300;
  state.abigail.maxHp = 300;
  const badge = document.getElementById('abigail-badge');
  if (badge) badge.classList.remove('hidden');
  showToast('👻 阿比盖尔的幽魂从花朵中现身！孪生姐姐为你护航！');
  audio.playMagic();
}

function selectCharacter(charId) {
  if (!CHARACTERS[charId]) return;
  state.character = charId;
  const def = CHARACTERS[charId];
  const p = state.player;
  p.maxHp = def.maxHp;
  p.maxHunger = def.maxHunger;
  p.maxSanity = def.maxSanity;
  p.hp = def.maxHp;
  p.hunger = def.maxHunger;
  p.sanity = def.maxSanity;
  p.speed = def.speed;

  // Clear starting inventory and assign character start items
  p.inventory = new Array(10).fill(null);
  if (def.startItem) {
    p.inventory[0] = { id: def.startItem, count: 1 };
  }
  updateInventoryUI();
  updateHUD();
}

function openTeleportatoUI() {
  const modal = document.getElementById('teleportato-modal');
  if (modal) modal.classList.remove('hidden');
  renderTeleportatoParts();
}

function renderTeleportatoParts() {
  const listEl = document.getElementById('teleportato-parts-list');
  if (!listEl) return;
  listEl.innerHTML = '';

  const partDefs = [
    { id: 'teleportato_wooden', name: '木质基座', icon: '🪵' },
    { id: 'teleportato_ring', name: '环状零件', icon: '💍' },
    { id: 'teleportato_crank', name: '曲柄零件', icon: '🔩' },
    { id: 'teleportato_box', name: '盒状零件', icon: '📦' },
    { id: 'teleportato_potato', name: '金属马铃薯', icon: '🥔' }
  ];

  let allInstalled = true;
  partDefs.forEach(part => {
    const key = part.id.replace('teleportato_', '');
    const isInstalled = state.teleportato.parts[key];
    if (!isInstalled) allInstalled = false;

    const card = document.createElement('div');
    card.className = `teleportato-part-card ${isInstalled ? 'installed' : ''}`;
    card.innerHTML = `
      <div class="part-icon">${part.icon}</div>
      <div class="part-name">${part.name}</div>
      <div class="part-status">${isInstalled ? '已嵌合' : '未安装'}</div>
    `;

    card.onclick = () => {
      if (!state.teleportato.parts[key]) {
        if (countTotalItem(part.id) > 0) {
          removeTotalItem(part.id, 1);
          state.teleportato.parts[key] = true;
          audio.playCraft();
          showToast(`⚙️ 成功将【${part.name}】嵌入传送机！`);
          renderTeleportatoParts();
          updateInventoryUI();
        } else {
          showToast(`行囊中尚未找到【${part.name}】！可在全图探索寻获。`);
        }
      }
    };
    listEl.appendChild(card);
  });

  const btnActivate = document.getElementById('btn-activate-teleportato');
  if (btnActivate) {
    if (allInstalled) {
      btnActivate.removeAttribute('disabled');
      btnActivate.innerText = '⚡ 启动传送阵 · 跃迁飞升下一轮回！';
      btnActivate.onclick = () => {
        executeTeleportatoJump();
      };
    } else {
      btnActivate.setAttribute('disabled', 'true');
      btnActivate.innerText = '零件尚未集齐 (点击上方卡片安装零件)';
    }
  }
}

function executeTeleportatoJump() {
  audio.playThunder();
  state.worldCycle = (state.worldCycle || 1) + 1;
  state.day = 1;
  state.season = 'autumn';
  state.seasonDay = 1;
  state.teleportato = {
    assembled: false,
    parts: { wooden: false, ring: false, crank: false, box: false, potato: false }
  };
  if (state.diary) {
    state.diary.worldsJumped = (state.diary.worldsJumped || 0) + 1;
    state.diary.milestones.teleportato_jump = true;
    state.diary.chapters.ch7 = true;
  }
  const modal = document.getElementById('teleportato-modal');
  if (modal) modal.classList.add('hidden');
  initWorld();
  showToast(`🌌 跃迁完成！进入【第 ${state.worldCycle} 平行世界】！万物重铸，迎接全新挑战！`);
}

// --- 6. Tech Prototyping & Crafting Drawer ---
function checkPrototypingTier() {
  const p = state.player;
  let nearScience = false;
  let nearAlchemy = false;
  let nearPrestihatitator = false;
  let nearShadowManipulator = false;

  for (const ent of state.entities) {
    const d = dist(p.x, p.y, ent.x, ent.y);
    if (d < 160) {
      if (ent.type === 'science_machine') nearScience = true;
      if (ent.type === 'alchemy_engine') nearAlchemy = true;
      if (ent.type === 'prestihatitator') nearPrestihatitator = true;
      if (ent.type === 'shadow_manipulator' || ent.type === 'ancient_station') nearShadowManipulator = true;
    }
  }

  if (nearShadowManipulator) {
    state.currentTechTier = 4;
    document.getElementById('tech-level-text').innerText = '🔮 远古暗影: 四本顶峰 (已解锁暗夜神装与生命护符)';
    if (state.diary) state.diary.milestones.magic_apprentice = true;
  } else if (nearPrestihatitator) {
    state.currentTechTier = 3;
    document.getElementById('tech-level-text').innerText = '🔮 灵子魔法: 三本灵子分解 (已解锁暗夜剑、影甲、排箫、法杖)';
    if (state.diary) state.diary.milestones.magic_apprentice = true;
  } else if (nearAlchemy) {
    state.currentTechTier = 2;
    document.getElementById('tech-level-text').innerText = '⚙️ 科技等级: 二本炼金 (已解锁全部工业蓝图)';
    if (state.diary) state.diary.milestones.science_rev = true;
  } else if (nearScience) {
    state.currentTechTier = 1;
    document.getElementById('tech-level-text').innerText = '🔬 科技等级: 一本科学 (已解锁背包、木甲、铲子等)';
    if (state.diary) state.diary.milestones.science_rev = true;
  } else {
    state.currentTechTier = 0;
    document.getElementById('tech-level-text').innerText = '🔬 科技等级: 基础手搓 (需靠近科学仪器/灵子机解锁高级图纸)';
  }
}

function craftRecipe(rec) {
  audio.init();

  // Check tech tier requirement
  const isPrototyped = state.prototypedRecipes.has(rec.id);
  if (!isPrototyped && rec.tier > state.currentTechTier) {
    showToast(`需要靠近【${rec.tier === 1 ? '科学仪器' : '炼金引擎'}】进行研发！`);
    return;
  }

  // Check materials
  const missing = [];
  for (const [matId, amt] of Object.entries(rec.req)) {
    const owned = countTotalItem(matId);
    if (owned < amt) {
      missing.push(`${ITEMS[matId]?.name || matId} (${owned}/${amt})`);
    }
  }
  if (missing.length > 0) {
    showToast(`材料不足！缺少: ${missing.join(', ')}`);
    return;
  }

  // Deduct materials
  for (const [matId, amt] of Object.entries(rec.req)) {
    removeTotalItem(matId, amt);
  }

  // Prototyping bonus: +15 Sanity on first craft!
  if (!isPrototyped && rec.tier > 0) {
    state.prototypedRecipes.add(rec.id);
    state.player.sanity = Math.min(state.player.maxSanity, state.player.sanity + 15);
    showToast(`💡 发明成功！研发【${rec.name}】获得 +15 理智！`);
  } else {
    showToast(`🛠️ 制作了 ${rec.name}`);
  }

  // Milestones & Diary
  if (state.diary) {
    state.diary.recipesCrafted = (state.diary.recipesCrafted || 0) + 1;
    if (rec.id === 'axe') state.diary.milestones.craft_axe = true;
    if (rec.id === 'torch') state.diary.milestones.craft_torch = true;
    if (rec.id === 'science_machine_item') state.diary.milestones.science_rev = true;
  }

  // Check if placeable building structure -> launch Blueprint Mode
  const itemDef = ITEMS[rec.id];
  if (itemDef?.isPlaceable) {
    closeCraftingDrawer();
    startBlueprintPlacement(itemDef.isPlaceable, 'craft', null, rec);
    return;
  }

  // Auto-equip tools or weapons if corresponding slot is empty
  if (itemDef?.equipSlot && !state.player.equipped[itemDef.equipSlot]) {
    state.player.equipped[itemDef.equipSlot] = {
      id: rec.id,
      count: 1,
      durability: itemDef.durability || (rec.id === 'torch' ? 100 : null),
      freshness: itemDef.freshnessMax || null,
      heatStored: rec.id === 'thermal_stone' ? 0 : undefined
    };
    showToast(`🛠️ 制作并已自动装备【${rec.name}】！`);
  } else {
    addToPlayer(rec.id, 1);
  }

  audio.playCraft();
  updateInventoryUI();
  updateHUD();
  updateRecipesUI();
}

function updateRecipesUI() {
  const activeBtn = document.querySelector('.cat-btn.active');
  const activeCat = activeBtn?.dataset.cat || 'tools';
  const container = document.getElementById('recipes-list');
  if (!container) return;
  container.innerHTML = '';

  const list = RECIPES.filter(r => r.cat === activeCat);
  list.forEach(r => {
    let canCraft = true;
    const isPrototyped = state.prototypedRecipes.has(r.id);
    const techMet = isPrototyped || (r.tier <= state.currentTechTier);
    if (!techMet) canCraft = false;

    const reqSpans = Object.entries(r.req).map(([matId, amt]) => {
      const owned = countTotalItem(matId);
      const isMet = owned >= amt;
      if (!isMet) canCraft = false;
      const matDef = ITEMS[matId];
      return `<span class="req-item ${isMet ? 'met' : 'unmet'}">${matDef?.name || matId} ${owned}/${amt}</span>`;
    }).join(' ');

    const card = document.createElement('div');
    card.className = `recipe-card ${canCraft ? 'craftable' : ''}`;
    card.innerHTML = `
      <div class="recipe-icon">${r.icon}</div>
      <div class="recipe-info">
        <div class="recipe-name">
          <span>${r.name}</span>
          ${r.tier > 0 ? (isPrototyped ? '<span style="color:#f1c40f;font-size:10px;">★已掌握</span>' : `<span style="color:#e67e22;font-size:10px;">(需${r.tier}本)</span>`) : ''}
        </div>
        <div class="recipe-reqs">${reqSpans}</div>
      </div>
      <button class="craft-btn" ${canCraft ? '' : 'disabled'}>${isPrototyped ? '制作' : (r.tier > 0 ? '研发' : '制作')}</button>
    `;

    const triggerCraft = (e) => {
      if (e) e.stopPropagation();
      craftRecipe(r);
    };

    const craftBtn = card.querySelector('.craft-btn');
    craftBtn.addEventListener('click', triggerCraft);
    craftBtn.addEventListener('pointerdown', triggerCraft);

    // Tapping recipe card body also triggers craft
    card.addEventListener('click', triggerCraft);

    container.appendChild(card);
  });
}


// --- Blueprint Placement System ---
function startBlueprintPlacement(structureType, source, sourceSlot, recipe) {
  const p = state.player;
  state.blueprint = {
    active: true,
    structureType: structureType,
    name: ITEMS[structureType + '_item']?.name || structureType,
    x: p.x + (p.facing === 'left' ? -65 : 65),
    y: p.y,
    rotation: 0,
    source: source,
    sourceSlot: sourceSlot,
    recipe: recipe,
    valid: true
  };

  const hud = document.getElementById('blueprint-hud');
  if (hud) {
    document.getElementById('bp-name-text').innerText = `📐 建造蓝图: ${state.blueprint.name}`;
    document.getElementById('bp-rot-deg').innerText = '0°';
    hud.classList.remove('hidden');
  }
  showToast(`📐 已开启【${state.blueprint.name}】蓝图放置，请微调位置与朝向`);
}

function checkBlueprintValidity(x, y, structureType) {
  if (x < 150 || x > state.worldWidth - 150 || y < 150 || y > state.worldHeight - 150) return false;
  const b = getBiomeAt(x, y);
  if (structureType === 'boat') {
    if (b !== 'ocean') return false;
  } else {
    if (b === 'ocean') return false;
  }
  for (const ent of state.entities) {
    if (['tree', 'rock', 'chest', 'firepit', 'campfire', 'science_machine', 'alchemy_engine', 'crockpot', 'tent', 'flingomatic', 'drying_rack', 'beebox', 'pig_house', 'merm_house', 'auto_harvester', 'vacuum_chest', 'sprinkler', 'mushroom_planter', 'houndius_shootius', 'scaled_furnace'].includes(ent.type)) {
      if (dist(x, y, ent.x, ent.y) < 32) return false;
    }
  }
  return true;
}

function renderBlueprintGhost(ctx) {
  if (!state.blueprint || !state.blueprint.active) return;
  const bp = state.blueprint;
  const p = state.player;
  const cam = state.camera;

  const bx = bp.x - cam.x;
  const by = bp.y - cam.y;
  const px = p.x - cam.x;
  const py = p.y - cam.y;

  ctx.save();

  // Tether guideline
  ctx.strokeStyle = bp.valid ? 'rgba(46, 204, 113, 0.45)' : 'rgba(231, 76, 60, 0.45)';
  ctx.setLineDash([6, 4]);
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(px, py);
  ctx.lineTo(bx, by);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.translate(bx, by);
  ctx.rotate((bp.rotation * Math.PI) / 180);

  // Pulsing circle
  const pulse = Math.sin(Date.now() / 160) * 0.15;
  ctx.fillStyle = bp.valid ? `rgba(46, 204, 113, ${0.25 + pulse})` : `rgba(231, 76, 60, ${0.35 + pulse})`;
  ctx.strokeStyle = bp.valid ? '#2ecc71' : '#e74c3c';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 0, 32, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Pointer arrow
  ctx.fillStyle = bp.valid ? '#2ecc71' : '#e74c3c';
  ctx.beginPath();
  ctx.moveTo(0, -38);
  ctx.lineTo(-9, -24);
  ctx.lineTo(9, -24);
  ctx.closePath();
  ctx.fill();

  ctx.globalAlpha = 0.75 + pulse;
  drawStructurePreview(ctx, bp.structureType);

  ctx.restore();
}

function drawStructurePreview(ctx, type) {
  if (type === 'campfire' || type === 'firepit') {
    ctx.fillStyle = '#795548';
    ctx.fillRect(-12, -4, 24, 8);
    ctx.fillRect(-4, -12, 8, 24);
    ctx.fillStyle = '#ff9800';
    ctx.beginPath(); ctx.arc(0, 0, 8, 0, Math.PI * 2); ctx.fill();
  } else if (type === 'science_machine' || type === 'alchemy_engine') {
    ctx.fillStyle = '#ffd700';
    ctx.beginPath(); ctx.arc(0, -6, 14, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#424242';
    ctx.fillRect(-6, 2, 12, 16);
  } else if (type === 'chest' || type === 'icebox') {
    ctx.fillStyle = type === 'icebox' ? '#80deea' : '#8d6e63';
    ctx.fillRect(-16, -12, 32, 24);
    ctx.strokeStyle = '#3e2723';
    ctx.lineWidth = 2;
    ctx.strokeRect(-16, -12, 32, 24);
  } else if (type === 'crockpot') {
    ctx.fillStyle = '#424242';
    ctx.beginPath(); ctx.arc(0, 0, 16, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#ff7043';
    ctx.beginPath(); ctx.arc(0, 0, 10, 0, Math.PI * 2); ctx.fill();
  } else if (type === 'tent') {
    ctx.fillStyle = '#4e342e';
    ctx.beginPath(); ctx.moveTo(0, -22); ctx.lineTo(-24, 16); ctx.lineTo(24, 16); ctx.closePath(); ctx.fill();
  } else if (type === 'auto_harvester') {
    ctx.fillStyle = '#ffb300';
    ctx.fillRect(-14, -14, 28, 28);
    ctx.fillStyle = '#424242';
    ctx.beginPath(); ctx.arc(0, 0, 8, 0, Math.PI * 2); ctx.fill();
  } else if (type === 'vacuum_chest') {
    ctx.fillStyle = '#5c6bc0';
    ctx.fillRect(-16, -12, 32, 24);
    ctx.fillStyle = '#7e57c2';
    ctx.beginPath(); ctx.arc(0, -2, 6, 0, Math.PI * 2); ctx.fill();
  } else if (type === 'sprinkler') {
    ctx.fillStyle = '#29b6f6';
    ctx.beginPath(); ctx.arc(0, 0, 14, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#0288d1';
    ctx.fillRect(-3, -16, 6, 12);
  } else if (type === 'mushroom_planter') {
    ctx.fillStyle = '#6d4c41';
    ctx.fillRect(-8, -16, 16, 32);
    ctx.fillStyle = '#e53935';
    ctx.beginPath(); ctx.arc(0, -18, 10, 0, Math.PI * 2); ctx.fill();
  } else if (type === 'houndius_shootius') {
    ctx.fillStyle = '#b0bec5';
    ctx.fillRect(-10, -8, 20, 24);
    ctx.fillStyle = '#d32f2f';
    ctx.beginPath(); ctx.arc(0, -18, 12, 0, Math.PI * 2); ctx.fill();
  } else if (type === 'scaled_furnace') {
    ctx.fillStyle = '#b71c1c';
    ctx.beginPath(); ctx.arc(0, 0, 18, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#ff9800';
    ctx.beginPath(); ctx.arc(0, 0, 10, 0, Math.PI * 2); ctx.fill();
  } else {
    ctx.fillStyle = '#4caf50';
    ctx.fillRect(-14, -14, 28, 28);
  }
}

// --- 7. Crock Pot Cooking Engine ---
function openCrockpotUI(ent) {
  state.openedCrockpot = ent;
  const modal = document.getElementById('crockpot-modal');
  modal.classList.remove('hidden');
  updateCrockpotSlots();

  document.getElementById('btn-close-crockpot').onclick = () => {
    modal.classList.add('hidden');
    state.openedCrockpot = null;
  };

  document.getElementById('btn-start-cook').onclick = () => {
    startCrockpotCooking();
  };
}

function updateCrockpotSlots() {
  if (!state.openedCrockpot) return;
  const cp = state.openedCrockpot;
  for (let i = 0; i < 4; i++) {
    const slotEl = document.getElementById(`cp-slot-${i}`);
    const itemId = cp.ingredients[i];
    if (itemId) {
      slotEl.innerText = ITEMS[itemId]?.icon || '❓';
    } else {
      slotEl.innerText = '空';
    }

    slotEl.onclick = () => {
      if (cp.cooking) return;
      // Take item back to inventory if exists
      if (cp.ingredients[i]) {
        addToPlayer(cp.ingredients[i], 1);
        cp.ingredients[i] = null;
        updateCrockpotSlots();
        updateInventoryUI();
      } else {
        // Find first available food in inventory
        for (let j = 0; j < state.player.inventory.length; j++) {
          const s = state.player.inventory[j];
          if (s && ITEMS[s.id]?.food) {
            cp.ingredients[i] = s.id;
            s.count--;
            if (s.count <= 0) state.player.inventory[j] = null;
            updateCrockpotSlots();
            updateInventoryUI();
            audio.playPickup();
            break;
          }
        }
      }
    };
  }
}

function startCrockpotCooking() {
  const cp = state.openedCrockpot;
  if (!cp) return;
  const filled = cp.ingredients.filter(x => x !== null).length;
  if (filled < 4) {
    showToast('烹饪锅必须放满 4 样食材才能开始烹饪！');
    return;
  }

  cp.cooking = true;
  cp.cookTimer = 10; // 10s cooking time
  document.getElementById('cp-progress-bar').classList.remove('hidden');
  document.getElementById('btn-start-cook').classList.add('hidden');
  showToast('开始炖煮！香气四溢...');
}

function resolveCrockpotDish(ingredients) {
  let meat = 0;
  let monster = 0;
  let fruit = 0;
  let veg = 0;
  let egg = 0;
  let sweet = 0;
  let fish = 0;
  let twig = 0;

  ingredients.forEach(id => {
    if (id === 'twig') twig++;
    const d = ITEMS[id]?.food;
    if (!d) return;
    if (d.meatVal) meat += d.meatVal;
    if (d.isMonster) monster++;
    if (d.fruitVal) fruit += d.fruitVal;
    if (d.vegVal) veg += d.vegVal;
    if (d.eggVal) egg += d.eggVal;
    if (d.sweetVal) sweet += d.sweetVal;
    if (d.fishVal) fish += d.fishVal;
  });

  if (state.diary) {
    state.diary.dishesCooked++;
    state.diary.milestones.master_chef = true;
  }

  if (monster >= 2) return 'monster_lasagna';
  if (meat >= 0.5 && egg >= 1.0 && veg >= 0.5) return 'pierogi';
  if (fruit >= 1.0 && meat === 0) return 'dragonpie';
  if (meat >= 1.5 && sweet >= 1.0) return 'honey_ham';
  if (meat >= 1.5 && egg >= 1.5) return 'bacon_eggs';
  if (fish >= 0.5 && twig >= 1) return 'fishsticks';
  if (sweet >= 3.0 && meat === 0) return 'taffy';
  if (meat >= 3.0) return 'meaty_stew';
  if (meat >= 0.5) return 'meatballs';
  return 'meatballs';
}

// --- 8. World Generation & Ecosystem ---
const BIOMES = {
  grasslands: {
    id: 'grasslands',
    name: '翡翠平原花海',
    groundColor: '#26401d',
    turfAccent: '#335626',
    grassSproutColor: '#589e40',
    leafColor: '#72b856',
    pebbleColor: '#455e3b'
  },
  savanna: {
    id: 'savanna',
    name: '稀树草原',
    groundColor: '#3c311c',
    turfAccent: '#504124',
    grassSproutColor: '#bfa154',
    leafColor: '#a88c3a',
    pebbleColor: '#5c4e38'
  },
  forest: {
    id: 'forest',
    name: '常青密林',
    groundColor: '#1c291a',
    turfAccent: '#273a24',
    grassSproutColor: '#4f7d45',
    leafColor: '#965a2d',
    pebbleColor: '#3c4d38'
  },
  deciduous: {
    id: 'deciduous',
    name: '枫红落叶林',
    groundColor: '#3a2316',
    turfAccent: '#4e2f1d',
    grassSproutColor: '#b35d25',
    leafColor: '#c76b2e',
    pebbleColor: '#573a29'
  },
  desert: {
    id: 'desert',
    name: '恶魔荒野沙漠',
    groundColor: '#4c3a1b',
    turfAccent: '#634c23',
    grassSproutColor: '#d6a858',
    leafColor: '#e0b86a',
    pebbleColor: '#785f36'
  },
  rockyland: {
    id: 'rockyland',
    name: '嶙峋岩石岭',
    groundColor: '#2b3136',
    turfAccent: '#3b434a',
    grassSproutColor: '#6c7a82',
    leafColor: '#525a61',
    pebbleColor: '#707f87'
  },
  swamp: {
    id: 'swamp',
    name: '泥泞毒沼泽',
    groundColor: '#211728',
    turfAccent: '#32233c',
    grassSproutColor: '#5c3969',
    leafColor: '#442b54',
    pebbleColor: '#473652'
  },
  mosaic: {
    id: 'mosaic',
    name: '大理石棋盘遗迹',
    groundColor: '#343540',
    turfAccent: '#494a59',
    grassSproutColor: '#75778a',
    leafColor: '#8c8e9e',
    pebbleColor: '#a1a3b3'
  },
  graveyard: {
    id: 'graveyard',
    name: '迷雾幽魂冢',
    groundColor: '#232325',
    turfAccent: '#323236',
    grassSproutColor: '#52575e',
    leafColor: '#3e4147',
    pebbleColor: '#5a6069'
  },
  lunar: {
    id: 'lunar',
    name: '天体启蒙月岛',
    groundColor: '#27383e',
    turfAccent: '#364e57',
    grassSproutColor: '#6fc9db',
    leafColor: '#aee8f5',
    pebbleColor: '#557d8a'
  },
  ocean: {
    id: 'ocean',
    name: '无尽汪洋',
    groundColor: '#0b2031',
    turfAccent: '#14364f',
    grassSproutColor: '#306b94',
    leafColor: '#4ea8d6',
    pebbleColor: '#1b4a6e'
  }
};

function getBiomeAt(x, y) {
  if (state.worldLayer === 'caves') return { id: 'caves', name: '地下深渊洞穴', groundColor: '#120e0d' };

  // Ocean border
  if (x < 120 || y < 120 || x > state.worldWidth - 120 || y > state.worldHeight - 120) {
    return BIOMES.ocean;
  }

  // Lunar Island (3450, 3450)
  if (dist(x, y, 3450, 3450) < 420) return BIOMES.lunar;

  // 1. Central Grasslands & Bee Meadow: center (1900, 1900), radius 550 (Player spawn hub)
  if (dist(x, y, 1900, 1900) < 550) return BIOMES.grasslands;

  // 2. Savanna: center (950, 950), radius 680
  if (dist(x, y, 950, 950) < 680) return BIOMES.savanna;

  // 3. Rockyland: center (950, 2850), radius 680
  if (dist(x, y, 950, 2850) < 680) return BIOMES.rockyland;

  // 4. Swamp: center (2850, 950), radius 680
  if (dist(x, y, 2850, 950) < 680) return BIOMES.swamp;

  // 5. Graveyard & Pig Village: center (2850, 2850), radius 680
  if (dist(x, y, 2850, 2850) < 680) return BIOMES.graveyard;

  // 6. Desert / Badlands: center (1900, 750), radius 520
  if (dist(x, y, 1900, 750) < 520) return BIOMES.desert;

  // 7. Deciduous Forest: center (1900, 3050), radius 520
  if (dist(x, y, 1900, 3050) < 520) return BIOMES.deciduous;

  // 8. Mosaic / Chess Ruins: center (3100, 1900), radius 450
  if (dist(x, y, 3100, 1900) < 450) return BIOMES.mosaic;

  // 9. Evergreen Forest everywhere else!
  return BIOMES.forest;
}

function dropWorldItem(itemId, x, y, count = 1, extra = {}) {
  state.entities.push({
    type: 'drop',
    itemId,
    x, y,
    count,
    radius: 12,
    durability: extra.durability || null,
    freshness: extra.freshness || null,
    heatStored: extra.heatStored || 0
  });
}

function initWorld() {
  state.entities = [];
  const W = state.worldWidth;
  const H = state.worldHeight;

  // --- 1. Central Grasslands & Bee Meadow (翡翠平原花海, center 1900, 1900 - Player Spawn Hub) ---
  const cx = 1900, cy = 1900;
  // Wild Flowers & Dancing Butterflies (65 flowers + 10 butterflies)
  for (let i = 0; i < 65; i++) {
    const fx = cx + (Math.random() - 0.5) * 850;
    const fy = cy + (Math.random() - 0.5) * 850;
    state.entities.push({
      type: 'flower',
      x: fx, y: fy,
      radius: 12
    });
  }
  for (let i = 0; i < 10; i++) {
    state.entities.push({
      type: 'butterfly',
      x: cx + (Math.random() - 0.5) * 600,
      y: cy + (Math.random() - 0.5) * 600,
      flapTick: Math.random() * Math.PI * 2,
      hp: 1, maxHp: 1,
      speed: 35,
      wanderTimer: Math.random() * 2,
      radius: 10
    });
  }

  // Active Beehives & Worker Bees (3 hives + 6 bees)
  for (let i = 0; i < 3; i++) {
    const angle = (i / 3) * Math.PI * 2;
    const bx = cx + Math.cos(angle) * 320;
    const by = cy + Math.sin(angle) * 320;
    state.entities.push({
      type: 'beehive',
      x: bx, y: by,
      hp: 200,
      radius: 26
    });
    for (let b = 0; b < 2; b++) {
      state.entities.push({
        type: 'bee',
        homeX: bx, homeY: by,
        x: bx + (Math.random() - 0.5) * 60,
        y: by + (Math.random() - 0.5) * 60,
        hp: 100, maxHp: 100,
        target: null,
        attackCooldown: 0,
        flapTick: Math.random() * 5,
        radius: 10
      });
    }
  }

  // Killer Beehives & Killer Bees (2 hives at edge + 6 aggressive killer bees)
  for (let i = 0; i < 2; i++) {
    const kx = cx + (i === 0 ? -380 : 380);
    const ky = cy + (i === 0 ? 380 : -380);
    state.entities.push({
      type: 'killer_beehive',
      x: kx, y: ky,
      hp: 250,
      radius: 28
    });
    for (let b = 0; b < 3; b++) {
      state.entities.push({
        type: 'killer_bee',
        homeX: kx, homeY: ky,
        x: kx + (Math.random() - 0.5) * 50,
        y: ky + (Math.random() - 0.5) * 50,
        hp: 100, maxHp: 100,
        target: null,
        attackCooldown: 0,
        flapTick: Math.random() * 5,
        radius: 10
      });
    }
  }

  // Birds pecking on open grass (10 birds: crows & redbirds)
  for (let i = 0; i < 10; i++) {
    state.entities.push({
      type: 'bird',
      birdType: i % 2 === 0 ? 'crow' : 'redbird',
      x: cx + (Math.random() - 0.5) * 800,
      y: cy + (Math.random() - 0.5) * 800,
      hopTick: Math.random() * 2,
      isFlying: false,
      scale: 1.0,
      hp: 25, maxHp: 25,
      radius: 10
    });
  }

  // Berry Bushes, Carrots & Twigs in Grasslands
  for (let i = 0; i < 25; i++) {
    state.entities.push({
      type: 'bush',
      hasBerries: true,
      regrowTimer: 0,
      x: cx + (Math.random() - 0.5) * 750,
      y: cy + (Math.random() - 0.5) * 750,
      radius: 18
    });
  }
  for (let i = 0; i < 25; i++) {
    state.entities.push({
      type: 'planted_carrot',
      x: cx + (Math.random() - 0.5) * 750,
      y: cy + (Math.random() - 0.5) * 750,
      radius: 12
    });
  }
  for (let i = 0; i < 35; i++) {
    state.entities.push({
      type: 'sapling',
      harvestable: true,
      x: cx + (Math.random() - 0.5) * 800,
      y: cy + (Math.random() - 0.5) * 800,
      radius: 14
    });
  }
  for (let i = 0; i < 35; i++) {
    state.entities.push({
      type: 'grass_tuft',
      harvestable: true,
      x: cx + (Math.random() - 0.5) * 800,
      y: cy + (Math.random() - 0.5) * 800,
      radius: 14
    });
  }

  // Chester Eye Bone near player spawn
  dropWorldItem('eyebone', cx + 45, cy - 35, 1);
  state.chester = {
    active: false,
    x: cx + 60,
    y: cy - 30,
    vx: 0, vy: 0,
    hopTick: 0,
    slots: new Array(9).fill(null),
    type: 'normal'
  };

  // Suspicious Dirt Piles (可疑土堆 - 追踪考拉象)
  state.entities.push({
    type: 'dirt_pile',
    huntStep: 1,
    x: cx + 180,
    y: cy + 160,
    radius: 16
  });

  // --- 2. Savanna Biome (稀树草原, center 950, 950) ---
  const sx = 950, sy = 950;
  // Beefalo Herds (14 beefalo with herd dynamics)
  for (let i = 0; i < 14; i++) {
    const bx = sx + (Math.random() - 0.5) * 550;
    const by = sy + (Math.random() - 0.5) * 550;
    state.entities.push({
      type: 'beefalo',
      x: bx, y: by,
      vx: 0, vy: 0,
      hp: 500, maxHp: 500,
      matingSeason: false,
      hasWool: true,
      poopTimer: Math.random() * 80 + 40,
      isSleeping: false,
      retaliateTimer: 0,
      target: null,
      radius: 32
    });
  }
  // Rabbit Holes & wild Rabbits (10 burrows)
  for (let i = 0; i < 10; i++) {
    const rx = sx + (Math.random() - 0.5) * 580;
    const ry = sy + (Math.random() - 0.5) * 580;
    state.entities.push({
      type: 'rabbit_hole',
      x: rx, y: ry,
      radius: 18
    });
    state.entities.push({
      type: 'rabbit',
      x: rx + (Math.random() - 0.5) * 80,
      y: ry + (Math.random() - 0.5) * 80,
      homeX: rx, homeY: ry,
      hp: 25, maxHp: 25,
      inHole: false,
      inHoleTimer: 0,
      speed: 35,
      hopTimer: Math.random() * 2,
      radius: 14
    });
  }
  state.entities.push({
    type: 'dirt_pile',
    huntStep: 1,
    x: sx + 120,
    y: sy - 140,
    radius: 16
  });
  for (let i = 0; i < 50; i++) {
    state.entities.push({
      type: 'grass_tuft',
      harvestable: true,
      x: sx + (Math.random() - 0.5) * 600,
      y: sy + (Math.random() - 0.5) * 600,
      radius: 14
    });
  }

  // --- 3. Rockyland Biome (嶙峋岩石岭, center 950, 2850) ---
  const rx0 = 950, ry0 = 2850;
  for (let i = 0; i < 130; i++) {
    const rx = rx0 + (Math.random() - 0.5) * 620;
    const ry = ry0 + (Math.random() - 0.5) * 620;
    state.entities.push({
      type: 'rock',
      hp: 4, maxHp: 4,
      hasGold: Math.random() < 0.45,
      x: rx, y: ry,
      radius: 22
    });
    if (Math.random() < 0.35) dropWorldItem('flint', rx + 15, ry + 15, 1);
  }
  // Tallbird Nests & fierce Tallbirds (4 nests)
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2;
    const tnx = rx0 + Math.cos(angle) * 260 + (Math.random() - 0.5) * 80;
    const tny = ry0 + Math.sin(angle) * 260 + (Math.random() - 0.5) * 80;
    state.entities.push({
      type: 'tallbird_nest',
      hasEgg: true,
      x: tnx, y: tny,
      radius: 24
    });
    state.entities.push({
      type: 'tallbird',
      nestX: tnx, nestY: tny,
      x: tnx + 25, y: tny + 20,
      hp: 400, maxHp: 400,
      target: null,
      attackCooldown: 0,
      radius: 26
    });
  }

  // --- 4. Swamp Biome (泥泞毒沼泽, center 2850, 950) ---
  const mx0 = 2850, my0 = 950;
  // Lurking Tentacles (8 underground tentacles)
  for (let i = 0; i < 8; i++) {
    const tx = mx0 + (Math.random() - 0.5) * 580;
    const ty = my0 + (Math.random() - 0.5) * 580;
    state.entities.push({
      type: 'tentacle',
      x: tx, y: ty,
      submerged: true,
      activeTimer: 0,
      attackCooldown: 0,
      hp: 300, maxHp: 300,
      radius: 28
    });
  }
  // Ponds with hopping Frogs (4 ponds + 8 frogs)
  for (let i = 0; i < 4; i++) {
    const px = mx0 + (Math.random() - 0.5) * 520;
    const py = my0 + (Math.random() - 0.5) * 520;
    state.entities.push({
      type: 'pond',
      x: px, y: py,
      fishCount: 10,
      radius: 40
    });
    for (let f = 0; f < 2; f++) {
      state.entities.push({
        type: 'frog',
        pondX: px, pondY: py,
        x: px + (Math.random() - 0.5) * 70,
        y: py + (Math.random() - 0.5) * 70,
        hp: 100, maxHp: 100,
        target: null,
        attackCooldown: 0,
        radius: 14
      });
    }
  }
  // Merm Houses & Merms (3 houses + 4 merms)
  for (let i = 0; i < 3; i++) {
    const mhx = mx0 + (Math.random() - 0.5) * 450;
    const mhy = my0 + (Math.random() - 0.5) * 450;
    state.entities.push({
      type: 'merm_house',
      x: mhx, y: mhy,
      radius: 30
    });
    state.entities.push({
      type: 'merm',
      homeX: mhx, homeY: mhy,
      x: mhx + 25, y: mhy + 20,
      hp: 250, maxHp: 250,
      target: null,
      attackCooldown: 0,
      radius: 20
    });
  }

  // --- 5. Graveyard & Pig Village (迷雾幽魂冢, center 2850, 2850) ---
  const pvx = 2850, pvy = 2850;
  state.entities.push({ type: 'pig_king', x: pvx, y: pvy, radius: 45 });
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2;
    const hx = pvx + Math.cos(angle) * 160;
    const hy = pvy + Math.sin(angle) * 160;
    state.entities.push({ type: 'pig_house', x: hx, y: hy, radius: 32 });
    state.entities.push({
      type: 'pig',
      houseX: hx, houseY: hy,
      x: hx + 30, y: hy + 20,
      vx: 0, vy: 0,
      hp: 250, maxHp: 250,
      isWerepig: false,
      isFollower: false,
      followTimer: 0,
      attackCooldown: 0,
      target: null,
      radius: 20
    });
  }
  // Gravestones & Ghosts (8 graves + 2 ghosts)
  for (let i = 0; i < 8; i++) {
    const gx = pvx - 220 + (Math.random() - 0.5) * 320;
    const gy = pvy - 220 + (Math.random() - 0.5) * 320;
    state.entities.push({
      type: 'grave',
      dug: false,
      x: gx, y: gy,
      radius: 20
    });
  }
  for (let i = 0; i < 2; i++) {
    state.entities.push({
      type: 'ghost',
      x: pvx - 180 + (Math.random() - 0.5) * 200,
      y: pvy - 180 + (Math.random() - 0.5) * 200,
      hp: 120, maxHp: 120,
      radius: 18
    });
  }
  for (let i = 0; i < 8; i++) {
    state.entities.push({
      type: 'evil_flower',
      x: pvx - 200 + (Math.random() - 0.5) * 300,
      y: pvy - 200 + (Math.random() - 0.5) * 300,
      radius: 12
    });
  }

  // --- 6. Desert / Badlands Biome (恶魔荒野沙漠, center 1900, 750) ---
  const dx0 = 1900, dy0 = 750;
  // Cacti (12 cacti)
  for (let i = 0; i < 12; i++) {
    state.entities.push({
      type: 'cactus',
      x: dx0 + (Math.random() - 0.5) * 480,
      y: dy0 + (Math.random() - 0.5) * 480,
      harvested: false,
      regrowTimer: 0,
      radius: 18
    });
  }
  // Rolling Tumbleweeds (8 dynamic tumbleweeds)
  for (let i = 0; i < 8; i++) {
    state.entities.push({
      type: 'tumbleweed',
      x: dx0 + (Math.random() - 0.5) * 450,
      y: dy0 + (Math.random() - 0.5) * 450,
      vx: 40 + Math.random() * 25,
      vy: (Math.random() - 0.5) * 20,
      rotation: Math.random() * Math.PI * 2,
      radius: 18
    });
  }
  // Hound Mounds (2 hound mounds)
  for (let i = 0; i < 2; i++) {
    const hmx = dx0 + (i === 0 ? -180 : 180);
    const hmy = dy0 + (i === 0 ? 80 : -80);
    state.entities.push({
      type: 'hound_mound',
      x: hmx, y: hmy,
      hp: 400, maxHp: 400,
      spawnTimer: 15,
      radius: 30
    });
  }
  // Buzzards (3 desert buzzards)
  for (let i = 0; i < 3; i++) {
    state.entities.push({
      type: 'buzzard',
      x: dx0 + (Math.random() - 0.5) * 420,
      y: dy0 + (Math.random() - 0.5) * 420,
      hp: 125, maxHp: 125,
      isPerched: true,
      radius: 18
    });
  }

  // --- 7. Deciduous Forest Biome (枫红落叶林, center 1900, 3050) ---
  const dfx = 1900, dfy = 3050;
  // Birchnut Trees (50 birchnut trees)
  for (let i = 0; i < 50; i++) {
    const size = Math.random() < 0.3 ? 'small' : (Math.random() < 0.7 ? 'medium' : 'large');
    state.entities.push({
      type: 'tree',
      isBirchnut: true,
      size,
      hp: size === 'small' ? 3 : (size === 'medium' ? 5 : 8),
      maxHp: size === 'small' ? 3 : (size === 'medium' ? 5 : 8),
      x: dfx + (Math.random() - 0.5) * 480,
      y: dfy + (Math.random() - 0.5) * 480,
      radius: size === 'small' ? 18 : (size === 'medium' ? 24 : 30)
    });
  }
  // Playful Catcoons (4 catcoons)
  for (let i = 0; i < 4; i++) {
    state.entities.push({
      type: 'catcoon',
      x: dfx + (Math.random() - 0.5) * 400,
      y: dfy + (Math.random() - 0.5) * 400,
      hp: 150, maxHp: 150,
      isFriend: false,
      friendTimer: 0,
      giftTimer: 0,
      tailTick: Math.random() * 5,
      radius: 16
    });
  }
  // Glommer's Ancient Statue (1 glommer statue)
  state.entities.push({
    type: 'glommer_statue',
    x: dfx + 80,
    y: dfy + 80,
    flowerPicked: false,
    radius: 28
  });

  // --- 8. Mosaic / Chess Ruins (大理石棋盘遗迹, center 3100, 1900) ---
  const csx = 3100, csy = 1900;
  // Marble Pillars (8 marble columns)
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    state.entities.push({
      type: 'marble_pillar',
      x: csx + Math.cos(angle) * 200,
      y: csy + Math.sin(angle) * 200,
      hp: 6,
      radius: 20
    });
  }
  // Clockwork Guardians (2 Knights, 2 Bishops, 1 Rook)
  for (let i = 0; i < 2; i++) {
    state.entities.push({
      type: 'clockwork_knight',
      x: csx - 100 + i * 200,
      y: csy - 80,
      hp: 300, maxHp: 300,
      target: null,
      attackCooldown: 0,
      radius: 22
    });
  }
  for (let i = 0; i < 2; i++) {
    state.entities.push({
      type: 'clockwork_bishop',
      x: csx - 80 + i * 160,
      y: csy + 100,
      hp: 250, maxHp: 250,
      chargeTimer: 0,
      target: null,
      radius: 22
    });
  }
  state.entities.push({
    type: 'clockwork_rook',
    x: csx,
    y: csy,
    hp: 450, maxHp: 450,
    isCharging: false,
    chargeVx: 0, chargeVy: 0,
    attackCooldown: 0,
    radius: 30
  });

  // Maxwell's Teleportato Base & Relic Parts
  state.entities.push({
    type: 'teleportato_base',
    x: csx + 140,
    y: csy + 140,
    radius: 40
  });
  dropWorldItem('teleportato_ring', 900, 3100, 1);
  dropWorldItem('teleportato_crank', 3200, 3100, 1);
  dropWorldItem('teleportato_box', 700, 900, 1);
  dropWorldItem('teleportato_potato', 2800, 1700, 1);

  // --- 9. Vast Evergreen Forest Heartland (220 trees + 10 spider dens) ---
  for (let i = 0; i < 220; i++) {
    const x = Math.random() * (W - 140) + 70;
    const y = Math.random() * (H - 140) + 70;
    // Don't spawn inside special open centers
    if (dist(x, y, 950, 2850) < 450 || dist(x, y, 2850, 950) < 450 || dist(x, y, 1900, 750) < 400 || dist(x, y, 3100, 1900) < 350) continue;
    const size = Math.random() < 0.3 ? 'small' : (Math.random() < 0.7 ? 'medium' : 'large');
    state.entities.push({
      type: 'tree',
      size,
      hp: size === 'small' ? 3 : (size === 'medium' ? 5 : 8),
      maxHp: size === 'small' ? 3 : (size === 'medium' ? 5 : 8),
      x, y,
      radius: size === 'small' ? 18 : (size === 'medium' ? 24 : 30)
    });
  }
  // Spider Dens (10 dens, kept outside player spawn)
  for (let i = 0; i < 10; i++) {
    let dx = Math.random() * (W - 500) + 250;
    let dy = Math.random() * (H - 500) + 250;
    while (dist(dx, dy, 1900, 1900) < 550) {
      dx = Math.random() * (W - 500) + 250;
      dy = Math.random() * (H - 500) + 250;
    }
    state.entities.push({
      type: 'spider_den',
      x: dx, y: dy,
      radius: 35,
      hp: 150,
      spawnTimer: 12
    });
  }

  // Plugged Cave Sinkhole
  state.entities.push({
    type: 'cave_entrance',
    x: 1400,
    y: 2200,
    plugged: true,
    radius: 36
  });

  // Celestial Lunar Island (3450, 3450)
  state.entities.push({
    type: 'celestial_altar',
    x: 3450,
    y: 3450,
    radius: 36,
    active: true
  });
  for (let i = 0; i < 8; i++) {
    const mx = 3450 + (Math.random() - 0.5) * 260;
    const my = 3450 + (Math.random() - 0.5) * 260;
    dropWorldItem('moon_rock', mx, my, 2);
    if (Math.random() < 0.6) dropWorldItem('moon_shard', mx + 15, my + 15, 1);
  }

  // Starter resources around player (1900, 1900 in Grasslands)
  dropWorldItem('flint', state.player.x + 30, state.player.y + 20, 3);
  dropWorldItem('twig', state.player.x - 30, state.player.y + 10, 4);
  dropWorldItem('grass', state.player.x + 10, state.player.y - 30, 6);
  dropWorldItem('berry', state.player.x - 20, state.player.y - 20, 3);
  state.player.equipped.hand = { id: 'torch', count: 1, durability: 75 };

  // Character Starting Items
  const charDef = CHARACTERS[state.character];
  if (charDef && charDef.startItem) {
    if (!state.player.inventory.some(s => s && s.id === charDef.startItem)) {
      addToPlayer(charDef.startItem, 1);
    }
  }
}

function initCaveWorld() {
  state.caveEntities = [];
  const CW = 3200, CH = 3200;

  // Cave exit rope back to surface
  state.caveEntities.push({
    type: 'cave_exit',
    x: 1600,
    y: 1600,
    radius: 32
  });

  // 1. Stalagmites (140 rocks)
  for (let i = 0; i < 140; i++) {
    const x = Math.random() * (CW - 140) + 70;
    const y = Math.random() * (CH - 140) + 70;
    state.caveEntities.push({
      type: 'stalagmite',
      x, y,
      hp: 5,
      maxHp: 5,
      radius: 20
    });
  }

  // 2. Light Flowers (荧光草, 80 plants)
  for (let i = 0; i < 80; i++) {
    state.caveEntities.push({
      type: 'light_flower',
      x: Math.random() * (CW - 140) + 70,
      y: Math.random() * (CH - 140) + 70,
      harvestable: true,
      regrowTimer: 0,
      radius: 18
    });
  }

  // 3. Slurtle Mounds & Slurtles (8 mounds)
  for (let i = 0; i < 8; i++) {
    const mx = Math.random() * (CW - 300) + 150;
    const my = Math.random() * (CH - 300) + 150;
    state.caveEntities.push({
      type: 'slurtle_mound',
      x: mx, y: my,
      hp: 300,
      radius: 34
    });
    state.caveEntities.push({
      type: 'slurtle',
      x: mx + 30, y: my + 30,
      vx: 0, vy: 0,
      hp: 180,
      maxHp: 180,
      inShell: false,
      radius: 18
    });
  }

  // 4. Cave Batilisks (20 bats)
  for (let i = 0; i < 20; i++) {
    state.caveEntities.push({
      type: 'batilisk',
      x: Math.random() * (CW - 200) + 100,
      y: Math.random() * (CH - 200) + 100,
      vx: 0, vy: 0,
      hp: 75,
      maxHp: 75,
      radius: 16
    });
  }

  // 5. Ancient Ruins Biome (远古废墟, around 2400, 2400)
  const rx = 2400, ry = 2400;
  state.caveEntities.push({
    type: 'ancient_station',
    x: rx, y: ry,
    radius: 40
  });

  // Thulecite boulders & Clockwork Knights
  for (let i = 0; i < 18; i++) {
    const angle = (i / 18) * Math.PI * 2;
    const dist = 120 + Math.random() * 260;
    state.caveEntities.push({
      type: 'thulecite_rock',
      x: rx + Math.cos(angle) * dist,
      y: ry + Math.sin(angle) * dist,
      hp: 6,
      maxHp: 6,
      radius: 24
    });
  }

  for (let i = 0; i < 4; i++) {
    const kx = rx + (Math.random() - 0.5) * 400;
    const ky = ry + (Math.random() - 0.5) * 400;
    state.caveEntities.push({
      type: 'clockwork_knight',
      x: kx, y: ky,
      vx: 0, vy: 0,
      hp: 350,
      maxHp: 350,
      radius: 24
    });
  }
}

function enterCaves() {
  audio.playMine();
  state.surfaceEntities = state.entities;
  state.surfacePlayerPos = { x: state.player.x, y: state.player.y };
  state.worldLayer = 'caves';

  document.getElementById('cave-vignette').classList.remove('hidden');

  if (!state.caveVisited) {
    initCaveWorld();
    state.caveVisited = true;
    state.entities = state.caveEntities;
    state.player.x = 1600;
    state.player.y = 1640;
  } else {
    state.entities = state.caveEntities;
    state.player.x = state.cavePlayerPos.x;
    state.player.y = state.cavePlayerPos.y;
  }

  if (state.diary) {
    state.diary.cavesExplored++;
    state.diary.milestones.enter_caves = true;
  }

  showToast('🕯️ 顺着粗大绳索深入危机四伏的深邃地下洞穴！');
}

function exitCaves() {
  audio.playCraft();
  state.caveEntities = state.entities;
  state.cavePlayerPos = { x: state.player.x, y: state.player.y };
  state.worldLayer = 'surface';

  document.getElementById('cave-vignette').classList.add('hidden');
  state.entities = state.surfaceEntities;
  state.player.x = state.surfacePlayerPos.x;
  state.player.y = state.surfacePlayerPos.y;

  showToast('🧗‍♂️ 攀上岩壁绳索，重新回到广袤的地表世界！');
}

// --- 9. Player Actions & Interactions ---
function interactNearest() {
  audio.init();
  const p = state.player;

  // Include Chester if nearby
  let interactCandidates = [...state.entities];
  if (state.chester && state.chester.active) {
    interactCandidates.push({
      type: 'chester',
      x: state.chester.x,
      y: state.chester.y,
      radius: 22
    });
  }

  let nearest = null;
  let minEffectiveDist = 85;

  for (const ent of interactCandidates) {
    if (ent.type === 'bush' && !ent.hasBerries) continue;
    if (ent.type === 'sapling' && !ent.harvestable) continue;
    if (ent.type === 'grass_tuft' && !ent.harvestable) continue;
    if (ent.type === 'light_flower' && !ent.harvestable) continue;

    const d = dist(p.x, p.y, ent.x, ent.y);
    if (d < 85) {
      if (['drop', 'tree', 'rock', 'bush', 'sapling', 'grass_tuft', 'flower', 'planted_carrot',
           'campfire', 'firepit', 'science_machine', 'alchemy_engine', 'prestihatitator', 'shadow_manipulator',
           'chest', 'crockpot', 'tent', 'pig_king', 'pig', 'beefalo', 'chester', 'cave_entrance', 'cave_exit',
           'light_flower', 'farmplot', 'stalagmite', 'thulecite_rock', 'pond', 'ancient_station',
           'drying_rack', 'birdcage', 'beebox', 'boat', 'teleportato_base', 'celestial_altar', 'bird_trap',
           'grave', 'tallbird_nest', 'evil_flower', 'tumbleweed', 'cactus', 'dirt_pile', 'catcoon', 'glommer_statue', 'beehive', 'marble_pillar', 'vacuum_chest', 'mushroom_planter', 'dwarf_star'].includes(ent.type)) {
        const effDist = ent.type === 'drop' ? d - 40 : d;
        if (effDist < minEffectiveDist) {
          minEffectiveDist = effDist;
          nearest = ent;
        }
      }
    }
  }

  if (!nearest) return;
  p.actionTick = 10;

  // Deconstruction Staff Spell (Green Gem Staff)
  if (p.equipped.hand && p.equipped.hand.id === 'deconstruction_staff') {
    const deconstructibles = ['campfire', 'firepit', 'science_machine', 'alchemy_engine', 'chest', 'crockpot', 'icebox', 'tent', 'lightning_rod', 'tooth_trap', 'flingomatic', 'drying_rack', 'birdcage', 'beebox', 'auto_harvester', 'vacuum_chest', 'sprinkler', 'mushroom_planter'];
    if (deconstructibles.includes(nearest.type)) {
      audio.playMagic();
      createHitParticles(nearest.x, nearest.y, '#2ecc71');
      // Look up recipe for 100% refund
      const recipeItem = nearest.type + '_item';
      const r = RECIPES.find(rec => rec.id === recipeItem || rec.id === nearest.type);
      if (r && r.req) {
        for (const [mat, cnt] of Object.entries(r.req)) {
          dropWorldItem(mat, nearest.x + (Math.random() - 0.5) * 30, nearest.y + (Math.random() - 0.5) * 30, cnt);
        }
      } else {
        dropWorldItem('boards', nearest.x, nearest.y, 2);
        dropWorldItem('cut_stone', nearest.x + 10, nearest.y, 2);
      }
      state.entities = state.entities.filter(e => e !== nearest);
      p.sanity = Math.max(0, p.sanity - 15);
      p.equipped.hand.durability -= 1;
      if (p.equipped.hand.durability <= 0) {
        p.equipped.hand = null;
        showToast('绿晶分解法杖耗尽神能碎裂！');
      } else {
        showToast(`🪄 绿晶法杖释放解构力场！已将建筑100%返还为原始素材！(-15理智)`);
      }
      updateInventoryUI();
      return;
    }
  }

  if (nearest.type === 'drop') {
    if (addToPlayer(nearest.itemId, nearest.count, { durability: nearest.durability, freshness: nearest.freshness, heatStored: nearest.heatStored })) {
      audio.playPickup();
      if (nearest.itemId === 'eyebone') {
        state.chester.active = true;
        state.chester.x = p.x - 30;
        state.chester.y = p.y - 30;
        if (state.diary) state.diary.milestones.find_chester = true;
        showToast('🦴 拾起了眼骨！伴随着轻快的跳动声，毛茸茸的切斯特跟上了你！');
        audio.playChester();
      } else {
        showToast(`捡起 ${ITEMS[nearest.itemId].name} x${nearest.count}`);
      }
      state.entities = state.entities.filter(e => e !== nearest);
    }
  } else if (nearest.type === 'chester') {
    openChesterUI();
  } else if (nearest.type === 'chest' || nearest.type === 'vacuum_chest') {
    openChestUI(nearest);
  } else if (nearest.type === 'mushroom_planter') {
    if (nearest.ready && nearest.shroom) {
      if (addToPlayer(nearest.shroom, 4)) {
        audio.playPickup();
        showToast(`🍄 丰收！从栽培木桩上采摘了 4 朵【${ITEMS[nearest.shroom]?.name || '蘑菇'}】！`);
        nearest.ready = false;
        nearest.shroom = null;
        nearest.timer = 0;
      }
    } else if (!nearest.shroom) {
      const shroomTypes = ['red_mushroom', 'blue_mushroom', 'green_mushroom'];
      let chosen = null;
      for (const st of shroomTypes) {
        if (countTotalItem(st) > 0) { chosen = st; break; }
      }
      if (chosen) {
        removeTotalItem(chosen, 1);
        nearest.shroom = chosen;
        nearest.timer = 60;
        nearest.ready = false;
        audio.playCraft();
        showToast(`🍄🪵 在木桩上成功接种了【${ITEMS[chosen].name}】菌丝！`);
      } else {
        showToast('木桩空空如也。背包中持有【红/蓝/绿蘑菇】即可接种培育！');
      }
    } else if (nearest.shroom && !nearest.ready) {
      if (countTotalItem('manure') > 0 || countTotalItem('rot') > 0) {
        if (countTotalItem('manure') > 0) removeTotalItem('manure', 1);
        else removeTotalItem('rot', 1);
        nearest.timer = Math.max(0, nearest.timer - 35);
        if (nearest.timer <= 0) nearest.ready = true;
        audio.playCraft();
        showToast('施加有机肥！蘑菇菌丝飞速茁壮成长！');
      } else {
        showToast(`蘑菇正在生长中...剩余 ${Math.ceil(nearest.timer)} 秒 (可施肥加速)`);
      }
    }
  } else if (nearest.type === 'dwarf_star') {
    audio.playMagic();
    p.sanity = Math.min(p.maxSanity, p.sanity + 12);
    if (p.temp < 30) p.temp += 5;
    showToast('✨ 沐浴在矮人恒星的和煦日冕中，精神大振！(+12理智)');
  } else if (nearest.type === 'cave_entrance') {
    if (nearest.plugged) {
      const hasPick = p.equipped.hand && ITEMS[p.equipped.hand.id]?.toolType === 'pickaxe';
      if (hasPick) {
        audio.playMine();
        nearest.plugged = false;
        createHitParticles(nearest.x, nearest.y, '#555');
        showToast('⛏️ 凿碎了落水洞岩塞！幽暗深邃的地下洞穴已洞开！');
      } else {
        showToast('需要手持【鹤嘴锄】凿开坚固的落水洞岩塞！');
      }
    } else {
      enterCaves();
    }
  } else if (nearest.type === 'cave_exit') {
    exitCaves();
  } else if (nearest.type === 'light_flower') {
    if (nearest.harvestable) {
      if (addToPlayer('lightbulb', 1)) {
        nearest.harvestable = false;
        nearest.regrowTimer = 120;
        audio.playPickup();
        showToast('采摘了明亮荧光果！可填装提灯燃料');
      }
    }
  } else if (nearest.type === 'farmplot') {
    if (nearest.crop && nearest.stage >= 2) {
      if (addToPlayer(nearest.crop, 1)) {
        showToast(`🌾 丰收！采摘了新鲜的【${ITEMS[nearest.crop].name}】！`);
        audio.playPickup();
        nearest.crop = null;
        nearest.stage = 0;
        nearest.growTimer = 0;
      }
    } else if (!nearest.crop) {
      if (countTotalItem('seeds') > 0) {
        removeTotalItem('seeds', 1);
        const roll = Math.random();
        nearest.crop = roll < 0.25 ? 'dragonfruit' : (roll < 0.55 ? 'pumpkin' : 'carrot');
        nearest.stage = 0;
        nearest.growTimer = 0;
        audio.playCraft();
        showToast('在平整的农田中播下了种子！');
      } else {
        showToast('手持【种子】即可在改良农田进行播种。');
      }
    } else if (nearest.crop && nearest.stage < 2) {
      if (countTotalItem('manure') > 0) {
        removeTotalItem('manure', 1);
        nearest.stage = 2;
        audio.playCraft();
        showToast('使用牛粪优质堆肥！作物瞬间茁壮成熟！');
      } else if (countTotalItem('rot') > 0) {
        removeTotalItem('rot', 1);
        nearest.growTimer += 45;
        if (nearest.growTimer >= 90) nearest.stage = 2;
        else nearest.stage = 1;
        audio.playCraft();
        showToast('施加了腐烂物有机肥！加速生长！');
      } else {
        showToast('作物正在缓慢成长中，施加牛粪可加速成熟。');
      }
    }
  } else if (nearest.type === 'stalagmite') {
    const hasPick = p.equipped.hand && ITEMS[p.equipped.hand.id]?.toolType === 'pickaxe';
    if (!hasPick) {
      showToast('需要手持【鹤嘴锄】开采洞穴石笋！');
      return;
    }
    audio.playMine();
    nearest.hp--;
    p.equipped.hand.durability -= 1;
    if (p.equipped.hand.durability <= 0) {
      p.equipped.hand = null;
      showToast('鹤嘴锄损坏了！');
    }
    createHitParticles(nearest.x, nearest.y, '#7f8c8d');
    if (nearest.hp <= 0) {
      dropWorldItem('rock', nearest.x, nearest.y, 3);
      dropWorldItem('flint', nearest.x + 10, nearest.y, 2);
      if (Math.random() < 0.4) dropWorldItem('gold', nearest.x - 10, nearest.y, 1);
      if (Math.random() < 0.25) dropWorldItem('blue_gem', nearest.x + 15, nearest.y, 1);
      if (Math.random() < 0.25) dropWorldItem('red_gem', nearest.x - 15, nearest.y, 1);
      state.entities = state.entities.filter(e => e !== nearest);
      showToast('开采洞穴石笋，获得了珍贵矿石与宝石！');
    }
    updateInventoryUI();
  } else if (nearest.type === 'thulecite_rock') {
    const hasPick = p.equipped.hand && ITEMS[p.equipped.hand.id]?.toolType === 'pickaxe';
    if (!hasPick) {
      showToast('需要手持【鹤嘴锄】开采远古铥矿巨石！');
      return;
    }
    audio.playMine();
    nearest.hp--;
    p.equipped.hand.durability -= 1;
    createHitParticles(nearest.x, nearest.y, '#d4af37');
    if (nearest.hp <= 0) {
      dropWorldItem('thulecite', nearest.x, nearest.y, 2);
      dropWorldItem('nightmare_fuel', nearest.x + 15, nearest.y, 1);
      state.entities = state.entities.filter(e => e !== nearest);
      showToast('挖开远古矿脉！获得了失落的【铥矿】与噩梦燃料！');
    }
    updateInventoryUI();
  } else if (nearest.type === 'pond') {
    if (addToPlayer('fish', 1)) {
      audio.playPickup();
      showToast('从池塘中捕获了一条鲜活的大鱼！');
    }
  } else if (nearest.type === 'ancient_station') {
    audio.playMagic();
    showToast('远古伪科学基地：闪烁着失落文明的禁忌暗影灵光！');
  } else if (nearest.type === 'crockpot') {
    openCrockpotUI(nearest);
  } else if (nearest.type === 'pig_king') {
    if (countTotalItem('trinket') > 0) {
      removeTotalItem('trinket', 1);
      dropWorldItem('gold', nearest.x + 20, nearest.y + 20, 5);
      audio.playCraft();
      showToast('猪王对远古小玩意大喜过望！赏赐了 5 块沉甸甸的金块！🪙🪙🪙');
    } else if (countTotalItem('meat') > 0 || countTotalItem('morsel') > 0) {
      if (countTotalItem('meat') > 0) removeTotalItem('meat', 1);
      else removeTotalItem('morsel', 1);
      dropWorldItem('gold', nearest.x + 20, nearest.y + 20, 2);
      audio.playCraft();
      showToast('猪王愉快地赏赐了金块！🪙');
    } else {
      showToast('猪王咕哝着想要肉类或远古小玩意！');
    }
  } else if (nearest.type === 'grave') {
    if (nearest.dug) {
      showToast('墓穴已被挖掘一空。');
      return;
    }
    const hasShovel = p.equipped.hand && ITEMS[p.equipped.hand.id]?.toolType === 'shovel';
    if (!hasShovel) {
      showToast('需要手持【铲子】方可挖掘墓穴！');
      return;
    }
    audio.playMine();
    nearest.dug = true;
    p.equipped.hand.durability -= 1;
    if (p.equipped.hand.durability <= 0) {
      p.equipped.hand = null;
      showToast('铲子损坏了！');
    }
    p.sanity = Math.max(0, p.sanity - 10);
    createHitParticles(nearest.x, nearest.y, '#7f8c8d');

    const roll = Math.random();
    if (roll < 0.45) dropWorldItem('trinket', nearest.x, nearest.y, 1);
    else if (roll < 0.7) dropWorldItem('gold', nearest.x, nearest.y, 1);
    else if (roll < 0.85) dropWorldItem('red_gem', nearest.x, nearest.y, 1);
    else dropWorldItem('blue_gem', nearest.x, nearest.y, 1);

    if (Math.random() < 0.22) {
      state.entities.push({
        type: 'ghost',
        x: nearest.x + 10,
        y: nearest.y + 10,
        hp: 100,
        maxHp: 100,
        radius: 18
      });
      audio.playHoundGrowl();
      showToast('⚠️ 幽魂从掘开的古墓中厉啸升起！受到惊吓！(-10理智)');
    } else {
      showToast('⚰️ 铲开了墓穴，出土了埋藏的文物！(-10理智)');
    }
    updateInventoryUI();
  } else if (nearest.type === 'tallbird_nest') {
    if (nearest.hasEgg) {
      if (addToPlayer('tallbird_egg', 1)) {
        nearest.hasEgg = false;
        audio.playPickup();
        showToast('🥚 盗取了高脚鸟蛋！愤怒的高脚鸟尖锐长啸！');
        for (const tb of state.entities) {
          if (tb.type === 'tallbird' && dist(tb.x, tb.y, nearest.x, nearest.y) < 600) {
            tb.angryEggStolen = true;
          }
        }
      }
    } else {
      showToast('巢穴空空如也，鸟蛋已被取走。');
    }
  } else if (nearest.type === 'evil_flower') {
    if (addToPlayer('evil_flower', 1)) {
      audio.playPickup();
      p.sanity = Math.max(0, p.sanity - 5);
      state.entities = state.entities.filter(e => e !== nearest);
      showToast('采摘了恶魔花瓣 (-5理智)');
    }
  } else if (nearest.type === 'pig') {
    if (countTotalItem('meat') > 0 || countTotalItem('morsel') > 0) {
      if (countTotalItem('meat') > 0) removeTotalItem('meat', 1);
      else removeTotalItem('morsel', 1);
      nearest.isFollower = true;
      nearest.followTimer = 240;
      audio.playEat();
      showToast('猪人吃下了美味的肉，成为了你的忠诚盟友！');
    }
  } else if (nearest.type === 'beefalo') {
    // 1. Grooming with Beefalo Brush
    if (p.equipped.hand && p.equipped.hand.id === 'beefalo_brush') {
      audio.playChop();
      p.equipped.hand.durability -= 1;
      nearest.obedience = Math.min(100, (nearest.obedience || 20) + 30);
      nearest.domestication = Math.min(100, (nearest.domestication || 0) + 15);
      dropWorldItem('beefalo_wool', nearest.x + (Math.random() - 0.5) * 20, nearest.y + (Math.random() - 0.5) * 20, 1);
      createHitParticles(nearest.x, nearest.y, '#e74c3c');
      p.sanity = Math.min(p.maxSanity, p.sanity + 6);
      showToast(`🪮 细心为皮弗娄牛梳理毛发！顺滑光亮！服从度: ${nearest.obedience}%，驯化度: ${nearest.domestication}% (+牛毛)`);
      if (p.equipped.hand.durability <= 0) {
        p.equipped.hand = null;
        showToast('牛毛刷磨损损坏了！');
      }
      updateInventoryUI();
      return;
    }
    // 2. Shearing wool with Razor
    if (p.equipped.hand && p.equipped.hand.id === 'razor') {
      audio.playChop();
      dropWorldItem('beefalo_wool', nearest.x + 10, nearest.y + 10, 3);
      nearest.hasWool = false;
      showToast('✂️ 成功剃下了保暖的皮弗娄牛毛！');
      p.sanity = Math.min(p.maxSanity, p.sanity + 5);
      return;
    }
    // 3. Dismount if currently riding
    if (state.beefaloRiding) {
      dismountBeefalo();
      return;
    }
    // 4. Mount if saddled and obedient
    if (nearest.saddled) {
      if ((nearest.obedience || 0) < 30) {
        audio.playBeefaloGrunt();
        createHitParticles(nearest.x, nearest.y, '#7f8c8d');
        showToast(`🐂 皮弗娄牛服从度过低 (${nearest.obedience || 0}%)！暴躁地甩下了你！请先喂食或用【牛毛刷】梳毛！`);
        return;
      }
      mountBeefalo(nearest);
      return;
    }
    // 5. Feeding Vegetables (Carrot, Dragonfruit, Pumpkin) for Pudgy & High Domestication
    if (countTotalItem('carrot') > 0 || countTotalItem('dragonfruit') > 0 || countTotalItem('pumpkin') > 0) {
      const vegId = countTotalItem('dragonfruit') > 0 ? 'dragonfruit' : (countTotalItem('pumpkin') > 0 ? 'pumpkin' : 'carrot');
      removeTotalItem(vegId, 1);
      nearest.obedience = Math.min(100, (nearest.obedience || 20) + 25);
      nearest.domestication = Math.min(100, (nearest.domestication || 0) + 15);
      nearest.pudgyScore = (nearest.pudgyScore || 0) + 25;
      if (nearest.pudgyScore >= 50) nearest.tendency = 'pudgy';
      audio.playEat();
      createHitParticles(nearest.x, nearest.y, '#2ecc71');
      showToast(`🥕 喂食美味【${ITEMS[vegId].name}】！服从度: ${nearest.obedience}%，驯化度: ${nearest.domestication}% [特化: ${nearest.tendency === 'pudgy' ? '饱腹肥牛' : '养成中'}]`);
      return;
    }
    // 6. Feeding Grass or Twigs
    if (countTotalItem('grass') > 0 || countTotalItem('twig') > 0) {
      if (countTotalItem('grass') > 0) removeTotalItem('grass', 1);
      else removeTotalItem('twig', 1);
      nearest.obedience = Math.min(100, (nearest.obedience || 20) + 12);
      nearest.domestication = Math.min(100, (nearest.domestication || 0) + 8);
      audio.playEat();
      createHitParticles(nearest.x, nearest.y, '#e74c3c');
      if (nearest.domestication >= 40 && !nearest.saddled) {
        if (countTotalItem('saddle') > 0) {
          removeTotalItem('saddle', 1);
          nearest.saddled = true;
          showToast('🏇 成功为温顺的皮弗娄牛套上鞍具！再次靠近即可骑乘！');
          if (state.diary) {
            state.diary.milestones.tame_beefalo = true;
            state.diary.beefaloTamed = (state.diary.beefaloTamed || 0) + 1;
            state.diary.chapters.ch3 = true;
          }
        } else {
          showToast(`🐂 牛牛非常亲近你 (驯化: ${nearest.domestication}%，服从: ${nearest.obedience}%)！手持【简易牛鞍】即可套鞍骑乘！`);
        }
      } else {
        showToast(`🐂 喂食皮弗娄牛！服从度: ${nearest.obedience}%，驯化度: ${nearest.domestication}%`);
      }
    } else {
      audio.playBeefaloGrunt();
      const tendName = nearest.tendency === 'war' ? '战牛' : (nearest.tendency === 'racer' ? '奔跑牛' : (nearest.tendency === 'pudgy' ? '饱腹肥牛' : '野生'));
      showToast(`🐂 皮弗娄牛 [驯化: ${nearest.domestication || 0}%] [服从: ${nearest.obedience || 0}%] [形态: ${tendName}]。可用【牛毛刷】梳毛或喂食！`);
    }
  } else if (nearest.type === 'drying_rack') {
    if (nearest.ready) {
      const dropItem = nearest.meat === 'monstermeat' ? 'monster_jerky' : 'jerky';
      if (addToPlayer(dropItem, 1)) {
        audio.playPickup();
        showToast(`🥩 丰收！收获了营养丰富的【${ITEMS[dropItem].name}】！`);
        nearest.meat = null;
        nearest.timer = 0;
        nearest.ready = false;
      }
    } else if (nearest.meat) {
      showToast(`风干中...剩余 ${Math.ceil(nearest.timer)} 秒`);
    } else {
      if (countTotalItem('meat') > 0) {
        removeTotalItem('meat', 1);
        nearest.meat = 'meat';
        nearest.timer = 35;
        nearest.ready = false;
        audio.playCraft();
        showToast('在晾肉架上悬挂了大肉，开始风干！');
      } else if (countTotalItem('monstermeat') > 0) {
        removeTotalItem('monstermeat', 1);
        nearest.meat = 'monstermeat';
        nearest.timer = 35;
        nearest.ready = false;
        audio.playCraft();
        showToast('在晾肉架上悬挂了怪物肉，开始风干！');
      } else {
        showToast('手持【大肉】或【怪物肉】可悬挂在此风干。');
      }
    }
  } else if (nearest.type === 'birdcage') {
    if (!nearest.hasBird) {
      if (countTotalItem('bird_item') > 0) {
        removeTotalItem('bird_item', 1);
        nearest.hasBird = true;
        audio.playPickup();
        showToast('🦜 成功将捕获的小鸟放入镀金鸟笼驯养！');
      } else {
        showToast('鸟笼空空如也。用捕鸟陷阱抓获小鸟后可关入！');
      }
    } else {
      if (countTotalItem('meat') > 0 || countTotalItem('monstermeat') > 0 || countTotalItem('morsel') > 0) {
        if (countTotalItem('meat') > 0) removeTotalItem('meat', 1);
        else if (countTotalItem('morsel') > 0) removeTotalItem('morsel', 1);
        else removeTotalItem('monstermeat', 1);
        dropWorldItem('egg', nearest.x + 10, nearest.y + 10, 1);
        audio.playCraft();
        showToast('🥚 喂食鸟雀，获得了一枚新鲜鸟蛋！');
      } else if (countTotalItem('dragonfruit') > 0) {
        removeTotalItem('dragonfruit', 1);
        dropWorldItem('dragonfruit_seeds', nearest.x + 10, nearest.y + 10, 2);
        audio.playCraft();
        showToast(`🌱 喂食火龙果，鸟雀啄出了珍贵纯正的【火龙果特异良种】！`);
      } else if (countTotalItem('egg') > 0) {
        removeTotalItem('egg', 1);
        audio.playMagic();
        p.sanity = Math.min(p.maxSanity, p.sanity + 10);
        const fRoll = Math.random();
        const dropF = fRoll < 0.35 ? 'azure_feather' : (fRoll < 0.7 ? 'crimson_feather' : 'jet_feather');
        dropWorldItem(dropF, nearest.x + 10, nearest.y + 10, 1);
        showToast(`🪶 鸟雀欢欣啼鸣(+10理智)，蜕落了一支珍稀的【${ITEMS[dropF].name}】！`);
      } else if (countTotalItem('carrot') > 0 || countTotalItem('pumpkin') > 0) {
        let cropId = countTotalItem('pumpkin') > 0 ? 'pumpkin' : 'carrot';
        removeTotalItem(cropId, 1);
        dropWorldItem('seeds', nearest.x + 10, nearest.y + 10, 2);
        audio.playCraft();
        showToast(`🌱 喂食${ITEMS[cropId].name}，鸟雀啄出了特异良种！`);
      } else {
        showToast('鸟笼中的鸟雀欢快鸣叫。喂肉产蛋，喂果蔬产良种！');
      }
    }
  } else if (nearest.type === 'beebox') {
    if (nearest.honey >= 1) {
      const hCount = Math.floor(nearest.honey);
      if (addToPlayer('honey', hCount)) {
        nearest.honey = 0;
        audio.playPickup();
        showToast(`🍯 采收了 ${hCount} 罐纯正蜂蜜！`);
      }
    } else {
      showToast('工蜂正在附近辛勤采蜜，蜂蜜正在酿造中...');
    }
  } else if (nearest.type === 'boat') {
    state.sailing = !state.sailing;
    audio.playCraft();
    if (state.sailing) {
      showToast('⛵ 登上海船！已进入远洋航行状态，水域畅行无阻！');
      p.speed = 220;
    } else {
      showToast('⚓ 抛锚靠岸！下了船板。');
      p.speed = CHARACTERS[state.character]?.speed || 165;
    }
  } else if (nearest.type === 'teleportato_base') {
    openTeleportatoUI();
  } else if (nearest.type === 'celestial_altar') {
    audio.playMagic();
    p.sanity = p.maxSanity;
    showToast('🌙 天体祭坛的启蒙光辉洗涤了灵魂！理智值完全回满！');
  } else if (nearest.type === 'bird_trap') {
    if (nearest.caught) {
      if (addToPlayer('bird_item', 1)) {
        audio.playPickup();
        showToast('🐦 捕捉到了一只活蹦乱跳的小鸟！');
        nearest.caught = false;
        nearest.baited = false;
      }
    } else if (!nearest.baited) {
      if (countTotalItem('seeds') > 0) {
        removeTotalItem('seeds', 1);
        nearest.baited = true;
        nearest.catchTimer = 15;
        audio.playCraft();
        showToast('在捕鸟陷阱中撒入了诱饵种子！');
      } else {
        showToast('捕鸟陷阱未放置诱饵，撒入【种子】即可开始捕鸟。');
      }
    }
  } else if (nearest.type === 'tent') {
    const { isDusk, isNight } = getDayPhases();
    if (isDusk || isNight) {
      p.hp = Math.min(p.maxHp, p.hp + 50);
      p.sanity = Math.min(p.maxSanity, p.sanity + 60);
      p.hunger = Math.max(0, p.hunger - 40);
      state.timeInDay = 0;
      state.day++;
      audio.playCraft();
      showToast('你在舒适的帐篷中度过了漫漫黑夜，精神饱满地醒来！');
    } else {
      showToast('只有在黄昏或黑夜才能进入帐篷睡觉。');
    }
  } else if (nearest.type === 'planted_carrot') {
    if (addToPlayer('carrot', 1)) {
      audio.playPickup();
      state.entities = state.entities.filter(e => e !== nearest);
      showToast('拔出了野生胡萝卜！');
    }
  } else if (nearest.type === 'flower') {
    if (addToPlayer('flower', 1)) {
      audio.playPickup();
      p.sanity = Math.min(p.maxSanity, p.sanity + 5);
      state.entities = state.entities.filter(e => e !== nearest);
      showToast('采摘野花 (+5理智)');
    }
  } else if (nearest.type === 'sapling') {
    if (nearest.harvestable && addToPlayer('twig', 1)) {
      audio.playPickup();
      nearest.harvestable = false;
      showToast('采集树枝');
    }
  } else if (nearest.type === 'grass_tuft') {
    if (nearest.harvestable && addToPlayer('grass', 1)) {
      audio.playPickup();
      nearest.harvestable = false;
      showToast('采集干草');
    }
  } else if (nearest.type === 'bush') {
    if (nearest.hasBerries && addToPlayer('berry', 1)) {
      audio.playPickup();
      nearest.hasBerries = false;
      nearest.regrowTimer = 180;
      showToast('采摘浆果');
    }
  } else if (nearest.type === 'tree') {
    const hasAxe = p.equipped.hand && ITEMS[p.equipped.hand.id]?.toolType === 'axe';
    if (!hasAxe) {
      showToast('需要手持【草柄斧】砍伐树木！');
      return;
    }
    audio.playChop();
    nearest.hp--;
    p.equipped.hand.durability -= 1;
    if (p.equipped.hand.durability <= 0) {
      p.equipped.hand = null;
      showToast('斧头损坏了！');
    }
    createHitParticles(nearest.x, nearest.y, '#8b5a2b');

    if (nearest.size === 'large' && Math.random() < 0.08 && !state.entities.some(e => e.type === 'treeguard')) {
      state.entities.push({
        type: 'treeguard',
        x: nearest.x, y: nearest.y,
        hp: 800,
        maxHp: 800,
        radius: 36
      });
      showToast('轰隆隆！古老的树人守卫【雷夫】苏醒了！');
      audio.playThunder();
    }

    if (nearest.hp <= 0) {
      const logs = nearest.size === 'small' ? 2 : (nearest.size === 'medium' ? 3 : 5);
      dropWorldItem('log', nearest.x, nearest.y, logs);
      dropWorldItem('pinecone', nearest.x + 12, nearest.y, 1);
      state.entities = state.entities.filter(e => e !== nearest);
      showToast('伐倒了一棵树！');
    }
    updateInventoryUI();
  } else if (nearest.type === 'rock') {
    const hasPick = p.equipped.hand && ITEMS[p.equipped.hand.id]?.toolType === 'pickaxe';
    if (!hasPick) {
      showToast('需要手持【鹤嘴锄】开采巨石！');
      return;
    }
    audio.playMine();
    nearest.hp--;
    p.equipped.hand.durability -= 1;
    if (p.equipped.hand.durability <= 0) {
      p.equipped.hand = null;
      showToast('鹤嘴锄损坏了！');
    }
    createHitParticles(nearest.x, nearest.y, '#7f8c8d');
    if (nearest.hp <= 0) {
      dropWorldItem('rock', nearest.x, nearest.y, 3);
      dropWorldItem('flint', nearest.x + 15, nearest.y, 2);
      if (nearest.hasGold) dropWorldItem('gold', nearest.x - 15, nearest.y, 1);
      state.entities = state.entities.filter(e => e !== nearest);
    }
    updateInventoryUI();
  } else if (nearest.type === 'campfire' || nearest.type === 'firepit') {
    if (countTotalItem('log') > 0) {
      removeTotalItem('log', 1);
      nearest.fuel = Math.min(nearest.maxFuel, nearest.fuel + 50);
      showToast('添柴加火！');
      audio.playCraft();
    } else if (countTotalItem('grass') > 0) {
      removeTotalItem('grass', 1);
      nearest.fuel = Math.min(nearest.maxFuel, nearest.fuel + 15);
      showToast('添加干草引燃！');
      audio.playCraft();
    } else {
      showToast('行囊中没有原木或干草补充燃料。');
    }
  } else if (nearest.type === 'tumbleweed') {
    audio.playCraft();
    state.entities = state.entities.filter(e => e !== nearest);
    const pool = ['twig', 'grass', 'seeds', 'flint', 'gears', 'trinket', 'jet_feather', 'crimson_feather', 'blue_gem'];
    const drop1 = pool[Math.floor(Math.random() * pool.length)];
    const drop2 = pool[Math.floor(Math.random() * pool.length)];
    dropWorldItem(drop1, nearest.x + 10, nearest.y, 1);
    dropWorldItem(drop2, nearest.x - 10, nearest.y, 1);
    if (Math.random() < 0.35) dropWorldItem('gears', nearest.x, nearest.y + 10, 1);
    showToast('🌪️ 捕获了疾驰的风滚草！草团崩解，爆出了惊喜宝物！');
  } else if (nearest.type === 'cactus') {
    if (nearest.harvested) {
      showToast('仙人掌已被采摘，等待重新萌发生长。');
      return;
    }
    audio.playPickup();
    nearest.harvested = true;
    nearest.regrowTimer = 160;
    dropWorldItem('cactus_flesh', nearest.x, nearest.y, 1);
    const hasArmor = p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense;
    if (!hasArmor) {
      audio.playHit();
      p.hp -= 6;
      showToast('🌵 采摘了仙人掌！但尖刺扎破了未着护甲的手臂！(-6 HP)');
    } else {
      showToast('🌵 穿戴护甲采摘了仙人掌！获得了多汁的【仙人掌肉】！');
    }
  } else if (nearest.type === 'dirt_pile') {
    audio.playMine();
    nearest.huntStep = (nearest.huntStep || 1);
    nearest.type = 'footprint';
    const angle = Math.random() * Math.PI * 2;
    nearest.dirAngle = angle;
    if (nearest.huntStep < 4) {
      const nextX = nearest.x + Math.cos(angle) * 220;
      const nextY = nearest.y + Math.sin(angle) * 220;
      state.entities.push({
        type: 'dirt_pile',
        x: Math.max(200, Math.min(state.worldWidth - 200, nextX)),
        y: Math.max(200, Math.min(state.worldHeight - 200, nextY)),
        huntStep: nearest.huntStep + 1,
        radius: 16
      });
      showToast(`🐾 拂开泥土发现了新鲜动物蹄印！正往前方逃去！（追踪进度: ${nearest.huntStep}/4）`);
    } else {
      const kx = nearest.x + Math.cos(angle) * 240;
      const ky = nearest.y + Math.sin(angle) * 240;
      state.entities.push({
        type: 'koalefant',
        x: Math.max(200, Math.min(state.worldWidth - 200, kx)),
        y: Math.max(200, Math.min(state.worldHeight - 200, ky)),
        hp: 600, maxHp: 600,
        attackCooldown: 0,
        target: null,
        radius: 36
      });
      audio.playHoundGrowl();
      showToast('🐘 雄壮的象鸣声！顺着足迹，终于发现了庞然巨兽【考拉象】！');
    }
  } else if (nearest.type === 'catcoon') {
    if (countTotalItem('twig') > 0 || countTotalItem('morsel') > 0 || countTotalItem('fish') > 0) {
      if (countTotalItem('twig') > 0) removeTotalItem('twig', 1);
      else if (countTotalItem('fish') > 0) removeTotalItem('fish', 1);
      else removeTotalItem('morsel', 1);
      nearest.isFriend = true;
      nearest.friendTimer = 180;
      nearest.giftTimer = 40;
      audio.playCraft();
      showToast('🐱 投喂了可爱的浣猫！浣猫发出咕噜咕噜声，成为了你的忠诚玩伴！');
    } else {
      showToast('🐱 浣猫好奇地望着你，似乎想要小树枝、鱼或小肉块！');
    }
  } else if (nearest.type === 'glommer_statue') {
    const isFullMoon = state.isFullMoon || (state.day % 16 === 9 || state.day % 16 === 10);
    if (isFullMoon && !nearest.flowerPicked) {
      nearest.flowerPicked = true;
      dropWorldItem('glommer_flower', nearest.x, nearest.y + 25, 1);
      state.entities.push({
        type: 'glommer',
        x: nearest.x + 30,
        y: nearest.y + 20,
        hp: 100, maxHp: 100,
        radius: 20
      });
      audio.playMagic();
      showToast('🌺 满月清辉洒落！格罗姆雕像盛开了奇花，格罗姆降生了！');
    } else {
      showToast('格罗姆远古石雕：在满月之夜似乎会绽放神圣奇迹。');
    }
  } else if (nearest.type === 'beehive') {
    audio.playPickup();
    dropWorldItem('honey', nearest.x + 15, nearest.y, 2);
    for (const ent of state.entities) {
      if (ent.type === 'bee' && dist(ent.x, ent.y, nearest.x, nearest.y) < 220) {
        ent.target = p;
      }
    }
    showToast('🍯 采集了天然野生蜂巢！获得了甜美的蜂蜜！工蜂愤怒地警戒反击！');
  } else if (nearest.type === 'marble_pillar') {
    const hasPick = p.equipped.hand && ITEMS[p.equipped.hand.id]?.toolType === 'pickaxe';
    if (!hasPick) {
      showToast('需要手持【鹤嘴锄】方可开采大理石柱！');
      return;
    }
    audio.playMine();
    nearest.hp--;
    p.equipped.hand.durability -= 1;
    if (p.equipped.hand.durability <= 0) {
      p.equipped.hand = null;
      showToast('鹤嘴锄损坏了！');
    }
    createHitParticles(nearest.x, nearest.y, '#b0bec5');
    if (nearest.hp <= 0) {
      dropWorldItem('cut_stone', nearest.x, nearest.y, 2);
      dropWorldItem('rock', nearest.x + 15, nearest.y, 2);
      state.entities = state.entities.filter(e => e !== nearest);
      showToast('开采了大理石柱，获得坚固石料！');
    }
    updateInventoryUI();
  }
}

function attackNearest() {
  audio.init();
  const p = state.player;

  // 1. Attack Cooldown Guard (cannot spam faster than animation cooldown)
  if (p.attackCooldown > 0) return;

  const handItem = p.equipped.hand ? ITEMS[p.equipped.hand.id] : null;
  const isRangedStaff = handItem?.isStaff;
  const attackRange = isRangedStaff ? 260 : 85;

  const hostileTypes = [
    'spider', 'spider_warrior', 'spider_queen', 'hound', 'ice_hound', 'fire_hound', 'hound_mound',
    'varg', 'treeguard', 'ancient_guardian', 'deerclops', 'bearger', 'moosegoose', 'dragonfly',
    'shadow_creature', 'crawling_horror', 'terrorbeak',
    'rabbit', 'batilisk', 'slurtle', 'clockwork_knight', 'clockwork_bishop', 'clockwork_rook',
    'beefalo', 'pig', 'tallbird', 'tentacle', 'frog', 'ghost',
    'butterfly', 'gobbler', 'bee', 'killer_bee', 'bird', 'catcoon', 'glommer', 'koalefant', 'merm'
  ];

  // 2. Candidate Target Acquisition
  let nearest = null;
  let minDist = attackRange;

  for (const ent of state.entities) {
    if (hostileTypes.includes(ent.type)) {
      const d = dist(p.x, p.y, ent.x, ent.y);
      if (d < minDist) {
        minDist = d;
        nearest = ent;
      }
    }
  }

  // 3. Authentic Don't Starve Facing & Directional Attack Commitment:
  // Wilson halts movement during weapon swing (cannot run and attack simultaneously!)
  const wasWalking = p.walking || (Math.abs(p.vx || 0) > 10 || Math.abs(p.vy || 0) > 10);
  p.attackCooldown = 0.52;
  p.attackLockTimer = 0.36;
  p.vx = 0;
  p.vy = 0;
  p.walking = false;
  p.actionTick = 16;

  // Current facing angle of player prior to swing
  const currentFacing = p.facingAngle !== undefined ? p.facingAngle : (p.facing === 'left' ? Math.PI : 0);

  // If player was actively moving/running away, swing in the movement direction (cannot strike backwards!)
  // If player was standing idle, player locks onto target angle
  let swingAngle = currentFacing;
  let canHitTarget = false;

  if (nearest) {
    const angleToTarget = Math.atan2(nearest.y - p.y, nearest.x - p.x);
    let diff = Math.abs(angleToTarget - currentFacing);
    while (diff > Math.PI) diff = Math.abs(diff - Math.PI * 2);

    if (wasWalking) {
      // Running attack: strictly limited to frontal cone (+/- 55° = 0.96 rad)
      // Monsters pursuing behind will NOT be hit!
      canHitTarget = diff <= 0.96;
      swingAngle = currentFacing;
    } else {
      // Standing idle attack: player faces target and swings
      p.facingAngle = angleToTarget;
      p.facing = Math.cos(angleToTarget) >= 0 ? 'right' : 'left';
      swingAngle = angleToTarget;
      canHitTarget = true;
    }
  }

  // Dynamic Crescent Weapon Slash Effect
  let slashColor = '#ffffff';
  if (handItem?.id === 'darksword') slashColor = '#9c27b0';
  else if (handItem?.id === 'bat_bat') slashColor = '#e91e63';
  else if (handItem?.isStaff === 'fire') slashColor = '#ff5722';
  else if (handItem?.isStaff === 'ice') slashColor = '#00e5ff';
  else if (handItem?.id === 'spear' || handItem?.id === 'tentacle_spike') slashColor = '#eceff1';

  p.slashEffect = {
    angle: swingAngle,
    timer: 0.24,
    maxTimer: 0.24,
    color: slashColor,
    reach: attackRange
  };

  // Whiff / Miss if no target in range or angle
  if (!nearest || !canHitTarget) {
    audio.playHit();
    if (wasWalking && nearest) {
      showToast('⚠️ 背向奔跑中挥空！必须停下转身正对怪物！');
    }
    return;
  }

  // Pan Flute check
  if (handItem && handItem.id === 'pan_flute') {
    audio.playMagic();
    p.equipped.hand.durability -= 1;
    for (const ent of state.entities) {
      if (hostileTypes.includes(ent.type) && dist(p.x, p.y, ent.x, ent.y) < 320) {
        ent.frozenTimer = 8;
      }
    }
    showToast('🪈 吹奏了天籁排箫！附近所有狂暴敌人陷入了沉睡！');
    if (p.equipped.hand.durability <= 0) p.equipped.hand = null;
    updateInventoryUI();
    return;
  }

  // Weather Pain (Tornado spell weapon)
  if (handItem?.id === 'weather_pain') {
    audio.playThunder();
    p.sanity = Math.max(0, p.sanity - 2);
    p.equipped.hand.durability -= 1;
    const tAngle = swingAngle;
    state.entities.push({
      type: 'tornado',
      x: p.x + Math.cos(tAngle) * 35,
      y: p.y + Math.sin(tAngle) * 35,
      vx: Math.cos(tAngle) * 140,
      vy: Math.sin(tAngle) * 140,
      radius: 34,
      duration: 5.5,
      timer: 0,
      spin: 0
    });
    showToast('🌪️ 天气之痛引爆苍穹！释放出狂暴撕裂旋风！');
    if (p.equipped.hand.durability <= 0) p.equipped.hand = null;
    updateInventoryUI();
    return;
  }

  // Fire / Ice Staff
  if (isRangedStaff === 'fire') {
    audio.playMagic();
    p.sanity = Math.max(0, p.sanity - 2);
    p.equipped.hand.durability -= 1;
    nearest.burning = 5;
    nearest.hp -= 35;
    createHitParticles(nearest.x, nearest.y, '#ff4500');
    showToast('🪄 施放烈焰法球！目标陷入熊熊烈火！');
    if (p.equipped.hand.durability <= 0) p.equipped.hand = null;
    updateInventoryUI();
  } else if (isRangedStaff === 'ice') {
    audio.playMagic();
    p.sanity = Math.max(0, p.sanity - 1);
    p.equipped.hand.durability -= 1;
    nearest.frozenTimer = 4.0;
    nearest.hp -= 15;
    createHitParticles(nearest.x, nearest.y, '#00e5ff');
    showToast('🪄 施放极寒飞弹！目标已被冰封冻结！');
    if (p.equipped.hand.durability <= 0) p.equipped.hand = null;
    updateInventoryUI();
  } else {
    audio.playHit();
    let dmg = 10;
    if (handItem?.weaponDamage) {
      dmg += handItem.weaponDamage;
      if (p.equipped.hand.durability) {
        p.equipped.hand.durability -= 1;
        if (p.equipped.hand.durability <= 0) {
          p.equipped.hand = null;
          showToast('手持武器破碎了！');
        }
      }
      if (handItem.sanityDrainOnHit) {
        p.sanity = Math.max(0, p.sanity - handItem.sanityDrainOnHit);
      }
      if (handItem.lifesteal) {
        p.hp = Math.min(p.maxHp, p.hp + handItem.lifesteal);
        showToast(`🦇 蝙蝠棒嗜血吸收 +${handItem.lifesteal} 生命！`);
      }
      updateInventoryUI();
    }

    // Survivor Character Traits Damage Scaling
    if (state.character === 'wolfgang') {
      if (p.hunger >= 220) {
        dmg *= 2.0;
        showToast('💪 大力士神力爆发！双倍重击！');
      } else if (p.hunger < 100) {
        dmg *= 0.75;
      }
    } else if (state.character === 'wendy') {
      dmg *= 0.75;
    } else if (state.character === 'wigfrid') {
      dmg *= 1.25;
      p.hp = Math.min(p.maxHp, p.hp + 2.5);
      p.sanity = Math.min(p.maxSanity, p.sanity + 2.5);
    }

    // Beefalo Mounted Trample
    if (state.beefaloRiding) {
      dmg += 40;
      audio.playBeefaloGrunt();
      showToast('🐂 驾驭皮弗娄牛狂暴践踏！');
    }

    nearest.hp -= dmg;
    createHitParticles(nearest.x, nearest.y, '#e74c3c');

    // Retaliation & Aggro hooks for all Neutral/Passive Mobs
    if (nearest.type === 'bee' || nearest.type === 'killer_bee') {
      nearest.target = p;
      nearest.aggroTimer = 30;
      audio.playHit();
      for (const b of state.entities) {
        if ((b.type === 'bee' || b.type === 'killer_bee') && dist(b.x, b.y, nearest.x, nearest.y) < 320) {
          b.target = p;
          b.aggroTimer = 30;
          createHitParticles(b.x, b.y, '#ffd54f');
        }
      }
      showToast('🐝 蜜蜂受创狂怒示警！半径320px蜂群全员出动，发起群体毒刺复仇！');
    } else if (nearest.type === 'pig') {
      nearest.isFollower = false;
      nearest.target = p;
      nearest.aggroTimer = 25;
      audio.playHit();
      for (const pg of state.entities) {
        if (pg.type === 'pig' && !pg.isWerepig && dist(pg.x, pg.y, nearest.x, nearest.y) < 280) {
          pg.target = p;
          pg.aggroTimer = 25;
          pg.isFollower = false;
          createHitParticles(pg.x, pg.y, '#f48fb1');
        }
      }
      showToast('🐷 猪人遭受攻击愤怒哼叫！激起整个猪人族群武装群殴反击！');
    } else if (nearest.type === 'beefalo') {
      nearest.obedience = Math.max(0, (nearest.obedience || 0) - 30);
      nearest.domestication = Math.max(0, (nearest.domestication || 0) - 15);
      for (const b of state.entities) {
        if (b.type === 'beefalo' && dist(b.x, b.y, nearest.x, nearest.y) < 360) {
          b.alertHerdTimer = 20;
          b.target = p;
        }
      }
      showToast('🐂 皮弗娄牛群愤怒长啸！激发牛群群体践踏复仇！');
    } else if (nearest.type === 'frog') {
      nearest.aggro = true;
      nearest.target = p;
      for (const f of state.entities) {
        if (f.type === 'frog' && dist(f.x, f.y, nearest.x, nearest.y) < 220) {
          f.aggro = true;
          f.target = p;
        }
      }
      showToast('🐸 青蛙愤怒鼓腮！蛙群蜂拥弹跳反击！');
    } else if (nearest.type === 'catcoon') {
      nearest.target = p;
      nearest.aggroTimer = 20;
      nearest.isFriend = false;
      showToast('🐱 浣熊猫受惊弓背哈气！伸出锋利爪刃猛烈反击！');
    } else if (nearest.type === 'koalefant') {
      nearest.target = p;
      nearest.aggroTimer = 30;
      showToast('🐘 考拉象发出暴怒长鸣！停止奔逃回身用巨鼻横扫猛击！');
    } else if (nearest.type === 'tallbird') {
      nearest.angryEggStolen = true;
      nearest.target = p;
      showToast('🦤 高脚鸟尖锐嘶鸣，锁定目标疯狂啄击！');
    } else if (nearest.type === 'tentacle') {
      nearest.submerged = false;
      nearest.idleTimer = 0;
      nearest.target = p;
    } else if (nearest.type === 'merm') {
      nearest.target = p;
      nearest.aggroTimer = 30;
      for (const m of state.entities) {
        if (m.type === 'merm' && dist(m.x, m.y, nearest.x, nearest.y) < 280) {
          m.target = p;
          m.aggroTimer = 30;
          createHitParticles(m.x, m.y, '#4db6ac');
        }
      }
      showToast('🐟 沼泽鱼人受袭怒吼！附近所有鱼人手持木叉群起反击！');
    } else if (nearest.type === 'buzzard') {
      nearest.target = p;
      nearest.aggroTimer = 20;
      showToast('🦅 沙漠秃鹰受惊俯冲利喙猛啄反击！');
    } else if (nearest.type === 'slurtle') {
      nearest.hidingTimer = 5.0;
      nearest.target = p;
      for (const sl of state.entities) {
        if (sl.type === 'slurtle' && dist(sl.x, sl.y, nearest.x, nearest.y) < 260) {
          sl.target = p;
        }
      }
      showToast('🐌 蛞蝓龟缩入坚硬重壳抵御反击！');
    }

    // Shadow Horrors teleport on hit!
    if (nearest.type === 'crawling_horror' || nearest.type === 'terrorbeak') {
      const escapeAngle = Math.random() * Math.PI * 2;
      const escapeDist = 120 + Math.random() * 80;
      nearest.x = Math.max(80, Math.min(state.worldWidth - 80, nearest.x + Math.cos(escapeAngle) * escapeDist));
      nearest.y = Math.max(80, Math.min(state.worldHeight - 80, nearest.y + Math.sin(escapeAngle) * escapeDist));
      createHitParticles(nearest.x, nearest.y, '#311b92');
      createHitParticles(nearest.x, nearest.y, '#7b1fa2');
    }

    // Spider Army Support (from Spiderhat)
    if (p.equipped.head && p.equipped.head.id === 'spiderhat') {
      for (const sp of state.entities) {
        if ((sp.type === 'spider' || sp.type === 'spider_warrior') && dist(sp.x, sp.y, p.x, p.y) < 320) {
          sp.target = nearest;
        }
      }
    }
  }

  // Death and Drops
  if (nearest.hp <= 0) {
    audio.playCraft();
    createHitParticles(nearest.x, nearest.y, '#ff0055');

    if (nearest.type === 'treeguard') {
      dropWorldItem('living_log', nearest.x, nearest.y, 5);
      dropWorldItem('meat', nearest.x + 15, nearest.y, 2);
      showToast('🌲 诛灭了古老的【树人守卫】！获得了珍稀活木与大肉！');
    } else if (nearest.type === 'spider_queen') {
      dropWorldItem('spiderhat', nearest.x, nearest.y, 1);
      dropWorldItem('spidereggsack', nearest.x + 15, nearest.y, 1);
      dropWorldItem('silk', nearest.x - 15, nearest.y, 4);
      dropWorldItem('gland', nearest.x + 10, nearest.y, 2);
      dropWorldItem('monster_meat', nearest.x, nearest.y + 15, 4);
      showToast('👑 斩杀了深渊【蜘蛛女王】！荣获蜘蛛王冠、蜘蛛卵与丰厚蛛丝！');
    } else if (nearest.type === 'varg') {
      dropWorldItem('monster_meat', nearest.x, nearest.y, 6);
      dropWorldItem('hound_tooth', nearest.x + 15, nearest.y, 4);
      dropWorldItem('red_gem', nearest.x - 15, nearest.y, 1);
      dropWorldItem('blue_gem', nearest.x, nearest.y - 15, 1);
      dropWorldItem('purple_gem', nearest.x + 20, nearest.y, 1);
      showToast('🐺 击毙了恶魔荒原狼领袖【座狼】！爆出璀璨宝石与凶齿！');
    } else if (nearest.type === 'ancient_guardian') {
      dropWorldItem('guardian_horn', nearest.x, nearest.y, 1);
      dropWorldItem('thulecite', nearest.x + 20, nearest.y, 4);
      dropWorldItem('purple_gem', nearest.x - 15, nearest.y, 2);
      dropWorldItem('yellow_gem', nearest.x + 10, nearest.y - 15, 1);
      dropWorldItem('orange_gem', nearest.x - 10, nearest.y - 15, 1);
      dropWorldItem('green_gem', nearest.x + 25, nearest.y + 10, 1);
      dropWorldItem('meat', nearest.x, nearest.y + 15, 4);
    } else if (nearest.type === 'werepig') {
      dropWorldItem('meat', nearest.x, nearest.y, 2);
      dropWorldItem('pig_skin', nearest.x + 15, nearest.y, 1);
      showToast('🦏 击溃了远古迷宫【远古犀牛守护者】！获得太古角杯与铥矿！');
    } else if (nearest.type === 'spider') {
      dropWorldItem('silk', nearest.x, nearest.y, 1);
      dropWorldItem('gland', nearest.x + 10, nearest.y, 1);
      dropWorldItem('monster_meat', nearest.x - 10, nearest.y, 1);
      showToast('消灭了蜘蛛！获得蛛丝与蜘蛛腺体！');
    } else if (nearest.type === 'hound' || nearest.type === 'ice_hound' || nearest.type === 'fire_hound') {
      dropWorldItem('hound_tooth', nearest.x, nearest.y, 1);
      dropWorldItem('monster_meat', nearest.x + 10, nearest.y, 1);
      if (nearest.type === 'ice_hound') dropWorldItem('blue_gem', nearest.x - 10, nearest.y, 1);
      if (nearest.type === 'fire_hound') dropWorldItem('red_gem', nearest.x - 10, nearest.y, 1);
      showToast('击毙了荒野恶犬！收获犬牙与战利品！');
    } else if (nearest.type === 'pig') {
      dropWorldItem('meat', nearest.x, nearest.y, 1);
      dropWorldItem('pigskin', nearest.x + 10, nearest.y, 1);
      showToast('诛杀了猪人，获得大肉与坚韧猪皮！');
    } else if (nearest.type === 'beefalo') {
      dropWorldItem('meat', nearest.x, nearest.y, 4);
      dropWorldItem('beefalo_wool', nearest.x + 15, nearest.y, 3);
      dropWorldItem('horn', nearest.x - 15, nearest.y, 1);
      showToast('猎杀了皮弗娄牛！获得牛角与大量牛肉牛毛！');
    } else if (nearest.type === 'tallbird') {
      dropWorldItem('meat', nearest.x, nearest.y, 2);
      showToast('击毙了高脚鸟！获得鲜美大肉！');
    } else if (nearest.type === 'tentacle') {
      dropWorldItem('tentacle_spots', nearest.x, nearest.y, 1);
      if (Math.random() < 0.5) dropWorldItem('tentacle_spike', nearest.x + 10, nearest.y, 1);
      showToast('斩断了沼泽触手！掉落触手尖刺与皮斑！');
    } else if (nearest.type === 'frog') {
      dropWorldItem('frog_legs', nearest.x, nearest.y, 1);
      showToast('消灭了池塘青蛙！获得鲜嫩蛙腿！');
    } else if (nearest.type === 'ghost') {
      dropWorldItem('nightmare_fuel', nearest.x, nearest.y, 1);
      showToast('净化了墓地幽灵！获得噩梦燃料！');
    } else if (nearest.type === 'deerclops') {
      dropWorldItem('deerclops_eye', nearest.x, nearest.y, 1);
      dropWorldItem('meat', nearest.x + 20, nearest.y, 8);
      if (state.diary) {
        state.diary.bossesDefeated++;
        state.diary.milestones.slay_deerclops = true;
        state.diary.chapters.ch4 = true;
        if (state.diary.bossesDefeated >= 4) state.diary.milestones.four_seasons = true;
      }
      showToast('★ 诛灭了冬季霸主【独眼巨鹿】！荣获无价巨鹿眼球！');
    } else if (nearest.type === 'bearger') {
      dropWorldItem('bearger_fur', nearest.x, nearest.y, 2);
      dropWorldItem('meat', nearest.x + 20, nearest.y, 8);
      if (state.diary) {
        state.diary.bossesDefeated++;
        state.diary.milestones.slay_bearger = true;
        state.diary.chapters.ch4 = true;
        if (state.diary.bossesDefeated >= 4) state.diary.milestones.four_seasons = true;
      }
      showToast('★ 诛灭了秋季霸主【熊獾】！荣获厚熊皮与大量大肉！');
    } else if (nearest.type === 'moosegoose') {
      dropWorldItem('down_feather', nearest.x, nearest.y, 4);
      dropWorldItem('meat', nearest.x, nearest.y + 10, 6);
      dropWorldItem('morsel', nearest.x + 15, nearest.y, 2);
      if (state.diary) {
        state.diary.bossesDefeated++;
        state.diary.chapters.ch4 = true;
        if (state.diary.bossesDefeated >= 4) state.diary.milestones.four_seasons = true;
      }
      showToast('★ 诛灭了春季霸主【驼鹿鹅】！荣获鸭羽绒与丰富肉食！');
    } else if (nearest.type === 'dragonfly') {
      dropWorldItem('dragon_scales', nearest.x, nearest.y, 2);
      dropWorldItem('meat', nearest.x + 20, nearest.y, 8);
      dropWorldItem('red_gem', nearest.x - 15, nearest.y, 2);
      if (state.diary) {
        state.diary.bossesDefeated++;
        state.diary.milestones.slay_dragonfly = true;
        state.diary.chapters.ch4 = true;
        if (state.diary.bossesDefeated >= 4) state.diary.milestones.four_seasons = true;
      }
      showToast('★ 诛灭了夏季霸主【龙蝇】！荣获无价龙鳞与红宝石！');
    } else if (nearest.type === 'klaus') {
      dropWorldItem('krampus_sack', nearest.x, nearest.y, 1);
      dropWorldItem('charcoal', nearest.x + 20, nearest.y, 4);
      dropWorldItem('monster_meat', nearest.x - 20, nearest.y, 4);
      dropWorldItem('red_gem', nearest.x + 15, nearest.y + 15, 2);
      dropWorldItem('blue_gem', nearest.x - 15, nearest.y - 15, 2);
      if (state.diary) state.diary.milestones.slay_klaus = true;
      showToast('🏆 诛灭了冬季远古凶神【克劳斯】！缴获传奇【坎普斯背包】与远古双色秘宝！');
    } else if (nearest.type === 'buzzard') {
      dropWorldItem('morsel', nearest.x, nearest.y, 1);
      dropWorldItem('jet_feather', nearest.x + 10, nearest.y, 2);
      showToast('🦅 猎获了沙漠秃鹰！');
    } else if (nearest.type === 'crawling_horror' || nearest.type === 'terrorbeak' || nearest.type === 'shadow_creature') {
      dropWorldItem('nightmare_fuel', nearest.x, nearest.y, 1);
      p.sanity = Math.min(p.maxSanity, p.sanity + 30);
      showToast('驱散了暗影巨兽！理智抚平 +30，获得噩梦燃料！');
    } else if (nearest.type === 'clockwork_knight') {
      dropWorldItem('purple_gem', nearest.x, nearest.y, 1);
      dropWorldItem('thulecite', nearest.x + 15, nearest.y, 1);
      showToast('击溃了远古发条骑士！收获紫宝石与铥矿！');
    } else if (nearest.type === 'batilisk') {
      dropWorldItem('gland', nearest.x, nearest.y, 1);
      dropWorldItem('monster_meat', nearest.x + 10, nearest.y, 1);
      showToast('击落了洞穴蝙蝠！');
    } else if (nearest.type === 'slurtle') {
      dropWorldItem('slurtle_slime', nearest.x, nearest.y, 2);
      showToast('击碎了蛞蝓龟外壳，获得了蛞蝓龟黏液！');
    } else if (nearest.type === 'butterfly') {
      if (Math.random() < 0.03) {
        dropWorldItem('butter', nearest.x, nearest.y, 1);
        showToast('🧈 捕捉蝴蝶爆出了稀世珍馐【黄油】！(+40 HP!)');
      } else {
        dropWorldItem('butterfly_wings', nearest.x, nearest.y, 1);
        showToast('捕捉了轻盈蝴蝶，获得【蝴蝶翅膀】！');
      }
    } else if (nearest.type === 'gobbler') {
      dropWorldItem('morsel', nearest.x, nearest.y, 2);
      showToast('诛杀了贪吃的火鸡！获得 2 块鲜美小肉！🍗');
    } else if (nearest.type === 'bee' || nearest.type === 'killer_bee') {
      dropWorldItem('stinger', nearest.x, nearest.y, 1);
      if (Math.random() < 0.5) dropWorldItem('honey', nearest.x + 10, nearest.y, 1);
      showToast('消灭了毒蜂，获得蜂刺与蜂蜜！');
    } else if (nearest.type === 'bird') {
      dropWorldItem('morsel', nearest.x, nearest.y, 1);
      const feather = nearest.birdType === 'crow' ? 'jet_feather' : (state.season === 'winter' ? 'azure_feather' : 'crimson_feather');
      dropWorldItem(feather, nearest.x + 10, nearest.y, 1);
      showToast(`捕获了飞鸟，获得生小肉与【${ITEMS[feather]?.name || '羽毛'}】！`);
    } else if (nearest.type === 'catcoon') {
      dropWorldItem('meat', nearest.x, nearest.y, 1);
      showToast('击败了林中浣猫，获得生大肉！');
    } else if (nearest.type === 'glommer') {
      dropWorldItem('glommer_fuel', nearest.x, nearest.y, 2);
      dropWorldItem('meat', nearest.x + 10, nearest.y, 1);
      showToast('格罗姆陨落了，获得了高能格罗姆黏液！');
    } else if (nearest.type === 'koalefant') {
      dropWorldItem('meat', nearest.x, nearest.y, 8);
      dropWorldItem('trunk', nearest.x + 15, nearest.y, 1);
      showToast('💥 轰然倒地！成功猎杀庞然巨兽【考拉象】！荣获 8 块大肉与【考拉象鼻】！🐘');
    } else if (nearest.type === 'clockwork_bishop') {
      dropWorldItem('gears', nearest.x, nearest.y, 1);
      dropWorldItem('purple_gem', nearest.x + 10, nearest.y, 1);
      showToast('摧毁了发条主教！获得珍贵【齿轮】与紫宝石！⚙️💎');
    } else if (nearest.type === 'clockwork_rook') {
      dropWorldItem('gears', nearest.x, nearest.y, 2);
      dropWorldItem('cut_stone', nearest.x + 15, nearest.y, 2);
      showToast('击碎了狂暴发条战车！获得 2 枚【齿轮】与大理石条！⚙️⚙️');
    } else if (nearest.type === 'merm') {
      dropWorldItem('fish', nearest.x, nearest.y, 1);
      dropWorldItem('frog_legs', nearest.x + 10, nearest.y, 1);
      showToast('击败了沼泽鱼人，获得鲜鱼与蛙腿！🐟');
    } else if (nearest.type === 'hound_mound') {
      dropWorldItem('hound_tooth', nearest.x, nearest.y, 4);
      dropWorldItem('rock', nearest.x + 15, nearest.y, 3);
      showToast('彻底铲除了荒野恶犬之丘！获得大量恶犬之牙！');
    } else if (nearest.type === 'spider_warrior') {
      dropWorldItem('silk', nearest.x, nearest.y, 2);
      dropWorldItem('gland', nearest.x + 10, nearest.y, 1);
      dropWorldItem('monster_meat', nearest.x - 10, nearest.y, 1);
      showToast('消灭了凶猛的蜘蛛战士！获得蛛丝与治疗腺体！');
    }
    state.entities = state.entities.filter(e => e !== nearest);
  }
}

function createHitParticles(x, y, color) {
  for (let i = 0; i < 9; i++) {
    state.particles.push({
      x, y,
      vx: (Math.random() - 0.5) * 140,
      vy: (Math.random() - 0.5) * 140,
      life: 0.35,
      maxLife: 0.35,
      color,
      size: Math.random() * 4 + 2
    });
  }
}

// --- 10. Main Simulation Loop & Updates ---
let lastTime = performance.now();

function gameLoop(now) {
  if (document.hidden) {
    // Phone screen is off, locked, or browser tab is hidden
    // Pause execution to guarantee total silence, zero vibration, and zero battery drain while sleeping
    lastTime = now;
    requestAnimationFrame(gameLoop);
    return;
  }

  const dt = Math.min(0.1, (now - lastTime) / 1000);
  lastTime = now;

  const isModalOpen = !document.getElementById('save-load-modal')?.classList.contains('hidden') ||
                      !document.getElementById('menu-modal')?.classList.contains('hidden') ||
                      !document.getElementById('diary-modal')?.classList.contains('hidden') ||
                      !document.getElementById('map-modal')?.classList.contains('hidden') ||
                      !document.getElementById('crafting-drawer')?.classList.contains('hidden') ||
                      !document.getElementById('crockpot-modal')?.classList.contains('hidden') ||
                      !document.getElementById('chest-modal')?.classList.contains('hidden') ||
                      !document.getElementById('chester-modal')?.classList.contains('hidden') ||
                      !document.getElementById('teleportato-modal')?.classList.contains('hidden') ||
                      !document.getElementById('item-popover')?.classList.contains('hidden');

  if (state.started && !state.gameOver && !isModalOpen) {
    update(dt);
  }

  render();
  requestAnimationFrame(gameLoop);
}

function update(dt) {
  const p = state.player;

  // 1. Day/Night & Clock Progression (Dynamic Seasonal Cycles)
  const { isDay, isDusk, isNight, split } = getDayPhases();
  state.timeInDay = (state.timeInDay + dt) % split.totalSec;
  state.dayLength = split.totalSec;

  if (state.timeInDay < dt) {
    state.day++;
    state.seasonDay++;
    if (state.diary) {
      state.diary.daysSurvived = Math.max(state.diary.daysSurvived, state.day);
      state.diary.milestones.survive_night = true;
      if (state.day >= 30) state.diary.milestones.eternal_lord = true;
    }
    autoSave();

    // Advance season every 15 days
    if (state.seasonDay > state.seasonLength) {
      state.seasonDay = 1;
      const seasons = ['autumn', 'winter', 'spring', 'summer'];
      const nextIdx = (seasons.indexOf(state.season) + 1) % 4;
      state.season = seasons[nextIdx];
      // Reset bosses for new cycle
      state.deerclopsSpawned = false;
      state.beargerSpawned = false;
      state.mooseGooseSpawned = false;
      state.dragonflySpawned = false;
      state.klausSpawned = false;
      showToast(`季节更迭！进入了【${getSeasonName(state.season)}】`);
    }
    showToast(`黎明降临！存活进入第 ${state.day} 天`);
  }

  // 2. Weather & Temperature Engine
  updateWeatherAndTemp(dt, isNight);

  // Spring Thunderstorm & Dynamic Lightning Strikes
  if (state.season === 'spring' && state.worldLayer === 'surface') {
    state.lightningTimer = (state.lightningTimer || 25) - dt;
    if (state.lightningTimer <= 0) {
      state.lightningTimer = Math.random() * 25 + 20;
      audio.playThunder();
      state.screenFlash = 0.22;

      const nearbyTrees = state.entities.filter(e => e.type === 'tree' && dist(e.x, e.y, p.x, p.y) < 360);
      if (nearbyTrees.length > 0) {
        const struckTree = nearbyTrees[Math.floor(Math.random() * nearbyTrees.length)];
        createHitParticles(struckTree.x, struckTree.y, '#ffffff');
        createHitParticles(struckTree.x, struckTree.y, '#ff5722');
        dropWorldItem('charcoal', struckTree.x, struckTree.y, 2);
        state.entities = state.entities.filter(e => e !== struckTree);
        showToast('⚡ 惊雷闪电劈中大树！大树化作焦黑木炭！');
      } else {
        createHitParticles(p.x + (Math.random() - 0.5) * 80, p.y + (Math.random() - 0.5) * 80, '#ffffff');
        showToast('⚡ 狂暴春雷在近旁炸响！');
      }
    }
  }

  // 3. Tech Prototyping detection
  checkPrototypingTier();

  // 4. Hunger & Vital depletion
  p.hunger = Math.max(0, p.hunger - dt * 0.42);
  if (p.hunger <= 0) {
    p.hp = Math.max(0, p.hp - dt * 3.5); // Starving!
  }

  // Magic Amulets Perks (Equipped in amulet or body slot)
  const activeAmulet = (p.equipped.amulet && ITEMS[p.equipped.amulet.id]) ? p.equipped.amulet :
                       ((p.equipped.body && ITEMS[p.equipped.body.id]?.equipSlot === 'amulet') ? p.equipped.body : null);
  if (activeAmulet) {
    if (activeAmulet.id === 'life_amulet') {
      if (p.hp < p.maxHp) {
        p.hp = Math.min(p.maxHp, p.hp + dt * 1.2);
        activeAmulet.durability -= dt * 0.15;
        if (activeAmulet.durability <= 0) {
          if (p.equipped.amulet === activeAmulet) p.equipped.amulet = null;
          else p.equipped.body = null;
          showToast('生命护符能量耗尽碎裂了...');
          updateInventoryUI();
        }
      }
    } else if (activeAmulet.id === 'magiluminescence') {
      inLight = true;
      p.speed = (CHARACTERS[state.character]?.speed || 165) * 1.2;
      p.sanity = Math.min(p.maxSanity, p.sanity + dt * 0.35);
      activeAmulet.durability -= dt * 0.2;
      if (activeAmulet.durability <= 0) {
        if (p.equipped.amulet === activeAmulet) p.equipped.amulet = null;
        else p.equipped.body = null;
        showToast('魔光护符灵力枯竭消散了...');
        updateInventoryUI();
      }
    } else if (activeAmulet.id === 'the_lazy_forager') {
      for (const drop of state.entities) {
        if (drop.type === 'drop' && dist(p.x, p.y, drop.x, drop.y) < 150) {
          if (addToPlayer(drop.itemId, drop.count, { durability: drop.durability, freshness: drop.freshness, heatStored: drop.heatStored })) {
            audio.playPickup();
            createHitParticles(drop.x, drop.y, '#ffa726');
            state.entities = state.entities.filter(e => e !== drop);
            activeAmulet.durability -= 1;
            if (activeAmulet.durability <= 0) {
              if (p.equipped.amulet === activeAmulet) p.equipped.amulet = null;
              else p.equipped.body = null;
              showToast('懒人搜集护符碎裂了！');
            }
            updateInventoryUI();
            break;
          }
        }
      }
    } else if (activeAmulet.id === 'chilled_amulet') {
      if (p.temp > 25) p.temp = Math.max(25, p.temp - dt * 6);
      p.sanity = Math.min(p.maxSanity, p.sanity + dt * 0.2);
      activeAmulet.durability -= dt * 0.15;
      if (activeAmulet.durability <= 0) {
        if (p.equipped.amulet === activeAmulet) p.equipped.amulet = null;
        else p.equipped.body = null;
        showToast('极寒护符融化消散了...');
        updateInventoryUI();
      }
    } else if (activeAmulet.id === 'nightmare_amulet') {
      p.sanity = Math.max(0, p.sanity - dt * 2.5);
      activeAmulet.durability -= dt * 0.2;
      if (activeAmulet.durability <= 0) {
        if (p.equipped.amulet === activeAmulet) p.equipped.amulet = null;
        else p.equipped.body = null;
        showToast('梦魇护符暗影碎裂！');
        updateInventoryUI();
      }
    }
  }

  // Eyebrella: 100% waterproof and lightning immunity
  if (p.equipped.head && p.equipped.head.id === 'eyebrella') {
    p.wetness = 0;
  }

  // Head Equipment perks
  if (p.equipped.head && ITEMS[p.equipped.head.id]?.sanityRegen) {
    p.sanity = Math.min(p.maxSanity, p.sanity + ITEMS[p.equipped.head.id].sanityRegen * dt);
    p.equipped.head.durability -= dt * 0.5;
    if (p.equipped.head.durability <= 0) {
      p.equipped.head = null;
      showToast('头饰损毁凋零了...');
      updateInventoryUI();
    }
  }

  // Sanity drain in dusk & night & caves
  if (state.worldLayer === 'caves') {
    p.sanity = Math.max(0, p.sanity - dt * 0.25);
  }
  if (isDusk) p.sanity = Math.max(0, p.sanity - dt * 0.3);
  if (isNight) p.sanity = Math.max(0, p.sanity - dt * 0.85);
  if (p.wetness > 30) {
    p.sanity = Math.max(0, p.sanity - dt * (p.wetness / 60));
  }

  // 5. Comprehensive Light check around player
  const isFullMoon = (state.day % 16 === 9 || state.day % 16 === 10) && isNight && state.worldLayer === 'surface';
  let inLight = (isDay || isFullMoon) && state.worldLayer === 'surface';
  if (isFullMoon && !state.fullMoonToastShown) {
    state.fullMoonToastShown = true;
    showToast('🌕 满月升起！皎洁蓝月驱散了查理的阴影，但野性正在苏醒！');
  } else if (!isFullMoon && !isNight) {
    state.fullMoonToastShown = false;
  }

  // Check player hand torch / lantern
  if (p.equipped.hand && ITEMS[p.equipped.hand.id]?.isLight) {
    inLight = true;
    p.equipped.hand.durability -= dt * 1.0;
    if (p.equipped.hand.durability <= 0) {
      p.equipped.hand = null;
      showToast('随身火源熄灭了！');
      updateInventoryUI();
    }
  }

  // Check Magiluminescence amulet
  const playerAmulet = (p.equipped.amulet && ITEMS[p.equipped.amulet.id]) ? p.equipped.amulet :
                       ((p.equipped.body && ITEMS[p.equipped.body.id]?.equipSlot === 'amulet') ? p.equipped.body : null);
  if (playerAmulet && playerAmulet.id === 'magiluminescence') {
    inLight = true;
  }

  // World light sources (Campfire, Scaled Furnace, Dwarf Star, Cave Light Flower, Burning Entity)
  for (const ent of state.entities) {
    const dEnt = dist(p.x, p.y, ent.x, ent.y);
    if ((ent.type === 'campfire' || ent.type === 'firepit') && ent.fuel > 0) {
      ent.fuel -= dt;
      if (dEnt < 220) {
        inLight = true;
        if (isNight) p.sanity = Math.min(p.maxSanity, p.sanity + dt * 0.6);
        warmThermalStones(dt);
      }
    } else if (ent.type === 'solar_lantern' && dEnt < 185) {
      inLight = true;
      if (isNight) p.sanity = Math.min(p.maxSanity, p.sanity + dt * 0.4);
    } else if (ent.type === 'scaled_furnace' && dEnt < 220) {
      inLight = true;
      if (p.temp < 32) p.temp += dt * 2.5;
      p.sanity = Math.min(p.maxSanity, p.sanity + dt * 0.4);
    } else if (ent.type === 'dwarf_star' && dEnt < 240) {
      inLight = true;
      p.sanity = Math.min(p.maxSanity, p.sanity + dt * 0.8);
      if (p.temp < 30) p.temp += dt * 2.0;
    } else if (ent.type === 'light_flower' && ent.harvestable && dEnt < 120) {
      inLight = true;
    } else if (ent.burning && ent.burning > 0 && dEnt < 140) {
      inLight = true;
    }
  }

  // 6. Charlie Night Terror (ZERO vibration, silent screen edge flash)
  const charlieVig = document.getElementById('charlie-vignette');
  if ((isNight || state.worldLayer === 'caves') && !inLight) {
    p.inDarknessTimer += dt;
    p.whisperTimer += dt;
    if (p.whisperTimer > 1.2) {
      audio.playHoundGrowl();
      p.whisperTimer = 0;
    }
    if (charlieVig) charlieVig.classList.remove('hidden');

    if (p.inDarknessTimer > 3.5) {
      audio.playCharlieAttack();
      // NO navigator.vibrate! Hardware remains totally silent!

      let dmg = 35;
      if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
        dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
        p.equipped.body.durability -= 18;
        if (p.equipped.body.durability <= 0) {
          p.equipped.body = null;
          showToast('护甲破裂毁坏！');
          updateInventoryUI();
        }
      }
      p.hp -= dmg;
      showToast('【查理】从虚无黑暗深处挥爪袭击了你！');
      p.inDarknessTimer = 1.0;
    }
  } else {
    p.inDarknessTimer = 0;
    if (charlieVig) charlieVig.classList.add('hidden');
  }

  // 7. Sanity Insanity & Materialized Shadow Horrors
  const insanityOverlay = document.getElementById('insanity-overlay');
  if (p.sanity < 35) {
    insanityOverlay.classList.remove('hidden');
    if (Math.random() < dt * 0.09 && !state.entities.some(e => e.type === 'crawling_horror' || e.type === 'terrorbeak')) {
      const isTerrorbeak = Math.random() < 0.4;
      state.entities.push({
        type: isTerrorbeak ? 'terrorbeak' : 'crawling_horror',
        x: p.x + (Math.random() - 0.5) * 380,
        y: p.y + (Math.random() - 0.5) * 380,
        hp: isTerrorbeak ? 350 : 250,
        maxHp: isTerrorbeak ? 350 : 250,
        speed: isTerrorbeak ? 135 : 95,
        radius: isTerrorbeak ? 28 : 22
      });
      showToast(`噩梦实体化！【${isTerrorbeak ? '巨喙梦魇' : '爬行梦魇'}】从阴影中具现！`);
    }
  } else if (p.sanity < 60) {
    insanityOverlay.classList.remove('hidden');
  } else {
    insanityOverlay.classList.add('hidden');
  }

  // 8. Hound Attack Waves (Difficulty scaled)
  const minHoundDay = state.difficulty === 'easy' ? 15 : (state.difficulty === 'hard' ? 5 : 8);
  if (state.day >= minHoundDay) {
    state.houndTimer -= dt;
    if (state.houndTimer < 20 && !state.houndWarning) {
      state.houndWarning = true;
      document.getElementById('hound-warning').classList.remove('hidden');
      audio.playHoundGrowl();
      showToast('⚠️ 远方荒野传来了令人不安的野狗狂吠声...');
    }
    if (state.houndTimer <= 0) {
      document.getElementById('hound-warning').classList.add('hidden');
      state.houndWarning = false;
      const waveInterval = state.difficulty === 'easy' ? 900 : (state.difficulty === 'hard' ? 320 : 560);
      state.houndTimer = waveInterval;
      spawnHoundWave();
    }
  } else {
    state.houndTimer = Math.max(state.houndTimer, 120);
  }

  // 9. Seasonal Bosses Spawning (Surface Only)
  if (state.worldLayer === 'surface') {
    // Autumn: Bearger
    if (state.season === 'autumn' && state.seasonDay >= 10 && !state.beargerSpawned) {
      state.beargerSpawned = true;
      state.entities.push({
        type: 'bearger',
        x: p.x + 350, y: p.y + 350,
        hp: 1500, maxHp: 1500,
        speed: 65, radius: 48,
        attackCooldown: 0
      });
      audio.playBossRoar();
      showToast('林地剧烈震颤！秋季贪食巨兽【熊獾】降临！');
    }
    // Winter: Deerclops
    if (state.season === 'winter' && state.seasonDay >= 10 && !state.deerclopsSpawned) {
      state.deerclopsSpawned = true;
      state.entities.push({
        type: 'deerclops',
        x: p.x + 350, y: p.y + 350,
        hp: 1600, maxHp: 1600,
        speed: 60, radius: 48,
        attackCooldown: 0
      });
      audio.playThunder();
      showToast('暴风雪呼啸！冬季严寒霸主【独眼巨鹿】降临！');
    }
    // Winter: Klaus & Gem Deer (冬季神话Boss)
    if (state.season === 'winter' && state.seasonDay >= 8 && !state.klausSpawned) {
      state.klausSpawned = true;
      state.entities.push({
        type: 'klaus',
        x: p.x + 380, y: p.y + 300,
        hp: 2000, maxHp: 2000,
        speed: 70, radius: 46,
        attackCooldown: 0
      });
      state.entities.push({
        type: 'gem_deer',
        deerType: 'red',
        x: p.x + 420, y: p.y + 280,
        hp: 400, maxHp: 400,
        speed: 80, radius: 26,
        spellCooldown: 4
      });
      state.entities.push({
        type: 'gem_deer',
        deerType: 'blue',
        x: p.x + 360, y: p.y + 340,
        hp: 400, maxHp: 400,
        speed: 80, radius: 26,
        spellCooldown: 4
      });
      audio.playBossRoar();
      showToast('❄️ 沉重锁链与铜铃震响！冬季神话霸主【克劳斯】携红蓝双鹿降临！');
    }
    // Spring: Moose/Goose
    if (state.season === 'spring' && state.seasonDay >= 8 && !state.mooseGooseSpawned) {
      state.mooseGooseSpawned = true;
      state.entities.push({
        type: 'moosegoose',
        x: p.x + 350, y: p.y + 350,
        hp: 1400, maxHp: 1400,
        speed: 85, radius: 45,
        attackCooldown: 0
      });
      audio.playThunder();
      showToast('怪异长鸣刺破雨幕！春季狂暴【鹿角鸭】筑巢降临！');
    }
    // Summer: Dragonfly
    if (state.season === 'summer' && state.seasonDay >= 8 && !state.dragonflySpawned) {
      state.dragonflySpawned = true;
      state.entities.push({
        type: 'dragonfly',
        x: p.x + 350, y: p.y + 350,
        hp: 1800, maxHp: 1800,
        speed: 95, radius: 46,
        attackCooldown: 0
      });
      audio.playBossRoar();
      showToast('炽热岩浆沸腾！夏季霸主【龙蝇】携漫天火雨降临！');
    }
  }

  // 10. Food Spoilage Progression
  updateFoodFreshness(dt);

  // 11. Crock Pot Cooking Timers
  updateCrockpots(dt);

  // 12. Base Automation & Facilities Timers (Farm, Flingomatic, Drying Rack, Bee Box, Bird Trap)
  for (const ent of state.entities) {
    if (ent.type === 'light_flower' && !ent.harvestable) {
      ent.regrowTimer -= dt;
      if (ent.regrowTimer <= 0) ent.harvestable = true;
    } else if (ent.type === 'farmplot' && ent.crop && ent.stage < 2) {
      let speedMult = 1.0;
      if (state.weather === 'rain' || ent.watered) speedMult += 0.5;
      if (ent.fertilized) speedMult += 0.5;
      ent.growTimer += dt * speedMult;
      if (ent.growTimer >= 90) {
        ent.stage = 2;
        if (ent.watered && ent.fertilized && Math.random() < 0.4) {
          ent.isGiant = true;
          showToast(`🌱✨ 悉心照料培育出了稀世【巨型${ITEMS[ent.crop]?.name || '作物'}】！`);
        }
      } else if (ent.growTimer >= 45) {
        ent.stage = 1;
      }
    } else if (ent.type === 'auto_feeder') {
      ent.timer = (ent.timer || 0) + dt;
      if (ent.timer >= 10) {
        ent.timer = 0;
        let fedSomeone = false;
        for (const animal of state.entities) {
          if (animal.type === 'beefalo' && dist(ent.x, ent.y, animal.x, animal.y) <= (ent.range || 220)) {
            animal.domestication = Math.min(100, (animal.domestication || 0) + 3);
            animal.obedience = Math.min(100, (animal.obedience || 0) + 15);
            animal.hunger = 100;
            createHitParticles(animal.x, animal.y, '#81c784');
            fedSomeone = true;
          } else if (animal.type === 'pig' && !animal.isWerepig && dist(ent.x, ent.y, animal.x, animal.y) <= (ent.range || 220)) {
            animal.isFollower = true;
            animal.followTimer = Math.max(animal.followTimer || 0, 80);
            createHitParticles(animal.x, animal.y, '#f48fb1');
            fedSomeone = true;
          }
        }
        if (fedSomeone) {
          audio.playEat();
          showToast('🌾 饲料槽自动投喂了周围的牲畜与随从！');
        }
      }
    } else if (ent.type === 'drying_rack' && ent.meat && !ent.ready) {
      ent.timer -= dt;
      if (ent.timer <= 0) {
        ent.ready = true;
        showToast('🥩 晾肉架上的肉类已风干完成！');
      }
    } else if (ent.type === 'beebox') {
      ent.prodTimer = (ent.prodTimer || 0) + dt;
      if (ent.prodTimer >= 50 && ent.honey < ent.maxHoney) {
        ent.honey = Math.min(ent.maxHoney, ent.honey + 1);
        ent.prodTimer = 0;
      }
    } else if (ent.type === 'bird_trap' && ent.baited && !ent.caught) {
      ent.catchTimer = (ent.catchTimer || 15) - dt;
      if (ent.catchTimer <= 0) {
        ent.caught = true;
        ent.baited = false;
        showToast('🕸️ 捕鸟陷阱触发！抓获了一只小鸟！');
      }
    } else if (ent.type === 'flingomatic' && ent.active && ent.fuel > 0) {
      for (const t of state.entities) {
        if (t.burning && dist(ent.x, ent.y, t.x, t.y) < ent.range) {
          t.burning = 0;
          createHitParticles(t.x, t.y, '#81d4fa');
          ent.fuel = Math.max(0, ent.fuel - 5);
          showToast('❄️ 雪球灭火机精准射击雪球！熄灭了火灾！');
        }
      }
    } else if (ent.type === 'auto_harvester') {
      ent.timer = (ent.timer || 0) + dt;
      ent.armAngle = ((ent.armAngle || 0) + dt * 2.8) % (Math.PI * 2);
      if (ent.timer >= 4) {
        ent.timer = 0;
        let harvestedItem = null;
        let harvestedCnt = 1;
        for (const t of state.entities) {
          if (dist(ent.x, ent.y, t.x, t.y) <= (ent.range || 220)) {
            if (t.type === 'bush' && t.hasBerries) {
              t.hasBerries = false;
              t.regrowTimer = 120;
              harvestedItem = 'berry';
              break;
            } else if (t.type === 'sapling' && t.harvestable) {
              t.harvestable = false;
              t.regrowTimer = 120;
              harvestedItem = 'twig';
              break;
            } else if (t.type === 'grass_tuft' && t.harvestable) {
              t.harvestable = false;
              t.regrowTimer = 120;
              harvestedItem = 'grass';
              break;
            } else if (t.type === 'farmplot' && t.crop && t.stage >= 2) {
              harvestedItem = t.crop;
              harvestedCnt = t.isGiant ? 3 : 1;
              t.crop = null;
              t.stage = 0;
              t.growTimer = 0;
              t.isGiant = false;
              break;
            } else if (t.type === 'mushroom_planter' && t.ready && t.shroom) {
              harvestedItem = t.shroom;
              harvestedCnt = 4;
              t.ready = false;
              t.timer = 60;
              break;
            } else if (t.type === 'drying_rack' && t.ready && t.meat) {
              harvestedItem = t.meat === 'monstermeat' ? 'monster_jerky' : 'jerky';
              t.meat = null;
              t.timer = 0;
              t.ready = false;
              break;
            } else if (t.type === 'beebox' && t.honey >= 2) {
              harvestedItem = 'honey';
              harvestedCnt = Math.floor(t.honey);
              t.honey = 0;
              break;
            }
          }
        }
        if (harvestedItem) {
          createHitParticles(ent.x, ent.y, '#ffd54f');
          audio.playCraft();
          // Deposit into nearby chest within 140px if exists
          const nearbyChest = state.entities.find(c =>
            (c.type === 'chest' || c.type === 'icebox' || c.type === 'vacuum_chest') &&
            dist(ent.x, ent.y, c.x, c.y) < 140
          );
          let deposited = false;
          if (nearbyChest) {
            for (let i = 0; i < nearbyChest.items.length; i++) {
              const s = nearbyChest.items[i];
              if (s && s.id === harvestedItem && s.count < (ITEMS[harvestedItem]?.stack || 20)) {
                s.count += harvestedCnt;
                deposited = true;
                break;
              } else if (!s) {
                nearbyChest.items[i] = { id: harvestedItem, count: harvestedCnt };
                deposited = true;
                break;
              }
            }
          }
          if (!deposited) {
            dropWorldItem(harvestedItem, ent.x + (Math.random() - 0.5) * 24, ent.y + (Math.random() - 0.5) * 24, harvestedCnt);
          }
        }
      }
    } else if (ent.type === 'vacuum_chest') {
      ent.timer = (ent.timer || 0) + dt;
      if (ent.timer >= 1.2) {
        ent.timer = 0;
        for (const d of state.entities) {
          if (d.type === 'drop') {
            const distDrop = dist(ent.x, ent.y, d.x, d.y);
            if (distDrop <= (ent.range || 180)) {
              const pullAngle = Math.atan2(ent.y - d.y, ent.x - d.x);
              d.x += Math.cos(pullAngle) * 95 * dt;
              d.y += Math.sin(pullAngle) * 95 * dt;
              if (distDrop < 30) {
                for (let i = 0; i < ent.items.length; i++) {
                  const s = ent.items[i];
                  if (s && s.id === d.itemId && s.count < (ITEMS[d.itemId]?.stack || 20)) {
                    s.count += d.count;
                    state.entities = state.entities.filter(e => e !== d);
                    audio.playPickup();
                    createHitParticles(ent.x, ent.y, '#9575cd');
                    break;
                  } else if (!s) {
                    ent.items[i] = {
                      id: d.itemId,
                      count: d.count,
                      durability: d.durability,
                      freshness: d.freshness,
                      heatStored: d.heatStored
                    };
                    state.entities = state.entities.filter(e => e !== d);
                    audio.playPickup();
                    createHitParticles(ent.x, ent.y, '#9575cd');
                    break;
                  }
                }
              }
            }
          }
        }
      }
    } else if (ent.type === 'sprinkler') {
      ent.sprayAngle = ((ent.sprayAngle || 0) + dt * 4.5) % (Math.PI * 2);
      for (const f of state.entities) {
        if (dist(ent.x, ent.y, f.x, f.y) <= (ent.range || 220)) {
          if (f.type === 'farmplot' && f.crop && f.stage < 2) {
            f.growTimer += dt * 1.6;
            // 35% chance of Giant Crop upon reaching mature stage!
            if (f.growTimer >= 90) {
              f.stage = 2;
              if (Math.random() < 0.35) f.isGiant = true;
            }
          }
          if (f.burning) {
            f.burning = 0;
            createHitParticles(f.x, f.y, '#4fc3f7');
          }
        }
      }
      if (state.season === 'summer' && dist(p.x, p.y, ent.x, ent.y) < 180) {
        p.temp = Math.min(p.temp, 28);
      }
    } else if (ent.type === 'mushroom_planter' && ent.shroom && !ent.ready) {
      ent.timer = (ent.timer || 60) - dt;
      if (ent.timer <= 0) {
        ent.ready = true;
        showToast(`🍄 蘑菇木桩上的【${ITEMS[ent.shroom]?.name || '蘑菇'}】已经簇生成熟！`);
      }
    } else if (ent.type === 'dwarf_star') {
      ent.lifetime = (ent.lifetime || 180) - dt;
      if (ent.lifetime <= 0) {
        state.entities = state.entities.filter(e => e !== ent);
      } else {
        if (dist(p.x, p.y, ent.x, ent.y) < 220) {
          inLight = true;
          p.sanity = Math.min(p.maxSanity, p.sanity + dt * 0.8);
          if (p.temp < 30) p.temp += dt * 2.0;
        }
      }
    } else if (ent.type === 'solar_lantern') {
      entRadius = 185 + Math.sin(Date.now() / 150) * 3;
      lightCol = '#fff59d';
    } else if (ent.type === 'scaled_furnace') {
      if (dist(p.x, p.y, ent.x, ent.y) < 200) {
        inLight = true;
        if (p.temp < 32) p.temp += dt * 2.5;
        p.sanity = Math.min(p.maxSanity, p.sanity + dt * 0.4);
      }
    } else if (ent.type === 'houndius_shootius') {
      ent.shootCooldown = (ent.shootCooldown || 0) - dt;
      let targetMob = null;
      let minTargetDist = 320;
      for (const mob of state.entities) {
        if (['spider', 'spider_warrior', 'spider_queen', 'hound', 'ice_hound', 'fire_hound',
             'treeguard', 'deerclops', 'bearger', 'moosegoose', 'dragonfly', 'varg', 'crawling_horror', 'terrorbeak', 'werepig'].includes(mob.type)) {
          const md = dist(ent.x, ent.y, mob.x, mob.y);
          if (md < minTargetDist) {
            minTargetDist = md;
            targetMob = mob;
          }
        }
      }
      if (targetMob && ent.shootCooldown <= 0) {
        ent.shootCooldown = 2.0;
        targetMob.hp -= 65;
        createHitParticles(targetMob.x, targetMob.y, '#e53935');
        audio.playHit();
        ent.laserTimer = 0.35;
        ent.laserTarget = { x: targetMob.x, y: targetMob.y };
      }
      if (ent.laserTimer > 0) ent.laserTimer -= dt;
    } else if (ent.type === 'shadow_lumberjack') {
      let targetTree = null;
      let minDist = 300;
      for (const t of state.entities) {
        if (t.type === 'tree') {
          const td = dist(ent.x, ent.y, t.x, t.y);
          if (td < minDist) { minDist = td; targetTree = t; }
        }
      }
      if (targetTree) {
        const ta = Math.atan2(targetTree.y - ent.y, targetTree.x - ent.x);
        if (dist(ent.x, ent.y, targetTree.x, targetTree.y) > 28) {
          ent.x += Math.cos(ta) * 110 * dt;
          ent.y += Math.sin(ta) * 110 * dt;
        } else {
          ent.actionTimer = (ent.actionTimer || 0) + dt;
          if (ent.actionTimer >= 0.6) {
            ent.actionTimer = 0;
            targetTree.hp--;
            audio.playChop();
            createHitParticles(targetTree.x, targetTree.y, '#8d6e63');
            if (targetTree.hp <= 0) {
              dropWorldItem('log', targetTree.x, targetTree.y, 3);
              dropWorldItem('pinecone', targetTree.x + 10, targetTree.y, 1);
              state.entities = state.entities.filter(e => e !== targetTree);
            }
          }
        }
      } else {
        const pa = Math.atan2(p.y - ent.y, p.x - ent.x);
        if (dist(ent.x, ent.y, p.x, p.y) > 60) {
          ent.x += Math.cos(pa) * 100 * dt;
          ent.y += Math.sin(pa) * 100 * dt;
        }
      }
    } else if (ent.type === 'shadow_miner') {
      let targetRock = null;
      let minDist = 300;
      for (const r of state.entities) {
        if (r.type === 'rock' || r.type === 'stalagmite') {
          const rd = dist(ent.x, ent.y, r.x, r.y);
          if (rd < minDist) { minDist = rd; targetRock = r; }
        }
      }
      if (targetRock) {
        const ra = Math.atan2(targetRock.y - ent.y, targetRock.x - ent.x);
        if (dist(ent.x, ent.y, targetRock.x, targetRock.y) > 28) {
          ent.x += Math.cos(ra) * 110 * dt;
          ent.y += Math.sin(ra) * 110 * dt;
        } else {
          ent.actionTimer = (ent.actionTimer || 0) + dt;
          if (ent.actionTimer >= 0.6) {
            ent.actionTimer = 0;
            targetRock.hp--;
            audio.playMine();
            createHitParticles(targetRock.x, targetRock.y, '#78909c');
            if (targetRock.hp <= 0) {
              dropWorldItem('rock', targetRock.x, targetRock.y, 3);
              dropWorldItem('flint', targetRock.x + 10, targetRock.y, 2);
              if (targetRock.hasGold) dropWorldItem('gold', targetRock.x - 10, targetRock.y, 1);
              state.entities = state.entities.filter(e => e !== targetRock);
            }
          }
        }
      } else {
        const pa = Math.atan2(p.y - ent.y, p.x - ent.x);
        if (dist(ent.x, ent.y, p.x, p.y) > 60) {
          ent.x += Math.cos(pa) * 100 * dt;
          ent.y += Math.sin(pa) * 100 * dt;
        }
      }
    } else if (ent.type === 'shadow_duelist') {
      let targetMob = null;
      let minDist = 250;
      for (const mob of state.entities) {
        if (['spider', 'hound', 'ice_hound', 'fire_hound', 'treeguard', 'werepig'].includes(mob.type)) {
          const md = dist(ent.x, ent.y, mob.x, mob.y);
          if (md < minDist) { minDist = md; targetMob = mob; }
        }
      }
      if (targetMob) {
        const ma = Math.atan2(targetMob.y - ent.y, targetMob.x - ent.x);
        if (dist(ent.x, ent.y, targetMob.x, targetMob.y) > 30) {
          ent.x += Math.cos(ma) * 120 * dt;
          ent.y += Math.sin(ma) * 120 * dt;
        } else {
          ent.attackCooldown = (ent.attackCooldown || 0) - dt;
          if (ent.attackCooldown <= 0) {
            ent.attackCooldown = 0.9;
            targetMob.hp -= 45;
            audio.playHit();
            createHitParticles(targetMob.x, targetMob.y, '#ab47bc');
          }
        }
      } else {
        const pa = Math.atan2(p.y - ent.y, p.x - ent.x);
        if (dist(ent.x, ent.y, p.x, p.y) > 60) {
          ent.x += Math.cos(pa) * 100 * dt;
          ent.y += Math.sin(pa) * 100 * dt;
        }
      }
    } else if (ent.type === 'werepig') {
      const wd = dist(p.x, p.y, ent.x, ent.y);
      if (wd < 260) {
        const wa = Math.atan2(p.y - ent.y, p.x - ent.x);
        if (wd > 32) {
          ent.x += Math.cos(wa) * 115 * dt;
          ent.y += Math.sin(wa) * 115 * dt;
        } else {
          ent.attackCooldown = (ent.attackCooldown || 0) - dt;
          if (ent.attackCooldown <= 0) {
            ent.attackCooldown = 1.3;
            audio.playHit();
            let wdmg = 35;
            if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
              wdmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
            }
            p.hp -= wdmg;
            showToast('受到残暴疯猪猛烈扑抓撕咬！(-35HP)');
          }
        }
      }
    }
  }

  // 13. Chester Follow Movement
  if (state.chester && state.chester.active && state.worldLayer === 'surface') {
    const cd = dist(p.x, p.y, state.chester.x, state.chester.y);
    if (cd > 70) {
      const ca = Math.atan2(p.y - state.chester.y, p.x - state.chester.x);
      state.chester.x += Math.cos(ca) * (p.speed * 0.95) * dt;
      state.chester.y += Math.sin(ca) * (p.speed * 0.95) * dt;
      state.chester.hopTick += dt * 10;
    }
  }

  // 13.1. Abigail Ghost Follow & AoE Protection
  if (state.abigail && state.abigail.active) {
    const ad = dist(p.x, p.y, state.abigail.x, state.abigail.y);
    if (ad > 65) {
      const aa = Math.atan2(p.y - state.abigail.y, p.x - state.abigail.x);
      state.abigail.x += Math.cos(aa) * (p.speed * 1.05) * dt;
      state.abigail.y += Math.sin(aa) * (p.speed * 1.05) * dt;
    }
    state.abigail.attackTimer = (state.abigail.attackTimer || 0) - dt;
    if (state.abigail.attackTimer <= 0) {
      for (const ent of state.entities) {
        if (['spider', 'hound', 'ice_hound', 'fire_hound', 'treeguard', 'deerclops', 'bearger', 'crawling_horror', 'terrorbeak'].includes(ent.type)) {
          if (dist(state.abigail.x, state.abigail.y, ent.x, ent.y) < 100) {
            ent.hp -= 22;
            createHitParticles(ent.x, ent.y, '#ce93d8');
            state.abigail.attackTimer = 0.9;
            break;
          }
        }
      }
    }
    // Abigail HUD update
    const abBadge = document.getElementById('abigail-badge');
    if (abBadge) abBadge.classList.remove('hidden');
    const abFill = document.getElementById('abigail-hp-fill');
    if (abFill) abFill.style.width = Math.max(0, (state.abigail.hp / state.abigail.maxHp) * 100) + '%';
  }

  // 13.2. Mount Badge Update
  if (state.beefaloRiding) {
    updateMountBadge();
  }

  // Check Game Over
  if (p.hp <= 0) {
    triggerGameOver();
    return;
  }

  // 14. Movement & Velocity
  let mx = 0, my = 0;
  if (state.joystick.active) {
    mx = state.joystick.dx;
    my = state.joystick.dy;
  } else {
    if (state.keys['KeyW'] || state.keys['ArrowUp']) my -= 1;
    if (state.keys['KeyS'] || state.keys['ArrowDown']) my += 1;
    if (state.keys['KeyA'] || state.keys['ArrowLeft']) mx -= 1;
    if (state.keys['KeyD'] || state.keys['ArrowRight']) mx += 1;
  }

  // Authentic Attack Commitment: Lock movement during weapon swing
  if (p.attackLockTimer > 0) {
    p.attackLockTimer -= dt;
    p.vx = 0;
    p.vy = 0;
    p.walking = false;
  }
  if (p.attackCooldown > 0) p.attackCooldown -= dt;
  if (p.slashEffect && p.slashEffect.timer > 0) {
    p.slashEffect.timer -= dt;
    if (p.slashEffect.timer <= 0) p.slashEffect = null;
  }

  if ((mx !== 0 || my !== 0) && p.attackLockTimer <= 0) {
    const len = Math.hypot(mx, my);
    p.vx = (mx / len) * p.speed;
    p.vy = (my / len) * p.speed;
    p.walking = true;
    p.animTick += dt * 8;
    p.facingAngle = Math.atan2(my, mx);

    if (Math.abs(mx) > Math.abs(my)) p.facing = mx > 0 ? 'right' : 'left';
    else p.facing = my > 0 ? 'down' : 'up';
  } else {
    p.vx = 0;
    p.vy = 0;
    p.walking = false;
  }

  p.x = Math.max(50, Math.min(state.worldWidth - 50, p.x + p.vx * dt));
  p.y = Math.max(50, Math.min(state.worldHeight - 50, p.y + p.vy * dt));

  state.camera.x = p.x - canvas.width / 2;
  state.camera.y = p.y - canvas.height / 2;

  // 15. Entity AI updates
  updateEntities(dt, isDusk || isNight);

  // 16. Particle simulation
  for (let i = state.particles.length - 1; i >= 0; i--) {
    const part = state.particles[i];
    part.x += part.vx * dt;
    part.y += part.vy * dt;
    part.life -= dt;
    if (part.life <= 0) state.particles.splice(i, 1);
  }

  updateHUD();
  updateContextActionPrompt();
}

function updateContextActionPrompt() {
  const p = state.player;
  const btnInteract = document.getElementById('btn-action-interact');
  const btnAttack = document.getElementById('btn-action-attack');
  if (!btnInteract || !btnAttack) return;

  const iconInteract = btnInteract.querySelector('.btn-icon');
  const textInteract = btnInteract.querySelector('.btn-text');
  const iconAttack = btnAttack.querySelector('.btn-icon');
  const textAttack = btnAttack.querySelector('.btn-text');

  // Find nearest interactable candidate
  let interactCandidates = [...state.entities];
  if (state.chester && state.chester.active && state.worldLayer === 'surface') {
    interactCandidates.push({ type: 'chester', x: state.chester.x, y: state.chester.y });
  }

  let nearest = null;
  let minEffectiveDist = 90;
  for (const ent of interactCandidates) {
    if (ent.type === 'bush' && !ent.hasBerries) continue;
    if (ent.type === 'sapling' && !ent.harvestable) continue;
    if (ent.type === 'grass_tuft' && !ent.harvestable) continue;
    if (ent.type === 'light_flower' && !ent.harvestable) continue;

    const d = dist(p.x, p.y, ent.x, ent.y);
    if (d < 90) {
      if (['drop', 'tree', 'rock', 'bush', 'sapling', 'grass_tuft', 'flower', 'planted_carrot',
           'campfire', 'firepit', 'science_machine', 'alchemy_engine', 'prestihatitator', 'shadow_manipulator',
           'chest', 'crockpot', 'tent', 'pig_king', 'pig', 'beefalo', 'chester', 'cave_entrance', 'cave_exit',
           'light_flower', 'farmplot', 'stalagmite', 'thulecite_rock', 'pond', 'ancient_station',
           'drying_rack', 'birdcage', 'beebox', 'boat', 'teleportato_base', 'celestial_altar', 'bird_trap',
           'grave', 'tallbird_nest', 'evil_flower', 'tumbleweed', 'cactus', 'dirt_pile', 'catcoon', 'glommer_statue', 'beehive', 'marble_pillar'].includes(ent.type)) {
        const effDist = ent.type === 'drop' ? d - 40 : d;
        if (effDist < minEffectiveDist) {
          minEffectiveDist = effDist;
          nearest = ent;
        }
      }
    }
  }

  if (nearest) {
    btnInteract.classList.add('highlight');
    if (nearest.type === 'drop') {
      const name = ITEMS[nearest.itemId]?.name || '物品';
      iconInteract.innerText = '✋';
      textInteract.innerText = `拾取${name}`;
    } else if (nearest.type === 'tree') {
      const hasAxe = p.equipped.hand && ITEMS[p.equipped.hand.id]?.toolType === 'axe';
      iconInteract.innerText = '🪓';
      textInteract.innerText = hasAxe ? '砍伐树木' : '需草柄斧';
    } else if (nearest.type === 'rock' || nearest.type === 'stalagmite' || nearest.type === 'thulecite_rock') {
      const hasPick = p.equipped.hand && ITEMS[p.equipped.hand.id]?.toolType === 'pickaxe';
      iconInteract.innerText = '⛏️';
      textInteract.innerText = hasPick ? '开采矿石' : '需鹤嘴锄';
    } else if (nearest.type === 'bush') {
      iconInteract.innerText = '🍓';
      textInteract.innerText = nearest.hasBerries ? '采摘浆果' : '空灌木丛';
    } else if (nearest.type === 'grass_tuft') {
      iconInteract.innerText = '🌾';
      textInteract.innerText = '采集干草';
    } else if (nearest.type === 'sapling') {
      iconInteract.innerText = '🌿';
      textInteract.innerText = '采集树枝';
    } else if (nearest.type === 'flower') {
      iconInteract.innerText = '🌸';
      textInteract.innerText = '采摘野花';
    } else if (nearest.type === 'planted_carrot') {
      iconInteract.innerText = '🥕';
      textInteract.innerText = '拔胡萝卜';
    } else if (nearest.type === 'beefalo') {
      if (state.beefaloRiding) {
        iconInteract.innerText = '🏇';
        textInteract.innerText = '下牛';
      } else if (nearest.saddled) {
        iconInteract.innerText = '🏇';
        textInteract.innerText = '骑乘皮弗娄牛';
      } else if (p.equipped.hand && p.equipped.hand.id === 'razor') {
        iconInteract.innerText = '✂️';
        textInteract.innerText = '剪取牛毛';
      } else {
        iconInteract.innerText = '🐂';
        textInteract.innerText = '喂食驯化';
      }
    } else if (nearest.type === 'chester') {
      iconInteract.innerText = '🦴';
      textInteract.innerText = '打开切斯特';
    } else if (nearest.type === 'chest') {
      iconInteract.innerText = '📦';
      textInteract.innerText = '打开木箱';
    } else if (nearest.type === 'crockpot') {
      iconInteract.innerText = '🍲';
      textInteract.innerText = '瓦罐烹饪';
    } else if (nearest.type === 'campfire' || nearest.type === 'firepit') {
      iconInteract.innerText = '🔥';
      textInteract.innerText = '添加燃料';
    } else if (nearest.type === 'tent') {
      iconInteract.innerText = '⛺';
      textInteract.innerText = '野营休息';
    } else if (['science_machine', 'alchemy_engine', 'prestihatitator', 'shadow_manipulator'].includes(nearest.type)) {
      iconInteract.innerText = '🔬';
      textInteract.innerText = '科技研发';
    } else if (nearest.type === 'drying_rack') {
      iconInteract.innerText = '🥩';
      textInteract.innerText = nearest.ready ? '收获肉干' : (nearest.meat ? '风干中' : '悬挂大肉');
    } else if (nearest.type === 'farmplot') {
      iconInteract.innerText = '🌱';
      textInteract.innerText = nearest.crop ? (nearest.stage >= 2 ? '收获农作物' : '施肥堆肥') : '播种种田';
    } else if (nearest.type === 'boat') {
      iconInteract.innerText = '⛵';
      textInteract.innerText = state.sailing ? '靠岸停泊' : '登船启航';
    } else if (nearest.type === 'cave_entrance') {
      iconInteract.innerText = '🕳️';
      textInteract.innerText = nearest.plugged ? '敲碎岩塞' : '探索洞穴';
    } else if (nearest.type === 'cave_exit') {
      iconInteract.innerText = '🪜';
      textInteract.innerText = '重返地面';
    } else if (nearest.type === 'tumbleweed') {
      iconInteract.innerText = '🌪️';
      textInteract.innerText = '捕获风滚草';
    } else if (nearest.type === 'cactus') {
      iconInteract.innerText = '🌵';
      textInteract.innerText = '采摘仙人掌';
    } else if (nearest.type === 'dirt_pile') {
      iconInteract.innerText = '🐾';
      textInteract.innerText = '调查可疑足迹';
    } else if (nearest.type === 'catcoon') {
      iconInteract.innerText = '🐱';
      textInteract.innerText = '投喂/抚摸浣猫';
    } else if (nearest.type === 'glommer_statue') {
      iconInteract.innerText = '🌺';
      textInteract.innerText = '采格罗姆奇花';
    } else if (nearest.type === 'beehive') {
      iconInteract.innerText = '🍯';
      textInteract.innerText = '采集野生蜂蜜';
    } else if (nearest.type === 'marble_pillar') {
      iconInteract.innerText = '⛏️';
      textInteract.innerText = '开采大理石柱';
    } else {
      iconInteract.innerText = '✋';
      textInteract.innerText = '互动';
    }
  } else {
    btnInteract.classList.remove('highlight');
    iconInteract.innerText = '✋';
    textInteract.innerText = '互动';
  }

  // Find nearest hostile target
  const handItem = p.equipped.hand ? ITEMS[p.equipped.hand.id] : null;
  const isRangedStaff = handItem?.isStaff;
  const attackRange = isRangedStaff ? 260 : 85;
  const hostileTypes = [
    'spider', 'spider_warrior', 'hound', 'ice_hound', 'fire_hound', 'hound_mound', 'treeguard',
    'deerclops', 'bearger', 'moosegoose', 'dragonfly',
    'shadow_creature', 'crawling_horror', 'terrorbeak',
    'rabbit', 'batilisk', 'slurtle', 'clockwork_knight', 'clockwork_bishop', 'clockwork_rook',
    'beefalo', 'pig', 'tallbird', 'tentacle', 'frog', 'ghost',
    'butterfly', 'gobbler', 'bee', 'killer_bee', 'bird', 'catcoon', 'glommer', 'koalefant', 'merm'
  ];

  const hasHostile = state.entities.some(e => hostileTypes.includes(e.type) && dist(p.x, p.y, e.x, e.y) < attackRange);
  if (hasHostile) {
    btnAttack.classList.add('highlight');
    iconAttack.innerText = '⚔️';
    textAttack.innerText = '攻击目标';
  } else {
    btnAttack.classList.remove('highlight');
    iconAttack.innerText = '⚔️';
    textAttack.innerText = '攻击';
  }
}

function updateWeatherAndTemp(dt, isNight) {
  const p = state.player;
  const frostVig = document.getElementById('frost-vignette');
  const overheatVig = document.getElementById('overheat-vignette');

  // Baseline ambient temp by season
  let envTemp = 25;
  if (state.season === 'autumn') envTemp = 24;
  else if (state.season === 'winter') envTemp = -10;
  else if (state.season === 'spring') envTemp = 18;
  else if (state.season === 'summer') envTemp = 65;

  if (isNight) envTemp -= 8;

  // Body temp moves towards envTemp
  let tempDelta = (envTemp - p.temp) * 0.08 * dt;

  // Clothes insulation
  if (p.equipped.head && ITEMS[p.equipped.head.id]?.coldProtect && envTemp < p.temp) {
    tempDelta *= (1 / (1 + ITEMS[p.equipped.head.id].coldProtect));
  }

  p.temp += tempDelta;

  // Freezing damage (< 0°C)
  if (p.temp < 0) {
    frostVig.classList.remove('hidden');
    p.hp = Math.max(0, p.hp - dt * 3.5);
    p.sanity = Math.max(0, p.sanity - dt * 1.0);
  } else {
    frostVig.classList.add('hidden');
  }

  // Overheating damage (> 60°C)
  if (p.temp > 60) {
    overheatVig.classList.remove('hidden');
    p.hp = Math.max(0, p.hp - dt * 3.5);
  } else {
    overheatVig.classList.add('hidden');
  }

  // Spring rain
  if (state.season === 'spring') {
    p.wetness = Math.min(100, p.wetness + dt * 2.0);
  } else {
    p.wetness = Math.max(0, p.wetness - dt * 1.5);
  }
}

function warmThermalStones(dt) {
  // Check inventory for thermal stones and warm them up
  for (const s of state.player.inventory) {
    if (s && s.id === 'thermal_stone') {
      s.heatStored = Math.min(100, (s.heatStored || 0) + dt * 25);
      state.player.temp = Math.min(40, state.player.temp + dt * 5);
    }
  }
}

function updateFoodFreshness(dt) {
  const spoilRate = 1 / 180;
  const updateList = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const s = arr[i];
      if (s && s.freshness !== null && s.freshness !== undefined) {
        s.freshness -= dt * spoilRate;
        if (s.freshness <= 0) {
          // Turns into rot!
          arr[i] = { id: 'rot', count: s.count, durability: null, freshness: null };
          showToast('行囊里有些食物彻底变质腐烂了...');
        }
      }
    }
  };
  updateList(state.player.inventory);
  updateList(state.player.backpack);
}

function updateCrockpots(dt) {
  for (const ent of state.entities) {
    if (ent.type === 'crockpot' && ent.cooking) {
      ent.cookTimer -= dt;
      if (Math.random() < 0.2) audio.playCookingBubbles();

      if (ent.cookTimer <= 0) {
        ent.cooking = false;
        const resultId = resolveCrockpotDish(ent.ingredients);
        // Automated Base Kitchen: Auto-deposit into adjacent icebox or chest within 140px!
        const nearbyStorage = state.entities.find(c =>
          (c.type === 'icebox' || c.type === 'chest' || c.type === 'vacuum_chest') &&
          dist(ent.x, ent.y, c.x, c.y) < 140
        );
        let stored = false;
        if (nearbyStorage && nearbyStorage.items) {
          for (let i = 0; i < nearbyStorage.items.length; i++) {
            const s = nearbyStorage.items[i];
            if (s && s.id === resultId && s.count < (ITEMS[resultId]?.stack || 20)) {
              s.count += 1;
              s.freshness = 1.0;
              stored = true;
              break;
            } else if (!s) {
              nearbyStorage.items[i] = { id: resultId, count: 1, freshness: 1.0 };
              stored = true;
              break;
            }
          }
        }
        if (!stored) {
          dropWorldItem(resultId, ent.x, ent.y + 20, 1);
        }
        ent.ingredients = [null, null, null, null];
        audio.playCraft();
        showToast(stored ? `🍲 智能厨房自动化！已将烹饪好的【${ITEMS[resultId].name}】自动入库至保鲜箱！` : `瓦罐烹饪完成了美味的【${ITEMS[resultId].name}】！`);
        if (state.openedCrockpot === ent) {
          document.getElementById('cp-progress-bar').classList.add('hidden');
          document.getElementById('btn-start-cook').classList.remove('hidden');
          updateCrockpotSlots();
        }
      }
    }
  }
}

function spawnHoundWave() {
  audio.playHoundGrowl();
  showToast('嗷呜——！荒野恶犬群循着气味扑杀过来了！');
  let count = 2 + Math.floor(state.day / 8);
  if (state.difficulty === 'easy') count = Math.max(2, Math.floor(count * 0.5));
  else if (state.difficulty === 'hard') count = Math.floor(count * 1.4);

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
    const isFire = (state.season === 'summer' || (state.day > 12 && Math.random() < 0.25));
    const isIce = (state.season === 'winter' && Math.random() < 0.35);
    const houndType = isIce ? 'ice_hound' : (isFire ? 'fire_hound' : 'hound');

    state.entities.push({
      type: houndType,
      x: state.player.x + Math.cos(angle) * 360,
      y: state.player.y + Math.sin(angle) * 360,
      hp: 60,
      maxHp: 60,
      speed: 125,
      radius: 16,
      isWave: true,
      chasing: true
    });
  }
}

function updateEntities(dt, isDark) {
  const p = state.player;

  // Active Spiderhat Pacification & Guard Logic
  const hasSpiderhat = p.equipped.head && p.equipped.head.id === 'spiderhat';

  for (const ent of state.entities) {
    // 1. Spiders & Spider Warriors with Kiting & Telegraphing
    if (ent.type === 'spider' || ent.type === 'spider_warrior') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      const isWarrior = ent.type === 'spider_warrior';
      const attackRange = isWarrior ? 42 : 32;

      // Spiderhat Bodyguard Mode
      if (hasSpiderhat && d < 320) {
        ent.isFollower = true;
        ent.chasing = false;
        // Follow Wilson or attack Wilson's target
        let targetMob = ent.target;
        if (!targetMob || targetMob.hp <= 0) {
          // Wander peacefully near Wilson
          const followAngle = Math.atan2(p.y - ent.y, p.x - ent.x);
          if (d > 70) {
            ent.x += Math.cos(followAngle) * 75 * dt;
            ent.y += Math.sin(followAngle) * 75 * dt;
          }
        } else {
          // Attack target mob
          const tDist = dist(ent.x, ent.y, targetMob.x, targetMob.y);
          const tAngle = Math.atan2(targetMob.y - ent.y, targetMob.x - ent.x);
          if (tDist > 30) {
            ent.x += Math.cos(tAngle) * 85 * dt;
            ent.y += Math.sin(tAngle) * 85 * dt;
          } else {
            ent.attackCooldown = (ent.attackCooldown || 0) - dt;
            if (ent.attackCooldown <= 0) {
              audio.playHit();
              targetMob.hp -= (isWarrior ? 24 : 16);
              createHitParticles(targetMob.x, targetMob.y, '#e74c3c');
              ent.attackCooldown = 1.4;
            }
          }
        }
      } else if (d < 250) {
        // Normal Hostile Spider AI
        ent.isFollower = false;
        const angle = Math.atan2(p.y - ent.y, p.x - ent.x);

        // Telegraph & Windup State Machine
        if (ent.attackWindup > 0) {
          ent.attackWindup -= dt;
          // Frozen in place during wind-up (telegraphing rearing pose)
          if (ent.attackWindup <= 0) {
            // Strike execution!
            if (dist(ent.x, ent.y, p.x, p.y) <= attackRange + 12) {
              audio.playHit();
              let dmg = isWarrior ? 22 : 14;
              if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
                dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
              }
              p.hp -= dmg;
              showToast(isWarrior ? '受到蜘蛛战士突袭扑咬！' : '受到蜘蛛咬伤！');
            } else {
              // Missed / Player successfully kited!
              createHitParticles(ent.x, ent.y, '#9e9e9e');
            }
            ent.attackCooldown = 1.6;
          }
        } else {
          ent.attackCooldown = (ent.attackCooldown || 0) - dt;
          if (ent.attackCooldown <= 0 && d <= attackRange) {
            // Start Wind-up Telegraph!
            ent.attackWindup = isWarrior ? 0.35 : 0.42;
          } else {
            ent.x += Math.cos(angle) * (isWarrior ? 95 : 75) * dt;
            ent.y += Math.sin(angle) * (isWarrior ? 95 : 75) * dt;
          }
        }
      }
    }

    // 2. Wild Hounds (Normal, Ice, Fire) with Authentic Kiting
    if (ent.type === 'hound' || ent.type === 'ice_hound' || ent.type === 'fire_hound') {
      ent.animTimer = (ent.animTimer || 0) + dt;
      const d = dist(ent.x, ent.y, p.x, p.y);
      const aggroRange = state.difficulty === 'easy' ? 140 : (state.difficulty === 'hard' ? 280 : 200);
      const attackRange = 34;

      if (ent.isWave || d < aggroRange || (ent.chasing && d < 320)) {
        ent.chasing = true;
        const angle = Math.atan2(p.y - ent.y, p.x - ent.x);
        ent.facing = p.x < ent.x ? 'left' : 'right';

        if (ent.attackWindup > 0) {
          ent.attackWindup -= dt;
          // Hound pauses and crouches back baring fangs
          if (ent.attackWindup <= 0) {
            // Bite moment!
            if (dist(ent.x, ent.y, p.x, p.y) <= attackRange + 12) {
              audio.playHit();
              let dmg = ent.type === 'fire_hound' ? 24 : 20;
              if (state.difficulty === 'easy') dmg *= 0.5;
              else if (state.difficulty === 'hard') dmg *= 1.4;
              if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
                dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
              }
              p.hp -= dmg;
              if (ent.type === 'fire_hound') p.temp += 10;
              if (ent.type === 'ice_hound') p.temp -= 10;
              showToast(ent.type === 'fire_hound' ? '🔥 熔岩火狗撕咬了你！' : '🐺 野性猎犬撕咬了你！');
            } else {
              // Missed / Player successfully dodged!
              createHitParticles(ent.x, ent.y, '#757575');
            }
            ent.attackCooldown = 1.4;
          }
        } else {
          ent.attackCooldown = (ent.attackCooldown || 0) - dt;
          if (ent.attackCooldown <= 0 && d <= attackRange) {
            ent.attackWindup = 0.38; // 0.38s wind-up telegraph
          } else {
            ent.x += Math.cos(angle) * ent.speed * dt;
            ent.y += Math.sin(angle) * ent.speed * dt;
          }
        }
      } else {
        ent.chasing = false;
        ent.wanderTimer = (ent.wanderTimer || 0) - dt;
        if (ent.wanderTimer <= 0) {
          ent.wanderTimer = 3 + Math.random() * 4;
          ent.wanderAngle = Math.random() * Math.PI * 2;
        }
        ent.x += Math.cos(ent.wanderAngle) * 35 * dt;
        ent.y += Math.sin(ent.wanderAngle) * 35 * dt;
        ent.facing = Math.cos(ent.wanderAngle) < 0 ? 'left' : 'right';
      }
    }

    // 3. Mini-Boss: Treeguard (树人守卫)
    if (ent.type === 'treeguard') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      const angle = Math.atan2(p.y - ent.y, p.x - ent.x);

      if (ent.attackWindup > 0) {
        ent.attackWindup -= dt;
        // Raises branch high, shaking ground!
        if (ent.attackWindup <= 0) {
          audio.playThunder();
          if (dist(ent.x, ent.y, p.x, p.y) <= 75) {
            let dmg = 52;
            if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
              dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
            }
            p.hp -= dmg;
            p.sanity -= 12;
            showToast('🌲 树人守卫巨臂重锤！震碎了大地！');
          } else {
            // Dodged!
            createHitParticles(ent.x, ent.y, '#8d6e63');
          }
          ent.attackCooldown = 2.4;
        }
      } else {
        ent.attackCooldown = (ent.attackCooldown || 0) - dt;
        if (ent.attackCooldown <= 0 && d <= 68) {
          ent.attackWindup = 0.75; // 0.75s heavy stomp wind-up
        } else {
          ent.x += Math.cos(angle) * 42 * dt;
          ent.y += Math.sin(angle) * 42 * dt;
        }
      }
    }

    // 4. Mini-Boss: Spider Queen (蜘蛛女王)
    if (ent.type === 'spider_queen') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      const angle = Math.atan2(p.y - ent.y, p.x - ent.x);

      // Periodically give birth to Spider Warriors
      ent.spawnTimer = (ent.spawnTimer || 12) - dt;
      if (ent.spawnTimer <= 0) {
        ent.spawnTimer = 14;
        state.entities.push({
          type: 'spider_warrior',
          x: ent.x + (Math.random() - 0.5) * 40,
          y: ent.y + (Math.random() - 0.5) * 40,
          hp: 120, maxHp: 120, speed: 95, radius: 18
        });
        showToast('🕷️ 蜘蛛女王产下一只凶猛的蜘蛛战士！');
      }

      if (ent.attackWindup > 0) {
        ent.attackWindup -= dt;
        if (ent.attackWindup <= 0) {
          audio.playHit();
          if (dist(ent.x, ent.y, p.x, p.y) <= 55) {
            let dmg = 38;
            if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
              dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
            }
            p.hp -= dmg;
            showToast('👑 蜘蛛女王剧毒螯肢刺穿了你！');
          }
          ent.attackCooldown = 2.2;
        }
      } else {
        ent.attackCooldown = (ent.attackCooldown || 0) - dt;
        if (ent.attackCooldown <= 0 && d <= 52) {
          ent.attackWindup = 0.65;
        } else {
          ent.x += Math.cos(angle) * 48 * dt;
          ent.y += Math.sin(angle) * 48 * dt;
        }
      }
    }

    // 5. Mini-Boss: Varg (座狼/恶魔荒原狼领袖)
    if (ent.type === 'varg') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      const angle = Math.atan2(p.y - ent.y, p.x - ent.x);
      ent.facing = p.x < ent.x ? 'left' : 'right';

      // Howl to summon wild hounds
      ent.howlTimer = (ent.howlTimer || 16) - dt;
      if (ent.howlTimer <= 0) {
        ent.howlTimer = 18;
        audio.playWolfHowl();
        showToast('🐺 恶魔座狼仰天咆哮！召唤了荒原猎犬卫队！');
        for (let i = 0; i < 2; i++) {
          state.entities.push({
            type: Math.random() < 0.5 ? 'fire_hound' : 'hound',
            x: ent.x + (Math.random() - 0.5) * 60,
            y: ent.y + (Math.random() - 0.5) * 60,
            hp: 90, maxHp: 90, speed: 110, radius: 18, isWave: true
          });
        }
      }

      if (ent.attackWindup > 0) {
        ent.attackWindup -= dt;
        if (ent.attackWindup <= 0) {
          audio.playHit();
          if (dist(ent.x, ent.y, p.x, p.y) <= 48) {
            let dmg = 46;
            if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
              dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
            }
            p.hp -= dmg;
            showToast('🐺 座狼狂暴撕咬了你！');
          }
          ent.attackCooldown = 1.8;
        }
      } else {
        ent.attackCooldown = (ent.attackCooldown || 0) - dt;
        if (ent.attackCooldown <= 0 && d <= 46) {
          ent.attackWindup = 0.5;
        } else {
          ent.x += Math.cos(angle) * 72 * dt;
          ent.y += Math.sin(angle) * 72 * dt;
        }
      }
    }

    // 6. Mini-Boss: Ancient Guardian (远古犀牛守护者)
    if (ent.type === 'ancient_guardian') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      const angle = Math.atan2(p.y - ent.y, p.x - ent.x);

      if (ent.attackWindup > 0) {
        ent.attackWindup -= dt;
        if (ent.attackWindup <= 0) {
          audio.playThunder();
          if (dist(ent.x, ent.y, p.x, p.y) <= 60) {
            let dmg = 58;
            if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
              dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
            }
            p.hp -= dmg;
            p.sanity -= 15;
            showToast('🦏 远古守护者巨角蛮牛冲锋！撞飞了你！');
          }
          ent.attackCooldown = 2.8;
        }
      } else {
        ent.attackCooldown = (ent.attackCooldown || 0) - dt;
        if (ent.attackCooldown <= 0 && d <= 56) {
          ent.attackWindup = 0.8;
        } else {
          ent.x += Math.cos(angle) * 85 * dt;
          ent.y += Math.sin(angle) * 85 * dt;
        }
      }
    }

    // 7. World Boss: Deerclops (冬季霸主 - 独眼巨鹿)
    if (ent.type === 'deerclops') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      const angle = Math.atan2(p.y - ent.y, p.x - ent.x);

      if (ent.attackWindup > 0) {
        ent.attackWindup -= dt;
        if (ent.attackWindup <= 0) {
          audio.playThunder();
          if (dist(ent.x, ent.y, p.x, p.y) <= 80) {
            let dmg = 65;
            if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
              dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
            }
            p.hp -= dmg;
            p.sanity -= 20;
            p.temp -= 15;
            showToast('★ 独眼巨鹿震撼冰柱重创了你！');
          }
          ent.attackCooldown = 2.6;
        }
      } else {
        ent.attackCooldown = (ent.attackCooldown || 0) - dt;
        if (ent.attackCooldown <= 0 && d <= 75) {
          ent.attackWindup = 0.85;
        } else {
          ent.x += Math.cos(angle) * 58 * dt;
          ent.y += Math.sin(angle) * 58 * dt;
        }
      }
    }

    // 8. World Boss: Bearger (秋季霸主 - 熊獾)
    if (ent.type === 'bearger') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      const angle = Math.atan2(p.y - ent.y, p.x - ent.x);

      if (ent.attackWindup > 0) {
        ent.attackWindup -= dt;
        if (ent.attackWindup <= 0) {
          audio.playBossRoar();
          if (dist(ent.x, ent.y, p.x, p.y) <= 75) {
            let dmg = 54;
            if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
              dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
            }
            p.hp -= dmg;
            p.sanity -= 15;
            showToast('★ 熊獾巨爪撼地重击！震荡波击溃了你的护甲！');
          }
          ent.attackCooldown = 2.8;
        }
      } else {
        ent.attackCooldown = (ent.attackCooldown || 0) - dt;
        if (ent.attackCooldown <= 0 && d <= 70) {
          ent.attackWindup = 0.8;
        } else {
          ent.x += Math.cos(angle) * 62 * dt;
          ent.y += Math.sin(angle) * 62 * dt;
        }
      }
    }

    // 9. World Boss: Moose/Goose (春季霸主 - 驼鹿鹅)
    if (ent.type === 'moosegoose') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      const angle = Math.atan2(p.y - ent.y, p.x - ent.x);

      if (ent.attackWindup > 0) {
        ent.attackWindup -= dt;
        if (ent.attackWindup <= 0) {
          audio.playThunder();
          if (dist(ent.x, ent.y, p.x, p.y) <= 65) {
            let dmg = 45;
            if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
              dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
            }
            p.hp -= dmg;
            p.wetness = Math.min(100, p.wetness + 25);
            showToast('★ 驼鹿鹅高亢尖啸！狂暴水龙卷席卷了你！');
          }
          ent.attackCooldown = 2.4;
        }
      } else {
        ent.attackCooldown = (ent.attackCooldown || 0) - dt;
        if (ent.attackCooldown <= 0 && d <= 62) {
          ent.attackWindup = 0.65;
        } else {
          ent.x += Math.cos(angle) * 78 * dt;
          ent.y += Math.sin(angle) * 78 * dt;
        }
      }
    }

    // 10. World Boss: Dragonfly (夏季霸主 - 龙蝇)
    if (ent.type === 'dragonfly') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      const angle = Math.atan2(p.y - ent.y, p.x - ent.x);

      if (ent.attackWindup > 0) {
        ent.attackWindup -= dt;
        if (ent.attackWindup <= 0) {
          audio.playBossRoar();
          if (dist(ent.x, ent.y, p.x, p.y) <= 70) {
            let dmg = 55;
            if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
              dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
            }
            p.hp -= dmg;
            p.temp += 20;
            showToast('★ 龙蝇三连熔岩践踏！地面化作灼热火海！');
          }
          ent.attackCooldown = 2.6;
        }
      } else {
        ent.attackCooldown = (ent.attackCooldown || 0) - dt;
        if (ent.attackCooldown <= 0 && d <= 65) {
          ent.attackWindup = 0.7;
        } else {
          ent.x += Math.cos(angle) * 88 * dt;
          ent.y += Math.sin(angle) * 88 * dt;
        }
      }
    }

    // 11. High-Tech Defense: Houndius Shootius (远古眼球激光炮塔)
    if (ent.type === 'houndius_shootius') {
      ent.shootCooldown = (ent.shootCooldown || 0) - dt;
      if (ent.laserTimer > 0) ent.laserTimer -= dt;

      if (ent.shootCooldown <= 0) {
        let bestTarget = null;
        let bestDist = 260;
        const hostiles = ['hound', 'ice_hound', 'fire_hound', 'spider', 'spider_warrior', 'spider_queen',
                          'treeguard', 'varg', 'ancient_guardian', 'deerclops', 'bearger', 'moosegoose',
                          'dragonfly', 'crawling_horror', 'terrorbeak'];
        for (const target of state.entities) {
          if (hostiles.includes(target.type) && target.hp > 0) {
            const td = dist(ent.x, ent.y, target.x, target.y);
            if (td < bestDist) {
              bestDist = td;
              bestTarget = target;
            }
          }
        }

        if (bestTarget) {
          audio.playLaser();
          bestTarget.hp -= 65;
          ent.shootCooldown = 1.35;
          ent.targetPos = { x: bestTarget.x, y: bestTarget.y };
          ent.laserTimer = 0.22;
          createHitParticles(bestTarget.x, bestTarget.y, '#e74c3c');
          createHitParticles(bestTarget.x, bestTarget.y, '#ffffff');
          showToast('🗼 远古眼球炮塔射出毁灭激光！对敌怪造成 65 穿透伤害！');
        }
      }
    }

    // 12. Eternal Facility: Scaled Furnace (龙鳞火炉)
    if (ent.type === 'scaled_furnace') {
      if (dist(ent.x, ent.y, p.x, p.y) < 220) {
        inLight = true;
        if (p.temp < 38) p.temp = Math.min(38, p.temp + 14 * dt);
      }
    }

    // 13. Celestial: Dwarf Star (微缩恒星)
    if (ent.type === 'dwarf_star') {
      ent.duration = (ent.duration || 360) - dt;
      if (dist(ent.x, ent.y, p.x, p.y) < 260) {
        inLight = true;
        if (p.temp < 40) p.temp = Math.min(40, p.temp + 15 * dt);
        p.sanity = Math.min(p.maxSanity, p.sanity + (25 / 60) * dt);
      }
      if (ent.duration <= 0) {
        state.entities = state.entities.filter(e => e !== ent);
      }
    }
    // 7. Shadow Horrors: Crawling Horror & Terrorbeak
    if (ent.type === 'crawling_horror' || ent.type === 'terrorbeak') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      const angle = Math.atan2(p.y - ent.y, p.x - ent.x);
      ent.x += Math.cos(angle) * ent.speed * dt;
      ent.y += Math.sin(angle) * ent.speed * dt;

      if (d < 32) {
        ent.attackCooldown = (ent.attackCooldown || 0) - dt;
        if (ent.attackCooldown <= 0) {
          audio.playHit();
          let dmg = ent.type === 'terrorbeak' ? 38 : 22;
          p.hp -= dmg;
          p.sanity = Math.max(0, p.sanity - 8);
          showToast(`实体影怪撕咬了你的精神！(-${dmg}生命)`);
          ent.attackCooldown = 1.4;
        }
      }
    }

    // 8. Cave Batilisk
    if (ent.type === 'batilisk') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      if (d < 260) {
        const angle = Math.atan2(p.y - ent.y, p.x - ent.x);
        ent.x += Math.cos(angle) * 105 * dt;
        ent.y += Math.sin(angle) * 105 * dt;
        if (d < 26) {
          ent.attackCooldown = (ent.attackCooldown || 0) - dt;
          if (ent.attackCooldown <= 0) {
            audio.playHit();
            p.hp -= 12;
            showToast('深渊洞穴蝙蝠抓伤了你！');
            ent.attackCooldown = 1.2;
          }
        }
      }
    }

    // 9. Clockwork Knight
    if (ent.type === 'clockwork_knight') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      if (d < 280) {
        const angle = Math.atan2(p.y - ent.y, p.x - ent.x);
        ent.x += Math.cos(angle) * 90 * dt;
        ent.y += Math.sin(angle) * 90 * dt;
        if (d < 36) {
          ent.attackCooldown = (ent.attackCooldown || 0) - dt;
          if (ent.attackCooldown <= 0) {
            audio.playHit();
            let dmg = 30;
            if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
              dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
            }
            p.hp -= dmg;
            showToast('远古发条骑士钢铁冲撞了你！');
            ent.attackCooldown = 1.6;
          }
        }
      }
    }

    // 10. Treeguard
    if (ent.type === 'treeguard') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      if (d < 260) {
        const angle = Math.atan2(p.y - ent.y, p.x - ent.x);
        ent.x += Math.cos(angle) * 45 * dt;
        ent.y += Math.sin(angle) * 45 * dt;

        if (d < 45) {
          ent.attackCooldown = (ent.attackCooldown || 0) - dt;
          if (ent.attackCooldown <= 0) {
            audio.playHit();
            p.hp -= 45;
            showToast('树人雷夫挥动巨枝横扫！');
            ent.attackCooldown = 2.0;
          }
        }
      }
    }

    // 11. Pigs (Normal, Follower & Full Moon Werepig)
    if (ent.type === 'pig') {
      const isFullMoon = (state.day % 16 === 9 || state.day % 16 === 10) && state.timeInDay >= 85 && state.worldLayer === 'surface';
      if (isFullMoon && !ent.isWerepig) {
        ent.isWerepig = true;
        ent.isFollower = false;
        createHitParticles(ent.x, ent.y, '#8e24aa');
        audio.playHoundGrowl();
        showToast('🌕 满月之力侵蚀！猪人狂暴变异为凶残【疯猪】！');
      } else if (!isFullMoon && ent.isWerepig) {
        ent.isWerepig = false;
        showToast('黎明晨光破晓，疯猪恢复了平静。');
      }

      if (ent.isWerepig) {
        const d = dist(ent.x, ent.y, p.x, p.y);
        if (d < 240) {
          const angle = Math.atan2(p.y - ent.y, p.x - ent.x);
          ent.x += Math.cos(angle) * 125 * dt;
          ent.y += Math.sin(angle) * 125 * dt;

          if (d < 32) {
            ent.attackCooldown = (ent.attackCooldown || 0) - dt;
            if (ent.attackCooldown <= 0) {
              audio.playHit();
              let dmg = 40;
              if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
                dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
              }
              p.hp -= dmg;
              p.sanity -= 8;
              showToast('疯猪利爪疯狂撕扯！(-40生命)');
              ent.attackCooldown = 1.25;
            }
          }
        } else {
          ent.wanderTimer = (ent.wanderTimer || 2) - dt;
          if (ent.wanderTimer <= 0) {
            ent.wanderTimer = Math.random() * 2 + 1;
            ent.wanderAngle = Math.random() * Math.PI * 2;
          }
          if (ent.wanderAngle !== undefined) {
            ent.x += Math.cos(ent.wanderAngle) * 35 * dt;
            ent.y += Math.sin(ent.wanderAngle) * 35 * dt;
          }
        }
      } else if (ent.target === p && ent.aggroTimer > 0) {
        // Neutral Pig Retaliation against aggressive player
        ent.aggroTimer -= dt;
        const pd = dist(ent.x, ent.y, p.x, p.y);
        const pa = Math.atan2(p.y - ent.y, p.x - ent.x);
        if (pd > 32) {
          ent.x += Math.cos(pa) * 115 * dt;
          ent.y += Math.sin(pa) * 115 * dt;
        } else {
          ent.attackCooldown = (ent.attackCooldown || 0) - dt;
          if (ent.attackCooldown <= 0) {
            audio.playHit();
            let pigDmg = 33;
            if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
              pigDmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
            }
            p.hp -= pigDmg;
            createHitParticles(p.x, p.y, '#f48fb1');
            showToast('受到愤怒猪人铁拳重击反制！(-33生命)');
            ent.attackCooldown = 1.5;
          }
        }
      } else if (ent.isFollower) {
        ent.followTimer -= dt;
        if (ent.followTimer <= 0) ent.isFollower = false;
        const d = dist(ent.x, ent.y, p.x, p.y);
        if (d > 60) {
          const angle = Math.atan2(p.y - ent.y, p.x - ent.x);
          ent.x += Math.cos(angle) * 110 * dt;
          ent.y += Math.sin(angle) * 110 * dt;
        }
        if (d < 120) {
          p.sanity = Math.min(p.maxSanity, p.sanity + dt * 0.09);
        }
      } else {
        if (state.timeInDay >= 60 && state.worldLayer === 'surface') {
          let nearestHouse = null;
          let minHouseDist = 9999;
          for (const h of state.entities) {
            if (h.type === 'pig_house') {
              const dh = dist(ent.x, ent.y, h.x, h.y);
              if (dh < minHouseDist) {
                minHouseDist = dh;
                nearestHouse = h;
              }
            }
          }
          if (nearestHouse && minHouseDist > 30) {
            const angle = Math.atan2(nearestHouse.y - ent.y, nearestHouse.x - ent.x);
            ent.x += Math.cos(angle) * 95 * dt;
            ent.y += Math.sin(angle) * 95 * dt;
          }
        }
      }
    }

    // 12. Beefalo (Herd Retaliation, Spring Rut, Night Sleeping)
    if (ent.type === 'beefalo') {
      ent.poopTimer = (ent.poopTimer || 60) - dt;
      if (ent.poopTimer <= 0) {
        ent.poopTimer = Math.random() * 90 + 50;
        dropWorldItem('manure', ent.x, ent.y + 15, 1);
      }

      const isSpring = state.season === 'spring';
      ent.inRut = isSpring;

      // Spring Breeding: Adult wild cows can birth cute calves!
      if (isSpring && !ent.isCalf && Math.random() < 0.002) {
        state.entities.push({
          type: 'beefalo_calf',
          parent: ent,
          x: ent.x + (Math.random() - 0.5) * 30,
          y: ent.y + (Math.random() - 0.5) * 30,
          radius: 18,
          hp: 200, maxHp: 200,
          ageDays: 0
        });
        showToast('🐂🍼 牛群诞生了一只可爱的小牛犊！');
      }

      // Bonded Beefalo Soul Companion Logic
      if (ent.isBonded) {
        ent.sleeping = false;
        const distToPlayer = dist(ent.x, ent.y, p.x, p.y);
        if (distToPlayer > 80) {
          const followAngle = Math.atan2(p.y - ent.y, p.x - ent.x);
          ent.x += Math.cos(followAngle) * 125 * dt;
          ent.y += Math.sin(followAngle) * 125 * dt;
        }
        // Protect Wilson: Attack hostile targets near Wilson
        const nearbyHostile = state.entities.find(h =>
          ['spider', 'spider_warrior', 'hound', 'frog'].includes(h.type) &&
          dist(p.x, p.y, h.x, h.y) < 180
        );
        if (nearbyHostile) {
          const dh = dist(ent.x, ent.y, nearbyHostile.x, nearbyHostile.y);
          const ah = Math.atan2(nearbyHostile.y - ent.y, nearbyHostile.x - ent.x);
          ent.x += Math.cos(ah) * 130 * dt;
          ent.y += Math.sin(ah) * 130 * dt;
          if (dh < 36) {
            ent.attackCooldown = (ent.attackCooldown || 0) - dt;
            if (ent.attackCooldown <= 0) {
              audio.playBeefaloGrunt();
              nearbyHostile.hp -= 42;
              createHitParticles(nearbyHostile.x, nearbyHostile.y, '#e74c3c');
              showToast('🐂 契约皮弗娄牛愤怒角撞护卫击退敌人！');
              ent.attackCooldown = 1.6;
            }
          }
        }
        continue;
      }

      const isNight = state.timeInDay >= 85 && state.worldLayer === 'surface';
      const d = dist(ent.x, ent.y, p.x, p.y);
      const isWearingBeefaloHat = p.equipped.head && p.equipped.head.id === 'beefalo_hat';
      const shouldAggro = (ent.alertHerdTimer > 0) || (ent.inRut && d < 140 && !isWearingBeefaloHat);

      if (ent.alertHerdTimer > 0) ent.alertHerdTimer -= dt;

      if (shouldAggro) {
        ent.sleeping = false;
        const angle = Math.atan2(p.y - ent.y, p.x - ent.x);
        ent.x += Math.cos(angle) * 115 * dt;
        ent.y += Math.sin(angle) * 115 * dt;

        if (d < 36) {
          ent.attackCooldown = (ent.attackCooldown || 0) - dt;
          if (ent.attackCooldown <= 0) {
            audio.playBeefaloGrunt();
            audio.playHit();
            let dmg = 34;
            if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
              dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
            }
            p.hp -= dmg;
            showToast('受到皮弗娄牛尖角顶撞！(-34生命)');
            ent.attackCooldown = 1.8;
          }
        }
      } else if (isNight && !ent.inRut) {
        ent.sleeping = true;
      } else {
        ent.sleeping = false;
      }
    }

    // 13. Wild Rabbits (Burrow fleeing, hiding in hole, hopping, eating ground carrots)
    if (ent.type === 'rabbit') {
      if (ent.hidden) {
        ent.hiddenTimer = (ent.hiddenTimer || 15) - dt;
        if (ent.hiddenTimer <= 0) {
          ent.hidden = false;
          ent.x = ent.homeX || ent.x;
          ent.y = ent.homeY || ent.y;
        }
        continue;
      }

      const d = dist(ent.x, ent.y, p.x, p.y);
      if (d < 125) {
        const hx = ent.homeX || ent.x;
        const hy = ent.homeY || ent.y;
        const dh = dist(ent.x, ent.y, hx, hy);
        if (dh < 18) {
          ent.hidden = true;
          ent.hiddenTimer = 15;
          createHitParticles(ent.x, ent.y, '#8d6e63');
          continue;
        } else {
          const angle = Math.atan2(hy - ent.y, hx - ent.x);
          ent.x += Math.cos(angle) * 135 * dt;
          ent.y += Math.sin(angle) * 135 * dt;
        }
      } else {
        ent.hopTimer = (ent.hopTimer || 2) - dt;
        if (ent.hopTimer <= 0) {
          ent.hopTimer = Math.random() * 2.5 + 1.2;
          const hx = ent.homeX || ent.x;
          const hy = ent.homeY || ent.y;
          const wanderAngle = Math.random() * Math.PI * 2;
          const wanderDist = Math.random() * 60;
          ent.tx = hx + Math.cos(wanderAngle) * wanderDist;
          ent.ty = hy + Math.sin(wanderAngle) * wanderDist;
        }
        if (ent.tx !== undefined) {
          const dx = ent.tx - ent.x;
          const dy = ent.ty - ent.y;
          if (Math.hypot(dx, dy) > 5) {
            const angle = Math.atan2(dy, dx);
            ent.x += Math.cos(angle) * 45 * dt;
            ent.y += Math.sin(angle) * 45 * dt;
          }
        }
      }
    }

    // Tornado (from Weather Pain spell)
    if (ent.type === 'tornado') {
      ent.timer = (ent.timer || 0) + dt;
      if (ent.timer >= (ent.duration || 5.5)) {
        state.entities = state.entities.filter(e => e !== ent);
        continue;
      }
      ent.x += ent.vx * dt;
      ent.y += ent.vy * dt;
      ent.spin = ((ent.spin || 0) + dt * 16) % (Math.PI * 2);
      for (const t of state.entities) {
        if (t === ent) continue;
        if (dist(ent.x, ent.y, t.x, t.y) < ent.radius + (t.radius || 20)) {
          if (t.type === 'tree' || t.type === 'rock') {
            t.hp = 0;
            createHitParticles(t.x, t.y, '#90a4ae');
          } else if (['spider', 'spider_warrior', 'hound', 'treeguard', 'deerclops', 'bearger', 'moosegoose', 'dragonfly', 'klaus', 'crawling_horror', 'terrorbeak'].includes(t.type)) {
            t.hp -= 30 * dt * 3.5;
            createHitParticles(t.x, t.y, '#b0bec5');
          }
        }
      }
    }

    // Beefalo Calf (Cute baby calf following mom)
    if (ent.type === 'beefalo_calf') {
      if (ent.parent && state.entities.includes(ent.parent)) {
        const dp = dist(ent.x, ent.y, ent.parent.x, ent.parent.y);
        if (dp > 45) {
          const ap = Math.atan2(ent.parent.y - ent.y, ent.parent.x - ent.x);
          ent.x += Math.cos(ap) * 85 * dt;
          ent.y += Math.sin(ap) * 85 * dt;
        }
      }
    }

    // Buzzards (Desert scavengers)
    if (ent.type === 'buzzard') {
      if (ent.target) {
        const d = dist(ent.x, ent.y, ent.target.x, ent.target.y);
        const a = Math.atan2(ent.target.y - ent.y, ent.target.x - ent.x);
        ent.x += Math.cos(a) * 110 * dt;
        ent.y += Math.sin(a) * 110 * dt;
        if (d < 28) {
          ent.attackCooldown = (ent.attackCooldown || 0) - dt;
          if (ent.attackCooldown <= 0) {
            audio.playHit();
            p.hp -= 15;
            showToast('🦅 秃鹰尖喙俯冲啄击！(-15 HP)');
            ent.attackCooldown = 1.6;
          }
        }
      } else {
        const meatDrop = state.entities.find(d => d.type === 'drop' && ['meat', 'morsel', 'monster_meat'].includes(d.itemId) && dist(ent.x, ent.y, d.x, d.y) < 180);
        if (meatDrop) {
          const a = Math.atan2(meatDrop.y - ent.y, meatDrop.x - ent.x);
          ent.x += Math.cos(a) * 75 * dt;
          ent.y += Math.sin(a) * 75 * dt;
          if (dist(ent.x, ent.y, meatDrop.x, meatDrop.y) < 20) {
            state.entities = state.entities.filter(e => e !== meatDrop);
            audio.playEat();
            showToast('🦅 沙漠秃鹰偷食了地面的生肉！');
          }
        } else {
          ent.circleAngle = ((ent.circleAngle || 0) + dt * 0.8) % (Math.PI * 2);
          ent.x += Math.cos(ent.circleAngle) * 35 * dt;
          ent.y += Math.sin(ent.circleAngle) * 35 * dt;
        }
      }
    }

    // Klaus (Winter Mythic Boss with 2 phases)
    if (ent.type === 'klaus') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      const a = Math.atan2(p.y - ent.y, p.x - ent.x);
      const isEnraged = ent.hp < 1000;
      const moveSpeed = isEnraged ? 120 : 70;
      ent.x += Math.cos(a) * moveSpeed * dt;
      ent.y += Math.sin(a) * moveSpeed * dt;
      ent.attackCooldown = (ent.attackCooldown || 0) - dt;
      if (d < 50 && ent.attackCooldown <= 0) {
        audio.playBossRoar();
        audio.playHit();
        const dmg = isEnraged ? 65 : 45;
        p.hp -= dmg;
        showToast(isEnraged ? '👹 克劳斯胸腹巨口暴怒撕咬！(-65 HP)' : '👹 克劳斯锁链重拳暴击！(-45 HP)');
        ent.attackCooldown = isEnraged ? 1.2 : 2.0;
      }
    }

    // Gem Deer (Red fire spells & Blue freeze spells)
    if (ent.type === 'gem_deer') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      if (d > 120) {
        const a = Math.atan2(p.y - ent.y, p.x - ent.x);
        ent.x += Math.cos(a) * 80 * dt;
        ent.y += Math.sin(a) * 80 * dt;
      }
      ent.spellCooldown = (ent.spellCooldown || 4) - dt;
      if (ent.spellCooldown <= 0 && d < 240) {
        ent.spellCooldown = 5.0;
        if (ent.deerType === 'red') {
          createHitParticles(p.x, p.y, '#ff5722');
          p.hp -= 15;
          showToast('🔥 红宝石鹿引爆了烈焰法阵！(-15 HP)');
        } else {
          createHitParticles(p.x, p.y, '#00e5ff');
          p.speed = (CHARACTERS[state.character]?.speed || 165) * 0.5;
          showToast('❄️ 蓝宝石鹿释放了极寒冰封减速！');
        }
      }
    }

    // 14. Tallbirds (Nest defense, peck & kite AI)
    if (ent.type === 'tallbird') {
      const nx = ent.nestX || ent.x;
      const ny = ent.nestY || ent.y;
      const dPlayerNest = dist(p.x, p.y, nx, ny);
      const dPlayer = dist(p.x, p.y, ent.x, ent.y);

      const guardRadius = ent.angryEggStolen ? 600 : 180;
      if (dPlayerNest < guardRadius || ent.angryEggStolen) {
        if (ent.kiteTimer > 0) {
          ent.kiteTimer -= dt;
          const retreatAngle = Math.atan2(ent.y - p.y, ent.x - p.x);
          ent.x += Math.cos(retreatAngle) * 75 * dt;
          ent.y += Math.sin(retreatAngle) * 75 * dt;
        } else {
          const lungeAngle = Math.atan2(p.y - ent.y, p.x - ent.x);
          ent.x += Math.cos(lungeAngle) * 150 * dt;
          ent.y += Math.sin(lungeAngle) * 150 * dt;

          if (dPlayer < 36) {
            audio.playHit();
            let dmg = 50;
            if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
              dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
            }
            p.hp -= dmg;
            showToast('高脚鸟锐利铁喙猛烈啄击！(-50生命)');
            ent.kiteTimer = 1.35;
          }
        }
      } else {
        const dNest = dist(ent.x, ent.y, nx, ny);
        if (dNest > 20) {
          const angle = Math.atan2(ny - ent.y, nx - ent.x);
          ent.x += Math.cos(angle) * 70 * dt;
          ent.y += Math.sin(angle) * 70 * dt;
        }
      }
    }

    // 15. Swamp Tentacles (Lurk under mud, emerge spike whip)
    if (ent.type === 'tentacle') {
      const d = dist(p.x, p.y, ent.x, ent.y);
      if (ent.submerged === undefined) ent.submerged = true;

      if (ent.submerged) {
        if (d < 72) {
          ent.submerged = false;
          ent.idleTimer = 0;
          audio.playHit();
          showToast('⚠️ 沼泽潜伏触手猛然破泥而出！');
        }
      } else {
        if (d < 90) {
          p.sanity = Math.max(0, p.sanity - dt * 0.67);
        }

        if (d < 75) {
          ent.idleTimer = 0;
          ent.attackCooldown = (ent.attackCooldown || 0) - dt;
          if (ent.attackCooldown <= 0) {
            audio.playHit();
            let dmg = 34;
            if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
              dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
            }
            p.hp -= dmg;
            createHitParticles(p.x, p.y, '#8e24aa');
            showToast('触手带刺鞭笞重创了你！(-34生命)');
            ent.attackCooldown = 0.85;
          }
        } else {
          ent.idleTimer = (ent.idleTimer || 0) + dt;
          if (ent.idleTimer > 2.8) {
            ent.submerged = true;
            ent.idleTimer = 0;
          }
        }
      }
    }

    // 16. Frogs (Rain aggro, Tongue lash item-knockout)
    if (ent.type === 'frog') {
      const isRain = state.weather === 'rain' || state.season === 'spring';
      const d = dist(p.x, p.y, ent.x, ent.y);

      if (isRain || ent.aggro) {
        if (d < 180) {
          const angle = Math.atan2(p.y - ent.y, p.x - ent.x);
          ent.x += Math.cos(angle) * 95 * dt;
          ent.y += Math.sin(angle) * 95 * dt;

          if (d < 65) {
            ent.attackCooldown = (ent.attackCooldown || 0) - dt;
            if (ent.attackCooldown <= 0) {
              audio.playHit();
              p.hp -= 10;
              const occupiedIdx = p.inventory.findIndex(s => s !== null);
              if (occupiedIdx !== -1) {
                const knocked = p.inventory[occupiedIdx];
                p.inventory[occupiedIdx] = null;
                dropWorldItem(knocked.id, p.x + (Math.random() - 0.5) * 35, p.y + (Math.random() - 0.5) * 35, knocked.count);
                audio.playPickup();
                showToast(`🐸 青蛙长舌飞甩！将【${ITEMS[knocked.id].name}】抽落到了地上！`);
                updateInventoryUI();
              } else {
                showToast('受到青蛙长舌抽击！(-10生命)');
              }
              ent.attackCooldown = 1.6;
            }
          }
        }
      } else {
        ent.hopTimer = (ent.hopTimer || 2) - dt;
        if (ent.hopTimer <= 0) {
          ent.hopTimer = Math.random() * 3 + 1.5;
          const hopAngle = Math.random() * Math.PI * 2;
          ent.x += Math.cos(hopAngle) * 25;
          ent.y += Math.sin(hopAngle) * 25;
        }
      }
    }

    // 17. Ghosts (Sanity drain aura, touch damage)
    if (ent.type === 'ghost') {
      const d = dist(p.x, p.y, ent.x, ent.y);
      if (d < 220) {
        p.sanity = Math.max(0, p.sanity - dt * 0.42);

        const angle = Math.atan2(p.y - ent.y, p.x - ent.x);
        ent.x += Math.cos(angle) * 52 * dt;
        ent.y += Math.sin(angle) * 52 * dt;

        if (d < 28) {
          ent.attackCooldown = (ent.attackCooldown || 0) - dt;
          if (ent.attackCooldown <= 0) {
            audio.playHoundGrowl();
            p.hp -= 15;
            p.sanity = Math.max(0, p.sanity - 5);
            showToast('荒野幽魂冰冷穿透了身躯！(-15生命, -5理智)');
            ent.attackCooldown = 1.5;
          }
        }
      } else {
        ent.wanderTimer = (ent.wanderTimer || 3) - dt;
        if (ent.wanderTimer <= 0) {
          ent.wanderTimer = Math.random() * 3 + 2;
          ent.wanderAngle = Math.random() * Math.PI * 2;
        }
        if (ent.wanderAngle !== undefined) {
          ent.x += Math.cos(ent.wanderAngle) * 18 * dt;
          ent.y += Math.sin(ent.wanderAngle) * 18 * dt;
        }
      }
    }

    // 18. Butterflies (Gentle fluttering, land on flowers, flees when approached)
    if (ent.type === 'butterfly') {
      ent.flapTick = (ent.flapTick || 0) + dt * 10;
      const d = dist(p.x, p.y, ent.x, ent.y);
      if (d < 70) {
        const angle = Math.atan2(ent.y - p.y, ent.x - p.x);
        ent.x += Math.cos(angle) * 60 * dt;
        ent.y += Math.sin(angle) * 60 * dt;
      } else {
        ent.wanderTimer = (ent.wanderTimer || 1.5) - dt;
        if (ent.wanderTimer <= 0) {
          ent.wanderTimer = Math.random() * 2 + 1;
          ent.wanderAngle = Math.random() * Math.PI * 2;
        }
        if (ent.wanderAngle !== undefined) {
          ent.x += Math.cos(ent.wanderAngle) * 22 * dt;
          ent.y += Math.sin(ent.wanderAngle) * 22 * dt;
        }
      }
    }

    // 19. Gobblers (Fast, seeks dropped berries, flees from player)
    if (ent.type === 'gobbler') {
      const d = dist(p.x, p.y, ent.x, ent.y);
      if (d < 100) {
        const angle = Math.atan2(ent.y - p.y, ent.x - p.x);
        ent.x += Math.cos(angle) * (ent.speed || 130) * dt;
        ent.y += Math.sin(angle) * (ent.speed || 130) * dt;
      } else {
        let targetDrop = null;
        for (const drop of state.entities) {
          if (drop.type === 'drop' && drop.itemId === 'berry' && dist(ent.x, ent.y, drop.x, drop.y) < 220) {
            targetDrop = drop;
            break;
          }
        }
        if (targetDrop) {
          const ba = Math.atan2(targetDrop.y - ent.y, targetDrop.x - ent.x);
          ent.x += Math.cos(ba) * 90 * dt;
          ent.y += Math.sin(ba) * 90 * dt;
          if (dist(ent.x, ent.y, targetDrop.x, targetDrop.y) < 18) {
            state.entities = state.entities.filter(e => e !== targetDrop);
            audio.playEat();
            showToast('🦃 火鸡狼吞虎咽地吃掉了地上的鲜浆果！');
          }
        } else {
          ent.wanderTimer = (ent.wanderTimer || 2) - dt;
          if (ent.wanderTimer <= 0) {
            ent.wanderTimer = Math.random() * 2 + 1;
            ent.wanderAngle = Math.random() * Math.PI * 2;
          }
          if (ent.wanderAngle !== undefined) {
            ent.x += Math.cos(ent.wanderAngle) * 35 * dt;
            ent.y += Math.sin(ent.wanderAngle) * 35 * dt;
          }
        }
      }
    }

    // 20. Bees & Killer Bees (with active Swarm Counterattack!)
    if (ent.type === 'bee' || ent.type === 'killer_bee') {
      ent.flapTick = (ent.flapTick || 0) + dt * 15;
      const isKiller = ent.type === 'killer_bee';
      if (ent.aggroTimer > 0) {
        ent.aggroTimer -= dt;
      } else if (!isKiller && ent.target === p) {
        ent.target = null;
      }

      const target = isKiller ? p : ent.target;
      const td = target ? dist(ent.x, ent.y, target.x, target.y) : 999;

      if (target && td < 320) {
        const angle = Math.atan2(target.y - ent.y, target.x - ent.x);
        ent.x += Math.cos(angle) * (isKiller ? 120 : 95) * dt;
        ent.y += Math.sin(angle) * (isKiller ? 120 : 95) * dt;
        if (td < 28) {
          ent.attackCooldown = (ent.attackCooldown || 0) - dt;
          if (ent.attackCooldown <= 0) {
            audio.playHit();
            let stingDmg = isKiller ? 12 : 9;
            if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
              stingDmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
            }
            p.hp -= stingDmg;
            createHitParticles(p.x, p.y, '#ffd54f');
            showToast(isKiller ? '🐝 杀人蜂剧毒毒刺蜇伤了你！(-12 HP)' : '🐝 工蜂毒刺愤怒反击蜇击！(-9 HP)');
            ent.attackCooldown = 1.3;
          }
        }
      } else {
        ent.wanderTimer = (ent.wanderTimer || 2) - dt;
        if (ent.wanderTimer <= 0) {
          ent.wanderTimer = Math.random() * 3 + 1;
          const a = Math.random() * Math.PI * 2;
          ent.wanderVx = Math.cos(a) * 35;
          ent.wanderVy = Math.sin(a) * 35;
        }
        ent.x += (ent.wanderVx || 0) * dt;
        ent.y += (ent.wanderVy || 0) * dt;
        if (ent.homeX && dist(ent.x, ent.y, ent.homeX, ent.homeY) > 200) {
          const back = Math.atan2(ent.homeY - ent.y, ent.homeX - ent.x);
          ent.x += Math.cos(back) * 45 * dt;
          ent.y += Math.sin(back) * 45 * dt;
        }
      }
    }

    // 21. Birds (Crows & Redbirds)
    if (ent.type === 'bird') {
      const d = dist(p.x, p.y, ent.x, ent.y);
      if (d < 75 || ent.isFlying) {
        ent.isFlying = true;
        ent.y -= 110 * dt;
        ent.scale = Math.max(0, (ent.scale || 1.0) - dt * 0.7);
        if (ent.scale <= 0) {
          ent.x = p.x + (Math.random() - 0.5) * 800;
          ent.y = p.y + (Math.random() - 0.5) * 800;
          ent.isFlying = false;
          ent.scale = 1.0;
        }
      } else {
        ent.hopTick = (ent.hopTick || 0) + dt;
        if (Math.random() < 0.02) {
          ent.x += (Math.random() - 0.5) * 12;
          ent.y += (Math.random() - 0.5) * 12;
        }
      }
    }

    // 22. Tumbleweeds (Rolling across desert)
    if (ent.type === 'tumbleweed') {
      ent.x += (ent.vx || 45) * dt;
      ent.y += (ent.vy || 0) * dt;
      ent.rotation = (ent.rotation || 0) + dt * 4;
      if (ent.x > 2200) ent.x = 1600;
      if (ent.y < 500) ent.y = 950;
      if (ent.y > 1050) ent.y = 600;
    }

    // 23. Catcoons (Deciduous forest friends, chasing bugs, coughing gifts)
    if (ent.type === 'catcoon') {
      ent.tailTick = (ent.tailTick || 0) + dt * 6;
      if (ent.target && ent.aggroTimer > 0) {
        ent.aggroTimer -= dt;
        const d = dist(p.x, p.y, ent.x, ent.y);
        const a = Math.atan2(p.y - ent.y, p.x - ent.x);
        ent.x += Math.cos(a) * 110 * dt;
        ent.y += Math.sin(a) * 110 * dt;
        if (d < 45) {
          ent.attackCooldown = (ent.attackCooldown || 0) - dt;
          if (ent.attackCooldown <= 0) {
            audio.playHit();
            p.hp -= 25;
            showToast('🐱 浣熊猫受惊弓爪猛烈反击！(-25 HP)');
            ent.attackCooldown = 1.5;
          }
        }
      } else if (ent.isFriend && ent.friendTimer > 0) {
        ent.friendTimer -= dt;
        const d = dist(p.x, p.y, ent.x, ent.y);
        if (d > 60) {
          const a = Math.atan2(p.y - ent.y, p.x - ent.x);
          ent.x += Math.cos(a) * 95 * dt;
          ent.y += Math.sin(a) * 95 * dt;
        }
        ent.giftTimer = (ent.giftTimer || 45) - dt;
        if (ent.giftTimer <= 0) {
          ent.giftTimer = 50 + Math.random() * 30;
          const gifts = ['flint', 'seeds', 'jet_feather', 'crimson_feather', 'gold', 'trinket'];
          const g = gifts[Math.floor(Math.random() * gifts.length)];
          dropWorldItem(g, ent.x + 15, ent.y + 10, 1);
          audio.playCraft();
          showToast(`🐱 浣猫欢快地摇晃尾巴，为你吐出了一份礼物【${ITEMS[g]?.name || '战利品'}】！`);
        }
      } else {
        let targetBug = null;
        for (const b of state.entities) {
          if ((b.type === 'butterfly' || b.type === 'bird') && dist(ent.x, ent.y, b.x, b.y) < 120) {
            targetBug = b;
            break;
          }
        }
        if (targetBug) {
          const ba = Math.atan2(targetBug.y - ent.y, targetBug.x - ent.x);
          ent.x += Math.cos(ba) * 75 * dt;
          ent.y += Math.sin(ba) * 75 * dt;
        } else {
          ent.wanderTimer = (ent.wanderTimer || 2) - dt;
          if (ent.wanderTimer <= 0) {
            ent.wanderTimer = Math.random() * 3 + 1;
            ent.wanderAngle = Math.random() * Math.PI * 2;
          }
          if (ent.wanderAngle !== undefined) {
            ent.x += Math.cos(ent.wanderAngle) * 30 * dt;
            ent.y += Math.sin(ent.wanderAngle) * 30 * dt;
          }
        }
      }
    }

    // 24. Glommer (Sanity aura, fuel drops)
    if (ent.type === 'glommer') {
      const d = dist(p.x, p.y, ent.x, ent.y);
      if (d > 45) {
        const a = Math.atan2(p.y - 25 - ent.y, p.x - 25 - ent.x);
        ent.x += Math.cos(a) * 90 * dt;
        ent.y += Math.sin(a) * 90 * dt;
      }
      p.sanity = Math.min(p.maxHp, p.sanity + dt * 0.11);
      ent.fuelTimer = (ent.fuelTimer || 90) - dt;
      if (ent.fuelTimer <= 0) {
        ent.fuelTimer = 160;
        dropWorldItem('glommer_fuel', ent.x, ent.y, 1);
        showToast('🧪 格罗姆排泄了一块高能【格罗姆黏液】！');
      }
    }

    // 25. Clockwork Bishop (Ranged electric orb sniper)
    if (ent.type === 'clockwork_bishop') {
      const d = dist(p.x, p.y, ent.x, ent.y);
      if (d < 220) {
        ent.chargeTimer = (ent.chargeTimer || 0) + dt;
        if (ent.chargeTimer >= 1.5) {
          ent.chargeTimer = 0;
          audio.playMagic();
          p.hp -= 25;
          createHitParticles(p.x, p.y, '#9c27b0');
          showToast('⚡ 发条主教轰出了一记穿心紫电法球！(-25 HP)');
        }
      } else {
        ent.chargeTimer = Math.max(0, (ent.chargeTimer || 0) - dt);
      }
    }

    // 26. Clockwork Rook (Unstoppable bull charge, smashes terrain)
    if (ent.type === 'clockwork_rook') {
      const d = dist(p.x, p.y, ent.x, ent.y);
      if (d < 240 && !ent.isCharging) {
        ent.attackCooldown = (ent.attackCooldown || 0) - dt;
        if (ent.attackCooldown <= 0) {
          ent.isCharging = true;
          ent.chargeTimer = 1.2;
          const a = Math.atan2(p.y - ent.y, p.x - ent.x);
          ent.chargeVx = Math.cos(a) * 180;
          ent.chargeVy = Math.sin(a) * 180;
          audio.playThunder();
          showToast('🚂 轰隆作响！发条战车开启了狂暴推土机冲撞！');
        }
      }
      if (ent.isCharging) {
        ent.x += ent.chargeVx * dt;
        ent.y += ent.chargeVy * dt;
        ent.chargeTimer -= dt;

        if (dist(ent.x, ent.y, p.x, p.y) < 35) {
          audio.playHit();
          p.hp -= 45;
          p.x += ent.chargeVx * 0.15;
          p.y += ent.chargeVy * 0.15;
          showToast('💥 被狂暴发条战车迎面撞飞！(-45 HP)');
          ent.isCharging = false;
          ent.attackCooldown = 3.5;
        }

        for (const env of state.entities) {
          if ((env.type === 'tree' || env.type === 'rock') && dist(ent.x, ent.y, env.x, env.y) < 32) {
            env.hp = 0;
            audio.playChop();
            createHitParticles(env.x, env.y, '#8b5a2b');
          }
        }

        if (ent.chargeTimer <= 0) {
          ent.isCharging = false;
          ent.attackCooldown = 3.0;
        }
      }
    }

    // 27. Merms (Swamp guardians, attack pigs & players)
    if (ent.type === 'merm') {
      const d = dist(p.x, p.y, ent.x, ent.y);
      if (d < 130) {
        const a = Math.atan2(p.y - ent.y, p.x - ent.x);
        ent.x += Math.cos(a) * 85 * dt;
        ent.y += Math.sin(a) * 85 * dt;
        if (d < 28) {
          ent.attackCooldown = (ent.attackCooldown || 0) - dt;
          if (ent.attackCooldown <= 0) {
            audio.playHit();
            p.hp -= 20;
            showToast('🐟 沼泽鱼人用木叉猛刺了过来！(-20 HP)');
            ent.attackCooldown = 1.6;
          }
        }
      } else if (ent.homeX) {
        if (dist(ent.x, ent.y, ent.homeX, ent.homeY) > 160) {
          const ba = Math.atan2(ent.homeY - ent.y, ent.homeX - ent.x);
          ent.x += Math.cos(ba) * 45 * dt;
          ent.y += Math.sin(ba) * 45 * dt;
        }
      }
    }

    // 28. Koalefant (Massive beast, charges when provoked)
    if (ent.type === 'koalefant') {
      if (ent.target) {
        const d = dist(ent.x, ent.y, ent.target.x, ent.target.y);
        const a = Math.atan2(ent.target.y - ent.y, ent.target.x - ent.x);
        ent.x += Math.cos(a) * 95 * dt;
        ent.y += Math.sin(a) * 95 * dt;
        if (d < 45) {
          ent.attackCooldown = (ent.attackCooldown || 0) - dt;
          if (ent.attackCooldown <= 0) {
            audio.playHit();
            p.hp -= 50;
            showToast('🐘 考拉象巨鼻猛甩重击！(-50 HP)');
            ent.attackCooldown = 2.0;
          }
        }
      } else {
        ent.wanderTimer = (ent.wanderTimer || 3) - dt;
        if (ent.wanderTimer <= 0) {
          ent.wanderTimer = Math.random() * 4 + 2;
          ent.wanderAngle = Math.random() * Math.PI * 2;
        }
        if (ent.wanderAngle !== undefined) {
          ent.x += Math.cos(ent.wanderAngle) * 20 * dt;
          ent.y += Math.sin(ent.wanderAngle) * 20 * dt;
        }
      }
    }

    // 29. Hound Mounds (Spawns hounds periodically)
    if (ent.type === 'hound_mound') {
      ent.spawnTimer = (ent.spawnTimer || 35) - dt;
      if (ent.spawnTimer <= 0) {
        ent.spawnTimer = (state.difficulty === 'easy' ? 95 : (state.difficulty === 'hard' ? 45 : 70)) + Math.random() * 20;
        const nearbyHounds = state.entities.filter(e => (e.type === 'hound' || e.type === 'fire_hound') && dist(e.x, e.y, ent.x, ent.y) < 250).length;
        const maxHounds = state.difficulty === 'hard' ? 3 : 2;
        if (nearbyHounds < maxHounds) {
          state.entities.push({
            type: Math.random() < 0.25 ? 'fire_hound' : 'hound',
            x: ent.x + (Math.random() - 0.5) * 40,
            y: ent.y + (Math.random() - 0.5) * 40,
            hp: 60, maxHp: 60,
            speed: 110,
            radius: 16,
            isWave: false,
            originX: ent.x,
            originY: ent.y
          });
        }
      }
    }

    // 30. Cacti Regrowth
    if (ent.type === 'cactus' && ent.harvested) {
      ent.regrowTimer = (ent.regrowTimer || 160) - dt;
      if (ent.regrowTimer <= 0) {
        ent.harvested = false;
      }
    }
  }
}

function getSeasonName(s) {
  if (s === 'autumn') return '秋季';
  if (s === 'winter') return '冬季';
  if (s === 'spring') return '春季';
  if (s === 'summer') return '夏季';
  return s;
}

function updateHUD() {
  const p = state.player;
  document.getElementById('val-health').innerText = `${Math.ceil(p.hp)}/${p.maxHp}`;
  document.getElementById('bar-health').style.width = `${(p.hp / p.maxHp) * 100}%`;

  document.getElementById('val-hunger').innerText = `${Math.ceil(p.hunger)}/${p.maxHunger}`;
  document.getElementById('bar-hunger').style.width = `${(p.hunger / p.maxHunger) * 100}%`;

  document.getElementById('val-sanity').innerText = `${Math.ceil(p.sanity)}/${p.maxSanity}`;
  document.getElementById('bar-sanity').style.width = `${(p.sanity / p.maxSanity) * 100}%`;

  const isFullMoon = (state.day % 16 === 9 || state.day % 16 === 10) && state.timeInDay >= 85 && state.worldLayer === 'surface';
  const layerTag = state.worldLayer === 'caves' ? '🕯️ 地下洞穴 · ' : (isFullMoon ? '🌕 满月狂欢 · ' : '');
  document.getElementById('day-counter').innerText = `${layerTag}第 ${state.day} 天`;

  // Secondary gauges
  document.getElementById('temp-val').innerText = `${Math.round(p.temp)}°C`;
  document.getElementById('wet-val').innerText = `${Math.round(p.wetness)}%`;

  // Season badge
  const sBadge = document.getElementById('season-badge');
  sBadge.className = `season-${state.season}`;
  sBadge.innerText = `${getSeasonName(state.season)} (剩${state.seasonLength - state.seasonDay + 1}天)`;

  renderClock();
}

function renderClock() {
  clockCtx.clearRect(0, 0, 84, 84);
  const cx = 42, cy = 42, r = 38;
  const split = getTimePhaseSplit(state.season);

  const dayAngle = (split.daySegs / 16) * Math.PI * 2;
  const duskAngle = (split.duskSegs / 16) * Math.PI * 2;
  const nightAngle = (split.nightSegs / 16) * Math.PI * 2;

  let start = -Math.PI / 2;

  // 1. Day wedge (Gold)
  clockCtx.beginPath();
  clockCtx.moveTo(cx, cy);
  clockCtx.arc(cx, cy, r, start, start + dayAngle);
  clockCtx.fillStyle = '#f39c12';
  clockCtx.fill();
  start += dayAngle;

  // 2. Dusk wedge (Red/Orange)
  clockCtx.beginPath();
  clockCtx.moveTo(cx, cy);
  clockCtx.arc(cx, cy, r, start, start + duskAngle);
  clockCtx.fillStyle = '#c0392b';
  clockCtx.fill();
  start += duskAngle;

  // 3. Night wedge (Navy Blue / Deep Charcoal)
  clockCtx.beginPath();
  clockCtx.moveTo(cx, cy);
  clockCtx.arc(cx, cy, r, start, start + nightAngle);
  clockCtx.fillStyle = '#1a1a2e';
  clockCtx.fill();

  // 4. 16 authentic Don't Starve clock segment tick marks
  clockCtx.strokeStyle = 'rgba(0, 0, 0, 0.45)';
  clockCtx.lineWidth = 1.2;
  for (let i = 0; i < 16; i++) {
    const tickA = -Math.PI / 2 + (i / 16) * Math.PI * 2;
    clockCtx.beginPath();
    clockCtx.moveTo(cx + Math.cos(tickA) * (r - 7), cy + Math.sin(tickA) * (r - 7));
    clockCtx.lineTo(cx + Math.cos(tickA) * r, cy + Math.sin(tickA) * r);
    clockCtx.stroke();
  }

  // 5. Dial border rim
  clockCtx.strokeStyle = '#3e2723';
  clockCtx.lineWidth = 2.5;
  clockCtx.beginPath();
  clockCtx.arc(cx, cy, r, 0, Math.PI * 2);
  clockCtx.stroke();

  // 6. Pointer Hand
  const curAngle = -Math.PI / 2 + (state.timeInDay / state.dayLength) * Math.PI * 2;
  clockCtx.beginPath();
  clockCtx.moveTo(cx, cy);
  clockCtx.lineTo(cx + Math.cos(curAngle) * (r - 5), cy + Math.sin(curAngle) * (r - 5));
  clockCtx.strokeStyle = '#ffffff';
  clockCtx.lineWidth = 3;
  clockCtx.stroke();

  // 7. Center Knob
  clockCtx.beginPath();
  clockCtx.arc(cx, cy, 5, 0, Math.PI * 2);
  clockCtx.fillStyle = '#ffeedb';
  clockCtx.fill();
}

function drawTerrainDetails() {
  const startX = Math.floor(state.camera.x / 80) * 80;
  const startY = Math.floor(state.camera.y / 80) * 80;
  const endX = state.camera.x + canvas.width + 80;
  const endY = state.camera.y + canvas.height + 80;

  const isWinter = state.season === 'winter';
  const isSpring = state.season === 'spring';
  const isAutumn = state.season === 'autumn';
  const isSummer = state.season === 'summer';
  const isCaves = state.worldLayer === 'caves';

  for (let x = startX; x < endX; x += 80) {
    for (let y = startY; y < endY; y += 80) {
      const biome = getBiomeAt(x + 40, y + 40);

      // Fill tile with biome-specific ground color
      ctx.fillStyle = biome.groundColor;
      ctx.fillRect(x, y, 80, 80);

      const h1 = Math.abs(Math.sin(x * 12.9898 + y * 78.233) * 43758.5453) % 1;
      const h2 = Math.abs(Math.cos(x * 39.3456 + y * 19.876) * 23421.631) % 1;

      // Biome-specific turf patterns & textures
      if (biome.id === 'savanna') {
        ctx.strokeStyle = biome.turfAccent;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x + 10, y + 25); ctx.lineTo(x + 35, y + 20);
        ctx.moveTo(x + 45, y + 60); ctx.lineTo(x + 70, y + 55);
        ctx.stroke();
      } else if (biome.id === 'rockyland') {
        ctx.strokeStyle = biome.turfAccent;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(x + 20, y + 30); ctx.lineTo(x + 40, y + 50); ctx.lineTo(x + 65, y + 40);
        ctx.stroke();
      } else if (biome.id === 'swamp') {
        ctx.fillStyle = biome.turfAccent;
        ctx.beginPath();
        ctx.ellipse(x + 40, y + 40, 24, 14, h1 * Math.PI, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#4a148c';
        ctx.beginPath();
        ctx.arc(x + 30 + h1 * 20, y + 30 + h2 * 20, 2.5, 0, Math.PI * 2);
        ctx.fill();
      } else if (biome.id === 'graveyard') {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.beginPath();
        ctx.ellipse(x + 40, y + 40, 32, 18, 0, 0, Math.PI * 2);
        ctx.fill();
      } else if (biome.id === 'ocean') {
        ctx.strokeStyle = 'rgba(78, 168, 214, 0.35)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x + 40, y + 40, 22, 0, Math.PI);
        ctx.stroke();
      } else if (biome.id === 'lunar') {
        ctx.fillStyle = 'rgba(111, 201, 219, 0.15)';
        ctx.beginPath();
        ctx.arc(x + 40, y + 40, 15, 0, Math.PI * 2);
        ctx.fill();
      } else if (biome.id === 'desert') {
        ctx.strokeStyle = biome.turfAccent;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(x + 10, y + 35);
        ctx.quadraticCurveTo(x + 40, y + 25, x + 70, y + 40);
        ctx.stroke();
      } else if (biome.id === 'deciduous') {
        ctx.fillStyle = biome.turfAccent;
        ctx.beginPath();
        ctx.ellipse(x + 35 + h1 * 20, y + 35 + h2 * 20, 6, 3.5, h1 * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      } else if (biome.id === 'mosaic') {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(x + 5, y + 5, 70, 70);
        ctx.fillStyle = h1 < 0.5 ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.06)';
        ctx.fillRect(x + 5, y + 5, 35, 35);
        ctx.fillRect(x + 40, y + 40, 35, 35);
      } else if (biome.id === 'grasslands') {
        ctx.fillStyle = 'rgba(76, 175, 80, 0.12)';
        ctx.beginPath();
        ctx.arc(x + 30 + h1 * 20, y + 30 + h2 * 20, 12, 0, Math.PI * 2);
        ctx.fill();
      }

      // Seasonal tint overlays
      if (isWinter) {
        ctx.fillStyle = 'rgba(236, 240, 241, 0.28)';
        ctx.fillRect(x, y, 80, 80);
      } else if (isSummer) {
        ctx.fillStyle = 'rgba(244, 81, 30, 0.06)';
        ctx.fillRect(x, y, 80, 80);
      }

      const px = x + (h1 * 60) + 10;
      const py = y + (h2 * 60) + 10;

      if (h1 < 0.28) {
        // Small pebble / stone
        ctx.fillStyle = 'rgba(0,0,0,0.22)';
        ctx.beginPath();
        ctx.ellipse(px + 1, py + 1, 3.5, 2, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = isCaves ? '#3d3838' : (isWinter ? '#78828a' : (biome.pebbleColor || '#4a3f35'));
        ctx.beginPath();
        ctx.ellipse(px, py, 3, 2, 0.2, 0, Math.PI * 2);
        ctx.fill();
      } else if (h1 < 0.55) {
        // Tiny grass / lichen sprouts
        ctx.strokeStyle = isCaves ? '#2e4530' : (isWinter ? '#5a6b73' : (isSpring ? '#4caf50' : (biome.grassSproutColor || '#334425')));
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px - 3, py - 6);
        ctx.moveTo(px + 2, py);
        ctx.lineTo(px + 5, py - 7);
        ctx.stroke();
      } else if (h1 < 0.72) {
        // Seasonal ground flora
        if (isAutumn) {
          ctx.fillStyle = h2 < 0.5 ? '#b24a2b' : '#c27d38';
          ctx.beginPath();
          ctx.ellipse(px, py, 4, 2.2, h2 * Math.PI, 0, Math.PI * 2);
          ctx.fill();
        } else if (isWinter) {
          ctx.fillStyle = 'rgba(236, 240, 241, 0.35)';
          ctx.beginPath();
          ctx.ellipse(px, py, 8, 4, 0, 0, Math.PI * 2);
          ctx.fill();
        } else if (isSpring) {
          ctx.fillStyle = h2 < 0.5 ? '#e91e63' : '#ffeb3b';
          ctx.beginPath();
          ctx.arc(px, py, 1.8, 0, Math.PI * 2);
          ctx.fill();
        } else if (isSummer) {
          ctx.strokeStyle = '#27170c';
          ctx.lineWidth = 1.0;
          ctx.beginPath();
          ctx.moveTo(px - 5, py);
          ctx.lineTo(px + 5, py + 2);
          ctx.stroke();
        }
      }
    }
  }
}

function drawCustomItemGraphic(ctx, id, x, y, size = 26) {
  ctx.save();
  ctx.translate(x, y);

  switch (id) {
    case 'flint': {
      ctx.fillStyle = '#2d313d';
      ctx.strokeStyle = '#12141a';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.55);
      ctx.lineTo(size * 0.45, -size * 0.1);
      ctx.lineTo(size * 0.35, size * 0.48);
      ctx.lineTo(-size * 0.35, size * 0.48);
      ctx.lineTo(-size * 0.48, -size * 0.05);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#424859';
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.55);
      ctx.lineTo(size * 0.15, 0);
      ctx.lineTo(size * 0.35, size * 0.48);
      ctx.lineTo(0, size * 0.2);
      ctx.lineTo(-size * 0.35, size * 0.48);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = '#8fa2c4';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(-size * 0.25, -size * 0.1);
      ctx.lineTo(0, -size * 0.5);
      ctx.lineTo(size * 0.1, -size * 0.15);
      ctx.stroke();
      break;
    }
    case 'twig': {
      ctx.strokeStyle = '#634327';
      ctx.lineWidth = 2.4;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(-size * 0.45, size * 0.45);
      ctx.quadraticCurveTo(-size * 0.1, 0, size * 0.4, -size * 0.45);
      ctx.stroke();

      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.05);
      ctx.quadraticCurveTo(size * 0.2, -size * 0.1, size * 0.35, size * 0.15);
      ctx.stroke();

      ctx.fillStyle = '#689f38';
      ctx.beginPath();
      ctx.arc(size * 0.4, -size * 0.45, 2.5, 0, Math.PI * 2);
      ctx.arc(size * 0.35, size * 0.15, 2, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
    case 'grass': {
      const blades = [
        [-size * 0.3, size * 0.4, -size * 0.4, -size * 0.45, '#d4ac4b'],
        [-size * 0.1, size * 0.4, -size * 0.15, -size * 0.55, '#f1c40f'],
        [size * 0.05, size * 0.4, size * 0.1, -size * 0.5, '#e0b84c'],
        [size * 0.2, size * 0.4, size * 0.35, -size * 0.4, '#c29b38'],
      ];
      blades.forEach(([bx, by, tx, ty, col]) => {
        ctx.strokeStyle = col;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.quadraticCurveTo((bx + tx) * 0.5 + 2, (by + ty) * 0.5, tx, ty);
        ctx.stroke();
      });
      ctx.fillStyle = '#5d4037';
      ctx.fillRect(-size * 0.25, size * 0.05, size * 0.5, size * 0.12);
      break;
    }
    case 'log': {
      ctx.fillStyle = '#4e342e';
      ctx.strokeStyle = '#271711';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.rect(-size * 0.45, -size * 0.15, size * 0.9, size * 0.5);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#a17852';
      ctx.beginPath();
      ctx.ellipse(-size * 0.45, size * 0.1, size * 0.18, size * 0.25, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.strokeStyle = '#704c30';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.ellipse(-size * 0.45, size * 0.1, size * 0.09, size * 0.14, 0, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = '#321c13';
      ctx.beginPath();
      ctx.moveTo(-size * 0.25, -size * 0.12);
      ctx.lineTo(size * 0.4, -size * 0.12);
      ctx.moveTo(-size * 0.2, size * 0.25);
      ctx.lineTo(size * 0.35, size * 0.25);
      ctx.stroke();
      break;
    }
    case 'rock': {
      ctx.fillStyle = '#5c646b';
      ctx.strokeStyle = '#272b30';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(-size * 0.45, size * 0.25);
      ctx.lineTo(-size * 0.35, -size * 0.3);
      ctx.lineTo(size * 0.1, -size * 0.45);
      ctx.lineTo(size * 0.45, -size * 0.15);
      ctx.lineTo(size * 0.35, size * 0.35);
      ctx.lineTo(-size * 0.1, size * 0.45);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#7a838c';
      ctx.beginPath();
      ctx.moveTo(-size * 0.35, -size * 0.3);
      ctx.lineTo(size * 0.1, -size * 0.45);
      ctx.lineTo(size * 0.15, -size * 0.05);
      ctx.lineTo(-size * 0.1, 0);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#3a3f45';
      ctx.beginPath();
      ctx.moveTo(-size * 0.45, size * 0.25);
      ctx.lineTo(-size * 0.1, 0);
      ctx.lineTo(size * 0.15, -size * 0.05);
      ctx.lineTo(size * 0.35, size * 0.35);
      ctx.lineTo(-size * 0.1, size * 0.45);
      ctx.closePath();
      ctx.fill();
      break;
    }
    case 'gold': {
      ctx.fillStyle = '#f39c12';
      ctx.strokeStyle = '#875104';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(-size * 0.4, size * 0.2);
      ctx.lineTo(-size * 0.2, -size * 0.4);
      ctx.lineTo(size * 0.35, -size * 0.35);
      ctx.lineTo(size * 0.48, size * 0.1);
      ctx.lineTo(size * 0.1, size * 0.45);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#ffeb3b';
      ctx.beginPath();
      ctx.moveTo(-size * 0.2, -size * 0.4);
      ctx.lineTo(size * 0.35, -size * 0.35);
      ctx.lineTo(size * 0.15, -size * 0.05);
      ctx.lineTo(-size * 0.1, 0);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      const sx = size * 0.28, sy = -size * 0.3;
      ctx.beginPath();
      ctx.moveTo(sx, sy - 5);
      ctx.lineTo(sx + 2, sy);
      ctx.lineTo(sx + 5, sy);
      ctx.lineTo(sx + 2, sy + 2);
      ctx.lineTo(sx, sy + 5);
      ctx.lineTo(sx - 2, sy + 2);
      ctx.lineTo(sx - 5, sy);
      ctx.lineTo(sx - 2, sy);
      ctx.closePath();
      ctx.fill();
      break;
    }
    case 'meat': {
      ctx.fillStyle = '#c0392b';
      ctx.strokeStyle = '#4a0e0e';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.ellipse(-size * 0.05, 0, size * 0.45, size * 0.32, -Math.PI / 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.strokeStyle = '#fadbd8';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(-size * 0.25, -size * 0.15);
      ctx.quadraticCurveTo(-size * 0.05, 0, size * 0.15, -size * 0.1);
      ctx.stroke();

      ctx.fillStyle = '#fdfefe';
      ctx.strokeStyle = '#7f8c8d';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(size * 0.38, size * 0.22, size * 0.12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      break;
    }
    case 'monstermeat': {
      ctx.fillStyle = '#5b2c6f';
      ctx.strokeStyle = '#210c2b';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.ellipse(-size * 0.05, 0, size * 0.45, size * 0.32, -Math.PI / 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.strokeStyle = '#27ae60';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(-size * 0.28, -size * 0.12);
      ctx.lineTo(size * 0.05, -size * 0.05);
      ctx.lineTo(size * 0.2, size * 0.15);
      ctx.stroke();

      ctx.fillStyle = '#99a3a4';
      ctx.beginPath();
      ctx.arc(size * 0.38, size * 0.22, size * 0.12, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
    case 'seeds': {
      const seedPoints = [[-size * 0.2, size * 0.1], [size * 0.15, size * 0.15], [0, -size * 0.2]];
      seedPoints.forEach(([sx, sy]) => {
        ctx.fillStyle = '#8d6e63';
        ctx.strokeStyle = '#3e2723';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.ellipse(sx, sy, size * 0.15, size * 0.22, Math.PI / 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
      break;
    }
    case 'berry': {
      ctx.strokeStyle = '#2e7d32';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.45);
      ctx.lineTo(0, -size * 0.1);
      ctx.stroke();

      const berries = [
        [-size * 0.18, size * 0.12, size * 0.2],
        [size * 0.18, size * 0.12, size * 0.2],
        [0, -size * 0.1, size * 0.18]
      ];
      berries.forEach(([bx, by, br]) => {
        ctx.fillStyle = '#c0392b';
        ctx.strokeStyle = '#5a110a';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(bx, by, br, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#ff8a80';
        ctx.beginPath();
        ctx.arc(bx - br * 0.35, by - br * 0.35, br * 0.3, 0, Math.PI * 2);
        ctx.fill();
      });
      break;
    }
    case 'carrot': {
      ctx.fillStyle = '#2ecc71';
      ctx.beginPath();
      ctx.moveTo(size * 0.2, -size * 0.2);
      ctx.lineTo(size * 0.45, -size * 0.45);
      ctx.lineTo(size * 0.25, -size * 0.4);
      ctx.lineTo(size * 0.35, -size * 0.2);
      ctx.fill();

      ctx.fillStyle = '#e67e22';
      ctx.strokeStyle = '#783802';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(-size * 0.4, size * 0.35);
      ctx.lineTo(size * 0.2, -size * 0.3);
      ctx.lineTo(size * 0.32, -size * 0.15);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      break;
    }
    case 'flower': {
      for (let i = 0; i < 5; i++) {
        const ang = (i * Math.PI * 2) / 5;
        const px = Math.cos(ang) * (size * 0.25);
        const py = Math.sin(ang) * (size * 0.25);
        ctx.fillStyle = '#ecf0f1';
        ctx.strokeStyle = '#bdc3c7';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(px, py, size * 0.16, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
      ctx.fillStyle = '#f39c12';
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.14, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
    case 'axe': {
      ctx.strokeStyle = '#6d4c41';
      ctx.lineWidth = 3.2;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(-size * 0.35, size * 0.45);
      ctx.quadraticCurveTo(-size * 0.1, 0, size * 0.25, -size * 0.35);
      ctx.stroke();

      ctx.fillStyle = '#37474f';
      ctx.strokeStyle = '#102027';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(size * 0.1, -size * 0.45);
      ctx.lineTo(size * 0.45, -size * 0.3);
      ctx.lineTo(size * 0.25, -size * 0.1);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.strokeStyle = '#cca574';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(size * 0.15, -size * 0.38);
      ctx.lineTo(size * 0.25, -size * 0.2);
      ctx.stroke();
      break;
    }
    case 'pickaxe': {
      ctx.strokeStyle = '#6d4c41';
      ctx.lineWidth = 3.0;
      ctx.beginPath();
      ctx.moveTo(-size * 0.35, size * 0.4);
      ctx.lineTo(size * 0.2, -size * 0.25);
      ctx.stroke();

      ctx.fillStyle = '#455a64';
      ctx.strokeStyle = '#1c313a';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(size * 0.45, -size * 0.45);
      ctx.quadraticCurveTo(size * 0.2, -size * 0.2, -size * 0.05, -size * 0.4);
      ctx.quadraticCurveTo(size * 0.2, -size * 0.32, size * 0.45, -size * 0.45);
      ctx.fill();
      ctx.stroke();
      break;
    }
    case 'shovel': {
      ctx.strokeStyle = '#6d4c41';
      ctx.lineWidth = 3.0;
      ctx.beginPath();
      ctx.moveTo(size * 0.35, -size * 0.45);
      ctx.lineTo(-size * 0.15, size * 0.15);
      ctx.stroke();

      ctx.fillStyle = '#546e7a';
      ctx.strokeStyle = '#263238';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(-size * 0.05, size * 0.05);
      ctx.lineTo(-size * 0.4, size * 0.3);
      ctx.lineTo(-size * 0.3, size * 0.48);
      ctx.lineTo(-size * 0.2, size * 0.2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      break;
    }
    case 'spear': {
      ctx.strokeStyle = '#5d4037';
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.moveTo(-size * 0.45, size * 0.45);
      ctx.lineTo(size * 0.35, -size * 0.35);
      ctx.stroke();

      ctx.fillStyle = '#37474f';
      ctx.strokeStyle = '#212121';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(size * 0.2, -size * 0.2);
      ctx.lineTo(size * 0.48, -size * 0.48);
      ctx.lineTo(size * 0.32, -size * 0.1);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      break;
    }
    case 'torch': {
      ctx.strokeStyle = '#4e342e';
      ctx.lineWidth = 3.0;
      ctx.beginPath();
      ctx.moveTo(-size * 0.35, size * 0.4);
      ctx.lineTo(size * 0.15, -size * 0.15);
      ctx.stroke();

      ctx.fillStyle = '#ff5722';
      ctx.beginPath();
      ctx.arc(size * 0.22, -size * 0.25, size * 0.22, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffeb3b';
      ctx.beginPath();
      ctx.arc(size * 0.22, -size * 0.25, size * 0.12, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
    case 'charcoal': {
      ctx.fillStyle = '#1c1c1c';
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(-size * 0.35, size * 0.2);
      ctx.lineTo(-size * 0.2, -size * 0.35);
      ctx.lineTo(size * 0.25, -size * 0.3);
      ctx.lineTo(size * 0.35, size * 0.25);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.strokeStyle = '#e64a19';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(-size * 0.1, -size * 0.1);
      ctx.lineTo(size * 0.15, 0);
      ctx.stroke();
      break;
    }
    case 'hound_tooth': {
      ctx.fillStyle = '#fdfefe';
      ctx.strokeStyle = '#7f8c8d';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(-size * 0.25, -size * 0.25);
      ctx.quadraticCurveTo(0, size * 0.2, size * 0.35, size * 0.4);
      ctx.quadraticCurveTo(size * 0.1, -size * 0.1, -size * 0.1, -size * 0.35);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#c0392b';
      ctx.beginPath();
      ctx.arc(-size * 0.18, -size * 0.3, size * 0.12, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
    case 'silk': {
      ctx.fillStyle = '#f5f5f5';
      ctx.strokeStyle = '#9e9e9e';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.38, size * 0.24, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.strokeStyle = '#e0e0e0';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(-size * 0.2, size * 0.1);
      ctx.lineTo(size * 0.2, -size * 0.1);
      ctx.stroke();
      break;
    }
    case 'rope': {
      ctx.strokeStyle = '#cca574';
      ctx.lineWidth = 3.2;
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.35, size * 0.28, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = '#6d4c2a';
      ctx.lineWidth = 1.2;
      ctx.stroke();
      break;
    }
    case 'boards': {
      ctx.fillStyle = '#8d6e63';
      ctx.strokeStyle = '#3e2723';
      ctx.lineWidth = 1.6;
      ctx.fillRect(-size * 0.45, -size * 0.2, size * 0.9, size * 0.18);
      ctx.strokeRect(-size * 0.45, -size * 0.2, size * 0.9, size * 0.18);
      ctx.fillRect(-size * 0.4, size * 0.05, size * 0.85, size * 0.18);
      ctx.strokeRect(-size * 0.4, size * 0.05, size * 0.85, size * 0.18);
      break;
    }
    case 'cut_stone': {
      ctx.fillStyle = '#78909c';
      ctx.strokeStyle = '#263238';
      ctx.lineWidth = 1.6;
      ctx.fillRect(-size * 0.42, -size * 0.25, size * 0.84, size * 0.5);
      ctx.strokeRect(-size * 0.42, -size * 0.25, size * 0.84, size * 0.5);
      ctx.strokeStyle = '#455a64';
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.25);
      ctx.lineTo(0, size * 0.25);
      ctx.stroke();
      break;
    }
    case 'nightmare_fuel': {
      ctx.fillStyle = '#4a148c';
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.4, size * 0.35, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#7b1fa2';
      ctx.beginPath();
      ctx.ellipse(size * 0.05, -size * 0.1, size * 0.22, size * 0.2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ea80fc';
      ctx.beginPath();
      ctx.arc(-size * 0.08, size * 0.05, size * 0.08, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
    case 'red_gem':
    case 'blue_gem':
    case 'purple_gem': {
      const gemColors = {
        red_gem: { base: '#c0392b', top: '#ff5252', outline: '#4a0e0e' },
        blue_gem: { base: '#1976d2', top: '#40c4ff', outline: '#0d47a1' },
        purple_gem: { base: '#7b1fa2', top: '#e040fb', outline: '#4a148c' }
      }[id];
      ctx.fillStyle = gemColors.base;
      ctx.strokeStyle = gemColors.outline;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(-size * 0.25, -size * 0.45);
      ctx.lineTo(size * 0.25, -size * 0.45);
      ctx.lineTo(size * 0.45, -size * 0.1);
      ctx.lineTo(0, size * 0.5);
      ctx.lineTo(-size * 0.45, -size * 0.1);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = gemColors.top;
      ctx.beginPath();
      ctx.moveTo(-size * 0.18, -size * 0.4);
      ctx.lineTo(size * 0.18, -size * 0.4);
      ctx.lineTo(size * 0.28, -size * 0.15);
      ctx.lineTo(-size * 0.28, -size * 0.15);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(size * 0.15, -size * 0.25, 2, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
    case 'eyebone': {
      ctx.strokeStyle = '#d7ccc8';
      ctx.lineWidth = 3.0;
      ctx.beginPath();
      ctx.moveTo(0, size * 0.45);
      ctx.lineTo(0, -size * 0.1);
      ctx.stroke();

      ctx.fillStyle = '#fff8e1';
      ctx.strokeStyle = '#4e342e';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.arc(0, -size * 0.15, size * 0.32, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#bf360c';
      ctx.beginPath();
      ctx.arc(0, -size * 0.15, size * 0.16, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(0, -size * 0.15, size * 0.08, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
    default: {
      ctx.fillStyle = 'rgba(28, 20, 15, 0.92)';
      ctx.strokeStyle = '#947146';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.46, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.strokeStyle = 'rgba(243, 156, 18, 0.4)';
      ctx.lineWidth = 1.0;
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.38, 0, Math.PI * 2);
      ctx.stroke();

      ctx.font = `${Math.round(size * 0.58)}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(ITEMS[id]?.icon || '📦', 0, 1);
      break;
    }
  }

  ctx.restore();
}

function drawItemDrop(ent) {
  const p = state.player;
  const dToPlayer = dist(p.x, p.y, ent.x, ent.y);

  // 1. Soft contact shadow
  ctx.save();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
  ctx.beginPath();
  ctx.ellipse(0, 8, 14, 6, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // 2. Gentle bobbing animation
  const bob = Math.sin((Date.now() * 0.0035) + (ent.x * 0.1)) * 3;

  // 3. Procedural vector item
  drawCustomItemGraphic(ctx, ent.itemId, 0, bob, 26);

  // 4. Stack count badge (if > 1)
  if (ent.count > 1) {
    ctx.save();
    ctx.fillStyle = 'rgba(15, 10, 8, 0.85)';
    ctx.strokeStyle = '#f39c12';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(10, bob + 8, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#ffeedb';
    ctx.font = 'bold 9px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${ent.count}`, 10, bob + 8);
    ctx.restore();
  }

  // 5. Interactive approaching tooltip
  if (dToPlayer < 75) {
    ctx.save();
    const itemName = ITEMS[ent.itemId]?.name || ent.itemId;
    ctx.font = 'bold 11px sans-serif';
    const textW = ctx.measureText(itemName).width + 12;

    ctx.fillStyle = 'rgba(15, 10, 8, 0.85)';
    ctx.strokeStyle = '#cca574';
    ctx.lineWidth = 1;
    const badgeY = bob - 22;

    ctx.beginPath();
    ctx.roundRect(-textW / 2, badgeY - 8, textW, 16, 4);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#fff4e0';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(itemName, 0, badgeY);
    ctx.restore();
  }
}

// --- 11. Canvas Rendering (Tim Burton Sketch Style) ---
function render() {
  if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  ctx.save();
  // Seasonal background tint
  let groundColor = '#241a13';
  if (state.worldLayer === 'caves') groundColor = '#120e0d';
  else if (state.season === 'winter') groundColor = '#3a444a';
  else if (state.season === 'spring') groundColor = '#1e2d1a';
  else if (state.season === 'summer') groundColor = '#352417';

  ctx.fillStyle = groundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.translate(-state.camera.x, -state.camera.y);

  // Draw ground terrain details (pebbles, grass sprouts, seasonal foliage)
  drawTerrainDetails();

  // Draw entities sorted by Y
  const renderList = [...state.entities, { type: 'player', y: state.player.y }];
  if (state.chester && state.chester.active && state.worldLayer === 'surface') {
    renderList.push({ type: 'chester', y: state.chester.y, obj: state.chester });
  }
  if (state.abigail && state.abigail.active) {
    renderList.push({ type: 'abigail', y: state.abigail.y, obj: state.abigail });
  }
  renderList.sort((a, b) => a.y - b.y);

  for (const obj of renderList) {
    if (obj.type === 'player') drawPlayer();
    else if (obj.type === 'chester') drawChester(obj.obj || state.chester);
    else if (obj.type === 'abigail') drawAbigail(obj.obj || state.abigail);
    else drawEntity(obj);
  }

  // Draw Particles
  for (const part of state.particles) {
    ctx.fillStyle = part.color;
    ctx.beginPath();
    ctx.arc(part.x, part.y, part.size, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
  renderLighting();

  if (state.screenFlash > 0) {
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(0.85, state.screenFlash * 4.2)})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    state.screenFlash -= 0.025;
  }
}

function drawPlayer() {
  const p = state.player;
  ctx.save();
  ctx.translate(p.x, p.y);

  // Beefalo mount under player
  if (state.beefaloRiding) {
    ctx.fillStyle = '#3e2723';
    ctx.beginPath();
    ctx.ellipse(0, 10, 26, 16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#d35400';
    ctx.fillRect(-10, 2, 20, 8); // saddle
    ctx.strokeStyle = '#f5f5f5';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-14, 0);
    ctx.lineTo(-22, -12);
    ctx.moveTo(14, 0);
    ctx.lineTo(22, -12);
    ctx.stroke();
  }

  // Shadow
  ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
  ctx.beginPath();
  ctx.ellipse(0, 8, 16, 8, 0, 0, Math.PI * 2);
  ctx.fill();

  const bounce = p.walking ? Math.sin(p.animTick) * 3 : 0;
  ctx.translate(0, bounce);

  // Body armor / vest
  ctx.fillStyle = '#261b17';
  ctx.fillRect(-7, -10, 14, 18);
  if (p.equipped.body) {
    const bid = p.equipped.body.id;
    if (bid === 'armor_wood') ctx.fillStyle = '#8b5a2b';
    else if (bid === 'armor_night') ctx.fillStyle = '#3a1754';
    else if (bid === 'thulecite_suit') ctx.fillStyle = '#d4af37';
    else if (bid === 'scale_mail') ctx.fillStyle = '#b71c1c';
    else ctx.fillStyle = '#3d7e34';
    ctx.fillRect(-8, -10, 16, 18);
  } else {
    ctx.fillStyle = state.character === 'wendy' ? '#2980b9' : (state.character === 'wolfgang' ? '#c0392b' : '#8b2500');
    ctx.fillRect(-5, -8, 10, 14);
  }

  // Character Face & Skin
  ctx.fillStyle = state.character === 'wx78' ? '#78909c' : '#eedcc5';
  ctx.beginPath();
  ctx.arc(0, -20, state.character === 'wolfgang' && p.hunger >= 220 ? 15 : 12, 0, Math.PI * 2);
  ctx.fill();

  // Character Distinct Hair / Headstyle
  if (state.character === 'wx78') {
    // WX-78 Antenna & Glowing sensors
    ctx.strokeStyle = '#37474f';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, -32);
    ctx.lineTo(0, -42);
    ctx.stroke();
    ctx.fillStyle = '#ff1744';
    ctx.beginPath();
    ctx.arc(0, -43, 3, 0, Math.PI * 2);
    ctx.fill();
    // Glowing red eyes
    ctx.fillStyle = '#ff1744';
    ctx.fillRect(-6, -22, 3, 3);
    ctx.fillRect(3, -22, 3, 3);
  } else if (state.character === 'wendy') {
    // Wendy blonde pigtails
    ctx.fillStyle = '#f9e79f';
    ctx.beginPath();
    ctx.arc(-10, -22, 6, 0, Math.PI * 2);
    ctx.arc(10, -22, 6, 0, Math.PI * 2);
    ctx.fill();
    // Red flower
    ctx.fillStyle = '#e74c3c';
    ctx.beginPath();
    ctx.arc(8, -28, 4, 0, Math.PI * 2);
    ctx.fill();
  } else if (state.character === 'wigfrid') {
    // Wigfrid Valkyrie braided red hair & winged helm
    ctx.fillStyle = '#d35400';
    ctx.fillRect(-12, -26, 4, 16);
    ctx.fillRect(8, -26, 4, 16);
    ctx.fillStyle = '#7f8c8d';
    ctx.beginPath();
    ctx.arc(0, -24, 14, Math.PI, 0);
    ctx.fill();
  } else {
    // Wilson classic hair
    ctx.fillStyle = '#110d0b';
    ctx.beginPath();
    ctx.moveTo(-12, -24);
    ctx.lineTo(-18, -36);
    ctx.lineTo(-8, -32);
    ctx.lineTo(0, -42);
    ctx.lineTo(8, -32);
    ctx.lineTo(18, -36);
    ctx.lineTo(12, -24);
    ctx.closePath();
    ctx.fill();
  }

  // Head equipment
  if (p.equipped.head) {
    const hid = p.equipped.head.id;
    if (hid === 'garland') {
      ctx.fillStyle = '#e91e63';
      for (let a = -10; a <= 10; a += 5) {
        ctx.beginPath();
        ctx.arc(a, -30, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (hid === 'football_helmet') {
      ctx.fillStyle = '#f5cba7';
      ctx.beginPath();
      ctx.arc(0, -25, 14, Math.PI, 0);
      ctx.fill();
    } else if (hid === 'thulecite_crown') {
      ctx.fillStyle = '#ffd700';
      ctx.beginPath();
      ctx.moveTo(-12, -28);
      ctx.lineTo(-14, -38);
      ctx.lineTo(-6, -32);
      ctx.lineTo(0, -40);
      ctx.lineTo(6, -32);
      ctx.lineTo(14, -38);
      ctx.lineTo(12, -28);
      ctx.closePath();
      ctx.fill();
    }
  }

  // Hand equipment
  if (p.equipped.hand) {
    const handX = p.facing === 'left' ? -15 : 15;
    const def = ITEMS[p.equipped.hand.id];
    if (def.isLight) {
      ctx.fillStyle = '#5c3a21';
      ctx.fillRect(handX - 2, -14, 4, 18);
      ctx.fillStyle = '#ff9800';
      ctx.beginPath();
      ctx.arc(handX, -16 + (Math.random() - 0.5) * 3, 7, 0, Math.PI * 2);
      ctx.fill();
    } else if (def.id === 'darksword') {
      ctx.fillStyle = '#4a148c';
      ctx.fillRect(handX - 2, -22, 5, 24);
    } else if (def.isStaff === 'fire') {
      ctx.fillStyle = '#ff3d00';
      ctx.fillRect(handX - 2, -22, 4, 24);
    } else if (def.isStaff === 'ice') {
      ctx.fillStyle = '#00e5ff';
      ctx.fillRect(handX - 2, -22, 4, 24);
    } else {
      ctx.fillStyle = '#bdc3c7';
      ctx.fillRect(handX - 2, -20, 4, 22);
    }
  }

    // Dynamic Weapon Slash Blade Arc
  if (p.slashEffect && p.slashEffect.timer > 0) {
    const sf = p.slashEffect;
    const progress = sf.timer / sf.maxTimer;
    ctx.save();
    ctx.rotate(sf.angle || 0);
    ctx.strokeStyle = sf.color || '#ffffff';
    ctx.lineWidth = 4 * progress + 1.5;
    ctx.shadowColor = sf.color || '#ffffff';
    ctx.shadowBlur = 8;
    ctx.beginPath();
    const r = (sf.reach || 75) * 0.85;
    ctx.arc(0, 0, r, -Math.PI / 3, Math.PI / 3, false);
    ctx.stroke();

    // Slash sparks
    ctx.fillStyle = sf.color || '#fff';
    for (let i = 0; i < 3; i++) {
      const spA = (-Math.PI / 3) + Math.random() * (Math.PI * 2 / 3);
      const spR = r + (Math.random() - 0.5) * 10;
      ctx.fillRect(Math.cos(spA) * spR - 1.5, Math.sin(spA) * spR - 1.5, 3, 3);
    }
    ctx.restore();
  }

  ctx.restore();
}

function drawChester(c) {
  ctx.save();
  ctx.translate(c.x, c.y);

  // Chester shadow
  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.beginPath();
  ctx.ellipse(0, 6, 16, 7, 0, 0, Math.PI * 2);
  ctx.fill();

  // Hopping bounce
  const hopBounce = -Math.abs(Math.sin(c.hopTick)) * 8;
  ctx.translate(0, hopBounce);

  // Body color
  let coatColor = '#795548';
  if (c.type === 'snow') coatColor = '#b2ebf2';
  else if (c.type === 'shadow') coatColor = '#311b92';

  ctx.fillStyle = coatColor;
  ctx.beginPath();
  ctx.roundRect(-14, -18, 28, 22, 6);
  ctx.fill();
  ctx.strokeStyle = '#221a14';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Floppy Ears
  ctx.fillStyle = coatColor;
  ctx.beginPath();
  ctx.ellipse(-14, -14, 4, 8, -Math.PI / 6, 0, Math.PI * 2);
  ctx.ellipse(14, -14, 4, 8, Math.PI / 6, 0, Math.PI * 2);
  ctx.fill();

  // Big happy eyes
  ctx.fillStyle = '#111';
  ctx.beginPath();
  ctx.arc(-6, -10, 2.5, 0, Math.PI * 2);
  ctx.arc(6, -10, 2.5, 0, Math.PI * 2);
  ctx.fill();

  // Playful pink tongue
  ctx.fillStyle = '#ff4081';
  ctx.beginPath();
  ctx.ellipse(0, -2, 4, 5, 0, 0, Math.PI);
  ctx.fill();

  // Feet
  ctx.fillStyle = '#4e342e';
  ctx.fillRect(-10, 2, 6, 4);
  ctx.fillRect(4, 2, 6, 4);

  ctx.restore();
}

function drawAbigail(ab) {
  ctx.save();
  ctx.translate(ab.x, ab.y);

  // Translucent glowing spirit aura
  ctx.fillStyle = 'rgba(230, 215, 255, 0.65)';
  ctx.beginPath();
  ctx.arc(0, -18, 14, 0, Math.PI * 2);
  ctx.fill();

  // Flowing ghostly dress
  ctx.beginPath();
  ctx.moveTo(-12, -10);
  ctx.lineTo(-16, 8);
  ctx.lineTo(0, 14);
  ctx.lineTo(16, 8);
  ctx.lineTo(12, -10);
  ctx.closePath();
  ctx.fill();

  // Abigail red flower
  ctx.fillStyle = '#ff1744';
  ctx.beginPath();
  ctx.arc(8, -26, 4, 0, Math.PI * 2);
  ctx.fill();

  // Ghostly glowing eyes
  ctx.fillStyle = '#4a148c';
  ctx.fillRect(-5, -20, 2, 4);
  ctx.fillRect(3, -20, 2, 4);

  ctx.restore();
}

function drawEntity(ent) {
  ctx.save();
  ctx.translate(ent.x, ent.y);

  if (ent.type === 'tree') {
    if (ent.isBirchnut) {
      ctx.fillStyle = '#e0e0e0';
      ctx.fillRect(-6, -16, 12, 20);
      ctx.fillStyle = '#212121';
      ctx.fillRect(-5, -12, 4, 2);
      ctx.fillRect(1, -6, 4, 2);
      const scale = ent.size === 'small' ? 0.75 : (ent.size === 'large' ? 1.3 : 1.0);
      ctx.fillStyle = state.season === 'winter' ? '#78909c' : (state.season === 'autumn' ? '#d84315' : '#ef6c00');
      for (let layer = 0; layer < 3; layer++) {
        const ly = -14 - layer * 16 * scale;
        const lw = (30 - layer * 5) * scale;
        ctx.beginPath();
        ctx.arc(0, ly, lw, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      ctx.fillStyle = '#3e2723';
      ctx.fillRect(-6, -14, 12, 18);
      ctx.fillStyle = state.season === 'winter' ? '#4a6572' : '#1c3b24';
      const scale = ent.size === 'small' ? 0.75 : (ent.size === 'large' ? 1.3 : 1.0);
      for (let layer = 0; layer < 3; layer++) {
        const ly = -14 - layer * 18 * scale;
        const lw = (34 - layer * 7) * scale;
        ctx.beginPath();
        ctx.moveTo(-lw, ly);
        ctx.lineTo(0, ly - 22 * scale);
        ctx.lineTo(lw, ly);
        ctx.closePath();
        ctx.fill();
      }
    }
  } else if (ent.type === 'rock') {
    ctx.fillStyle = ent.hasGold ? '#616161' : '#4e4e4e';
    ctx.beginPath();
    ctx.ellipse(0, 0, 22, 14, 0, 0, Math.PI * 2);
    ctx.fill();
    if (ent.hasGold) {
      ctx.fillStyle = '#ffd700';
      ctx.beginPath();
      ctx.arc(-2, -4, 4, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (ent.type === 'stalagmite') {
    ctx.fillStyle = '#546e7a';
    ctx.beginPath();
    ctx.moveTo(-16, 12);
    ctx.lineTo(0, -32);
    ctx.lineTo(16, 12);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#ffd54f';
    ctx.fillRect(-3, -12, 4, 4);
  } else if (ent.type === 'thulecite_rock') {
    ctx.fillStyle = '#bf360c';
    ctx.beginPath();
    ctx.ellipse(0, 0, 24, 16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffd700';
    ctx.fillRect(-6, -6, 12, 8);
  } else if (ent.type === 'light_flower') {
    ctx.strokeStyle = '#2e7d32';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 10);
    ctx.quadraticCurveTo(8, -10, 0, -22);
    ctx.stroke();
    if (ent.harvestable) {
      ctx.fillStyle = '#eeff41';
      ctx.beginPath();
      ctx.arc(0, -22, 8, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (ent.type === 'farmplot') {
    ctx.fillStyle = '#3e2723';
    ctx.fillRect(-22, -16, 44, 30);
    ctx.strokeStyle = '#6d4c41';
    ctx.lineWidth = 2;
    ctx.strokeRect(-22, -16, 44, 30);
    if (ent.crop) {
      if (ent.stage === 1) {
        ctx.fillStyle = '#4caf50';
        ctx.fillRect(-3, -10, 6, 12);
      } else if (ent.stage >= 2) {
        ctx.font = '20px serif';
        ctx.textAlign = 'center';
        ctx.fillText(ITEMS[ent.crop]?.icon || '🥕', 0, 2);
      }
    }
  } else if (ent.type === 'cave_entrance') {
    ctx.fillStyle = '#212121';
    ctx.beginPath();
    ctx.ellipse(0, 0, 34, 20, 0, 0, Math.PI * 2);
    ctx.fill();
    if (ent.plugged) {
      ctx.fillStyle = '#616161';
      ctx.beginPath();
      ctx.ellipse(0, -4, 22, 14, 0, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.strokeStyle = '#d7ccc8';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-6, -10);
      ctx.lineTo(8, 12);
      ctx.stroke();
    }
  } else if (ent.type === 'cave_exit') {
    ctx.strokeStyle = '#fff8e1';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, -40);
    ctx.lineTo(0, 20);
    ctx.stroke();
  } else if (ent.type === 'pond') {
    ctx.fillStyle = '#1565c0';
    ctx.beginPath();
    ctx.ellipse(0, 0, 38, 22, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#2e7d32';
    ctx.beginPath();
    ctx.arc(10, 5, 6, 0, Math.PI * 2);
    ctx.fill();
  } else if (ent.type === 'beefalo') {
    ctx.fillStyle = ent.hasWool === false ? '#5d4037' : '#3e2723';
    ctx.beginPath();
    ctx.ellipse(0, 0, 32, 22, 0, 0, Math.PI * 2);
    ctx.fill();

    if (ent.inRut) {
      ctx.fillStyle = '#d32f2f';
      ctx.beginPath();
      ctx.arc(22, 0, 10, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.strokeStyle = '#eceff1';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-15, -12);
    ctx.lineTo(-24, -28);
    ctx.moveTo(15, -12);
    ctx.lineTo(24, -28);
    ctx.stroke();

    if (ent.sleeping) {
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-10, -5); ctx.lineTo(-4, -5);
      ctx.moveTo(4, -5); ctx.lineTo(10, -5);
      ctx.stroke();
      ctx.fillStyle = '#90caf9';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('Zzz', -6, -32 - ((Date.now() / 300) % 8));
    } else if (ent.inRut) {
      ctx.fillStyle = '#ff1744';
      ctx.fillRect(-8, -8, 4, 4);
      ctx.fillRect(4, -8, 4, 4);
    }

    if (ent.saddled) {
      ctx.fillStyle = '#d84315';
      ctx.fillRect(-10, -18, 20, 10);
      ctx.strokeStyle = '#ffd700';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(-10, -18, 20, 10);
    }
    // Tendency & Domestication Badge
    if (ent.domestication > 0) {
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 10px sans-serif';
      const tLabel = ent.tendency === 'war' ? '⚔️战牛' : (ent.tendency === 'racer' ? '⚡奔跑牛' : (ent.tendency === 'pudgy' ? '🌾肥牛' : '🐂驯化'));
      ctx.fillText(`${tLabel} ${ent.domestication}%`, -22, -34);
    }
  } else if (ent.type === 'pig_king') {
    ctx.fillStyle = '#f48fb1';
    ctx.beginPath();
    ctx.ellipse(0, 0, 32, 34, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffd700';
    ctx.beginPath();
    ctx.moveTo(-16, -30);
    ctx.lineTo(-10, -42);
    ctx.lineTo(0, -32);
    ctx.lineTo(10, -42);
    ctx.lineTo(16, -30);
    ctx.closePath();
    ctx.fill();
  } else if (ent.type === 'pig') {
    if (ent.isWerepig) {
      ctx.fillStyle = '#311432';
      ctx.beginPath();
      ctx.ellipse(0, -6, 24, 28, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#110514';
      ctx.beginPath();
      ctx.moveTo(-12, -30); ctx.lineTo(-2, -42); ctx.lineTo(8, -30);
      ctx.fill();
      ctx.fillStyle = '#ff1744';
      ctx.fillRect(-8, -12, 4, 4);
      ctx.fillRect(4, -12, 4, 4);
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.moveTo(-5, 4); ctx.lineTo(-3, 10); ctx.lineTo(-1, 4);
      ctx.moveTo(1, 4); ctx.lineTo(3, 10); ctx.lineTo(5, 4);
      ctx.fill();
    } else {
      ctx.fillStyle = '#f8bbd0';
      ctx.beginPath();
      ctx.ellipse(0, 0, 20, 24, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#8d6e63';
      ctx.fillRect(-18, 6, 36, 16);
      ctx.fillStyle = '#f48fb1';
      ctx.beginPath();
      ctx.ellipse(0, -2, 8, 5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#880e4f';
      ctx.fillRect(-4, -3, 2, 2);
      ctx.fillRect(2, -3, 2, 2);
      ctx.fillStyle = '#212121';
      ctx.fillRect(-7, -10, 3, 3);
      ctx.fillRect(4, -10, 3, 3);
      if (ent.isFollower) {
        ctx.fillStyle = '#e91e63';
        ctx.font = '12px sans-serif';
        ctx.fillText('❤️', -5, -28);
      }
    }
  } else if (ent.type === 'hound' || ent.type === 'ice_hound' || ent.type === 'fire_hound') {
    // Authentic Gothic Wild Hound / Fire Hound / Ice Hound
    const flip = ent.facing === 'left' ? -1 : 1;
    ctx.scale(flip, 1);
    const anim = Math.sin((ent.animTimer || 0) * 12);
    const isMoving = ent.chasing || (ent.speed && ent.speed > 30);

    // 1. Soft Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
    ctx.beginPath();
    ctx.ellipse(0, 14, 18, 6, 0, 0, Math.PI * 2);
    ctx.fill();

    // 2. Variants Palette
    let bodyColor = '#1e1b18';
    let spineColor = '#0a0908';
    let underColor = '#3a322b';
    let eyeColor = '#ff1744';
    if (ent.type === 'fire_hound') {
      bodyColor = '#d35400';
      spineColor = '#962d00';
      underColor = '#f39c12';
      eyeColor = '#ffff00';
    } else if (ent.type === 'ice_hound') {
      bodyColor = '#00acc1';
      spineColor = '#006064';
      underColor = '#80deea';
      eyeColor = '#e0f7fa';
    }

    // 3. Quadruped Legs & Paws
    ctx.fillStyle = spineColor;
    // Hind legs
    ctx.beginPath();
    ctx.moveTo(-10, 2);
    ctx.lineTo(-14 + (isMoving ? anim * 6 : 0), 14);
    ctx.lineTo(-10 + (isMoving ? anim * 6 : 0), 14);
    ctx.lineTo(-6, 4);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(-6, 2);
    ctx.lineTo(-4 - (isMoving ? anim * 6 : 0), 14);
    ctx.lineTo(0 - (isMoving ? anim * 6 : 0), 14);
    ctx.lineTo(-2, 4);
    ctx.fill();

    // Forelegs
    ctx.beginPath();
    ctx.moveTo(8, 2);
    ctx.lineTo(12 - (isMoving ? anim * 6 : 0), 14);
    ctx.lineTo(16 - (isMoving ? anim * 6 : 0), 14);
    ctx.lineTo(12, 4);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(4, 2);
    ctx.lineTo(6 + (isMoving ? anim * 6 : 0), 14);
    ctx.lineTo(10 + (isMoving ? anim * 6 : 0), 14);
    ctx.lineTo(8, 4);
    ctx.fill();

    // 4. Canine Torso & Underbelly
    ctx.fillStyle = bodyColor;
    ctx.beginPath();
    ctx.moveTo(-14, 2);
    ctx.quadraticCurveTo(-6, -10, 8, -4);
    ctx.quadraticCurveTo(14, 4, 10, 8);
    ctx.quadraticCurveTo(0, 10, -12, 6);
    ctx.closePath();
    ctx.fill();

    // Underbelly
    ctx.fillStyle = underColor;
    ctx.beginPath();
    ctx.moveTo(-10, 4);
    ctx.quadraticCurveTo(0, 8, 8, 5);
    ctx.lineTo(6, 7);
    ctx.quadraticCurveTo(-2, 9, -10, 6);
    ctx.closePath();
    ctx.fill();

    // 5. Spiky Spine Quills
    ctx.fillStyle = spineColor;
    for (let i = 0; i < 4; i++) {
      const qx = -12 + i * 5;
      const qy = -4 - Math.sin((i / 3) * Math.PI) * 4;
      ctx.beginPath();
      ctx.moveTo(qx - 2, qy + 2);
      ctx.lineTo(qx - 1, qy - 7 - (ent.type === 'ice_hound' ? 3 : 0));
      ctx.lineTo(qx + 3, qy + 1);
      ctx.closePath();
      ctx.fill();
    }

    // 6. Spiky Wolf Tail
    ctx.fillStyle = spineColor;
    ctx.beginPath();
    const tailWag = Math.sin((ent.animTimer || 0) * 14) * 4;
    ctx.moveTo(-14, 0);
    ctx.lineTo(-24, -8 + tailWag);
    ctx.lineTo(-20, -2 + tailWag);
    ctx.lineTo(-12, 4);
    ctx.closePath();
    ctx.fill();

    // 7. Vicious Predatory Head & Snout
    ctx.fillStyle = bodyColor;
    ctx.beginPath();
    ctx.moveTo(6, -6);
    ctx.lineTo(20, -2);
    ctx.lineTo(22, 1);
    ctx.lineTo(14, 3);
    ctx.lineTo(10, 7);
    ctx.closePath();
    ctx.fill();

    // Lower Jaw
    ctx.beginPath();
    ctx.moveTo(12, 5);
    ctx.lineTo(18, 5);
    ctx.lineTo(16, 8);
    ctx.lineTo(9, 7);
    ctx.closePath();
    ctx.fill();

    // Mouth Interior & Sharp Fangs
    ctx.fillStyle = '#7f1d1d';
    ctx.fillRect(13, 2, 5, 3);
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(14, 2); ctx.lineTo(15, 5); ctx.lineTo(16, 2);
    ctx.moveTo(18, 2); ctx.lineTo(19, 5); ctx.lineTo(20, 2);
    ctx.moveTo(15, 6); ctx.lineTo(16, 4); ctx.lineTo(17, 6);
    ctx.fill();

    // 8. Pointed Wolf Ears
    ctx.fillStyle = spineColor;
    ctx.beginPath();
    ctx.moveTo(6, -7);
    ctx.lineTo(8, -18);
    ctx.lineTo(12, -8);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = underColor;
    ctx.beginPath();
    ctx.moveTo(8, -8);
    ctx.lineTo(9, -15);
    ctx.lineTo(11, -8);
    ctx.closePath();
    ctx.fill();

    // 9. Glowing Eyes
    ctx.fillStyle = eyeColor;
    ctx.beginPath();
    ctx.arc(12, -4, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000000';
    ctx.fillRect(12, -5, 1, 2.5);

    // 10. Elemental Particles
    if (ent.type === 'fire_hound') {
      ctx.fillStyle = Math.random() < 0.5 ? '#ff9800' : '#ffeb3b';
      ctx.beginPath();
      ctx.arc(-8 + Math.random() * 16, -10 - Math.random() * 8, 2 + Math.random() * 2, 0, Math.PI * 2);
      ctx.fill();
    } else if (ent.type === 'ice_hound') {
      ctx.fillStyle = 'rgba(224, 247, 250, 0.7)';
      ctx.beginPath();
      ctx.arc(-6 + Math.random() * 14, -8 - Math.random() * 6, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (ent.type === 'deerclops') {
    // Winter Boss: Deerclops (独眼巨鹿 - Gothic Overhaul)
    ctx.fillStyle = '#1e2838';
    ctx.beginPath();
    ctx.ellipse(0, -28, 48, 62, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#0d131a';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Heavy Claws & Limbs
    ctx.fillStyle = '#161e29';
    ctx.beginPath();
    ctx.ellipse(-38, -15, 14, 28, Math.PI / 8, 0, Math.PI * 2);
    ctx.ellipse(38, -15, 14, 28, -Math.PI / 8, 0, Math.PI * 2);
    ctx.fill();

    // Curling Ancient Goat/Ram Horns
    ctx.strokeStyle = '#2b2118';
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.arc(-22, -62, 16, Math.PI * 0.4, Math.PI * 1.5, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(22, -62, 16, Math.PI * 1.5, Math.PI * 2.6, false);
    ctx.stroke();

    // Colossal Central Hypnotic Single Eye
    const eyeGlow = ent.attackWindup > 0 ? '#00e5ff' : '#ff1744';
    ctx.fillStyle = eyeGlow;
    ctx.beginPath();
    ctx.arc(0, -42, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffeb3b';
    ctx.beginPath();
    ctx.arc(0, -42, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(0, -42, 3, 0, Math.PI * 2);
    ctx.fill();

    // Frost Aura Particles
    ctx.fillStyle = 'rgba(178, 235, 242, 0.6)';
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc((Math.random() - 0.5) * 60, -20 + (Math.random() - 0.5) * 40, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (ent.type === 'bearger') {
    // Autumn Boss: Bearger (熊獾 - Gothic Overhaul)
    ctx.fillStyle = '#3e2723';
    ctx.beginPath();
    ctx.ellipse(0, -24, 52, 48, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1b120c';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Badger Face Mask Markings
    ctx.fillStyle = '#d7ccc8';
    ctx.beginPath();
    ctx.ellipse(0, -28, 16, 22, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#212121';
    ctx.fillRect(-12, -32, 6, 12);
    ctx.fillRect(6, -32, 6, 12);

    // Glowing predator eyes
    ctx.fillStyle = '#ff1744';
    ctx.beginPath();
    ctx.arc(-8, -26, 3, 0, Math.PI * 2);
    ctx.arc(8, -26, 3, 0, Math.PI * 2);
    ctx.fill();

    // Heavy Ground Stomp Paws
    ctx.fillStyle = '#1b120c';
    ctx.fillRect(-35, 2, 22, 14);
    ctx.fillRect(13, 2, 22, 14);
  } else if (ent.type === 'moosegoose') {
    // Spring Boss: Moose/Goose (驼鹿鹅 - Gothic Overhaul)
    ctx.fillStyle = '#37474f';
    ctx.beginPath();
    ctx.ellipse(0, -14, 40, 44, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#cfd8dc';
    ctx.fillRect(-7, -50, 14, 40); // Long goose neck
    ctx.fillStyle = '#ff9800';
    ctx.fillRect(-14, -54, 16, 9); // Beak
    // Antlers
    ctx.strokeStyle = '#5d4037';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, -52);
    ctx.lineTo(-28, -75);
    ctx.moveTo(-16, -62);
    ctx.lineTo(-32, -62);
    ctx.moveTo(0, -52);
    ctx.lineTo(28, -75);
    ctx.moveTo(16, -62);
    ctx.lineTo(32, -62);
    ctx.stroke();
  } else if (ent.type === 'dragonfly') {
    // Summer Boss: Dragonfly (龙蝇 - Gothic Overhaul)
    ctx.fillStyle = '#d84315';
    ctx.beginPath();
    ctx.ellipse(0, -18, 38, 44, 0, 0, Math.PI * 2);
    ctx.fill();
    // Glowing lava underbelly
    ctx.fillStyle = '#ffeb3b';
    ctx.beginPath();
    ctx.ellipse(0, -14, 20, 24, 0, 0, Math.PI * 2);
    ctx.fill();
    // Shimmering iridescent wings
    const wingFlap = Math.sin(Date.now() * 0.02) * 6;
    ctx.fillStyle = 'rgba(255, 235, 59, 0.55)';
    ctx.beginPath();
    ctx.ellipse(-32, -26 + wingFlap, 24, 9, Math.PI / 4, 0, Math.PI * 2);
    ctx.ellipse(32, -26 - wingFlap, 24, 9, -Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    // Eyes
    ctx.fillStyle = '#ff1744';
    ctx.fillRect(-10, -32, 6, 6);
    ctx.fillRect(4, -32, 6, 6);
  } else if (ent.type === 'treeguard') {
    // Mini-Boss: Treeguard (树人守卫 - Living Ancient Pine)
    ctx.fillStyle = '#3e2723';
    ctx.beginPath();
    ctx.roundRect(-22, -45, 44, 52, 6);
    ctx.fill();
    ctx.strokeStyle = '#1b120c';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Pine Foliage Crown
    ctx.fillStyle = '#1b5e20';
    ctx.beginPath();
    ctx.moveTo(-32, -45);
    ctx.lineTo(0, -82);
    ctx.lineTo(32, -45);
    ctx.closePath();
    ctx.fill();

    // Heavy Branch Limbs
    ctx.fillStyle = '#4e342e';
    ctx.fillRect(-35, -30, 14, 30);
    ctx.fillRect(21, -30, 14, 30);
    // Walking Trunk Legs
    ctx.fillRect(-18, 5, 12, 14);
    ctx.fillRect(6, 5, 12, 14);

    // Glowing hollow amber eyes
    const eyeCol = ent.attackWindup > 0 ? '#ff1744' : '#ffb300';
    ctx.fillStyle = eyeCol;
    ctx.beginPath();
    ctx.arc(-8, -25, 4, 0, Math.PI * 2);
    ctx.arc(8, -25, 4, 0, Math.PI * 2);
    ctx.fill();
  } else if (ent.type === 'spider_queen') {
    // Mini-Boss: Spider Queen (蜘蛛女王)
    ctx.fillStyle = '#1a1016';
    ctx.beginPath();
    ctx.ellipse(0, -18, 36, 42, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#4a148c';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Egg Sacs on Abdomen
    ctx.fillStyle = '#b71c1c';
    ctx.beginPath();
    ctx.arc(-12, -22, 6, 0, Math.PI * 2);
    ctx.arc(12, -22, 6, 0, Math.PI * 2);
    ctx.arc(0, -10, 8, 0, Math.PI * 2);
    ctx.fill();

    // 8 Spidery jointed legs
    ctx.strokeStyle = '#211018';
    ctx.lineWidth = 3.5;
    for (let side = -1; side <= 1; side += 2) {
      for (let leg = -20; leg <= 10; leg += 10) {
        ctx.beginPath();
        ctx.moveTo(side * 24, leg);
        ctx.lineTo(side * 46, leg - 12);
        ctx.lineTo(side * 52, leg + 18);
        ctx.stroke();
      }
    }

    // Cluster of 6 glowing crimson eyes
    ctx.fillStyle = '#ff1744';
    ctx.fillRect(-8, -38, 3, 3);
    ctx.fillRect(-2, -40, 4, 4);
    ctx.fillRect(5, -38, 3, 3);
    ctx.fillRect(-6, -34, 3, 3);
    ctx.fillRect(3, -34, 3, 3);
  } else if (ent.type === 'varg') {
    // Mini-Boss: Varg (恶魔荒原狼座狼)
    const facingLeft = ent.facing === 'left';
    ctx.save();
    if (facingLeft) ctx.scale(-1, 1);

    // Hulking dire wolf torso
    ctx.fillStyle = '#1c1b1f';
    ctx.beginPath();
    ctx.ellipse(0, -22, 38, 26, 0, 0, Math.PI * 2);
    ctx.fill();

    // Heavy Quadruped Limbs
    ctx.fillStyle = '#121114';
    ctx.fillRect(-26, -5, 10, 18);
    ctx.fillRect(-12, -5, 10, 18);
    ctx.fillRect(10, -5, 10, 18);
    ctx.fillRect(24, -5, 10, 18);

    // Obsidian Spine Quills
    ctx.fillStyle = '#263238';
    for (let x = -20; x <= 20; x += 10) {
      ctx.beginPath();
      ctx.moveTo(x - 4, -34);
      ctx.lineTo(x, -52);
      ctx.lineTo(x + 4, -34);
      ctx.closePath();
      ctx.fill();
    }

    // Demonic Wolf Head & Horns
    ctx.fillStyle = '#212121';
    ctx.beginPath();
    ctx.ellipse(28, -30, 16, 14, 0, 0, Math.PI * 2);
    ctx.fill();
    // Ivory Fangs & Jaws
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(34, -26, 3, 8);
    ctx.fillRect(38, -26, 3, 8);
    // Glowing Blood Eyes
    ctx.fillStyle = '#ff1744';
    ctx.fillRect(26, -34, 4, 4);

    ctx.restore();
  } else if (ent.type === 'ancient_guardian') {
    // Mini-Boss: Ancient Guardian (远古犀牛守护者)
    ctx.fillStyle = '#423d33';
    ctx.beginPath();
    ctx.roundRect(-30, -38, 60, 48, 8);
    ctx.fill();
    ctx.strokeStyle = '#c5a059';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Ancient Thulecite Gold Horns
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-16, -38);
    ctx.lineTo(-42, -62);
    ctx.moveTo(16, -38);
    ctx.lineTo(42, -62);
    ctx.stroke();

    // Red Runic Eye Visor
    ctx.fillStyle = '#ff1744';
    ctx.fillRect(-16, -24, 32, 6);
  } else if (ent.type === 'houndius_shootius') {
    // Ancient Facility: Houndius Shootius (远古眼球激光炮塔)
    ctx.fillStyle = '#37474f';
    ctx.fillRect(-18, -12, 36, 18); // Base
    ctx.fillStyle = '#c5a059';
    ctx.fillRect(-12, -26, 24, 16); // Pillar

    // Perched Giant Mystical Eyeball
    ctx.fillStyle = '#eceff1';
    ctx.beginPath();
    ctx.arc(0, -36, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#d50000';
    ctx.beginPath();
    ctx.arc(0, -36, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffeb3b';
    ctx.beginPath();
    ctx.arc(0, -36, 3, 0, Math.PI * 2);
    ctx.fill();

    // Laser Beam Firing Line
    if (ent.laserTimer > 0 && ent.targetPos) {
      const relX = ent.targetPos.x - ent.x;
      const relY = ent.targetPos.y - ent.y;
      ctx.strokeStyle = '#ff1744';
      ctx.lineWidth = 4;
      ctx.shadowColor = '#ff1744';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.moveTo(0, -36);
      ctx.lineTo(relX, relY);
      ctx.stroke();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, -36);
      ctx.lineTo(relX, relY);
      ctx.stroke();
    }
  } else if (ent.type === 'scaled_furnace') {
    // High-Tech Eternal Facility: Scaled Furnace (龙鳞火炉)
    ctx.fillStyle = '#4e342e';
    ctx.beginPath();
    ctx.roundRect(-22, -28, 44, 34, 6);
    ctx.fill();
    ctx.strokeStyle = '#d84315';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Roaring Internal Magma Fire
    ctx.fillStyle = '#ff5722';
    ctx.beginPath();
    ctx.arc(0, -10, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffeb3b';
    ctx.beginPath();
    ctx.arc(0, -10, 6, 0, Math.PI * 2);
    ctx.fill();
  } else if (ent.type === 'dwarf_star') {
    // Celestial Object: Dwarf Star (微缩恒星)
    const pulse = Math.sin(Date.now() * 0.008) * 4;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(0, -15, 14 + pulse, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(255, 235, 59, 0.4)';
    ctx.beginPath();
    ctx.arc(0, -15, 26 + pulse * 1.5, 0, Math.PI * 2);
    ctx.fill();
  } else if (ent.type === 'spider_den') {
    // Planted Spider Den
    ctx.fillStyle = '#261c14';
    ctx.beginPath();
    ctx.ellipse(0, -10, 24, 18, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#eceff1';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, -10, 16, 0, Math.PI * 2);
    ctx.stroke();
  } else if (ent.type === 'crawling_horror' || ent.type === 'terrorbeak') {
    // Shadow Horrors
    ctx.fillStyle = 'rgba(15, 5, 25, 0.9)';
    ctx.beginPath();
    ctx.ellipse(0, -12, ent.type === 'terrorbeak' ? 24 : 18, ent.type === 'terrorbeak' ? 38 : 16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(-6, -18, 3, 3);
    ctx.fillRect(3, -18, 3, 3);
  } else if (ent.type === 'prestihatitator') {
    // Magic Tier 1: Prestihatitator
    ctx.fillStyle = '#4e342e';
    ctx.fillRect(-14, -14, 28, 20);
    ctx.fillStyle = '#212121';
    ctx.fillRect(-10, -26, 20, 14); // Top Hat
    ctx.fillStyle = '#fff';
    ctx.fillRect(-4, -34, 3, 10); // Bunny ears
    ctx.fillRect(2, -34, 3, 10);
  } else if (ent.type === 'shadow_manipulator') {
    // Magic Tier 2: Shadow Manipulator
    ctx.fillStyle = '#261b2e';
    ctx.fillRect(-16, -35, 32, 40);
    ctx.fillStyle = '#9c27b0';
    ctx.beginPath();
    ctx.arc(0, -42, 8, 0, Math.PI * 2);
    ctx.fill();
  } else if (ent.type === 'ancient_station') {
    // Ancient Pseudoscience Station
    ctx.fillStyle = '#d4af37';
    ctx.fillRect(-22, -30, 44, 35);
    ctx.fillStyle = '#d50000';
    ctx.beginPath();
    ctx.arc(0, -36, 9, 0, Math.PI * 2);
    ctx.fill();
  } else if (ent.type === 'chest') {
    ctx.fillStyle = '#8d6e63';
    ctx.fillRect(-15, -14, 30, 20);
    ctx.strokeStyle = '#3e2723';
    ctx.lineWidth = 2;
    ctx.strokeRect(-15, -14, 30, 20);
    ctx.fillStyle = '#ffd700';
    ctx.fillRect(-3, -6, 6, 6);
  } else if (ent.type === 'drop') {
    drawItemDrop(ent);
  } else if (ent.type === 'campfire' || ent.type === 'firepit') {
    ctx.fillStyle = '#555';
    ctx.beginPath();
    ctx.arc(0, 0, 16, 0, Math.PI * 2);
    ctx.fill();
    if (ent.fuel > 0) {
      ctx.fillStyle = '#ff5722';
      ctx.beginPath();
      ctx.moveTo(-10, 0);
      ctx.lineTo(0, -28);
      ctx.lineTo(10, 0);
      ctx.closePath();
      ctx.fill();
    }
  } else if (ent.type === 'crockpot') {
    ctx.fillStyle = '#263238';
    ctx.fillRect(-14, -18, 28, 22);
    ctx.fillStyle = '#d35400';
    ctx.fillRect(-10, -22, 20, 6);
  } else if (ent.type === 'science_machine' || ent.type === 'alchemy_engine') {
    ctx.fillStyle = '#455a64';
    ctx.fillRect(-16, -26, 32, 30);
    ctx.fillStyle = '#ffc107';
    ctx.beginPath();
    ctx.arc(0, -28, 8, 0, Math.PI * 2);
    ctx.fill();
  } else if (ent.type === 'tent') {
    ctx.fillStyle = '#2e7d32';
    ctx.beginPath();
    ctx.moveTo(-28, 10);
    ctx.lineTo(0, -32);
    ctx.lineTo(28, 10);
    ctx.closePath();
    ctx.fill();
  } else if (ent.type === 'flingomatic') {
    ctx.fillStyle = '#546e7a';
    ctx.fillRect(-14, -16, 28, 20);
    ctx.fillStyle = '#00bcd4';
    ctx.beginPath();
    ctx.arc(0, -22, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#e0f7fa';
    ctx.fillRect(-3, -32, 6, 12);
  } else if (ent.type === 'drying_rack') {
    ctx.strokeStyle = '#5d4037';
    ctx.lineWidth = 3;
    ctx.strokeRect(-16, -24, 32, 28);
    if (ent.meat) {
      ctx.fillStyle = ent.ready ? '#8d6e63' : (ent.meat === 'monstermeat' ? '#8e24aa' : '#c62828');
      ctx.fillRect(-6, -18, 12, 16);
    }
  } else if (ent.type === 'birdcage') {
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 2;
    ctx.strokeRect(-14, -28, 28, 30);
    ctx.beginPath();
    ctx.arc(0, -28, 14, Math.PI, 0);
    ctx.stroke();
    if (ent.hasBird) {
      ctx.font = '16px serif';
      ctx.textAlign = 'center';
      ctx.fillText('🐦', 0, -10);
    }
  } else if (ent.type === 'beebox') {
    ctx.fillStyle = '#ffb300';
    ctx.fillRect(-14, -18, 28, 20);
    ctx.fillStyle = '#4e342e';
    ctx.fillRect(-12, -12, 24, 3);
    ctx.fillRect(-12, -4, 24, 3);
  } else if (ent.type === 'boat') {
    ctx.fillStyle = '#4e342e';
    ctx.beginPath();
    ctx.ellipse(0, 0, 36, 20, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#8d6e63';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#fff8e1';
    ctx.fillRect(-2, -30, 4, 30);
    ctx.beginPath();
    ctx.moveTo(2, -28);
    ctx.lineTo(20, -18);
    ctx.lineTo(2, -8);
    ctx.closePath();
    ctx.fill();
  } else if (ent.type === 'teleportato_base') {
    ctx.fillStyle = '#37474f';
    ctx.beginPath();
    ctx.ellipse(0, 0, 38, 22, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#9c27b0';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, -6, 16, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#ab47bc';
    ctx.beginPath();
    ctx.arc(0, -6, 8, 0, Math.PI * 2);
    ctx.fill();
  } else if (ent.type === 'celestial_altar') {
    ctx.fillStyle = '#cfd8dc';
    ctx.beginPath();
    ctx.ellipse(0, 0, 34, 18, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#80deea';
    ctx.beginPath();
    ctx.moveTo(-12, -6);
    ctx.lineTo(0, -28);
    ctx.lineTo(12, -6);
    ctx.closePath();
    ctx.fill();
  } else if (ent.type === 'bird_trap') {
    ctx.strokeStyle = '#8d6e63';
    ctx.lineWidth = 2;
    ctx.strokeRect(-10, -10, 20, 14);
    if (ent.caught) {
      ctx.font = '12px serif';
      ctx.textAlign = 'center';
      ctx.fillText('🐦', 0, -2);
    }
  } else if (ent.type === 'rabbit') {
    if (!ent.hidden) {
      const isInsane = state.player.sanity < 40;
      ctx.fillStyle = isInsane ? '#1a1016' : (state.season === 'winter' ? '#eceff1' : '#bcaaa4');
      ctx.beginPath();
      ctx.ellipse(0, 0, 12, 9, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = isInsane ? '#2d1b2e' : '#ffcdd2';
      ctx.beginPath();
      ctx.ellipse(-4, -11, 2.5, 7, -0.2, 0, Math.PI * 2);
      ctx.ellipse(2, -11, 2.5, 7, 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = isInsane ? '#ff1744' : '#212121';
      ctx.fillRect(-6, -4, 2.5, 2.5);
      ctx.fillStyle = isInsane ? '#2d1b2e' : '#fff';
      ctx.beginPath();
      ctx.arc(10, 2, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (ent.type === 'rabbit_hole') {
    ctx.fillStyle = '#3e2723';
    ctx.beginPath();
    ctx.ellipse(0, 0, 16, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#1a100b';
    ctx.beginPath();
    ctx.ellipse(0, -2, 9, 5, 0, 0, Math.PI * 2);
    ctx.fill();
  } else if (ent.type === 'tallbird') {
    ctx.strokeStyle = '#455a64';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-6, 0); ctx.lineTo(-8, 22);
    ctx.moveTo(6, 0); ctx.lineTo(8, 22);
    ctx.stroke();
    ctx.fillStyle = '#1a237e';
    ctx.beginPath();
    ctx.arc(0, -10, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffeb3b';
    ctx.beginPath();
    ctx.arc(0, -14, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.fillRect(-1.5, -18, 3, 8);
    ctx.fillStyle = '#ff9800';
    ctx.beginPath();
    ctx.moveTo(-8, -6);
    ctx.lineTo(-26, -10);
    ctx.lineTo(-8, -14);
    ctx.closePath();
    ctx.fill();
  } else if (ent.type === 'tallbird_nest') {
    ctx.strokeStyle = '#4e342e';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(0, 0, 24, 14, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#3e2723';
    ctx.fill();
    if (ent.hasEgg) {
      ctx.fillStyle = '#81d4fa';
      ctx.beginPath();
      ctx.ellipse(0, -4, 9, 13, 0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#0288d1';
      ctx.fillRect(-3, -7, 2, 2);
      ctx.fillRect(2, -2, 2, 2);
    }
  } else if (ent.type === 'tentacle') {
    if (ent.submerged) {
      ctx.strokeStyle = 'rgba(74, 20, 140, 0.5)';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.ellipse(0, 0, 18, 10, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = '#4a148c';
      ctx.beginPath();
      ctx.arc(4, 2, 3, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillStyle = '#4a148c';
      ctx.beginPath();
      ctx.moveTo(-10, 10);
      ctx.quadraticCurveTo(-14, -25, -4, -48);
      ctx.quadraticCurveTo(8, -52, 6, -42);
      ctx.quadraticCurveTo(12, -20, 10, 10);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#eceff1';
      ctx.beginPath();
      ctx.moveTo(-12, -20); ctx.lineTo(-20, -24); ctx.lineTo(-10, -28);
      ctx.moveTo(10, -15); ctx.lineTo(18, -18); ctx.lineTo(8, -23);
      ctx.fill();
      ctx.fillStyle = '#ea80fc';
      ctx.fillRect(-4, -36, 4, 4);
      ctx.fillRect(0, -18, 5, 5);
    }
  } else if (ent.type === 'frog') {
    ctx.fillStyle = '#388e3c';
    ctx.beginPath();
    ctx.ellipse(0, 0, 14, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffeb3b';
    ctx.beginPath();
    ctx.arc(-6, -8, 4, 0, Math.PI * 2);
    ctx.arc(6, -8, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.fillRect(-8, -9, 4, 2);
    ctx.fillRect(4, -9, 4, 2);
  } else if (ent.type === 'ghost') {
    ctx.fillStyle = 'rgba(224, 247, 250, 0.78)';
    ctx.beginPath();
    ctx.arc(0, -12, 14, Math.PI, 0);
    ctx.lineTo(14, 8);
    ctx.lineTo(8, 4);
    ctx.lineTo(0, 10);
    ctx.lineTo(-8, 4);
    ctx.lineTo(-14, 8);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#102027';
    ctx.beginPath();
    ctx.ellipse(-5, -12, 3, 5, 0, 0, Math.PI * 2);
    ctx.ellipse(5, -12, 3, 5, 0, 0, Math.PI * 2);
    ctx.fill();
  } else if (ent.type === 'grave') {
    ctx.fillStyle = '#455a64';
    ctx.beginPath();
    ctx.arc(0, -22, 12, Math.PI, 0);
    ctx.lineTo(12, 2);
    ctx.lineTo(-12, 2);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#263238';
    ctx.fillRect(-2, -26, 4, 16);
    ctx.fillRect(-6, -22, 12, 4);
    if (ent.dug) {
      ctx.fillStyle = '#1b120c';
      ctx.beginPath();
      ctx.ellipse(0, 8, 16, 7, 0, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillStyle = '#5d4037';
      ctx.beginPath();
      ctx.ellipse(0, 6, 14, 6, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (ent.type === 'evil_flower') {
    ctx.fillStyle = '#4a148c';
    for (let pIdx = 0; pIdx < 5; pIdx++) {
      const pAngle = (pIdx / 5) * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(Math.cos(pAngle) * 5, Math.sin(pAngle) * 5, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#8e24aa';
    ctx.beginPath();
    ctx.arc(0, 0, 3, 0, Math.PI * 2);
    ctx.fill();
  } else if (ent.type === 'butterfly') {
    const flap = Math.cos(ent.flapTick || 0) * 10;
    ctx.fillStyle = '#4fc3f7';
    ctx.beginPath();
    ctx.ellipse(-flap/2, -6, Math.abs(flap) + 2, 7, -0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffd54f';
    ctx.beginPath();
    ctx.ellipse(flap/2, -6, Math.abs(flap) + 2, 7, 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#212121';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, 2); ctx.lineTo(0, -10);
    ctx.moveTo(0, -10); ctx.lineTo(-3, -15);
    ctx.moveTo(0, -10); ctx.lineTo(3, -15);
    ctx.stroke();
  } else if (ent.type === 'gobbler') {
    ctx.fillStyle = '#5d4037';
    ctx.beginPath();
    ctx.ellipse(0, 0, 14, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#8d6e63';
    ctx.beginPath();
    ctx.arc(8, -4, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#e53935';
    ctx.beginPath();
    ctx.arc(-10, -6, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillRect(-11, -1, 3, 6);
    ctx.fillStyle = '#ffd54f';
    ctx.beginPath();
    ctx.moveTo(-15, -6); ctx.lineTo(-11, -8); ctx.lineTo(-11, -4);
    ctx.fill();
  } else if (ent.type === 'bee' || ent.type === 'killer_bee') {
    const isKiller = ent.type === 'killer_bee';
    ctx.fillStyle = isKiller ? '#b71c1c' : '#ffd54f';
    ctx.beginPath();
    ctx.ellipse(0, 0, 9, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#212121';
    ctx.fillRect(-3, -5, 2.5, 10);
    ctx.fillRect(2, -5, 2.5, 10);
    ctx.beginPath();
    ctx.moveTo(9, 0); ctx.lineTo(13, -1.5); ctx.lineTo(13, 1.5);
    ctx.fill();
    const wf = Math.sin(ent.flapTick || 0) * 4;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.beginPath();
    ctx.ellipse(-2, -7 + wf, 5, 2.5, -0.4, 0, Math.PI * 2);
    ctx.ellipse(3, -7 - wf, 5, 2.5, 0.4, 0, Math.PI * 2);
    ctx.fill();
  } else if (ent.type === 'bird') {
    if (!ent.isFlying || (ent.scale && ent.scale > 0.1)) {
      const s = ent.scale || 1.0;
      ctx.scale(s, s);
      const isCrow = ent.birdType === 'crow';
      ctx.fillStyle = isCrow ? '#212121' : (state.season === 'winter' ? '#4fc3f7' : '#d32f2f');
      ctx.beginPath();
      ctx.ellipse(0, 0, 9, 6, 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(-7, -4, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffd54f';
      ctx.beginPath();
      ctx.moveTo(-11, -4); ctx.lineTo(-7, -6); ctx.lineTo(-7, -2);
      ctx.fill();
    }
  } else if (ent.type === 'tumbleweed') {
    ctx.rotate(ent.rotation || 0);
    ctx.strokeStyle = '#cda250';
    ctx.lineWidth = 2.0;
    ctx.beginPath();
    ctx.arc(0, 0, 16, 0, Math.PI * 2);
    ctx.moveTo(-12, -8); ctx.lineTo(10, 12);
    ctx.moveTo(12, -10); ctx.lineTo(-10, 10);
    ctx.moveTo(-15, 2); ctx.lineTo(15, -4);
    ctx.moveTo(-6, -14); ctx.lineTo(8, 14);
    ctx.stroke();
    ctx.strokeStyle = '#8d6e63';
    ctx.lineWidth = 1.2;
    ctx.strokeRect(-8, -8, 16, 16);
  } else if (ent.type === 'cactus') {
    if (ent.harvested) {
      ctx.fillStyle = '#2e7d32';
      ctx.beginPath();
      ctx.ellipse(0, 4, 10, 5, 0, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillStyle = '#1b5e20';
      ctx.fillRect(-8, -20, 16, 26);
      ctx.fillStyle = '#2e7d32';
      ctx.beginPath();
      ctx.arc(0, -20, 8, Math.PI, 0);
      ctx.fill();
      ctx.strokeStyle = '#388e3c';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-4, -18); ctx.lineTo(-4, 6);
      ctx.moveTo(4, -18); ctx.lineTo(4, 6);
      ctx.stroke();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1.2;
      for (let ty = -16; ty <= 2; ty += 6) {
        ctx.beginPath();
        ctx.moveTo(-8, ty); ctx.lineTo(-12, ty - 2);
        ctx.moveTo(8, ty); ctx.lineTo(12, ty - 2);
        ctx.stroke();
      }
      ctx.fillStyle = '#ffd600';
      ctx.beginPath();
      ctx.arc(0, -22, 4, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (ent.type === 'hound_mound') {
    ctx.fillStyle = '#3e2723';
    ctx.beginPath();
    ctx.ellipse(0, 4, 26, 14, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#eceff1';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.arc(0, 0, 16, Math.PI, 0);
    ctx.stroke();
    ctx.fillStyle = '#1a0d08';
    ctx.beginPath();
    ctx.ellipse(0, 4, 12, 7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#eceff1';
    ctx.beginPath();
    ctx.arc(-14, 2, 4, 0, Math.PI * 2);
    ctx.arc(14, 2, 4, 0, Math.PI * 2);
    ctx.fill();
  } else if (ent.type === 'catcoon') {
    ctx.fillStyle = '#78909c';
    ctx.beginPath();
    ctx.ellipse(0, 0, 15, 11, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#eceff1';
    ctx.beginPath();
    ctx.ellipse(-4, 2, 8, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#546e7a';
    ctx.beginPath();
    ctx.arc(-11, -5, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-16, -11); ctx.lineTo(-12, -18); ctx.lineTo(-8, -12);
    ctx.fill();
    ctx.fillStyle = '#263238';
    ctx.fillRect(-17, -7, 10, 4);
    ctx.fillStyle = '#76ff03';
    ctx.fillRect(-15, -6, 2, 2);
    ctx.fillRect(-10, -6, 2, 2);
    const tw = Math.sin(ent.tailTick || 0) * 6;
    ctx.strokeStyle = '#546e7a';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(12, -2); ctx.quadraticCurveTo(22 + tw, -14, 16 + tw, -22);
    ctx.stroke();
    ctx.strokeStyle = '#263238';
    ctx.lineWidth = 2;
    ctx.stroke();
  } else if (ent.type === 'glommer') {
    ctx.fillStyle = '#004d40';
    ctx.beginPath();
    ctx.arc(0, -6, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ff1744';
    ctx.beginPath();
    ctx.arc(-7, -8, 4, 0, Math.PI * 2);
    ctx.arc(0, -12, 4.5, 0, Math.PI * 2);
    ctx.arc(7, -8, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.fillRect(-8, -9, 1.5, 1.5);
    ctx.fillRect(-1, -13, 1.5, 1.5);
    ctx.fillRect(6, -9, 1.5, 1.5);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.beginPath();
    ctx.ellipse(-12, -20, 6, 3, -0.4, 0, Math.PI * 2);
    ctx.ellipse(12, -20, 6, 3, 0.4, 0, Math.PI * 2);
    ctx.fill();
  } else if (ent.type === 'glommer_statue') {
    ctx.fillStyle = '#616161';
    ctx.fillRect(-18, 4, 36, 12);
    ctx.fillStyle = '#757575';
    ctx.beginPath();
    ctx.arc(0, -8, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#424242';
    ctx.beginPath();
    ctx.arc(-7, -10, 4, 0, Math.PI * 2);
    ctx.arc(0, -14, 4.5, 0, Math.PI * 2);
    ctx.arc(7, -10, 4, 0, Math.PI * 2);
    ctx.fill();
    if (!ent.flowerPicked && (state.isFullMoon || (state.day % 16 === 9 || state.day % 16 === 10))) {
      ctx.fillStyle = '#e91e63';
      ctx.beginPath();
      ctx.arc(0, -26, 6, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (ent.type === 'clockwork_bishop') {
    ctx.fillStyle = '#37474f';
    ctx.fillRect(-10, -12, 20, 24);
    ctx.fillStyle = '#d4af37';
    ctx.beginPath();
    ctx.moveTo(-10, -12); ctx.lineTo(0, -32); ctx.lineTo(10, -12);
    ctx.fill();
    ctx.fillStyle = '#9c27b0';
    ctx.beginPath();
    ctx.arc(0, -20, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffd700';
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#e040fb';
    ctx.beginPath();
    ctx.arc(0, 18, 5 + Math.sin((ent.chargeTimer || 0) * 10) * 2, 0, Math.PI * 2);
    ctx.fill();
  } else if (ent.type === 'clockwork_rook') {
    ctx.fillStyle = '#263238';
    ctx.fillRect(-18, -14, 36, 26);
    ctx.fillRect(-18, -22, 8, 8);
    ctx.fillRect(-4, -22, 8, 8);
    ctx.fillRect(10, -22, 8, 8);
    ctx.fillStyle = '#d4af37';
    ctx.beginPath();
    ctx.moveTo(-18, 0); ctx.lineTo(-30, 4); ctx.lineTo(-18, 8);
    ctx.fill();
    ctx.fillStyle = '#ff1744';
    ctx.fillRect(-14, -8, 5, 5);
  } else if (ent.type === 'merm') {
    ctx.fillStyle = '#33691e';
    ctx.beginPath();
    ctx.ellipse(0, 0, 13, 16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#689f38';
    ctx.beginPath();
    ctx.moveTo(0, -22); ctx.lineTo(8, -14); ctx.lineTo(0, -10);
    ctx.fill();
    ctx.fillStyle = '#ffeb3b';
    ctx.beginPath();
    ctx.arc(-6, -14, 4, 0, Math.PI * 2);
    ctx.arc(6, -14, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#212121';
    ctx.fillRect(-7, -15, 2, 2);
    ctx.fillRect(5, -15, 2, 2);
    ctx.strokeStyle = '#8d6e63';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(14, 12); ctx.lineTo(14, -24);
    ctx.stroke();
  } else if (ent.type === 'merm_house') {
    ctx.fillStyle = '#4e342e';
    ctx.fillRect(-22, -18, 44, 32);
    ctx.fillStyle = '#2e7d32';
    ctx.beginPath();
    ctx.moveTo(-26, -18); ctx.lineTo(0, -36); ctx.lineTo(26, -18);
    ctx.fill();
    ctx.fillStyle = '#1b120c';
    ctx.fillRect(-7, -2, 14, 16);
  } else if (ent.type === 'beehive' || ent.type === 'killer_beehive') {
    const isKiller = ent.type === 'killer_beehive';
    ctx.fillStyle = isKiller ? '#880e4f' : '#f57f17';
    for (let layer = 0; layer < 4; layer++) {
      ctx.beginPath();
      ctx.ellipse(0, 10 - layer * 7, 24 - layer * 4, 9, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#212121';
    ctx.beginPath();
    ctx.ellipse(0, 4, 5, 4, 0, 0, Math.PI * 2);
    ctx.fill();
  } else if (ent.type === 'dirt_pile') {
    ctx.fillStyle = '#4e342e';
    ctx.beginPath();
    ctx.ellipse(0, 4, 15, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#6d4c41';
    ctx.beginPath();
    ctx.ellipse(0, 2, 11, 5, 0, 0, Math.PI * 2);
    ctx.fill();
  } else if (ent.type === 'footprint') {
    ctx.rotate(ent.dirAngle || 0);
    ctx.fillStyle = '#27170c';
    ctx.beginPath();
    ctx.ellipse(-4, 0, 4, 7, -0.2, 0, Math.PI * 2);
    ctx.ellipse(4, 0, 4, 7, 0.2, 0, Math.PI * 2);
    ctx.fill();
  } else if (ent.type === 'koalefant') {
    ctx.fillStyle = '#616161';
    ctx.beginPath();
    ctx.ellipse(0, 2, 32, 22, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillRect(-22, 14, 10, 14);
    ctx.fillRect(12, 14, 10, 14);
    ctx.fillStyle = '#545454';
    ctx.beginPath();
    ctx.arc(-24, -6, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#424242';
    ctx.beginPath();
    ctx.ellipse(-14, -14, 8, 14, 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#545454';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-32, -2); ctx.quadraticCurveTo(-46, 12, -36, 18);
    ctx.stroke();
    ctx.fillStyle = '#eceff1';
    ctx.beginPath();
    ctx.moveTo(-30, 4); ctx.lineTo(-38, 2); ctx.lineTo(-30, 0);
    ctx.fill();
  } else if (ent.type === 'marble_pillar') {
    ctx.fillStyle = '#cfd8dc';
    ctx.fillRect(-10, -26, 20, 36);
    ctx.fillStyle = '#90a4ae';
    ctx.fillRect(-14, 10, 28, 6);
    ctx.fillRect(-14, -30, 28, 6);
    ctx.strokeStyle = '#b0bec5';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(-5, -24); ctx.lineTo(-5, 8);
    ctx.moveTo(0, -24); ctx.lineTo(0, 8);
    ctx.moveTo(5, -24); ctx.lineTo(5, 8);
    ctx.stroke();
  } else if (ent.type === 'auto_harvester') {
    // Steampunk Clockwork Harvester
    ctx.fillStyle = '#424242';
    ctx.beginPath(); ctx.ellipse(0, 10, 26, 12, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#ffb300';
    ctx.beginPath(); ctx.arc(0, -4, 16, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#37474f';
    ctx.beginPath(); ctx.arc(0, -4, 10, 0, Math.PI * 2); ctx.fill();
    // Rotating articulated arm
    const armAngle = ent.armAngle || 0;
    ctx.save();
    ctx.translate(0, -4);
    ctx.rotate(armAngle);
    ctx.fillStyle = '#b0bec5';
    ctx.fillRect(0, -3, 24, 6);
    ctx.fillStyle = '#d32f2f';
    ctx.beginPath();
    ctx.moveTo(24, -3); ctx.lineTo(34, -10); ctx.lineTo(28, 3); ctx.closePath();
    ctx.fill();
    ctx.restore();
    // Blue diode light
    ctx.fillStyle = '#29b6f6';
    ctx.beginPath(); ctx.arc(0, -22, 4, 0, Math.PI * 2); ctx.fill();
  } else if (ent.type === 'vacuum_chest') {
    // Arcane Vortex Void Chest
    ctx.fillStyle = '#311b92';
    ctx.fillRect(-18, -12, 36, 26);
    ctx.strokeStyle = '#b388ff';
    ctx.lineWidth = 2.5;
    ctx.strokeRect(-18, -12, 36, 26);
    // Pulsing vortex aperture
    const vPulse = Math.sin(Date.now() / 200) * 2;
    ctx.fillStyle = '#7e57c2';
    ctx.beginPath(); ctx.arc(0, 0, 8 + vPulse, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#d1c4e9';
    ctx.beginPath(); ctx.arc(0, 0, 3, 0, Math.PI * 2); ctx.fill();
  } else if (ent.type === 'sprinkler') {
    // Irrigation Sprinkler
    ctx.fillStyle = '#0288d1';
    ctx.fillRect(-12, -4, 24, 20);
    ctx.fillStyle = '#b0bec5';
    ctx.fillRect(-3, -20, 6, 16);
    // Spinning sprinkler head & spray mist
    const spAngle = ent.sprayAngle || 0;
    ctx.save();
    ctx.translate(0, -20);
    ctx.rotate(spAngle);
    ctx.fillStyle = '#ffd54f';
    ctx.fillRect(-14, -2, 28, 4);
    ctx.fillStyle = 'rgba(129, 212, 250, 0.65)';
    ctx.beginPath(); ctx.arc(16, 0, 8, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(-16, 0, 8, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  } else if (ent.type === 'mushroom_planter') {
    // Weathered birch log
    ctx.fillStyle = '#eceff1';
    ctx.fillRect(-18, -8, 36, 16);
    ctx.fillStyle = '#37474f';
    ctx.fillRect(-12, -6, 5, 3);
    ctx.fillRect(4, 2, 6, 3);
    // Sprouting mushrooms
    if (ent.ready && ent.shroom) {
      const shroomColor = ent.shroom === 'blue_mushroom' ? '#1e88e5' : (ent.shroom === 'green_mushroom' ? '#43a047' : '#e53935');
      for (let i = -12; i <= 12; i += 8) {
        ctx.fillStyle = '#fff';
        ctx.fillRect(i - 1, -16, 2, 8);
        ctx.fillStyle = shroomColor;
        ctx.beginPath(); ctx.arc(i, -16, 6, 0, Math.PI, true); ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.fillRect(i - 2, -18, 1.5, 1.5);
        ctx.fillRect(i + 1, -19, 1.5, 1.5);
      }
    } else if (ent.shroom) {
      ctx.fillStyle = '#81c784';
      ctx.beginPath(); ctx.arc(-4, -8, 3, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(4, -8, 3, 0, Math.PI * 2); ctx.fill();
    }
  } else if (ent.type === 'auto_feeder') {
    // Wooden Trough with Silage
    ctx.fillStyle = '#5d4037';
    ctx.fillRect(-20, -12, 40, 24);
    ctx.fillStyle = '#8d6e63';
    ctx.fillRect(-17, -9, 34, 18);
    ctx.fillStyle = '#81c784';
    ctx.beginPath();
    ctx.arc(0, 0, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffecb3';
    ctx.font = '14px sans-serif';
    ctx.fillText('🌾', -7, 5);
  } else if (ent.type === 'solar_lantern') {
    // Obsidian Crystal Light Pole
    ctx.fillStyle = '#37474f';
    ctx.fillRect(-4, -28, 8, 28);
    ctx.fillStyle = isDark ? '#fff59d' : '#81d4fa';
    ctx.beginPath();
    ctx.arc(0, -30, 10, 0, Math.PI * 2);
    ctx.fill();
    if (isDark) {
      ctx.fillStyle = 'rgba(255, 245, 157, 0.45)';
      ctx.beginPath();
      ctx.arc(0, -30, 18, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (ent.type === 'tornado') {
    ctx.save();
    ctx.rotate(ent.spin || 0);
    ctx.fillStyle = 'rgba(200, 230, 240, 0.65)';
    for (let i = 0; i < 4; i++) {
      ctx.rotate(Math.PI / 2);
      ctx.beginPath();
      ctx.ellipse(12, 0, 16, 6, 0.4, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.beginPath();
    ctx.arc(0, 0, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  } else if (ent.type === 'beefalo_calf') {
    ctx.fillStyle = '#5d4037';
    ctx.beginPath();
    ctx.ellipse(0, -8, 16, 12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#3e2723';
    ctx.beginPath();
    ctx.arc(10, -12, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#d7ccc8';
    ctx.fillRect(10, -18, 3, 5);
  } else if (ent.type === 'buzzard') {
    ctx.fillStyle = '#3e2723';
    ctx.beginPath();
    ctx.ellipse(0, -8, 18, 12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f48fb1';
    ctx.beginPath();
    ctx.arc(12, -14, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffb300';
    ctx.fillRect(17, -13, 8, 4);
  } else if (ent.type === 'klaus') {
    // Mythic Boss Klaus: Chained Santa-Beast & Enraged Maw
    const isEnraged = ent.hp < 1000;
    ctx.fillStyle = isEnraged ? '#b71c1c' : '#212121';
    ctx.beginPath();
    ctx.ellipse(0, -22, 38, 48, 0, 0, Math.PI * 2);
    ctx.fill();
    // Klaus Red Robe Trim & Fur
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(-34, -4, 68, 8);
    // Horns
    ctx.strokeStyle = '#3e2723';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(-16, -60);
    ctx.lineTo(-36, -85);
    ctx.moveTo(16, -60);
    ctx.lineTo(36, -85);
    ctx.stroke();
    // Face & Eyes
    ctx.fillStyle = '#ff1744';
    ctx.fillRect(-12, -45, 6, 6);
    ctx.fillRect(6, -45, 6, 6);
    if (isEnraged) {
      // Gaping Demonic Maw in Chest
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.ellipse(0, -15, 20, 14, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      for (let t = -14; t <= 14; t += 7) {
        ctx.fillRect(t, -22, 4, 6);
        ctx.fillRect(t, -12, 4, 6);
      }
    } else {
      // Heavy Grey Restraining Chains
      ctx.strokeStyle = '#90a4ae';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-28, -35);
      ctx.lineTo(28, -5);
      ctx.moveTo(28, -35);
      ctx.lineTo(-28, -5);
      ctx.stroke();
    }
  } else if (ent.type === 'gem_deer') {
    ctx.fillStyle = '#4e342e';
    ctx.beginPath();
    ctx.ellipse(0, -12, 22, 16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = ent.deerType === 'red' ? '#ff1744' : '#00e5ff';
    ctx.beginPath();
    ctx.arc(14, -28, 8, 0, Math.PI * 2);
    ctx.fill();
  } else if (ent.type === 'dwarf_star') {
    // Radiant Dwarf Star
    const sPulse = Math.sin(Date.now() / 150) * 3;
    ctx.fillStyle = 'rgba(255, 152, 0, 0.4)';
    ctx.beginPath(); ctx.arc(0, 0, 24 + sPulse, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#ffb300';
    ctx.beginPath(); ctx.arc(0, 0, 16, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#fffde7';
    ctx.beginPath(); ctx.arc(0, 0, 8, 0, Math.PI * 2); ctx.fill();
  } else if (ent.type === 'shadow_lumberjack' || ent.type === 'shadow_miner' || ent.type === 'shadow_duelist') {
    // Shadow Minions
    ctx.fillStyle = 'rgba(33, 33, 33, 0.85)';
    ctx.beginPath(); ctx.ellipse(0, 0, 14, 22, 0, 0, Math.PI * 2); ctx.fill();
    // Purple eyes
    ctx.fillStyle = '#ea80fc';
    ctx.fillRect(-5, -12, 3, 3);
    ctx.fillRect(2, -12, 3, 3);
    // Tool
    ctx.strokeStyle = '#ce93d8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(10, 4);
    ctx.lineTo(18, -14);
    ctx.stroke();
  } else if (ent.type === 'werepig') {
    // Feral Werepig
    ctx.fillStyle = '#212121';
    ctx.beginPath(); ctx.ellipse(0, 0, 26, 28, 0, 0, Math.PI * 2); ctx.fill();
    // Red eyes & tusks
    ctx.fillStyle = '#d50000';
    ctx.fillRect(-10, -14, 5, 4);
    ctx.fillRect(5, -14, 5, 4);
    ctx.fillStyle = '#fff9c4';
    ctx.beginPath();
    ctx.moveTo(-8, 2); ctx.lineTo(-12, -8); ctx.lineTo(-6, -2);
    ctx.moveTo(8, 2); ctx.lineTo(12, -8); ctx.lineTo(6, -2);
    ctx.fill();
  }

  ctx.restore();
}

function renderLighting() {
  const isCaves = state.worldLayer === 'caves';
  const { isDay, isDusk, isNight, split } = getDayPhases();
  const isFullMoon = (state.day % 16 === 9 || state.day % 16 === 10) && isNight && !isCaves;

  if (isFullMoon) {
    ctx.save();
    ctx.fillStyle = 'rgba(15, 32, 65, 0.42)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    return;
  }

  let darknessAlpha = 0;
  if (isCaves) {
    darknessAlpha = 0.98;
  } else if (isDusk) {
    darknessAlpha = 0.15 + ((state.timeInDay - split.dayEnd) / split.duskSec) * 0.55;
  } else if (isNight) {
    darknessAlpha = 0.96;
  }

  if (darknessAlpha <= 0) return;

  // Initialize or resize dedicated offscreen lighting canvas
  if (!state.lightCanvas) {
    state.lightCanvas = document.createElement('canvas');
    state.lightCtx = state.lightCanvas.getContext('2d');
  }
  if (state.lightCanvas.width !== canvas.width || state.lightCanvas.height !== canvas.height) {
    state.lightCanvas.width = canvas.width;
    state.lightCanvas.height = canvas.height;
  }

  const lCtx = state.lightCtx;
  lCtx.clearRect(0, 0, canvas.width, canvas.height);

  // 1. Fill offscreen buffer with darkness overlay
  const darkColor = (isNight || isCaves) ? `rgba(6, 4, 5, ${darknessAlpha})` : `rgba(180, 80, 20, ${darknessAlpha * 0.55})`;
  lCtx.fillStyle = darkColor;
  lCtx.fillRect(0, 0, canvas.width, canvas.height);

  // 2. Punch out light circles via destination-out on OFFSCREEN buffer ONLY!
  // (Crucial: This ensures main canvas graphics, player and ground are NEVER wiped to transparent background!)
  lCtx.save();
  lCtx.globalCompositeOperation = 'destination-out';

  const lightSources = [];

  // Player Hand-held & Amulet Light
  const p = state.player;
  const px = p.x - state.camera.x;
  const py = p.y - state.camera.y;

  let playerRadius = 0;
  let isAmuletLight = false;
  if (p.equipped.hand && ITEMS[p.equipped.hand.id]?.isLight) {
    playerRadius = p.equipped.hand.id === 'lantern' ? 210 : 175;
  }
  const activeAmulet = (p.equipped.amulet && ITEMS[p.equipped.amulet.id]) ? p.equipped.amulet :
                       ((p.equipped.body && ITEMS[p.equipped.body.id]?.equipSlot === 'amulet') ? p.equipped.body : null);
  if (activeAmulet && activeAmulet.id === 'magiluminescence') {
    playerRadius = Math.max(playerRadius, 200);
    isAmuletLight = true;
  }

  if (playerRadius > 0) {
    const flicker = Math.sin(Date.now() / 120) * 4;
    const pr = playerRadius + flicker;
    lightSources.push({ x: px, y: py, r: pr, color: isAmuletLight ? '#ffd54f' : '#ff9800' });

    const g = lCtx.createRadialGradient(px, py, 25, px, py, pr);
    g.addColorStop(0, 'rgba(0,0,0,1)');
    g.addColorStop(0.75, 'rgba(0,0,0,0.85)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    lCtx.fillStyle = g;
    lCtx.beginPath();
    lCtx.arc(px, py, pr, 0, Math.PI * 2);
    lCtx.fill();
  }

  // World light sources (Campfires, Firepits, Scaled Furnace, Dwarf Star, Light Flowers, Burning)
  for (const ent of state.entities) {
    const ex = ent.x - state.camera.x;
    const ey = ent.y - state.camera.y;
    if (ex < -260 || ex > canvas.width + 260 || ey < -260 || ey > canvas.height + 260) continue;

    let entRadius = 0;
    let lightCol = '#ff9800';

    if ((ent.type === 'campfire' || ent.type === 'firepit') && ent.fuel > 0) {
      entRadius = (ent.fuel / ent.maxFuel) * 130 + 80 + Math.sin(Date.now() / 100) * 5;
    } else if (ent.type === 'scaled_furnace') {
      entRadius = 220 + Math.sin(Date.now() / 150) * 4;
      lightCol = '#ff7043';
    } else if (ent.type === 'dwarf_star') {
      entRadius = 240 + Math.sin(Date.now() / 80) * 6;
      lightCol = '#fff9c4';
    } else if (ent.type === 'light_flower' && ent.harvestable) {
      entRadius = 115 + Math.sin(Date.now() / 200) * 4;
      lightCol = '#80deea';
    } else if (ent.burning && ent.burning > 0) {
      entRadius = 135 + Math.sin(Date.now() / 90) * 6;
      lightCol = '#ff5722';
    }

    if (entRadius > 0) {
      lightSources.push({ x: ex, y: ey, r: entRadius, color: lightCol });
      const g = lCtx.createRadialGradient(ex, ey, 25, ex, ey, entRadius);
      g.addColorStop(0, 'rgba(0,0,0,1)');
      g.addColorStop(0.75, 'rgba(0,0,0,0.85)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      lCtx.fillStyle = g;
      lCtx.beginPath();
      lCtx.arc(ex, ey, entRadius, 0, Math.PI * 2);
      lCtx.fill();
    }
  }

  lCtx.restore();

  // 3. Draw the darkness layer (with carved light holes) directly onto main canvas
  ctx.drawImage(state.lightCanvas, 0, 0);

  // 4. Draw warm organic ambient fire glow inside the illuminated areas!
  for (const ls of lightSources) {
    ctx.save();
    const glow = ctx.createRadialGradient(ls.x, ls.y, 10, ls.x, ls.y, ls.r);
    glow.addColorStop(0, ls.color === '#ffd54f' ? 'rgba(255, 220, 80, 0.22)' : 'rgba(255, 140, 30, 0.18)');
    glow.addColorStop(0.7, 'rgba(255, 110, 20, 0.08)');
    glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(ls.x, ls.y, ls.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // 5. Blueprint Ghost (if active)
  if (state.blueprint && state.blueprint.active) {
    renderBlueprintGhost(ctx);
  }
}

// --- 12. Full Map & Mini-Map ---
function renderFullMap() {
  const mapCanvas = document.getElementById('full-map-canvas');
  const mctx = mapCanvas.getContext('2d');
  mctx.clearRect(0, 0, mapCanvas.width, mapCanvas.height);

  const scaleX = mapCanvas.width / state.worldWidth;
  const scaleY = mapCanvas.height / state.worldHeight;

  // Render Full Biome Cartography grid
  const step = 8;
  for (let mx = 0; mx < mapCanvas.width; mx += step) {
    for (let my = 0; my < mapCanvas.height; my += step) {
      const wx = (mx / mapCanvas.width) * state.worldWidth;
      const wy = (my / mapCanvas.height) * state.worldHeight;
      const b = getBiomeAt(wx, wy);
      mctx.fillStyle = b.groundColor;
      mctx.fillRect(mx, my, step, step);
    }
  }

  // Entities on map
  for (const ent of state.entities) {
    const mx = ent.x * scaleX;
    const my = ent.y * scaleY;
    if (ent.type === 'beefalo') {
      mctx.fillStyle = '#bcaaa4';
      mctx.fillRect(mx - 2, my - 2, 5, 5);
    } else if (ent.type === 'pig_king') {
      mctx.fillStyle = '#e91e63';
      mctx.fillRect(mx - 4, my - 4, 8, 8);
    } else if (ent.type === 'pig_house' || ent.type === 'pig') {
      mctx.fillStyle = '#f48fb1';
      mctx.fillRect(mx - 2, my - 2, 4, 4);
    } else if (ent.type === 'tallbird' || ent.type === 'tallbird_nest') {
      mctx.fillStyle = '#0288d1';
      mctx.fillRect(mx - 2, my - 2, 4, 4);
    } else if (ent.type === 'tentacle') {
      mctx.fillStyle = '#7b1fa2';
      mctx.fillRect(mx - 2, my - 2, 4, 4);
    } else if (ent.type === 'grave') {
      mctx.fillStyle = '#90a4ae';
      mctx.fillRect(mx - 1, my - 1, 3, 3);
    } else if (ent.type === 'pond') {
      mctx.fillStyle = '#00bcd4';
      mctx.beginPath();
      mctx.arc(mx, my, 4, 0, Math.PI * 2);
      mctx.fill();
    } else if (ent.type === 'science_machine' || ent.type === 'alchemy_engine' || ent.type === 'prestihatitator' || ent.type === 'ancient_station') {
      mctx.fillStyle = '#ffd700';
      mctx.fillRect(mx - 3, my - 3, 6, 6);
    } else if (ent.type === 'cave_entrance' || ent.type === 'cave_exit') {
      mctx.fillStyle = '#9c27b0';
      mctx.fillRect(mx - 3, my - 3, 6, 6);
    } else if (ent.type === 'celestial_altar') {
      mctx.fillStyle = '#80deea';
      mctx.fillRect(mx - 3, my - 3, 6, 6);
    } else if (ent.type === 'beehive' || ent.type === 'killer_beehive') {
      mctx.fillStyle = ent.type === 'killer_beehive' ? '#b71c1c' : '#fbc02d';
      mctx.fillRect(mx - 2, my - 2, 4, 4);
    } else if (ent.type === 'hound_mound') {
      mctx.fillStyle = '#ff3d00';
      mctx.fillRect(mx - 3, my - 3, 5, 5);
    } else if (ent.type === 'catcoon') {
      mctx.fillStyle = '#ff9800';
      mctx.fillRect(mx - 2, my - 2, 4, 4);
    } else if (ent.type === 'clockwork_knight' || ent.type === 'clockwork_bishop' || ent.type === 'clockwork_rook') {
      mctx.fillStyle = '#7b1fa2';
      mctx.fillRect(mx - 3, my - 3, 5, 5);
    } else if (ent.type === 'koalefant') {
      mctx.fillStyle = '#78909c';
      mctx.beginPath();
      mctx.arc(mx, my, 5, 0, Math.PI * 2);
      mctx.fill();
    } else if (ent.type === 'glommer_statue') {
      mctx.fillStyle = '#e91e63';
      mctx.beginPath();
      mctx.arc(mx, my, 4, 0, Math.PI * 2);
      mctx.fill();
    }
  }

  // Player position marker with white border
  const px = state.player.x * scaleX;
  const py = state.player.y * scaleY;
  mctx.fillStyle = '#ff1744';
  mctx.beginPath();
  mctx.arc(px, py, 6, 0, Math.PI * 2);
  mctx.fill();
  mctx.strokeStyle = '#ffffff';
  mctx.lineWidth = 2;
  mctx.stroke();
}

// --- 13. Save & Load Game Persistence Engine ---
function saveGameToSlot(slotId) {
  try {
    const saveData = {
      version: '2.0',
      timestamp: Date.now(),
      day: state.day,
      timeInDay: state.timeInDay,
      season: state.season,
      seasonDay: state.seasonDay,
      weather: state.weather,
      temperature: state.temperature,
      currentTechTier: state.currentTechTier,
      prototypedRecipes: Array.from(state.prototypedRecipes),
      player: {
        x: state.player.x,
        y: state.player.y,
        hp: state.player.hp,
        maxHp: state.player.maxHp,
        hunger: state.player.hunger,
        maxHunger: state.player.maxHunger,
        sanity: state.player.sanity,
        maxSanity: state.player.maxSanity,
        temp: state.player.temp,
        wetness: state.player.wetness,
        equipped: state.player.equipped,
        inventory: state.player.inventory,
        backpack: state.player.backpack
      },
      worldLayer: state.worldLayer || 'surface',
      surfacePlayerPos: state.surfacePlayerPos,
      cavePlayerPos: state.cavePlayerPos,
      caveVisited: state.caveVisited,
      entities: state.entities,
      surfaceEntities: state.surfaceEntities,
      caveEntities: state.caveEntities,
      chester: state.chester,
      diary: state.diary
    };
    localStorage.setItem(`dst_save_slot_${slotId}`, JSON.stringify(saveData));
    updateSaveSlotCards();
    showToast(`✅ 游戏成功保存至【存档槽位 ${slotId}】！`);
    audio.playCraft();
  } catch (err) {
    console.error('Save failed:', err);
    showToast('保存存档失败');
  }
}

function loadGameFromSlot(slotId) {
  try {
    const raw = localStorage.getItem(`dst_save_slot_${slotId}`);
    if (!raw) {
      showToast('该槽位为空，无可用存档！');
      return;
    }
    const data = JSON.parse(raw);
    state.day = data.day || 1;
    state.timeInDay = data.timeInDay || 0;
    state.season = data.season || 'autumn';
    state.seasonDay = data.seasonDay || 1;
    state.weather = data.weather || 'clear';
    state.temperature = data.temperature || 25;
    state.currentTechTier = data.currentTechTier || 0;
    state.prototypedRecipes = new Set(data.prototypedRecipes || []);

    Object.assign(state.player, data.player);
    state.worldLayer = data.worldLayer || 'surface';
    state.surfacePlayerPos = data.surfacePlayerPos || { x: state.player.x, y: state.player.y };
    state.cavePlayerPos = data.cavePlayerPos || { x: 1600, y: 1600 };
    state.caveVisited = !!data.caveVisited;
    state.entities = data.entities || [];
    state.surfaceEntities = data.surfaceEntities || null;
    state.caveEntities = data.caveEntities || null;
    state.chester = data.chester || { active: false, x: 1900, y: 1900, slots: new Array(9).fill(null), type: 'normal' };
    state.diary = data.diary || initDiary();

    if (state.worldLayer === 'caves') {
      document.getElementById('cave-vignette').classList.remove('hidden');
    } else {
      document.getElementById('cave-vignette').classList.add('hidden');
    }

    state.gameOver = false;
    document.getElementById('game-over-screen').classList.add('hidden');
    document.getElementById('save-load-modal').classList.add('hidden');
    document.getElementById('start-screen').classList.add('hidden');
    state.started = true;

    updateInventoryUI();
    showToast(`📂 成功载入【存档槽位 ${slotId}】！第 ${state.day} 天 (${getSeasonName(state.season)})`);
    audio.playCraft();
  } catch (err) {
    console.error('Load failed:', err);
    showToast('载入存档失败');
  }
}

function autoSave() {
  try {
    const data = {
      version: '2.0',
      timestamp: Date.now(),
      day: state.day,
      timeInDay: state.timeInDay,
      season: state.season,
      seasonDay: state.seasonDay,
      player: state.player,
      worldLayer: state.worldLayer,
      entities: state.entities,
      surfaceEntities: state.surfaceEntities,
      caveEntities: state.caveEntities,
      chester: state.chester,
      diary: state.diary
    };
    localStorage.setItem('dst_autosave', JSON.stringify(data));
  } catch (e) {}
}

function updateSaveSlotCards() {
  for (let i = 1; i <= 3; i++) {
    const descEl = document.getElementById(`slot-desc-${i}`);
    if (!descEl) continue;
    const raw = localStorage.getItem(`dst_save_slot_${i}`);
    if (raw) {
      try {
        const d = JSON.parse(raw);
        const dateStr = new Date(d.timestamp).toLocaleDateString();
        descEl.innerText = `第 ${d.day} 天 · ${getSeasonName(d.season)} · 生命 ${Math.ceil(d.player.hp)} (${dateStr})`;
      } catch (e) {
        descEl.innerText = '有效存档';
      }
    } else {
      descEl.innerText = '空存档';
    }
  }
}


function openMenuUI() {
  window.lastModalOpenTime = Date.now();
  const modal = document.getElementById('menu-modal');
  modal.classList.remove('hidden');

  ['easy', 'normal', 'hard'].forEach(d => {
    const b = document.getElementById(`diff-${d}`);
    if (b) {
      if (state.difficulty === d) b.classList.add('active');
      else b.classList.remove('active');
    }
  });

  // Sound SFX & Touch Vibration Toggles
  const toggleSfx = document.getElementById('toggle-sfx');
  if (toggleSfx) {
    toggleSfx.checked = state.settings.sfx;
    toggleSfx.onchange = (e) => {
      state.settings.sfx = e.target.checked;
      audio.enabled = e.target.checked;
      localStorage.setItem('dst_pocket_sfx', e.target.checked ? '1' : '0');
      showToast(e.target.checked ? '🔊 音效已开启' : '🔇 音效已静音');
    };
  }

  const toggleVibrate = document.getElementById('toggle-vibrate');
  if (toggleVibrate) {
    toggleVibrate.checked = state.settings.vibrate;
    toggleVibrate.onchange = (e) => {
      state.settings.vibrate = e.target.checked;
      localStorage.setItem('dst_pocket_vibrate', e.target.checked ? '1' : '0');
      showToast(e.target.checked ? '📳 触屏振动已开启' : '📴 触屏振动已关闭');
    };
  }

  document.getElementById('btn-close-menu').onclick = () => {
    modal.classList.add('hidden');
  };
  document.getElementById('btn-menu-resume').onclick = () => {
    modal.classList.add('hidden');
  };
  document.getElementById('btn-menu-save').onclick = () => {
    modal.classList.add('hidden');
    openSaveLoadUI();
  };
  document.getElementById('btn-menu-restart').onclick = () => {
    if (confirm('确认返回角色选择并放弃未保存的探索吗？')) {
      location.reload();
    }
  };

  ['easy', 'normal', 'hard'].forEach(diff => {
    const btn = document.getElementById(`diff-${diff}`);
    if (btn) {
      btn.onclick = () => {
        state.difficulty = diff;
        ['easy', 'normal', 'hard'].forEach(d => {
          document.getElementById(`diff-${d}`)?.classList.toggle('active', d === diff);
        });
        const diffNames = { easy: '🟢 悠闲探索 (Relaxed)', normal: '🟡 经典求生 (Classic)', hard: '🔴 严酷荒野 (Hardcore)' };
        showToast(`生存难度已切换为：${diffNames[diff]}`);
        audio.playCraft();
      };
    }
  });
}

function openSaveLoadUI() {
  updateSaveSlotCards();
  document.getElementById('save-load-modal').classList.remove('hidden');
}

// Survival Diary & Milestones Modal Logic
function openDiaryUI() {
  const modal = document.getElementById('diary-modal');
  modal.classList.remove('hidden');

  // Summary
  const summaryEl = document.getElementById('diary-stats-content');
  const d = state.diary || initDiary();
  summaryEl.innerHTML = `
    <div class="stat-item"><span class="stat-num">${state.day}</span><span class="stat-label">存活天数</span></div>
    <div class="stat-item"><span class="stat-num">${d.monstersKilled}</span><span class="stat-label">讨伐怪物</span></div>
    <div class="stat-item"><span class="stat-num">${d.bossesDefeated}</span><span class="stat-label">讨伐霸主</span></div>
    <div class="stat-item"><span class="stat-num">${state.prototypedRecipes.size}</span><span class="stat-label">研发蓝图</span></div>
    <div class="stat-item"><span class="stat-num">${d.beefaloTamed || 0}</span><span class="stat-label">驯养巨兽</span></div>
    <div class="stat-item"><span class="stat-num">${state.worldCycle || 1}</span><span class="stat-label">平行维度</span></div>
  `;

  // 70h Chapter Quests Campaign
  const cListEl = document.getElementById('chapters-list');
  if (cListEl) {
    cListEl.innerHTML = '<div style="font-size:12px; font-weight:bold; color:#ffd073; margin-bottom:6px;">🌟 70小时主线战役史诗 (EPIC CHAPTERS)</div>';
    const chaptersDef = [
      { id: 'ch1', title: '第一章：荒野筑基', desc: '研发科学仪器与瓦罐烹饪锅，度过最初的荒野之夜。', done: () => d.milestones.survive_night && state.prototypedRecipes.size >= 2 },
      { id: 'ch2', title: '第二章：凛冬苦寒', desc: '制造保暖冬装，战胜严冬并击溃暴风雪巨兽【独眼巨鹿】。', done: () => d.milestones.slay_deerclops },
      { id: 'ch3', title: '第三章：万物生息', desc: '搭建蜂箱培育蜂群，成功驯养并套鞍一头皮弗娄牛。', done: () => d.milestones.tame_beefalo },
      { id: 'ch4', title: '第四章：酷暑炼狱', desc: '研发自动雪球灭火机，斩杀炽热狂暴的夏季领主【龙蝇】。', done: () => d.milestones.slay_dragonfly || d.chapters.ch4 },
      { id: 'ch5', title: '第五章：深渊织影', desc: '开凿落水洞岩塞，潜入地下深渊开采铥矿并研习暗影古法。', done: () => d.milestones.enter_caves && d.milestones.magic_apprentice },
      { id: 'ch6', title: '第六章：扬帆天体', desc: '制造远洋造船套件出海远征，登陆远洋极地的天体月岛。', done: () => d.milestones.sail_boat || d.milestones.reach_lunar },
      { id: 'ch7', title: '第七章：维度飞升', desc: '集齐散落的麦斯威尔五大遗物零件，启动传送阵跃迁平行宇宙！', done: () => d.milestones.teleportato_jump || (state.worldCycle > 1) }
    ];

    chaptersDef.forEach(ch => {
      const isDone = ch.done();
      const card = document.createElement('div');
      card.className = `chapter-card ${isDone ? 'completed' : ''}`;
      card.innerHTML = `
        <div class="chapter-header">
          <span>${ch.title}</span>
          <span style="color:${isDone ? '#2ecc71' : '#e67e22'}">${isDone ? '已达成 ★' : '进行中 ⏳'}</span>
        </div>
        <div class="chapter-desc">${ch.desc}</div>
      `;
      cListEl.appendChild(card);
    });
  }

  // Milestones list
  const mListEl = document.getElementById('milestones-list');
  const milestonesDef = [
    { key: 'survive_night', icon: '🌅', name: '初露锋芒', desc: '在残酷的荒野中成功度过第一个黑夜' },
    { key: 'science_rev', icon: '⚙️', name: '工业先锋', desc: '研发制造科学仪器与炼金引擎' },
    { key: 'master_chef', icon: '🍳', name: '大厨之魂', desc: '在瓦罐烹饪锅中烹调出美味经典大餐' },
    { key: 'find_chester', icon: '🐾', name: '忠诚伙伴', desc: '寻获眼骨并唤醒随行切斯特狗箱' },
    { key: 'tame_beefalo', icon: '🐂', name: '狂野骑手', desc: '投喂干草并套上鞍具，驾驭皮弗娄牛驰骋荒野' },
    { key: 'enter_caves', icon: '🕯️', name: '深邃探秘', desc: '开凿落水洞岩塞，潜入深邃幽暗的地下洞穴' },
    { key: 'magic_apprentice', icon: '🔮', name: '暗影学徒', desc: '制造灵子分解器或暗影操纵仪，踏入魔法殿堂' },
    { key: 'slay_deerclops', icon: '❄️', name: '凛冬屠夫', desc: '战胜冬季天灾巨兽【独眼巨鹿】并取得眼球' },
    { key: 'slay_dragonfly', icon: '🔥', name: '屠龙之誓', desc: '斩杀夏季狂暴领主【龙蝇】并取得远古龙鳞' },
    { key: 'sail_boat', icon: '⛵', name: '大航海家', desc: '建造远洋海船，扬帆探索无边广袤大洋' },
    { key: 'reach_lunar', icon: '🌙', name: '天体启蒙', desc: '登陆远洋深处的天体月岛并激活天体祭坛' },
    { key: 'four_seasons', icon: '👑', name: '四季霸主', desc: '诛灭四季四位霸主巨兽（巨鹿、熊獾、鹿鸭、龙蝇）' },
    { key: 'teleportato_jump', icon: '🌀', name: '跨维行者', desc: '启动麦斯威尔传送阵，飞升跨越平行宇宙维度' },
    { key: 'eternal_lord', icon: '🏆', name: '永恒领主', desc: '在永恒荒野中存活超过 30 天，成为荒野传奇' }
  ];

  mListEl.innerHTML = '';
  milestonesDef.forEach(m => {
    const isUnlocked = d.milestones[m.key];
    const card = document.createElement('div');
    card.className = `milestone-item ${isUnlocked ? 'unlocked' : ''}`;
    card.innerHTML = `
      <div class="milestone-badge">${m.icon}</div>
      <div class="milestone-info">
        <span class="milestone-name">${m.name}</span>
        <span class="milestone-desc">${m.desc}</span>
      </div>
      <span class="milestone-status">${isUnlocked ? '已达成 ★' : '未解锁'}</span>
    `;
    mListEl.appendChild(card);
  });
}

// Global scope bindings for inline HTML onclick
window.saveGameToSlot = saveGameToSlot;
window.loadGameFromSlot = loadGameFromSlot;

// --- 14. Game Over & Resurrect ---
function triggerGameOver() {
  state.gameOver = true;
  document.getElementById('survival-stats').innerText = `你在残酷的荒野中存活了 ${state.day} 天 (${getSeasonName(state.season)})`;

  // Check if player has meat effigy or life giving amulet
  const effigy = state.entities.find(e => e.type === 'meat_effigy' && e.active);
  const btnResurrect = document.getElementById('btn-resurrect');
  if (effigy) {
    btnResurrect.classList.remove('hidden');
    btnResurrect.onclick = () => {
      effigy.active = false;
      state.gameOver = false;
      state.player.hp = 100;
      state.player.sanity = 100;
      state.player.hunger = 100;
      state.player.x = effigy.x;
      state.player.y = effigy.y;
      document.getElementById('game-over-screen').classList.add('hidden');
      showToast('🌟 灵魂在肉块雕像处重生觉醒！');
      audio.playCraft();
    };
  } else {
    btnResurrect.classList.add('hidden');
  }

  document.getElementById('game-over-screen').classList.remove('hidden');
}

function restartWorld() {
  document.getElementById('game-over-screen').classList.add('hidden');
  const craftDrawer = document.getElementById('crafting-drawer');
  if (craftDrawer) craftDrawer.classList.add('hidden');
  state.day = 1;
  state.timeInDay = 0;
  state.season = 'autumn';
  state.seasonDay = 1;
  state.gameOver = false;
  state.worldLayer = 'surface';
  document.getElementById('cave-vignette').classList.add('hidden');
  state.player.hp = 150;
  state.player.hunger = 150;
  state.player.sanity = 200;
  state.player.temp = 25;
  state.player.wetness = 0;
  state.player.inDarknessTimer = 0;
  state.player.whisperTimer = 0;
  lastTime = performance.now();
  state.player.x = 1900;
  state.player.y = 1900;
  state.player.equipped.hand = { id: 'torch', count: 1, durability: 75 };
  state.player.equipped.head = null;
  state.player.equipped.body = null;
  state.player.inventory = new Array(10).fill(null);
  state.player.backpack = new Array(8).fill(null);
  initWorld();
  updateInventoryUI();
}

// --- 15. Inputs & Event Bindings ---
function setupInputs() {
  window.addEventListener('keydown', (e) => {
    state.keys[e.code] = true;
    if (e.code === 'Space' || e.code === 'KeyE') interactNearest();
    else if (e.code === 'KeyF') attackNearest();
    else if (e.code === 'KeyC') {
      document.getElementById('craft-drawer')?.classList.toggle('open');
    } else if (e.code === 'KeyM' || e.code === 'Tab') {
      e.preventDefault();
      const mapModal = document.getElementById('map-modal');
      mapModal.classList.toggle('hidden');
      if (!mapModal.classList.contains('hidden')) renderFullMap();
    } else if (e.code === 'Escape' || e.code === 'KeyP') {
      const menuModal = document.getElementById('menu-modal');
      menuModal.classList.toggle('hidden');
    } else if (e.code === 'KeyK') {
      openSaveLoadUI();
    } else if (e.code === 'KeyL') {
      openDiaryUI();
    } else if (e.code === 'KeyB') {
      if (state.chester && state.chester.active) openChesterUI();
    } else if (e.code >= 'Digit1' && e.code <= 'Digit9') {
      const idx = parseInt(e.code.replace('Digit', '')) - 1;
      onSlotClicked('inv', idx);
    } else if (e.code === 'Digit0') {
      onSlotClicked('inv', 9);
    }
  });

  // Desktop Mouse Click on World Canvas (Interact / Attack / Move)
  canvas.addEventListener('click', (e) => {
    if (state.blueprint) return;
    const rect = canvas.getBoundingClientRect();
    const clickWorldX = e.clientX - rect.left + state.camera.x;
    const clickWorldY = e.clientY - rect.top + state.camera.y;

    // Check Blink Wand (The Lazy Explorer) Instant Teleportation
    if (state.player.equipped.hand && state.player.equipped.hand.id === 'the_lazy_explorer') {
      const d = dist(state.player.x, state.player.y, clickWorldX, clickWorldY);
      if (d <= 420 && getBiomeAt(clickWorldX, clickWorldY) !== 'ocean') {
        createHitParticles(state.player.x, state.player.y, '#ffa726');
        state.player.x = clickWorldX;
        state.player.y = clickWorldY;
        createHitParticles(state.player.x, state.player.y, '#ffa726');
        audio.playMagic();
        state.player.sanity = Math.max(0, state.player.sanity - 5);
        state.player.equipped.hand.durability -= 1;
        if (state.player.equipped.hand.durability <= 0) {
          state.player.equipped.hand = null;
          showToast('瞬移懒人杖耗尽空间魔力碎裂！');
        } else {
          showToast(`✨ 空间折跃瞬移！剩余耐久: ${state.player.equipped.hand.durability}`);
        }
        updateInventoryUI();
        return;
      }
    }

    // Check if clicked directly on a hostile mob
    for (const ent of state.entities) {
      if (dist(clickWorldX, clickWorldY, ent.x, ent.y) < (ent.radius || 24) + 16) {
        if (['spider', 'spider_warrior', 'spider_queen', 'hound', 'ice_hound', 'fire_hound',
             'treeguard', 'varg', 'ancient_guardian', 'deerclops', 'bearger', 'moosegoose', 'dragonfly'].includes(ent.type)) {
          attackNearest();
          return;
        }
      }
    }
  });
  window.addEventListener('keyup', (e) => { state.keys[e.code] = false; });

  // Context Action Buttons with Hold-to-Repeat for smooth mobile gathering & combat
  const btnInteract = document.getElementById('btn-action-interact');
  const btnAttack = document.getElementById('btn-action-attack');

  let interactInterval = null;
  let attackInterval = null;

  const startInteract = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    audio.init();
    interactNearest();
    if (!interactInterval) {
      interactInterval = setInterval(() => {
        interactNearest();
      }, 250);
    }
  };

  const stopInteract = (e) => {
    if (e) e.stopPropagation();
    if (interactInterval) {
      clearInterval(interactInterval);
      interactInterval = null;
    }
  };

  btnInteract.addEventListener('pointerdown', startInteract);
  btnInteract.addEventListener('pointerup', stopInteract);
  btnInteract.addEventListener('pointercancel', stopInteract);
  btnInteract.addEventListener('pointerleave', stopInteract);
  btnInteract.addEventListener('click', (e) => {
    e.stopPropagation();
    interactNearest();
  });

  const startAttack = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    audio.init();
    attackNearest();
    if (!attackInterval) {
      attackInterval = setInterval(() => {
        attackNearest();
      }, 280);
    }
  };

  const stopAttack = (e) => {
    if (e) e.stopPropagation();
    if (attackInterval) {
      clearInterval(attackInterval);
      attackInterval = null;
    }
  };

  btnAttack.addEventListener('pointerdown', startAttack);
  btnAttack.addEventListener('pointerup', stopAttack);
  btnAttack.addEventListener('pointercancel', stopAttack);
  btnAttack.addEventListener('pointerleave', stopAttack);
  btnAttack.addEventListener('click', (e) => {
    e.stopPropagation();
    attackNearest();
  });

  // Top HUD buttons
  const btnFullscreen = document.getElementById('btn-fullscreen');
  if (btnFullscreen) {
    btnFullscreen.onclick = () => {
      audio.init();
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        const el = document.documentElement;
        if (el.requestFullscreen) el.requestFullscreen();
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
        btnFullscreen.innerText = '🗗 窗口';
        showToast('📱 已开启全屏沉浸防误触模式！');
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        btnFullscreen.innerText = '📱 全屏';
        showToast('已退出全屏模式');
      }
    };
  }

  // Prevent accidental mobile browser back gesture exit
  try {
    window.history.pushState({ page: 'dont_starve' }, '', window.location.href);
    window.addEventListener('popstate', (e) => {
      window.history.pushState({ page: 'dont_starve' }, '', window.location.href);
      audio.init();
      openSaveLoadUI();
      showToast('🛡️ 已拦截返回误触！游戏已自动暂停');
    });
  } catch (err) {
    console.warn('popstate guard failed:', err);
  }

  // Graceful auto-save on page hide without disturbing the user with browser warning dialogs
  window.addEventListener('pagehide', () => {
    if (state.started && !state.gameOver) {
      try {
        saveGame(0);
      } catch (err) {}
    }
  });

  // Initial UI sync for Sound & Vibration toggles
  const initToggleSfx = document.getElementById('toggle-sfx');
  if (initToggleSfx) initToggleSfx.checked = state.settings.sfx;

  const initToggleVibrate = document.getElementById('toggle-vibrate');
  if (initToggleVibrate) initToggleVibrate.checked = state.settings.vibrate;

  // Visibility Change: Auto pause/resume WebAudio & simulation when phone is locked or tab hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (audio.ctx && audio.ctx.state === 'running') {
        audio.ctx.suspend().catch(() => {});
      }
    } else {
      lastTime = performance.now();
      if (audio.enabled && audio.ctx && audio.ctx.state === 'suspended') {
        audio.ctx.resume().catch(() => {});
      }
    }
  });

  // Menu & 3-Tier Difficulty Settings
  const btnMenu = document.getElementById('btn-menu');
  if (btnMenu) {
    const triggerMenu = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      audio.init();
      openMenuUI();
    };
    btnMenu.onclick = triggerMenu;
    btnMenu.addEventListener('pointerdown', triggerMenu);
  }

  // Equipment Slots Click to inspect / unequip
  ['hand', 'head', 'body', 'amulet'].forEach(slotKey => {
    const el = document.getElementById(`equip-${slotKey}`);
    if (el) {
      el.onclick = () => {
        const eq = state.player.equipped[slotKey];
        if (eq) {
          onSlotClicked('equip', slotKey);
        } else {
          const names = { hand: '手持武器/工具', head: '头部帽子/头盔', body: '身体护甲/背包', amulet: '饰品/护符' };
          showToast(`当前【${names[slotKey]}】为空，轻触背包中相应物品可直接穿戴！`);
        }
      };
    }
  });

  // Blueprint Dragging on Canvas
  const handleBlueprintMove = (clientX, clientY) => {
    if (!state.blueprint || !state.blueprint.active) return;
    const rect = canvas.getBoundingClientRect();
    const sx = clientX - rect.left;
    const sy = clientY - rect.top;

    const wx = sx + state.camera.x;
    const wy = sy + state.camera.y;

    const p = state.player;
    const d = dist(wx, wy, p.x, p.y);
    if (d <= 240) {
      state.blueprint.x = wx;
      state.blueprint.y = wy;
    } else {
      const angle = Math.atan2(wy - p.y, wx - p.x);
      state.blueprint.x = p.x + Math.cos(angle) * 240;
      state.blueprint.y = p.y + Math.sin(angle) * 240;
    }
    state.blueprint.valid = checkBlueprintValidity(state.blueprint.x, state.blueprint.y, state.blueprint.structureType);
  };

  canvas.addEventListener('pointermove', (e) => {
    if (state.blueprint && state.blueprint.active) {
      handleBlueprintMove(e.clientX, e.clientY);
    }
  });

  canvas.addEventListener('touchmove', (e) => {
    if (state.blueprint && state.blueprint.active && e.touches.length > 0) {
      handleBlueprintMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  // Blueprint Controls
  const btnBpRotate = document.getElementById('btn-bp-rotate');
  if (btnBpRotate) {
    btnBpRotate.onclick = () => {
      if (state.blueprint) {
        state.blueprint.rotation = (state.blueprint.rotation + 90) % 360;
        document.getElementById('bp-rot-deg').innerText = state.blueprint.rotation + '°';
        audio.playChester();
      }
    };
  }

  const btnBpConfirm = document.getElementById('btn-bp-confirm');
  if (btnBpConfirm) {
    btnBpConfirm.onclick = () => {
      if (!state.blueprint) return;
      if (!state.blueprint.valid) {
        showToast('⚠️ 该位置地面受阻或过于拥挤，无法建造！');
        return;
      }
      const bp = state.blueprint;
      deployStructure(bp.structureType, bp.x, bp.y, bp.rotation);
      if (bp.source === 'inventory' && bp.sourceSlot) {
        const slots = getSlotArray(bp.sourceSlot.source);
        if (slots && slots[bp.sourceSlot.index]) {
          slots[bp.sourceSlot.index].count--;
          if (slots[bp.sourceSlot.index].count <= 0) slots[bp.sourceSlot.index] = null;
        }
      }
      state.blueprint = null;
      document.getElementById('blueprint-hud').classList.add('hidden');
      updateInventoryUI();
    };
  }

  const btnBpCancel = document.getElementById('btn-bp-cancel');
  if (btnBpCancel) {
    btnBpCancel.onclick = () => {
      if (state.blueprint) {
        if (state.blueprint.source === 'craft' && state.blueprint.recipe) {
          for (const [matId, amt] of Object.entries(state.blueprint.recipe.req)) {
            addToPlayer(matId, amt);
          }
          showToast('已取消放置，已全额返还制作材料！');
        } else {
          showToast('已取消放置蓝图');
        }
        state.blueprint = null;
        document.getElementById('blueprint-hud').classList.add('hidden');
        updateInventoryUI();
      }
    };
  }

  document.getElementById('btn-save-game').onclick = () => {
    audio.init();
    openSaveLoadUI();
  };
  document.getElementById('btn-close-save').onclick = () => {
    document.getElementById('save-load-modal').classList.add('hidden');
  };
  document.getElementById('btn-diary').onclick = () => {
    audio.init();
    openDiaryUI();
  };
  document.getElementById('btn-close-diary').onclick = () => {
    document.getElementById('diary-modal').classList.add('hidden');
  };

  // Virtual Joystick
  const joystickZone = document.getElementById('joystick-zone');
  const joystickStick = document.getElementById('joystick-stick');
  const maxDist = 45;

  joystickZone.addEventListener('touchstart', (e) => {
    e.preventDefault();
    audio.init();
    const touch = e.touches[0];
    const rect = joystickZone.getBoundingClientRect();
    state.joystick.startX = rect.left + rect.width / 2;
    state.joystick.startY = rect.top + rect.height / 2;
    state.joystick.active = true;
  });

  window.addEventListener('touchmove', (e) => {
    if (!state.joystick.active) return;
    for (let i = 0; i < e.touches.length; i++) {
      const t = e.touches[i];
      if (t.clientX < window.innerWidth / 2) {
        const dx = t.clientX - state.joystick.startX;
        const dy = t.clientY - state.joystick.startY;
        const d = Math.min(maxDist, Math.hypot(dx, dy));
        const angle = Math.atan2(dy, dx);
        joystickStick.style.transform = `translate(${Math.cos(angle)*d}px, ${Math.sin(angle)*d}px)`;
        state.joystick.dx = Math.cos(angle) * (d / maxDist);
        state.joystick.dy = Math.sin(angle) * (d / maxDist);
        break;
      }
    }
  });

  const resetJoy = () => {
    state.joystick.active = false;
    state.joystick.dx = 0;
    state.joystick.dy = 0;
    joystickStick.style.transform = 'translate(0px, 0px)';
  };
  window.addEventListener('touchend', (e) => { if (e.touches.length === 0) resetJoy(); });

  // Map toggle
  document.getElementById('btn-toggle-map').onclick = () => {
    const mm = document.getElementById('map-modal');
    mm.classList.remove('hidden');
    renderFullMap();
  };
  document.getElementById('btn-close-map').onclick = () => {
    document.getElementById('map-modal').classList.add('hidden');
  };

  // Crafting drawer toggle with mobile touch optimization
  const openCraftingDrawer = (e) => {
    if (e) e.stopPropagation();
    audio.init();
    document.getElementById('crafting-drawer').classList.remove('hidden');
    checkPrototypingTier();
    updateRecipesUI();
  };
  const tabBtn = document.getElementById('crafting-tab-btn');
  tabBtn.addEventListener('click', openCraftingDrawer);
  tabBtn.addEventListener('pointerdown', openCraftingDrawer);

  const closeCraftingDrawer = (e) => {
    if (e) e.stopPropagation();
    document.getElementById('crafting-drawer').classList.add('hidden');
  };
  const closeBtn = document.getElementById('close-crafting-btn');
  closeBtn.addEventListener('click', closeCraftingDrawer);
  closeBtn.addEventListener('pointerdown', closeCraftingDrawer);

  // Category Tab Switching with instant mobile touch response & event delegation
  const catBar = document.getElementById('craft-categories-bar');
  const handleCatTabClick = (btn) => {
    if (!btn) return;
    audio.init();
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateRecipesUI();
  };

  if (catBar) {
    catBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.cat-btn');
      if (btn) {
        e.stopPropagation();
        handleCatTabClick(btn);
      }
    });
    catBar.addEventListener('pointerdown', (e) => {
      const btn = e.target.closest('.cat-btn');
      if (btn) {
        e.stopPropagation();
        handleCatTabClick(btn);
      }
    });
  }

  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleCatTabClick(btn);
    });
    btn.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      handleCatTabClick(btn);
    });
  });

  const handlePlay = (e) => {
    if (e) e.stopPropagation();
    audio.init();
    document.getElementById('start-screen').classList.add('hidden');
    state.started = true;
    showToast('进入永恒荒野...努力活过每一个季节与黑夜！');
  };
  const btnPlay = document.getElementById('btn-play');
  btnPlay.addEventListener('click', handlePlay);
  btnPlay.addEventListener('pointerdown', handlePlay);

  const handleRestart = (e) => {
    if (e) e.stopPropagation();
    audio.init();
    restartWorld();
  };
  const btnRestart = document.getElementById('btn-restart');
  btnRestart.addEventListener('click', handleRestart);
  btnRestart.addEventListener('pointerdown', handleRestart);

  // Character selection cards
  document.querySelectorAll('.char-card').forEach(card => {
    card.onclick = () => {
      document.querySelectorAll('.char-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const charId = card.getAttribute('data-char');
      if (charId && CHARACTERS[charId]) {
        selectCharacter(charId);
        audio.playCraft();
        showToast(`已选择求生先锋【${CHARACTERS[charId].name}】！${CHARACTERS[charId].desc}`);
      }
    };
  });

  // Teleportato modal close
  const btnCloseTele = document.getElementById('btn-close-teleportato');
  if (btnCloseTele) {
    btnCloseTele.onclick = () => {
      document.getElementById('teleportato-modal').classList.add('hidden');
    };
  }

  // Dismount Beefalo
  const btnDismount = document.getElementById('btn-dismount');
  if (btnDismount) {
    btnDismount.onclick = () => {
      dismountBeefalo();
    };
  }

  // Modal backdrop click to dismiss with 350ms touch debounce guard
  ['map-modal', 'diary-modal', 'save-load-modal', 'menu-modal', 'teleportato-modal', 'chest-modal', 'chester-modal', 'crockpot-modal'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        if (e.target === el && Date.now() - (window.lastModalOpenTime || 0) > 350) {
          el.classList.add('hidden');
        }
      });
    }
  });
}

// --- 16. Game Initialization ---
window.onload = () => {
  setupInputs();
  initWorld();
  updateInventoryUI();
  requestAnimationFrame(gameLoop);
};
