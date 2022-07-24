export default {
  // These are app level configs.
  lang: 'en-US',
  title: 'Data Structures and Algorithms',
  description: '',
  base: '/data-structures-and-algorithms/',
  head: [
    [
      'meta', {
        property: 'og:title',
        content: 'Data Structures and Algorithms'
      }
    ],
  ],
  themeConfig: {
    sidebar: [
      {
        text: '01. Big-O Notation',
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/big-o-notation/introduction' },
          { text: 'Code', link: '/big-o-notation/code' },
        ]
      },
      {
        text: '02. Numbers',
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/numbers/introduction' },
          { text: 'Code', link: '/numbers/code' },
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