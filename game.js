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
    if (!this.ctx) return;
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
    if (!this.ctx) return;
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
    if (!this.ctx) return;
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
    if (!this.ctx) return;
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
    if (!this.ctx) return;
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
    if (!this.ctx) return;
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
    if (!this.ctx) return;
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
    if (!this.ctx) return;
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
    if (!this.ctx) return;
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
    if (!this.ctx) return;
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
    if (!this.ctx) return;
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
    if (!this.ctx) return;
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
    if (!this.ctx) return;
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
    if (!this.ctx) return;
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
  life_amulet: { id: 'life_amulet', name: '生命护符', icon: '📿💖', desc: '佩戴缓慢回血，死亡时当场消耗护符神圣复活！', equipSlot: 'body', durability: 120, lifeRevive: true },
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
  guardian_horn: { id: 'guardian_horn', name: '远古守护者之角', icon: '📯🔶', desc: '洞穴遗迹迷宫击溃【远古犀牛】的至高战利品！+80 生命与神威长角。', stack: 1 }
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
  { id: 'celestial_altar_item', cat: 'nautical', tier: 4, name: '天体祭坛基座', icon: '🌙🏛️', req: { moon_rock: 4, moon_shard: 8 }, desc: '激活月岛启蒙科技' }
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

const state = {
  started: false,
  gameOver: false,
  character: 'wilson',
  worldCycle: 1,
  day: 1,
  timeInDay: 0, // 0-60 Day, 60-85 Dusk, 85-120 Night (120s full day)
  dayLength: 120,

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

    // Equipped slots
    equipped: {
      hand: null,
      head: null,
      body: null
    },

    // 10 Hotbar slots + 8 Backpack slots
    inventory: new Array(10).fill(null),
    backpack: new Array(8).fill(null)
  },

  camera: { x: 0, y: 0 },
  entities: [],
  particles: [],

  // Hound pack cycle
  houndTimer: 450, // spawns hound wave every ~4-5 in-game days
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

  joystick: {
    active: false,
    startX: 0,
    startY: 0,
    dx: 0,
    dy: 0
  }
};

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
  if (state.player.equipped.body && state.player.equipped.body.id === 'backpack') {
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

  // Find empty slot in backpack
  if (state.player.equipped.body && state.player.equipped.body.id === 'backpack') {
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
  if (state.player.equipped.body && state.player.equipped.body.id === 'backpack') {
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

  // Backpack Bar
  const backpackBar = document.getElementById('backpack-bar');
  const backpackContainer = document.getElementById('backpack-slots');
  if (state.player.equipped.body && state.player.equipped.body.id === 'backpack') {
    backpackBar.classList.remove('hidden');
    backpackContainer.innerHTML = '';
    state.player.backpack.forEach((slot, idx) => {
      const div = createSlotElement(slot, 'backpack', idx);
      backpackContainer.appendChild(div);
    });
  } else {
    backpackBar.classList.add('hidden');
  }

  // Update 3 Equipped Slots (Hand, Head, Body)
  const handDef = state.player.equipped.hand ? ITEMS[state.player.equipped.hand.id] : null;
  document.getElementById('icon-equip-hand').innerText = handDef ? handDef.icon : '空';
  const headDef = state.player.equipped.head ? ITEMS[state.player.equipped.head.id] : null;
  document.getElementById('icon-equip-head').innerText = headDef ? headDef.icon : '空';
  const bodyDef = state.player.equipped.body ? ITEMS[state.player.equipped.body.id] : null;
  document.getElementById('icon-equip-body').innerText = bodyDef ? bodyDef.icon : '空';

  // Durability bars
  ['hand', 'head', 'body'].forEach(slotKey => {
    const el = document.getElementById(`dur-${slotKey}`);
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
  const slots = getSlotArray(source);
  if (!slots) return;
  const slot = slots[index];
  if (!slot) {
    closePopover();
    return;
  }

  state.selectedSlot = { source, index };
  const def = ITEMS[slot.id];
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

  if (slot.id === 'abigail_flower') {
    btnUse.innerText = '召唤阿比盖尔';
    btnUse.style.display = 'inline-block';
  } else if (slot.id === 'gears' && state.character === 'wx78') {
    btnUse.innerText = '吞噬升级';
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
  const slots = getSlotArray(source);
  if (!slots) return;
  const slot = slots[index];
  if (!slot) return;
  const def = ITEMS[slot.id];
  const p = state.player;

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
    const px = p.x + (p.facing === 'left' ? -45 : 45);
    const py = p.y;
    deployStructure(def.isPlaceable, px, py);
    slot.count--;
    if (slot.count <= 0) slots[index] = null;
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

function deployStructure(type, x, y) {
  audio.playCraft();
  if (type === 'campfire') {
    state.entities.push({ type: 'campfire', x, y, fuel: 85, maxFuel: 100, radius: 24, isPermanent: false });
    showToast('建造了临时营火！');
  } else if (type === 'firepit') {
    state.entities.push({ type: 'firepit', x, y, fuel: 110, maxFuel: 150, radius: 24, isPermanent: true });
    showToast('建造了石质火坑！');
  } else if (type === 'science_machine') {
    state.entities.push({ type: 'science_machine', x, y, radius: 28 });
    showToast('发明了【科学仪器】！一本科技已解锁！');
  } else if (type === 'alchemy_engine') {
    state.entities.push({ type: 'alchemy_engine', x, y, radius: 30 });
    showToast('发明了【炼金引擎】！二本科技已解锁！');
  } else if (type === 'chest') {
    state.entities.push({ type: 'chest', x, y, radius: 22, items: new Array(9).fill(null) });
    showToast('建造了储物木箱！');
  } else if (type === 'crockpot') {
    state.entities.push({ type: 'crockpot', x, y, radius: 26, ingredients: [null, null, null, null], cooking: false, cookTimer: 0 });
    showToast('建造了瓦罐烹饪锅！');
  } else if (type === 'icebox') {
    state.entities.push({ type: 'icebox', x, y, radius: 24, items: new Array(9).fill(null) });
    showToast('建造了雪柜冰箱！');
  } else if (type === 'tent') {
    state.entities.push({ type: 'tent', x, y, radius: 32, uses: 6 });
    showToast('搭建了野营帐篷！');
  } else if (type === 'lightning_rod') {
    state.entities.push({ type: 'lightning_rod', x, y, radius: 20 });
    showToast('安装了避雷针！');
  } else if (type === 'tooth_trap') {
    state.entities.push({ type: 'tooth_trap', x, y, radius: 16, armed: true });
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
    state.entities.push({ type: 'flingomatic', x, y, radius: 30, active: true, fuel: 100, maxFuel: 100, range: 260 });
    showToast('❄️ 建造了雪球灭火机！将在夏季自动侦测火情发射雪球灭火！');
    if (state.diary) state.diary.chapters.ch4 = true;
  } else if (type === 'drying_rack') {
    state.entities.push({ type: 'drying_rack', x, y, radius: 24, meat: null, timer: 0, ready: false });
    showToast('🥩 搭建了晾肉架！可将大肉或怪物肉悬挂风干成高饱食大肉干！');
  } else if (type === 'birdcage') {
    state.entities.push({ type: 'birdcage', x, y, radius: 26, hasBird: false, birdType: null });
    showToast('🦜 建造了镀金鸟笼！可将捕获的活鸟放入驯养，喂肉产蛋/喂果蔬产良种！');
  } else if (type === 'beebox') {
    state.entities.push({ type: 'beebox', x, y, radius: 26, honey: 0, maxHoney: 6, prodTimer: 0 });
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
  }
}

// Chest Container Modal Logic
function openChestUI(chestEnt) {
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
  state.openedChest.items.forEach((slot, idx) => {
    const el = createSlotElement(slot, 'chest', idx);
    el.onclick = () => {
      // Transfer between chest and player inventory
      if (slot) {
        if (addToPlayer(slot.id, slot.count, { durability: slot.durability, freshness: slot.freshness, heatStored: slot.heatStored })) {
          state.openedChest.items[idx] = null;
          audio.playPickup();
          updateChestSlots();
          updateInventoryUI();
        }
      } else {
        // Find first item in player inventory to put into chest
        for (let j = 0; j < state.player.inventory.length; j++) {
          const invSlot = state.player.inventory[j];
          if (invSlot) {
            state.openedChest.items[idx] = { ...invSlot };
            state.player.inventory[j] = null;
            audio.playPickup();
            updateChestSlots();
            updateInventoryUI();
            break;
          }
        }
      }
    };
    grid.appendChild(el);
  });
}

// Chester Companion Modal Logic
function openChesterUI() {
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

  state.chester.slots.slice(0, slotCount).forEach((slot, idx) => {
    const el = createSlotElement(slot, 'chester', idx);
    el.onclick = () => {
      if (slot) {
        if (addToPlayer(slot.id, slot.count, { durability: slot.durability, freshness: slot.freshness, heatStored: slot.heatStored })) {
          state.chester.slots[idx] = null;
          audio.playChester();
          updateChesterSlots();
          updateInventoryUI();
        }
      } else {
        for (let j = 0; j < state.player.inventory.length; j++) {
          const invSlot = state.player.inventory[j];
          if (invSlot) {
            state.chester.slots[idx] = { ...invSlot };
            state.player.inventory[j] = null;
            audio.playChester();
            updateChesterSlots();
            updateInventoryUI();
            break;
          }
        }
      }
    };
    grid.appendChild(el);
  });
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

  // Auto-equip tools or weapons if corresponding slot is empty
  const itemDef = ITEMS[rec.id];
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

  // 1. Deciduous & Evergreen Trees (380 trees)
  for (let i = 0; i < 380; i++) {
    const x = Math.random() * (W - 120) + 60;
    const y = Math.random() * (H - 120) + 60;
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

  // 2. Boulders & Gold Rocks (240 rocks)
  for (let i = 0; i < 240; i++) {
    const x = Math.random() * (W - 120) + 60;
    const y = Math.random() * (H - 120) + 60;
    const hasGold = Math.random() < 0.35;
    state.entities.push({
      type: 'rock',
      hp: 4,
      maxHp: 4,
      hasGold,
      x, y,
      radius: 22
    });
  }

  // 3. Berry Bushes (160 bushes)
  for (let i = 0; i < 160; i++) {
    state.entities.push({
      type: 'bush',
      hasBerries: true,
      regrowTimer: 0,
      x: Math.random() * (W - 120) + 60,
      y: Math.random() * (H - 120) + 60,
      radius: 18
    });
  }

  // 4. Twig Saplings & Grass Tufts (240 each)
  for (let i = 0; i < 240; i++) {
    state.entities.push({
      type: 'sapling',
      harvestable: true,
      x: Math.random() * (W - 120) + 60,
      y: Math.random() * (H - 120) + 60,
      radius: 14
    });
    state.entities.push({
      type: 'grass_tuft',
      harvestable: true,
      x: Math.random() * (W - 120) + 60,
      y: Math.random() * (H - 120) + 60,
      radius: 14
    });
  }

  // 5. Flowers & Carrots (180 flowers, 40 carrots)
  for (let i = 0; i < 180; i++) {
    state.entities.push({
      type: 'flower',
      x: Math.random() * (W - 120) + 60,
      y: Math.random() * (H - 120) + 60,
      radius: 12
    });
  }
  for (let i = 0; i < 40; i++) {
    state.entities.push({
      type: 'planted_carrot',
      x: Math.random() * (W - 120) + 60,
      y: Math.random() * (H - 120) + 60,
      radius: 12
    });
  }

  // 6. Savanna Biome: Beefalo Herds (皮弗娄牛群, 20 beefalo)
  for (let i = 0; i < 20; i++) {
    const bx = 1100 + (Math.random() - 0.5) * 600;
    const by = 1100 + (Math.random() - 0.5) * 600;
    state.entities.push({
      type: 'beefalo',
      x: bx, y: by,
      vx: 0, vy: 0,
      hp: 500,
      maxHp: 500,
      matingSeason: false,
      hasWool: true,
      poopTimer: Math.random() * 80 + 40,
      timer: Math.random() * 3,
      radius: 32
    });
  }

  // 7. Pig Village (猪人村: 猪王 + 4座猪房 + 友好猪人)
  const pvx = 2600, pvy = 2600;
  state.entities.push({ type: 'pig_king', x: pvx, y: pvy, radius: 45 });
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2;
    const hx = pvx + Math.cos(angle) * 160;
    const hy = pvy + Math.sin(angle) * 160;
    state.entities.push({ type: 'pig_house', x: hx, y: hy, radius: 32 });
    state.entities.push({
      type: 'pig',
      x: hx + 30, y: hy + 20,
      vx: 0, vy: 0,
      hp: 250,
      maxHp: 250,
      isWerepig: false,
      isFollower: false,
      followTimer: 0,
      radius: 20
    });
  }

  // 8. Chester Eye Bone spawn near deciduous border
  dropWorldItem('eyebone', pvx - 120, pvy - 80, 1);
  state.chester = {
    active: false,
    x: pvx - 90,
    y: pvy - 90,
    vx: 0, vy: 0,
    hopTick: 0,
    slots: new Array(9).fill(null),
    type: 'normal'
  };

  // 9. Plugged Cave Sinkhole (落水洞岩塞入口)
  state.entities.push({
    type: 'cave_entrance',
    x: 1400,
    y: 2200,
    plugged: true,
    radius: 36
  });

  // 10. Natural Ponds (池塘, catch fish)
  for (let i = 0; i < 3; i++) {
    state.entities.push({
      type: 'pond',
      x: 1750 + i * 200,
      y: 1450 + (i % 2) * 90,
      fishCount: 10,
      radius: 42
    });
  }

  // 11. Spiders & Spider Dens (20 dens)
  for (let i = 0; i < 20; i++) {
    const dx = Math.random() * (W - 400) + 200;
    const dy = Math.random() * (H - 400) + 200;
    state.entities.push({
      type: 'spider_den',
      x: dx, y: dy,
      radius: 35,
      hp: 150,
      spawnTimer: 12
    });
  }

  // 12. Maxwell's Teleportato Base & Scattered Relic Machine Parts
  state.entities.push({
    type: 'teleportato_base',
    x: 3100,
    y: 750,
    radius: 40
  });
  dropWorldItem('teleportato_ring', 900, 3100, 1);
  dropWorldItem('teleportato_crank', 3200, 3100, 1);
  dropWorldItem('teleportato_box', 700, 900, 1);
  dropWorldItem('teleportato_potato', 2800, 1700, 1);

  // 13. Celestial Lunar Island Biome & Moon Shards
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

  // Starter resources around player
  dropWorldItem('flint', state.player.x + 30, state.player.y + 20, 3);
  dropWorldItem('twig', state.player.x - 30, state.player.y + 10, 4);
  dropWorldItem('grass', state.player.x + 10, state.player.y - 30, 6);
  dropWorldItem('berry', state.player.x - 20, state.player.y - 20, 3);

  // Character Starting Items
  const charDef = CHARACTERS[state.character];
  if (charDef && charDef.startItem) {
    if (!state.player.inventory.some(s => s && s.id === charDef.startItem)) {
      addToPlayer(charDef.startItem, 1);
    }
  }
}

// Underground Caves System Generator
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
  let minDist = 85;

  for (const ent of interactCandidates) {
    const d = dist(p.x, p.y, ent.x, ent.y);
    if (d < minDist) {
      if (['drop', 'tree', 'rock', 'bush', 'sapling', 'grass_tuft', 'flower', 'planted_carrot',
           'campfire', 'firepit', 'science_machine', 'alchemy_engine', 'prestihatitator', 'shadow_manipulator',
           'chest', 'crockpot', 'tent', 'pig_king', 'pig', 'beefalo', 'chester', 'cave_entrance', 'cave_exit',
           'light_flower', 'farmplot', 'stalagmite', 'thulecite_rock', 'pond', 'ancient_station',
           'drying_rack', 'birdcage', 'beebox', 'boat', 'teleportato_base', 'celestial_altar', 'bird_trap'].includes(ent.type)) {
        minDist = d;
        nearest = ent;
      }
    }
  }

  if (!nearest) return;
  p.actionTick = 10;

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
  } else if (nearest.type === 'chest') {
    openChestUI(nearest);
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
    if (countTotalItem('meat') > 0 || countTotalItem('morsel') > 0) {
      if (countTotalItem('meat') > 0) removeTotalItem('meat', 1);
      else removeTotalItem('morsel', 1);
      dropWorldItem('gold', nearest.x + 20, nearest.y + 20, 2);
      audio.playCraft();
      showToast('猪王愉快地赏赐了金块！🪙');
    } else {
      showToast('猪王咕哝着想要肉类！');
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
    if (p.equipped.hand && p.equipped.hand.id === 'razor') {
      audio.playChop();
      dropWorldItem('beefalo_wool', nearest.x + 10, nearest.y + 10, 3);
      nearest.hasWool = false;
      showToast('✂️ 成功剃下了保暖的皮弗娄牛毛！');
      p.sanity = Math.min(p.maxSanity, p.sanity + 5);
      return;
    }
    if (state.beefaloRiding) {
      dismountBeefalo();
      return;
    }
    if (nearest.saddled) {
      mountBeefalo(nearest);
      return;
    }
    if (countTotalItem('grass') > 0 || countTotalItem('twig') > 0) {
      if (countTotalItem('grass') > 0) removeTotalItem('grass', 1);
      else removeTotalItem('twig', 1);
      nearest.domestication = (nearest.domestication || 0) + 1;
      audio.playEat();
      createHitParticles(nearest.x, nearest.y, '#e74c3c');
      if (nearest.domestication >= 2) {
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
          showToast(`🐂 牛牛非常亲近你 (驯化度: ${nearest.domestication}/2)！手持【简易牛鞍】即可套鞍骑乘！`);
        }
      } else {
        showToast(`🐂 喂食皮弗娄牛！亲密度提升 (${nearest.domestication}/2)`);
      }
    } else {
      audio.playBeefaloGrunt();
      showToast('皮弗娄牛咕噜叫着。喂食干草或树枝可驯化，手持剃刀可剃毛！');
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
      } else if (countTotalItem('carrot') > 0 || countTotalItem('dragonfruit') > 0 || countTotalItem('pumpkin') > 0) {
        let cropId = countTotalItem('dragonfruit') > 0 ? 'dragonfruit' : (countTotalItem('pumpkin') > 0 ? 'pumpkin' : 'carrot');
        removeTotalItem(cropId, 1);
        dropWorldItem('seeds', nearest.x + 10, nearest.y + 10, 2);
        audio.playCraft();
        showToast(`🌱 喂食${ITEMS[cropId].name}，鸟雀啄出了纯正特异良种！`);
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
    if (state.timeInDay >= 60) {
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
  }
}

function attackNearest() {
  audio.init();
  const p = state.player;

  const handItem = p.equipped.hand ? ITEMS[p.equipped.hand.id] : null;
  const isRangedStaff = handItem?.isStaff;
  const attackRange = isRangedStaff ? 260 : 85;

  let nearest = null;
  let minDist = attackRange;

  const hostileTypes = [
    'spider', 'hound', 'ice_hound', 'fire_hound', 'treeguard',
    'deerclops', 'bearger', 'moosegoose', 'dragonfly',
    'shadow_creature', 'crawling_horror', 'terrorbeak',
    'rabbit', 'batilisk', 'slurtle', 'clockwork_knight'
  ];

  for (const ent of state.entities) {
    if (hostileTypes.includes(ent.type)) {
      const d = dist(p.x, p.y, ent.x, ent.y);
      if (d < minDist) {
        minDist = d;
        nearest = ent;
      }
    }
  }

  if (!nearest) {
    showToast('前方没有攻击目标');
    return;
  }

  p.actionTick = 12;

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
      // Bat bat lifesteal
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

    // Shadow Horrors teleport on hit!
    if (nearest.type === 'crawling_horror' || nearest.type === 'terrorbeak') {
      nearest.x += (Math.random() - 0.5) * 180;
      nearest.y += (Math.random() - 0.5) * 180;
    }
  }

  // Friendly pigs help attack
  for (const pig of state.entities) {
    if (pig.type === 'pig' && pig.isFollower) {
      if (dist(pig.x, pig.y, nearest.x, nearest.y) < 300) {
        nearest.hp -= 20;
        showToast('猪人伙伴挥拳痛击了敌人！');
      }
    }
  }

  if (nearest.hp <= 0) {
    if (state.diary) state.diary.monstersKilled++;

    if (nearest.type === 'rabbit') {
      dropWorldItem('morsel', nearest.x, nearest.y, 1);
      showToast('猎杀野兔，获得鲜美小肉！');
    } else if (nearest.type === 'spider') {
      dropWorldItem('silk', nearest.x, nearest.y, 1);
      if (Math.random() < 0.5) dropWorldItem('gland', nearest.x + 10, nearest.y, 1);
      if (Math.random() < 0.3) dropWorldItem('monster_meat', nearest.x - 10, nearest.y, 1);
      showToast('消灭了蜘蛛！');
    } else if (nearest.type === 'hound') {
      dropWorldItem('hound_tooth', nearest.x, nearest.y, 1);
      dropWorldItem('monster_meat', nearest.x + 10, nearest.y, 1);
      showToast('斩杀了来袭的恶犬！');
    } else if (nearest.type === 'ice_hound') {
      dropWorldItem('blue_gem', nearest.x, nearest.y, 1);
      dropWorldItem('hound_tooth', nearest.x + 10, nearest.y, 1);
      showToast('斩杀了冰霜猎犬，获得珍稀蓝宝石！');
    } else if (nearest.type === 'fire_hound') {
      dropWorldItem('red_gem', nearest.x, nearest.y, 1);
      dropWorldItem('hound_tooth', nearest.x + 10, nearest.y, 1);
      showToast('消灭了炽热火犬，获得红宝石！');
    } else if (nearest.type === 'treeguard') {
      dropWorldItem('living_log', nearest.x, nearest.y, 4);
      dropWorldItem('log', nearest.x + 10, nearest.y, 8);
      dropWorldItem('meat', nearest.x - 10, nearest.y, 2);
      showToast('击败了古老树人守卫！荣获魔法建材【活木】！');
    } else if (nearest.type === 'deerclops') {
      dropWorldItem('deerclops_eye', nearest.x, nearest.y, 1);
      dropWorldItem('meat', nearest.x + 20, nearest.y, 8);
      if (state.diary) {
        state.diary.bossesDefeated++;
        state.diary.milestones.slay_deerclops = true;
        state.diary.chapters.ch2 = true;
        if (state.diary.bossesDefeated >= 4) state.diary.milestones.four_seasons = true;
      }
      showToast('★ 战胜了冬季天灾【独眼巨鹿】！荣获巨鹿眼球！');
    } else if (nearest.type === 'bearger') {
      dropWorldItem('bearger_fur', nearest.x, nearest.y, 2);
      dropWorldItem('meat', nearest.x + 20, nearest.y, 8);
      if (state.diary) {
        state.diary.bossesDefeated++;
        state.diary.milestones.slay_bearger = true;
        if (state.diary.bossesDefeated >= 4) state.diary.milestones.four_seasons = true;
      }
      showToast('★ 讨伐了秋季巨兽【熊獾】！获得厚皮毛与巨量大肉！');
    } else if (nearest.type === 'moosegoose') {
      dropWorldItem('meat', nearest.x, nearest.y, 6);
      dropWorldItem('morsel', nearest.x + 15, nearest.y, 4);
      if (state.diary) {
        state.diary.bossesDefeated++;
        if (state.diary.bossesDefeated >= 4) state.diary.milestones.four_seasons = true;
      }
      showToast('★ 击落了春季狂暴【鹿角鸭】！');
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
  const dt = Math.min(0.1, (now - lastTime) / 1000);
  lastTime = now;

  const isModalOpen = !document.getElementById('save-load-modal')?.classList.contains('hidden') ||
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

  // 1. Day/Night & Clock Progression
  state.timeInDay = (state.timeInDay + dt) % state.dayLength;
  const isDay = state.timeInDay < 60;
  const isDusk = state.timeInDay >= 60 && state.timeInDay < 85;
  const isNight = state.timeInDay >= 85;

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
      showToast(`季节更迭！进入了【${getSeasonName(state.season)}】`);
    }
    showToast(`黎明降临！存活进入第 ${state.day} 天`);
  }

  // 2. Weather & Temperature Engine
  updateWeatherAndTemp(dt, isNight);

  // 3. Tech Prototyping detection
  checkPrototypingTier();

  // 4. Hunger & Vital depletion
  p.hunger = Math.max(0, p.hunger - dt * 0.42);
  if (p.hunger <= 0) {
    p.hp = Math.max(0, p.hp - dt * 3.5); // Starving!
  }

  // Life Giving Amulet HP Regen
  if (p.equipped.body && p.equipped.body.id === 'life_amulet') {
    if (p.hp < p.maxHp) {
      p.hp = Math.min(p.maxHp, p.hp + dt * 0.8);
      p.equipped.body.durability -= dt * 0.15;
      if (p.equipped.body.durability <= 0) {
        p.equipped.body = null;
        showToast('生命护符能量耗尽碎裂了...');
        updateInventoryUI();
      }
    }
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

  // 5. Light check around player
  let inLight = isDay && state.worldLayer === 'surface';
  if (p.equipped.hand && ITEMS[p.equipped.hand.id]?.isLight) {
    inLight = true;
    p.equipped.hand.durability -= dt * 1.0;
    if (p.equipped.hand.durability <= 0) {
      p.equipped.hand = null;
      showToast('随身火源熄灭了！');
      updateInventoryUI();
    }
  }

  // Campfire proximity or Cave Light Flower proximity
  for (const ent of state.entities) {
    if ((ent.type === 'campfire' || ent.type === 'firepit') && ent.fuel > 0) {
      ent.fuel -= dt;
      if (dist(p.x, p.y, ent.x, ent.y) < 220) {
        inLight = true;
        if (isNight) p.sanity = Math.min(p.maxSanity, p.sanity + dt * 0.6);
        warmThermalStones(dt);
      }
    } else if (ent.type === 'light_flower' && ent.harvestable && dist(p.x, p.y, ent.x, ent.y) < 120) {
      inLight = true;
    }
  }

  // 6. Charlie Night Terror
  const charlieVig = document.getElementById('charlie-vignette');
  if ((isNight || state.worldLayer === 'caves') && !inLight) {
    p.inDarknessTimer += dt;
    p.whisperTimer += dt;
    if (p.whisperTimer > 1.2) {
      audio.playHoundGrowl();
      p.whisperTimer = 0;
    }
    charlieVig.classList.remove('hidden');

    if (p.inDarknessTimer > 3.5) {
      audio.playCharlieAttack();
      if (navigator.vibrate) navigator.vibrate(260);

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
    charlieVig.classList.add('hidden');
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

  // 8. Hound Attack Waves
  state.houndTimer -= dt;
  if (state.houndTimer < 15 && !state.houndWarning) {
    state.houndWarning = true;
    document.getElementById('hound-warning').classList.remove('hidden');
    audio.playHoundGrowl();
  }
  if (state.houndTimer <= 0) {
    document.getElementById('hound-warning').classList.add('hidden');
    state.houndWarning = false;
    state.houndTimer = 480;
    spawnHoundWave();
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
      ent.growTimer += dt;
      if (ent.growTimer >= 90) ent.stage = 2;
      else if (ent.growTimer >= 45) ent.stage = 1;
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

  if (mx !== 0 || my !== 0) {
    const len = Math.hypot(mx, my);
    p.vx = (mx / len) * p.speed;
    p.vy = (my / len) * p.speed;
    p.walking = true;
    p.animTick += dt * 8;

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
  let minDist = 90;
  for (const ent of interactCandidates) {
    const d = dist(p.x, p.y, ent.x, ent.y);
    if (d < minDist) {
      if (['drop', 'tree', 'rock', 'bush', 'sapling', 'grass_tuft', 'flower', 'planted_carrot',
           'campfire', 'firepit', 'science_machine', 'alchemy_engine', 'prestihatitator', 'shadow_manipulator',
           'chest', 'crockpot', 'tent', 'pig_king', 'pig', 'beefalo', 'chester', 'cave_entrance', 'cave_exit',
           'light_flower', 'farmplot', 'stalagmite', 'thulecite_rock', 'pond', 'ancient_station',
           'drying_rack', 'birdcage', 'beebox', 'boat', 'teleportato_base', 'celestial_altar', 'bird_trap'].includes(ent.type)) {
        minDist = d;
        nearest = ent;
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
    'spider', 'hound', 'ice_hound', 'fire_hound', 'treeguard',
    'deerclops', 'bearger', 'moosegoose', 'dragonfly',
    'shadow_creature', 'crawling_horror', 'terrorbeak',
    'rabbit', 'batilisk', 'slurtle', 'clockwork_knight'
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
        dropWorldItem(resultId, ent.x, ent.y + 20, 1);
        ent.ingredients = [null, null, null, null];
        audio.playCraft();
        showToast(`瓦罐烹饪完成了美味的【${ITEMS[resultId].name}】！`);
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
  showToast('嗷呜！恶犬群撕扯着迷雾冲了过来！');
  const count = 3 + Math.floor(state.day / 6);
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    state.entities.push({
      type: 'hound',
      x: state.player.x + Math.cos(angle) * 350,
      y: state.player.y + Math.sin(angle) * 350,
      hp: 60,
      maxHp: 60,
      speed: 130,
      radius: 16
    });
  }
}

function updateEntities(dt, isDark) {
  const p = state.player;

  for (const ent of state.entities) {
    // 1. Spiders
    if (ent.type === 'spider') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      if (d < 250) {
        const angle = Math.atan2(p.y - ent.y, p.x - ent.x);
        ent.x += Math.cos(angle) * 80 * dt;
        ent.y += Math.sin(angle) * 80 * dt;

        if (d < 30) {
          ent.attackCooldown = (ent.attackCooldown || 0) - dt;
          if (ent.attackCooldown <= 0) {
            audio.playHit();
            let dmg = 15;
            if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
              dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
            }
            p.hp -= dmg;
            showToast('受到蜘蛛咬伤！');
            ent.attackCooldown = 1.3;
          }
        }
      }
    }

    // 2. Hounds (Normal, Ice, Fire)
    if (ent.type === 'hound' || ent.type === 'ice_hound' || ent.type === 'fire_hound') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      const angle = Math.atan2(p.y - ent.y, p.x - ent.x);
      ent.x += Math.cos(angle) * ent.speed * dt;
      ent.y += Math.sin(angle) * ent.speed * dt;

      if (d < 28) {
        ent.attackCooldown = (ent.attackCooldown || 0) - dt;
        if (ent.attackCooldown <= 0) {
          audio.playHit();
          let dmg = 20;
          if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
            dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
          }
          p.hp -= dmg;
          if (ent.type === 'fire_hound') p.temp += 10;
          if (ent.type === 'ice_hound') p.temp -= 10;
          showToast('猎犬撕咬了你！');
          ent.attackCooldown = 1.1;
        }
      }
    }

    // 3. Boss: Deerclops (Winter Giant)
    if (ent.type === 'deerclops') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      const angle = Math.atan2(p.y - ent.y, p.x - ent.x);
      ent.x += Math.cos(angle) * 60 * dt;
      ent.y += Math.sin(angle) * 60 * dt;

      if (d < 55) {
        ent.attackCooldown = (ent.attackCooldown || 0) - dt;
        if (ent.attackCooldown <= 0) {
          audio.playThunder();
          let dmg = 65;
          if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
            dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
          }
          p.hp -= dmg;
          p.sanity -= 20;
          p.temp -= 15;
          showToast('独眼巨鹿震撼冰柱重创了你！');
          ent.attackCooldown = 2.4;
        }
      }
    }

    // 4. Boss: Bearger (Autumn Giant)
    if (ent.type === 'bearger') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      const angle = Math.atan2(p.y - ent.y, p.x - ent.x);
      ent.x += Math.cos(angle) * 65 * dt;
      ent.y += Math.sin(angle) * 65 * dt;

      if (d < 60) {
        ent.attackCooldown = (ent.attackCooldown || 0) - dt;
        if (ent.attackCooldown <= 0) {
          audio.playBossRoar();
          let dmg = 50;
          if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
            dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
          }
          p.hp -= dmg;
          p.sanity -= 15;
          showToast('熊獾巨爪撼地重击！震荡波击溃了你的护甲！');
          ent.attackCooldown = 2.5;
        }
      }
    }

    // 5. Boss: Moose/Goose (Spring Giant)
    if (ent.type === 'moosegoose') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      const angle = Math.atan2(p.y - ent.y, p.x - ent.x);
      ent.x += Math.cos(angle) * 80 * dt;
      ent.y += Math.sin(angle) * 80 * dt;

      if (d < 50) {
        ent.attackCooldown = (ent.attackCooldown || 0) - dt;
        if (ent.attackCooldown <= 0) {
          audio.playThunder();
          let dmg = 45;
          if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
            dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
          }
          p.hp -= dmg;
          p.wetness = Math.min(100, p.wetness + 25);
          showToast('鹿角鸭高亢尖啸！狂暴水龙卷席卷了你！');
          ent.attackCooldown = 2.1;
        }
      }
    }

    // 6. Boss: Dragonfly (Summer Giant)
    if (ent.type === 'dragonfly') {
      const d = dist(ent.x, ent.y, p.x, p.y);
      const angle = Math.atan2(p.y - ent.y, p.x - ent.x);
      ent.x += Math.cos(angle) * 90 * dt;
      ent.y += Math.sin(angle) * 90 * dt;

      if (d < 55) {
        ent.attackCooldown = (ent.attackCooldown || 0) - dt;
        if (ent.attackCooldown <= 0) {
          audio.playBossRoar();
          let dmg = 55;
          if (p.equipped.body && ITEMS[p.equipped.body.id]?.armorDefense) {
            dmg *= (1 - ITEMS[p.equipped.body.id].armorDefense);
          }
          p.hp -= dmg;
          p.temp += 20;
          showToast('龙蝇三连熔岩践踏！地面化作灼热火海！');
          ent.attackCooldown = 2.2;
        }
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

    // 11. Friendly Pig follow player
    if (ent.type === 'pig' && ent.isFollower) {
      ent.followTimer -= dt;
      if (ent.followTimer <= 0) ent.isFollower = false;
      const d = dist(ent.x, ent.y, p.x, p.y);
      if (d > 60) {
        const angle = Math.atan2(p.y - ent.y, p.x - ent.x);
        ent.x += Math.cos(angle) * 110 * dt;
        ent.y += Math.sin(angle) * 110 * dt;
      }
    }

    // 12. Beefalo poop drop
    if (ent.type === 'beefalo') {
      ent.poopTimer -= dt;
      if (ent.poopTimer <= 0) {
        ent.poopTimer = Math.random() * 90 + 50;
        dropWorldItem('manure', ent.x, ent.y + 15, 1);
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

  const layerTag = state.worldLayer === 'caves' ? '🕯️ 地下洞穴 · ' : '';
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

  const dayAngle = (60 / 120) * Math.PI * 2;
  const duskAngle = (25 / 120) * Math.PI * 2;
  const nightAngle = (35 / 120) * Math.PI * 2;

  let start = -Math.PI / 2;

  // Day wedge
  clockCtx.beginPath();
  clockCtx.moveTo(cx, cy);
  clockCtx.arc(cx, cy, r, start, start + dayAngle);
  clockCtx.fillStyle = '#f39c12';
  clockCtx.fill();
  start += dayAngle;

  // Dusk wedge
  clockCtx.beginPath();
  clockCtx.moveTo(cx, cy);
  clockCtx.arc(cx, cy, r, start, start + duskAngle);
  clockCtx.fillStyle = '#c0392b';
  clockCtx.fill();
  start += duskAngle;

  // Night wedge
  clockCtx.beginPath();
  clockCtx.moveTo(cx, cy);
  clockCtx.arc(cx, cy, r, start, start + nightAngle);
  clockCtx.fillStyle = '#1b1b2f';
  clockCtx.fill();

  // Pointer Hand
  const curAngle = -Math.PI / 2 + (state.timeInDay / state.dayLength) * Math.PI * 2;
  clockCtx.beginPath();
  clockCtx.moveTo(cx, cy);
  clockCtx.lineTo(cx + Math.cos(curAngle) * (r - 6), cy + Math.sin(curAngle) * (r - 6));
  clockCtx.strokeStyle = '#ffffff';
  clockCtx.lineWidth = 3;
  clockCtx.stroke();

  // Center Knob
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
      // Deterministic hash based on world coordinate
      const h1 = Math.abs(Math.sin(x * 12.9898 + y * 78.233) * 43758.5453) % 1;
      const h2 = Math.abs(Math.cos(x * 39.3456 + y * 19.876) * 23421.631) % 1;

      const px = x + (h1 * 60) + 10;
      const py = y + (h2 * 60) + 10;

      if (h1 < 0.28) {
        // Small pebble / stone
        ctx.fillStyle = 'rgba(0,0,0,0.22)';
        ctx.beginPath();
        ctx.ellipse(px + 1, py + 1, 3.5, 2, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = isCaves ? '#3d3838' : (isWinter ? '#78828a' : '#4a3f35');
        ctx.beginPath();
        ctx.ellipse(px, py, 3, 2, 0.2, 0, Math.PI * 2);
        ctx.fill();
      } else if (h1 < 0.55) {
        // Tiny grass / lichen sprouts
        ctx.strokeStyle = isCaves ? '#2e4530' : (isWinter ? '#5a6b73' : (isSpring ? '#4caf50' : '#334425'));
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
    ctx.fillStyle = '#3e2723';
    ctx.beginPath();
    ctx.ellipse(0, 0, 32, 22, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#f5f5f5';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-15, -12);
    ctx.lineTo(-24, -28);
    ctx.moveTo(15, -12);
    ctx.lineTo(24, -28);
    ctx.stroke();
  } else if (ent.type === 'pig' || ent.type === 'pig_king') {
    ctx.fillStyle = '#f8bbd0';
    ctx.beginPath();
    ctx.ellipse(0, 0, 20, 24, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#333';
    ctx.fillRect(-6, -8, 3, 3);
    ctx.fillRect(3, -8, 3, 3);
  } else if (ent.type === 'hound' || ent.type === 'ice_hound' || ent.type === 'fire_hound') {
    ctx.fillStyle = ent.type === 'ice_hound' ? '#00bcd4' : (ent.type === 'fire_hound' ? '#e65100' : '#212121');
    ctx.beginPath();
    ctx.ellipse(0, 0, 16, 11, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f44336';
    ctx.fillRect(-5, -6, 2, 2);
    ctx.fillRect(3, -6, 2, 2);
  } else if (ent.type === 'deerclops') {
    // Winter Boss Deerclops
    ctx.fillStyle = '#1a237e';
    ctx.beginPath();
    ctx.ellipse(0, -20, 46, 55, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ff1744';
    ctx.beginPath();
    ctx.arc(0, -35, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffeb3b';
    ctx.beginPath();
    ctx.arc(0, -35, 6, 0, Math.PI * 2);
    ctx.fill();
  } else if (ent.type === 'bearger') {
    // Autumn Boss Bearger
    ctx.fillStyle = '#3e2723';
    ctx.beginPath();
    ctx.ellipse(0, -20, 50, 45, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#212121';
    ctx.beginPath();
    ctx.arc(0, -22, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ff5252';
    ctx.fillRect(-8, -26, 4, 3);
    ctx.fillRect(4, -26, 4, 3);
  } else if (ent.type === 'moosegoose') {
    // Spring Boss Moose/Goose
    ctx.fillStyle = '#37474f';
    ctx.beginPath();
    ctx.ellipse(0, -10, 38, 42, 0, 0, Math.PI * 2);
    ctx.fill();
    // Neck & Antlers
    ctx.fillStyle = '#cfd8dc';
    ctx.fillRect(-6, -45, 12, 35);
    ctx.fillStyle = '#ff9800';
    ctx.fillRect(-12, -45, 14, 8); // Beak
    ctx.strokeStyle = '#8d6e63';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, -45);
    ctx.lineTo(-25, -65);
    ctx.moveTo(0, -45);
    ctx.lineTo(25, -65);
    ctx.stroke();
  } else if (ent.type === 'dragonfly') {
    // Summer Boss Dragonfly
    ctx.fillStyle = '#d84315';
    ctx.beginPath();
    ctx.ellipse(0, -15, 36, 42, 0, 0, Math.PI * 2);
    ctx.fill();
    // Iridescent wings
    ctx.fillStyle = 'rgba(255, 235, 59, 0.6)';
    ctx.beginPath();
    ctx.ellipse(-28, -25, 20, 8, Math.PI / 4, 0, Math.PI * 2);
    ctx.ellipse(28, -25, 20, 8, -Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ff1744';
    ctx.fillRect(-8, -26, 5, 5);
    ctx.fillRect(3, -26, 5, 5);
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
  }

  ctx.restore();
}

function renderLighting() {
  const isCaves = state.worldLayer === 'caves';
  const isDay = state.timeInDay < 60;
  const isDusk = state.timeInDay >= 60 && state.timeInDay < 85;
  const isNight = state.timeInDay >= 85;

  let darknessAlpha = 0;
  if (isCaves) {
    darknessAlpha = 0.98;
  } else if (isDusk) {
    darknessAlpha = 0.2 + ((state.timeInDay - 60) / 25) * 0.45;
  } else if (isNight) {
    darknessAlpha = 0.96;
  }

  if (darknessAlpha <= 0) return;

  ctx.save();
  ctx.fillStyle = (isNight || isCaves) ? `rgba(6, 4, 5, ${darknessAlpha})` : `rgba(180, 80, 20, ${darknessAlpha * 0.5})`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (isNight || isCaves) {
    ctx.globalCompositeOperation = 'destination-out';
    const px = state.player.x - state.camera.x;
    const py = state.player.y - state.camera.y;

    let r = 0;
    if (state.player.equipped.hand && ITEMS[state.player.equipped.hand.id]?.isLight) {
      r = 160 + Math.random() * 8;
    }
    if (r > 0) {
      const g = ctx.createRadialGradient(px, py, 20, px, py, r);
      g.addColorStop(0, 'rgba(0,0,0,1)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(px, py, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Campfires & Firepits
    for (const ent of state.entities) {
      if ((ent.type === 'campfire' || ent.type === 'firepit') && ent.fuel > 0) {
        const ex = ent.x - state.camera.x;
        const ey = ent.y - state.camera.y;
        const cr = (ent.fuel / ent.maxFuel) * 160 + 70 + Math.random() * 8;
        const g = ctx.createRadialGradient(ex, ey, 25, ex, ey, cr);
        g.addColorStop(0, 'rgba(0,0,0,1)');
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(ex, ey, cr, 0, Math.PI * 2);
        ctx.fill();
      } else if (ent.type === 'light_flower' && ent.harvestable) {
        const ex = ent.x - state.camera.x;
        const ey = ent.y - state.camera.y;
        const cr = 110 + Math.random() * 6;
        const g = ctx.createRadialGradient(ex, ey, 15, ex, ey, cr);
        g.addColorStop(0, 'rgba(0,0,0,0.95)');
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(ex, ey, cr, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
  ctx.restore();
}

// --- 12. Full Map & Mini-Map ---
function renderFullMap() {
  const mapCanvas = document.getElementById('full-map-canvas');
  const mctx = mapCanvas.getContext('2d');
  mctx.clearRect(0, 0, mapCanvas.width, mapCanvas.height);

  const scaleX = mapCanvas.width / state.worldWidth;
  const scaleY = mapCanvas.height / state.worldHeight;

  // Background
  mctx.fillStyle = state.worldLayer === 'caves' ? '#120d0b' : '#221a14';
  mctx.fillRect(0, 0, mapCanvas.width, mapCanvas.height);

  // Entities on map
  for (const ent of state.entities) {
    const mx = ent.x * scaleX;
    const my = ent.y * scaleY;
    if (ent.type === 'beefalo') {
      mctx.fillStyle = '#f39c12';
      mctx.fillRect(mx, my, 4, 4);
    } else if (ent.type === 'pig_king' || ent.type === 'pig_house') {
      mctx.fillStyle = '#e91e63';
      mctx.fillRect(mx, my, 5, 5);
    } else if (ent.type === 'science_machine' || ent.type === 'alchemy_engine' || ent.type === 'prestihatitator' || ent.type === 'ancient_station') {
      mctx.fillStyle = '#00e5ff';
      mctx.fillRect(mx, my, 6, 6);
    } else if (ent.type === 'cave_entrance' || ent.type === 'cave_exit') {
      mctx.fillStyle = '#9c27b0';
      mctx.fillRect(mx, my, 6, 6);
    }
  }

  // Player position
  const px = state.player.x * scaleX;
  const py = state.player.y * scaleY;
  mctx.fillStyle = '#ff1744';
  mctx.beginPath();
  mctx.arc(px, py, 5, 0, Math.PI * 2);
  mctx.fill();
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
  state.player.x = 1900;
  state.player.y = 1900;
  state.player.equipped.hand = null;
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
    if (e.code === 'Space') interactNearest();
    else if (e.code === 'KeyF') attackNearest();
    else if (e.code === 'KeyM') {
      const mapModal = document.getElementById('map-modal');
      mapModal.classList.toggle('hidden');
      if (!mapModal.classList.contains('hidden')) renderFullMap();
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

  // Category Tab Switching with instant mobile touch response
  document.querySelectorAll('.cat-btn').forEach(btn => {
    const handleCatSwitch = (e) => {
      if (e) e.stopPropagation();
      audio.init();
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateRecipesUI();
    };
    btn.addEventListener('click', handleCatSwitch);
    btn.addEventListener('pointerdown', handleCatSwitch);
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

  // Modal backdrop click to dismiss
  ['map-modal', 'diary-modal', 'save-load-modal', 'teleportato-modal', 'chest-modal', 'chester-modal', 'crockpot-modal'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        if (e.target === el) el.classList.add('hidden');
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
