module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [ //导航栏
      { text: '首页', link: '/' },
      { text: '导航', link: '/guide/guide/' },
      { text: '分类', link: '/CategoryList/' },
      { text: '音乐', items:[
                        {text:'中文音乐',items:[
                                          {text:'flac',link:'/Chines/'},
                                          {text:'mp3',link:'/Chines/'}
                        ]},
                        {text:'英文音乐',items:[
                                          {text:'flac',link:'/Chines/'},
                                          {text:'mp3',link:'/Chines/'}
                        ]}
      ]},
      { text: '语言', items:[{text:'简体中文',link:'/languageOptions/Chinese/'},{text:'日文',link:'/languageOptions/Japanese/'}]},
      { text: '外链', link: 'http://www.baidu.com' ,target:'_self', rel:''},
    ],
    sidebar: 'auto',   //侧边栏 自动模式
    //search: false,    设置是否禁用搜索框(默认启用)
    searchMaxSuggestions: 10,  //设置搜索框最大搜索结果
    //内置搜索只能搜索页面标题h2,h3以及使用tags构建的索引,如果你需要全文搜索,需要启用Algolia(提供搜索服务的企业)
    lastUpdated: 'Last Updated',  //展示文件的最后一次更新日期(git commit作为触发依据)

  }
}