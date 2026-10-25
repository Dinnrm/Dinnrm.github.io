// Copy follows the supplied PDF; artwork is from the user's twelve book mockups.
export const daheBookDetails = {
  naturalArtwork: true,
  facts: [
    { label: '项目时间', labelEn: 'Project date', value: '2026 年 4 月', valueEn: 'April 2026' },
    { label: '项目类型', labelEn: 'Discipline', value: '书籍装帧 · 文化图谱', valueEn: 'Book design · Cultural atlas' },
    { label: '参与身份', labelEn: 'Participation', value: '项目成员', valueEn: 'Project team member' },
    { label: '项目背景', labelEn: 'Project context', value: '山东艺术学院产学合作协同育人项目', valueEn: 'Industry–education collaboration at Shandong University of Arts' },
    { label: '研究路径', labelEn: 'Research approach', value: '文化梳理 · 图谱解析 · 设计转化', valueEn: 'Cultural research · Atlas analysis · Design transformation' },
    { label: '延展方向', labelEn: 'Applications', value: '纹样系统 · 文创与包装应用', valueEn: 'Pattern systems · Cultural products & packaging' },
  ],
  sections: [
    {
      id: 'construction', title: '封面与阅读结构', titleEn: 'Cover & reading structure', columns: 1,
      text: '以陶土棕色和细密纹理呼应彩陶的质朴气息，通过简洁的封面文字建立主题识别。目录将文化综述、地域分布、文化梳理、图谱解析、设计转化、文创应用与结语串联起来；深色图谱跨页与浅色正文形成对比，让研究线索与视觉信息交替展开。',
      textEn: 'An earthy brown cover and fine texture recall the character of pottery, with restrained typography establishing the subject. Seven chapters connect cultural context, geography, classification, atlas analysis, design transformation, applications and conclusions. Dark atlas spreads contrast with light text pages, creating a rhythm between research and visual information.',
      leadImage: 'dahe-cover',
      images: ['dahe-cover', 'dahe-contents', 'dahe-geography', 'dahe-atlas'],
    },
    {
      id: 'layouts', title: '纹样梳理与图谱转化', titleEn: 'Pattern research & transformation', columns: 2,
      text: '将器物图像、文化类型、形态特征和纹饰单元放入统一的分类版式，建立可比较、可追溯的图谱关系。围绕色彩、纹饰与造型提取设计要素，通过旋转、镜像、缩放和阵列等方法形成新的纹样组合，呈现从文化原型到当代图形的推演过程。',
      textEn: 'A consistent classification layout brings together vessels, cultural types, forms and decorative units, making the relationships comparable and traceable. Color, ornament and form become design elements; rotation, reflection, scaling and repetition generate new patterns and show the progression from cultural prototypes to contemporary graphics.',
      images: ['dahe-catalog-1', 'dahe-catalog-2', 'dahe-color-transformation', 'dahe-motif-transformation'],
    },
    {
      id: 'reading', title: '纹样延展与文创应用', titleEn: 'Pattern development & applications', columns: 2,
      text: '将提取的纹样转化为具有连续节奏和系列识别的图形语言，并延展到文具、手袋、纺织品与包装等应用展示。通过图形、色彩和载体之间的呼应，让彩陶文化从研究图谱进入日常使用场景，呈现文化转译与价值再生的设计思路。',
      textEn: 'Extracted motifs become a coherent graphic language with repeatable rhythms and extend into stationery, bags, textiles and packaging studies. Connections between pattern, color and format bring pottery culture from the research atlas into everyday contexts, exploring cultural translation and renewed value.',
      images: ['dahe-pattern-development', 'dahe-applications-1', 'dahe-applications-2', 'dahe-applications-3'],
    },
  ],
}
