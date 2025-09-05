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
        title: 'Security',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/security/PQC.md', 'PQC'],
        ]
      },
	  {
        title: 'Policy',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/policy/MinSdkVersion.md', 'MinSdkVersion'],
        ]
      },
    ],
    nav: [
    ]
  }
}