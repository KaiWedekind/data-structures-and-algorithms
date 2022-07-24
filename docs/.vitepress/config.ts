export default {
  // These are app level configs.
  lang: 'en-US',
  title: 'Data Structures and Algorithms',
  description: '',
  base: '/data-structures-and-algorithms/',
  themeConfig: {
    sidebar: [
      {
        text: '01. Big-O Notation',
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/big-o-notation/introduction' },
          { text: 'Getting Started', link: '/big-o-notation/getting-started' },
          { text: 'Code', link: '/big-o-notation/code' },
        ]
      },
      {
        text: 'About',
        collapsible: true,
        items: [
          { text: 'Creator', link: '/creator/index' }
        ]
      }
    ]
  }
}