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
    desc: '济南市文化馆视觉系统设计，涵盖标志、导视与活动物料。', descEn: 'A visual identity for the Jinan Cultural Center, including its logo, wayfinding and event materials.', categories: ['brand', 'visual'],
  },
  {
    id: 'zhunongfeng', coverTitle: '祝农丰 · 科小七', coverTitleEn: 'Zhunongfeng · Ke Xiaoqi', tag: '品牌设计', tagEn: 'Brand identity', title: '祝农丰、科小七品牌设计', titleEn: 'Zhunongfeng & Ke Xiaoqi · Brand identity', categories: ['brand'],
  },
  {
    id: 'huafeng', coverTitle: '华丰共道', coverTitleEn: 'Huafeng Gongdao', tag: '品牌设计', tagEn: 'Brand identity', title: '华丰共道品牌设计', titleEn: 'Huafeng Gongdao · Brand identity', categories: ['brand'],
  },
  {
    id: 'flowers-book', coverTitle: '花儿永远这样红', coverTitleEn: 'The Flowers Are Always So Red', tag: '书籍装帧', tagEn: 'Book design', title: '《花儿永远这样红》书籍装帧设计', titleEn: '“The Flowers Are Always So Red” · Book design', categories: ['book'],
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
