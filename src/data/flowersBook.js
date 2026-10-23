// Text transcribed from the two supplied PSD text layers; image keys follow their visible artwork layers.
export const flowersBookDetails = {
  facts: [
    { label: '成品尺寸', labelEn: 'Format', value: '210 × 297 mm', valueEn: '210 × 297 mm' },
    { label: '页数', labelEn: 'Extent', value: '24 页 · 含封三 U 盘卡扣位', valueEn: '24 pages · USB holder inside the back cover' },
    { label: '装订', labelEn: 'Binding', value: '锁线精装 · 双层封套', valueEn: 'Sewn hardcover · Two-layer sleeve' },
    { label: '纸张与材料', labelEn: 'Paper & materials', value: '300g 米白丽奇纸、高阶映画纸、157g 铜版纸裱、加厚 2.5mm 白卡', valueEn: '300g ivory textured paper, premium printing paper, mounted 157g coated paper and 2.5mm white board' },
    { label: '出版', labelEn: 'Publisher', value: '山东文化音像出版社', valueEn: 'Shandong Culture Audio-Visual Publishing House' },
    { label: '出版编号', labelEn: 'Publication identifiers', value: 'ISBN 978-7-7988-0553-6\nISRC CN-E26-26-00004', valueEn: 'ISBN 978-7-7988-0553-6\nISRC CN-E26-26-00004' },
  ],
  sections: [
    {
      id: 'construction', title: '封套与装帧', titleEn: 'Cover & construction',
      text: '以双层封套呼应“守护繁花”的故事内核。外层肌理白色特种纸采用异形模切，花朵与火焰般的镂空透出内层红色封面；民族织物纹样与烫金标题形成内外呼应，让材质、色彩与虚实层次共同参与叙事。',
      textEn: 'A two-layer sleeve echoes the story’s idea of protecting flowers. Die-cut forms in textured white specialty paper suggest blossoms and flames, revealing the red cover beneath. Textile patterns and a gold-foil title connect the layers, bringing material, color and negative space into the narrative.',
      leadImage: 'flowers-book-sleeve',
      images: ['flowers-book-sleeve', 'flowers-book-cover', 'flowers-book-cover-mockup-1', 'flowers-book-cover-mockup-2', 'flowers-book-cover-mockup-3'],
    },
    {
      id: 'layouts', title: '内页编排', titleEn: 'Page composition',
      text: '围绕“种花—护花—兴花”的故事脉络，将舞台剧照、角色与主创信息编入红白交替的版面。金色标题、民族纹样与清晰的图文层次贯穿全书，连接舞台情境与纸面阅读。',
      textEn: 'Following the story’s progression of planting, protecting and nurturing flowers, alternating red and white spreads bring together stage photographs, characters and creative-team information. Gold-toned headings, textile motifs and a clear hierarchy connect the theatrical setting with the printed page.',
      images: ['flowers-book-spread-1', 'flowers-book-spread-2', 'flowers-book-spread-3', 'flowers-book-spread-4', 'flowers-book-spread-5', 'flowers-book-spread-6'],
    },
    {
      id: 'reading', title: '阅读与细节', titleEn: 'Reading & details',
      text: '从扉页、目录到剧情、演员介绍与音乐剧曲谱，在连贯的翻阅节奏中保存舞台艺术与音乐文本，使剧目的故事和音乐得以继续传播。',
      textEn: 'From the opening pages and contents to the story, cast and musical scores, a consistent reading rhythm preserves the stage production and its music in a lasting printed form.',
      images: Array.from({ length: 9 }, (_, index) => `flowers-book-reading-${index + 1}`),
    },
  ],
}
