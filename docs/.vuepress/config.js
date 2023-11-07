module.exports = {
  title: 'Android',
  description: 'Android',
  base: '/Android/',
  repo: 'https://github.com/MichaelNien/Android',
  plugins: [
	'vuepress-plugin-mermaidjs'
  ],
  themeConfig: {
    sidebarDepth: 0,
    sidebar: [
      ['/', '首頁'],
	  {
        title: 'Ide',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/Android_Studio.md', 'Android Studio'],
        ]
      },
    ],
    nav: [
    ]
  }
}