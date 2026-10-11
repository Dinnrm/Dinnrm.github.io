// 站点内容（来自 个人介绍.docx）。修改只动这里。

export const profile = {
  name: '丁若木',
  pinyin: 'Dinnrm',
  birth: '2002.09.20',
  location: '山东青岛 · 济南',
  skills: ['Photoshop', 'Illustrator', 'Lightroom', 'InDesign', 'Xd'],
  intro:
    '研究与实践方向聚焦展演活动主视觉系统搭建、书籍装帧设计以及公共空间设计，拥有丰富的落地项目经验。在创作中注重传统文化元素的当代转译，兼顾视觉美感、信息逻辑与实际落地可行性，持续探索平面设计在不同环境中的表达价值。',
  education: '山东艺术学院 · 视觉传达设计（传统文化传承与创新方向）',
}

// 竞赛获奖
export const awards = [
  { level: '国家级', name: '保密公益宣传片创意文案与海报征集评选 · 二等奖' },
  { level: '国家级', name: '两岸新锐设计竞赛·华灿奖 总赛 · 二等奖（团结报70周年标志）' },
  { level: '国家级', name: '中国大学生计算机设计大赛 全国赛 · 二等奖' },
  { level: '国家级', name: '中国之星设计奖 全国赛 · 银奖' },
  { level: '省级', name: '保密公益宣传片征集评选 · 山东省级一等奖' },
  { level: '省级', name: '中国大学生计算机设计大赛 · 山东省级一等奖' },
  { level: '省级', name: '山东省大学生科技节新媒体艺术大赛（第十五届）· 一等奖' },
  { level: '省级', name: '山东省大学生科技节新媒体艺术大赛（第十四届）· 一等奖' },
  { level: '省级', name: '「菁彩齐鲁」电视 MV 艺术大赛 · 一等奖' },
  { level: '省级', name: '中国大学生计算机设计大赛（第十六届）· 山东省级二等奖' },
  { level: '省级', name: '山东省精品旅游文创设计大赛「聊城有礼」专项赛道 · 二等奖' },
  { level: '省级', name: '未来设计师 NCDA · 山东省级三等奖' },
  { level: '省级', name: '华灿奖 华北赛区 · 山东省级三等奖' },
  { level: '省级', name: '东方创意之星设计大赛 山东赛区 · 铜奖' },
  { level: '省级', name: '全国大学生广告艺术大赛 · 山东省级优秀奖' },
]

// 设计作品：名称和说明以用户提供的《工作项目文字说明》为准。
// 英文对应文本与稳定 ID 放在同一记录，避免排序变化后错配。
export const projects = [
  {
    id: 'shoumo', tag: '海报设计', tagEn: 'Poster series', title: '守墨非遗', titleEn: 'Shoumo · Intangible heritage',
    desc: '通过对传统非遗文化市场的调研，结合当下国内手工非遗的存在，结合现代化设计，以当下较为风靡的信息可视化海报进行平面设计，来唤醒人们群众对目前正在逐渐消失的非遗手工的关注，增加人民群众对非遗的重视，进而传承和发扬正在消失的非遗技艺。',
    descEn: 'Based on research into traditional intangible cultural heritage and contemporary handmade crafts in China, this series uses modern information visualization to draw attention to disappearing craft traditions, encourage public awareness, and support their preservation and transmission.',
    categories: ['poster'], images: ['shoumo-brush', 'shoumo-ink', 'shoumo-paper', 'shoumo-inkstone'],
  },
  {
    id: 'shen', tag: '海报设计', tagEn: 'Poster series', title: '《慎》系列海报设计', titleEn: '“Shen” · Caution poster series',
    desc: '作品《慎》系列海报设计以铁丝为灵感，结合照片传播、文件传播、语言传播三种经典传播方式，将铁丝编织成浅显易懂的对应图形，以直观的形态告诉大家“守密护己筑防线，国安家安记心间”。',
    descEn: 'Inspired by wire, this series explores three familiar forms of communication: photographs, files and speech. Wire is shaped into recognizable symbols to convey a message of protecting confidentiality, personal safety, and the security of both nation and home.',
    categories: ['poster'], images: ['shen-photo', 'shen-file', 'shen-speech'],
  },
  {
    id: 'flowers-visual', coverTitle: '花儿永远这样红', coverTitleEn: 'The Flowers Are Always So Red', listingTitle: '《花儿永远这样红》主视觉设计', listingTitleEn: 'The Flowers Are Always So Red · Key visual', tag: '演出视觉', tagEn: 'Performance',
    title: '音乐剧《花儿永远这样红》（济南内部演出版）主视觉设计', titleEn: 'Musical “The Flowers Are Always So Red” · Jinan internal production',
    desc: '演出主视觉及配套物料设计。', descEn: 'Key visual and supporting materials for the performance.', categories: ['visual'],
  },
  {
    id: 'kunlun', coverTitle: '昆仑谣', coverTitleEn: 'Kunlun Yao', listingTitle: '昆仑谣 · 数字文旅与 AIGC 大赛', listingTitleEn: 'Kunlun Yao · Digital tourism & AIGC', tag: '赛事视觉', tagEn: 'Competition',
    title: '第19届全国3D大赛“昆仑谣·数字文旅创作大赛”暨2026AIGC多模态创新设计与技术应用大赛（山东赛区）视觉系统设计',
    titleEn: '19th National 3D Competition · Kunlun Yao Digital Cultural Tourism Creation Competition & 2026 AIGC Multimodal Innovation Design and Technology Application Competition (Shandong)',
    desc: '山东赛区视觉系统设计。', descEn: 'Visual identity for the Shandong regional competition.', categories: ['visual'],
  },
  {
    id: 'yixin', coverTitle: '艺心为民', coverTitleEn: 'Yixin Weimin', listingTitle: '济南市文化馆「艺心为民」视觉系统', listingTitleEn: 'Jinan Cultural Center · Yixin Weimin', tag: '社会服务', tagEn: 'Community',
    title: '济南市文化馆“家门口的文化馆——‘艺’心为民”视觉系统设计', titleEn: 'Jinan Cultural Center · “A Cultural Center at Your Doorstep — Yixin Weimin”',
    desc: '本项目为济南市文化馆群众文艺普及项目“家门口的文化馆——‘艺’心为民”进行视觉系统设计。以“艺心为民”为核心，构建统一、温暖、亲和的品牌形象，传递文艺服务下沉社区、直达百姓家门口的项目内涵，让优秀文化资源在社区落地生根，实现公共文化服务“零距离”。\n\n标志融合泉城地域意象与群众文艺特征：红橙渐变的爱心造型呼应“心”字，象征艺术的温度与人文关怀；白色简约人形融入爱心轮廓，舒展的手臂表达艺术服务大众、贴近人民的理念。温润明快的色彩兼顾官方严谨感与大众亲和力，适配社区宣传、物料印刷和新媒体传播。\n\n视觉系统涵盖标志标准制图、标准色彩、辅助图形、辅助标志与反白规范，并延展至帽子、胸章、文化衫、志愿者马甲、办公事务用品、工作证、环保手提袋、文创纸品、户外立式导视与门头标识。展板同时记录了标志、导视和衍生品的实景应用，以及项目的社会反馈。',
    descEn: 'A visual identity for the Jinan Cultural Center’s community arts program, “A Cultural Center at Your Doorstep — Yixin Weimin.” Centered on bringing art to the public, the identity creates a consistent, warm and approachable image for cultural services that reach residents in their own communities.\n\nThe logo brings together local imagery associated with Jinan and the character of community arts. A red-to-orange heart conveys warmth and care, while a simple white figure with outstretched arms expresses artistic participation and service to the public. The inviting palette balances institutional clarity with accessibility across community publicity, printed materials and digital communication.\n\nThe system includes logo construction, standard colors, supporting graphics and reversed-logo guidelines. Applications cover caps, badges, shirts, volunteer vests, stationery, staff passes, reusable bags, paper products, freestanding wayfinding and entrance signs. The boards also document real-world applications and the program’s social response.',
    categories: ['brand', 'visual'], images: ['yixin-1', 'yixin-2', 'yixin-3', 'yixin-4', 'yixin-5'],
  },
  {
    id: 'zhunongfeng', coverTitle: '祝农丰 · 科小七', coverTitleEn: 'Zhunongfeng · Ke Xiaoqi', tag: '品牌设计', tagEn: 'Brand identity', title: '祝农丰、科小七品牌设计', titleEn: 'Zhunongfeng & Ke Xiaoqi · Brand identity', categories: ['brand'],
  },
  {
    id: 'huafeng', coverTitle: '华丰共道', coverTitleEn: 'Huafeng Gongdao', tag: '品牌设计', tagEn: 'Brand identity', title: '华丰共道品牌设计', titleEn: 'Huafeng Gongdao · Brand identity', categories: ['brand'],
  },
  {
    id: 'flowers-book', coverTitle: '花儿永远这样红', coverTitleEn: 'The Flowers Are Always So Red', tag: '书籍装帧', tagEn: 'Book design', title: '《花儿永远这样红》书籍装帧设计', titleEn: '“The Flowers Are Always So Red” · Book design',
    desc: '本书为原创音乐剧《花儿永远这样红》的配套出版物，以“文化润疆、铸牢中华民族共同体意识”为核心设计理念，围绕“种花—护花—兴花”的故事脉络展开视觉叙事。整体以热烈的红色为主色调，提取“新疆红”鲜花与民族织物纹样作为核心视觉符号，呼应戈壁花开、民族团结的故事内核。\n\n书籍编排将舞台剧照、人物角色、主创信息与音乐剧曲谱有机结合，图文层次清晰。金质标题与舞台实景剧照营造庄重温暖的氛围，呈现兵团精神、援疆奉献与边疆乡村振兴的主题。版式兼顾艺术性与实用性，记录舞台艺术成果，也让剧目故事与音乐文本得以留存传播。\n\n装帧采用锁线精装与双层封套结构。外层使用肌理白色特种纸，通过异形模切形成红花与火焰般的镂空；内层红色封面融入民族织物纹样与红花意象，搭配烫金标题，形成内外层虚实呼应的视觉层次。双层结构隐喻“守护繁花”，通过材质、色彩与镂空互动，将鲁疆同心、民族团结的精神内涵转化为书籍装帧语言。\n\n书籍尺寸为 210 × 297 mm，共 24 页，包含封三 U 盘卡扣位。展板列明的材料包括 300g 米白丽奇纸、高阶映画纸、157g 铜版纸裱与加厚 2.5mm 白卡。',
    descEn: 'A companion publication for the original musical “The Flowers Are Always So Red.” Its visual narrative follows the story of planting, protecting and nurturing flowers, with a focus on cultural connections with Xinjiang and a shared sense of community. A vivid red palette, flower imagery and traditional textile patterns echo the story’s themes of flowers blooming in the Gobi and solidarity among ethnic groups.\n\nThe book combines production photographs, characters, creative-team information and musical scores in a clear hierarchy. Gold-toned titles and stage photography create a dignified, warm atmosphere and document the production’s themes of service, support for Xinjiang and rural revitalization. The layout balances artistic expression with practical reading, preserving both the stage work and its musical text.\n\nThe binding uses a sewn hardcover and a two-layer slipcase. Textured white specialty paper forms the outer layer, with custom die-cut openings resembling flowers and flames. Through these openings, the red inner cover, textile motifs and gold-foil title create a dialogue between solid and open surfaces. The layered structure translates the idea of protecting flowers into a tactile book design.\n\nThe book measures 210 × 297 mm and contains 24 pages, including a USB-drive holder inside the back cover. The board lists 300gsm off-white specialty paper, high-grade art paper, mounted 157gsm coated paper and 2.5mm white board.',
    categories: ['book'], images: ['flowers-book-1', 'flowers-book-2'],
  },
  {
    id: 'campus', coverTitle: '山东艺术学院', coverTitleEn: 'Shandong University of Arts', tag: '校园服务', tagEn: 'Campus', title: '山东艺术学院基建设计', titleEn: 'Shandong University of Arts · Infrastructure design',
    desc: '山东艺术学院暑期基建项目设计服务。', descEn: 'Design services for summer infrastructure projects at Shandong University of Arts.', categories: ['other'],
  },
]

export const designWorks = [
  { id: 'poster', title: '海报设计', titleEn: 'Poster design' },
  { id: 'visual', title: '主视觉设计', titleEn: 'Key visual' },
  { id: 'brand', title: '品牌设计', titleEn: 'Brand identity' },
  { id: 'book', title: '书籍装帧设计', titleEn: 'Book design' },
  { id: 'other', title: '其他设计', titleEn: 'Other design' },
]

// 摄影作品分类
export const photos = [
  { title: '人像摄影', c1: '#2b2b2e', c2: '#6d6d73' },
  { title: '风景摄影', c1: '#1f3a5f', c2: '#7fa8d6' },
]
