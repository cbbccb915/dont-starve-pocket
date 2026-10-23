# ⛺ 饥荒：永恒之境 (Don't Starve Complete / Pocket Edition)

一款专为移动端与桌面端双模适配的深度荒野求生单机游戏，具有 **3小时以上沉浸式生存周期**。游戏基于原生 JavaScript Canvas 2D 与 Web Audio 引擎打造，零外部庞大框架依赖，轻量且极易被各类 AI 进行二次拓展、模组编写及多平台移植（如微信小程序、微信小游戏、Android APK、Electron 桌面版）。

---

## 🌟 核心特色与系统机制

1. **🍂 四季与冷热体温系统 (Seasonal Cycle & Temperature)**
   - 包含秋、冬、春、夏四个独立季节（每季 15 天，跨度 60 天大循环）。
   - 严酷的冷热体温与过热中暑、冻伤机制；春季持续暴雨降水、雷电劈击与潮湿惩罚；夜间极度黑暗与查理（Charlie）暗夜撕咬。
2. **👹 四季霸主巨兽 (All 4 Seasonal Giants)**
   - **秋季 · 熊獾 (Bearger)**：贪吃抢夺箱子与食物，范围地裂击飞武器，掉落熊皮。
   - **冬季 · 独眼巨鹿 (Deerclops)**：大范围建筑粉碎践踏、极寒暴风雪减速、精神值急速衰退光环，掉落巨鹿眼球。
   - **春季 · 鹿角鸭怪 (Moose/Goose)**：强力声波震落手持武装，产下雷鸣巨蛋并孵化雏鸟群体攻击，掉落鸭羽。
   - **夏季 · 熔岩龙蝇 (Dragonfly)**：暴怒冲刺与三连熔岩震地，点燃周围地表，掉落珍稀龙鳞。
3. **🐶 忠诚移动狗箱 · 切斯特 (Chester)**
   - 地表自然生成【眼骨】，拾取后切斯特蹦跳跟随。
   - 提供 9 格随行背包存储。
   - **月圆双向变异机制**：
     - 背包装入 9 颗蓝宝石 ➔ 进化为【雪柜切斯特】（食物保质期延长）；
     - 背包装入 9 份噩梦燃料 ➔ 进化为【暗影切斯特】（背包容量升级至 12 格）。
4. **🕳️ 地底世界 · 幽暗洞穴与远古废墟 (Underground Caves & Ancient Ruins)**
   - 地表矿区随机分布被岩塞封印的落水洞（Pickaxe 开凿破封）。
   - 双层独立世界切换（实体独立存储、光影暗化、落石迷雾）。
   - 洞穴特有生态：荧光花草、石笋矿柱、蛞蝓龟、洞穴蝙蝠洞穴巢穴与远古伪科学站。
5. **🔬 四阶科技树与魔法/远古科技 (4-Tier Tech Tree)**
   - **一本：科学仪器 (Science Machine)** ➔ 解锁背包、木甲、铲子、长矛。
   - **二本：炼金引擎 (Alchemy Engine)** ➔ 解锁雪柜/冰箱、金斧、橄榄球头盔、提灯。
   - **三本：灵子分解器 (Prestihatitator)** ➔ 解锁暗夜剑、暗夜甲、红蓝魔杖、紫宝石、排箫。
   - **四本：暗影操纵仪 / 远古伪科学站 (Ancient Station)** ➔ 解锁远古铥矿皇冠（护盾）、远古铥矿胸甲、生命护符（死亡原地复活）。
6. **🍲 经典瓦罐烹饪与改良农业 (Crockpot Cooking & Agriculture)**
   - 瓦罐烹饪锅系统：支持波兰饺子、火龙果馅饼、蜜汁火腿、培根煎蛋、炸鱼排、肉丸、肉汤等十余种料理。
   - 改良农田与牛粪肥料系统：收集种子与牛粪培育高产作物。
7. **💾 三槽本地持久存档与拂晓自动保存 (Save & Load System)**
   - 3 个独立持久化存档槽位。
   - 每日破晓清晨自动无感归档。
8. **📜 荒野开拓史诗 · 生存历程与里程碑成就 (Milestones Diary)**
   - 记录存活天数、怪物击杀、Boss讨伐、蓝图解锁、料理烹调与洞穴探秘。
   - 9 项全局里程碑成就卡片解锁。

---

## 📂 项目结构

```text
dont_starve_pocket/
├── index.html            # 游戏主入口、UI 结构、各类弹窗（存档/历程/切斯特/瓦罐/抽屉）
├── style.css             # 哥特风格响应式样式、虚拟摇杆触控布局、HUD、各层滤镜
├── game.js               # 核心单文件引擎（实体管理、四季模拟、科技树、Boss AI、洞穴层）
├── server.py             # 极轻量 Python 本地服务（支持局域网及手机访问）
├── install_and_run.sh    # Android Termux 一键自动化部署与启动脚本
├── manifest.json         # PWA 渐进式 Web 应用配置（支持添加到手机主屏幕）
├── sw.js                 # Service Worker 离线缓存与资源更新
└── README.md             # 本说明文档
```

---

## 🤖 AI 开发者二次迭代指南 (Guide for AI Agents)

本项目代码结构经过高度模块化与自解释设计，适合各类 AI（Claude, GPT, Gemini, DeepSeek, Cursor 等）快速阅读与功能增强。

### 1. 核心状态结构 (`state` in `game.js`)
- `state.player`: 玩家坐标、三维状态 (`health`, `hunger`, `sanity`, `temperature`, `moisture`)、装备格 (`hand`, `head`, `body`)、背包数组。
- `state.entities`: 当前世界的地表实体列表（资源、生物、建筑物、掉落物）。
- `state.caveEntities`: 地下洞穴层实体列表。
- `state.inCaves`: 标识玩家当前是否在地下层。
- `state.season` / `state.seasonDay`: 季节与天数驱动状态机。
- `state.chester`: 切斯特跟随状态、背包槽位、进化形态。

### 2. 扩充新物品 / 装备
在 `game.js` 中的 `ITEMS` 字典中添加条目：
```javascript
my_magic_weapon: {
  name: '虚空裂隙刃',
  type: 'weapon',
  damage: 80,
  durability: 150,
  icon: '🗡️',
  desc: '蕴含裂隙之力的恐怖神兵。'
}
```

### 3. 扩充合成配方
在 `CRAFTING_RECIPES` 数组中添加配方条目：
```javascript
{
  id: 'my_magic_weapon',
  category: 'magic', // 'light' | 'tool' | 'survival' | 'combat' | 'science' | 'magic' | 'cook' | 'refine'
  techLevel: 3,      // 0: 手搓, 1: 科学仪器, 2: 炼金引擎, 3: 灵子分解器, 4: 暗影操纵仪
  cost: { nightmare_fuel: 6, living_log: 2, purple_gem: 1 }
}
```

### 4. 扩充瓦罐烹饪食谱
在 `COOK_RECIPES` 中定义所需食材标签与优先级权重：
```javascript
{
  id: 'dragonpie',
  name: '火龙果馅饼',
  cookTime: 10,
  health: 40,
  hunger: 75,
  sanity: 5,
  match: (tags) => (tags.fruit_dragonfruit || 0) >= 1 && (tags.meat || 0) === 0
}
```

---

## 📲 跨平台移植路线建议

### 1. 移植到微信小程序 (WeChat Mini Program)
- **UI 层**：将 `index.html` 中的结构移植为 `index.wxml`（`div` ➔ `view`，`button` ➔ `button`），样式移至 `index.wxss`。
- **渲染层**：采用新版 `<canvas type="2d" id="game-canvas">`，通过 `wx.createSelectorQuery()` 获取原生 `RenderingContext2D`。
- **存档适配**：将 `localStorage.getItem/setItem` 批量替换为 `wx.getStorageSync/setStorageSync`。
- **音频适配**：通过 `wx.createWebAudioContext()` 即可直接移植原有的音效合成函数。

### 2. 打包为 Android 原生 APK
- 使用 **Capacitor** 或 **Cordova**：
  ```bash
  npm init @capacitor/app dont-starve-apk
  # 将当前所有文件放入 www/ 目录
  npx cap add android
  npx cap build
  ```
  即可生成无缝全屏运行的独立 Android `.apk` 安装包。

### 3. 桌面客户端 (Electron)
- 添加 `package.json` 与标准 Electron `main.js`，通过 `mainWindow.loadFile('index.html')` 即可作为独立桌面程序运行在 Windows / macOS / Linux 上。

---

## 🕹️ 操作方式

| 操作按键 / 手势 | 作用说明 |
| :--- | :--- |
| **手机触控** | 左下角虚拟摇杆走位移动；右下角【交互 / 砍伐】与【战斗 / 攻击】快捷按钮 |
| **背包与装备** | 直接点击底部物品栏进行使用、食用或穿戴装备 |
| **WASD / 方向键** | 电脑键盘移动角色 |
| **空格键 (Space)** | 自动靠近并交互、采集草木、拾取掉落物 |
| **F 键** | 自动锁定并攻击最近的敌对生物 |
| **M 键** | 呼出全景大地图 |
| **1 ~ 0 键** | 快速选用底部对应序号物品 |
| **💾 存档 / 📜 历程** | 随时点击左上角快捷呼出存档与里程碑史诗面板 |

---

## 🚀 本地运行与部署

### PC 运行：
```bash
python server.py
# 浏览器访问: http://localhost:8080
```

### Android 手机 Termux 运行：
```bash
bash install_and_run.sh
# 手机浏览器访问: http://localhost:8080
```
