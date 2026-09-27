// 作品数据：内容与展示分离。后续加入真实作品时，在这里追加条目即可。
// category 取值需与 CATEGORIES 一致。
export const CATEGORIES = [
  { key: 'all', label: '全部' },
  { key: 'brand', label: '品牌设计' },
  { key: 'poster', label: '海报设计' },
  { key: 'book', label: '书籍设计' },
  { key: 'photo', label: '摄影作品' },
]

export const works = [
  {
    id: 'w-brand',
    title: '品牌设计',
    category: 'brand',
    desc: '标识系统 · 视觉规范 · 应用延展',
    c1: '#ff4d00',
    c2: '#ffb199',
  },
  {
    id: 'w-poster',
    title: '海报设计',
    category: 'poster',
    desc: '活动海报 · 主题视觉 · 排版实验',
    c1: '#14213d',
    c2: '#5c7aea',
  },
  {
    id: 'w-book',
    title: '书籍设计',
    category: 'book',
    desc: '封面装帧 · 内页排版 · 开本规划',
    c1: '#0d7377',
    c2: '#9fe0d8',
  },
  {
    id: 'w-photo',
    title: '摄影作品',
    category: 'photo',
    desc: '街头 · 人文 · 城市影像',
    c1: '#141414',
    c2: '#8a857d',
  },
]
