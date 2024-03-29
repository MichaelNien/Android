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
          ['/ide/Android_Studio.md', 'Android Studio'],
        ]
      },
	  {
        title: 'Service',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/service/Firebase.md', 'Firebase'],
        ]
      },
    ],
    nav: [
    ]
  }
}