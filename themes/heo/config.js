const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2018-03-29', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '了解福兰贡芳香实验室 🎉', url: 'https://falangong.cn/article/falangong' },
    { title: '领取13万字医芳笔记 🎁', url: 'https://falangong.cn/article/Aromatherapy-Journal' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '洗掉假知识',
  HEO_HERO_TITLE_2: '建立新认知',
  HEO_HERO_TITLE_3: 'falangong.cn',
  HEO_HERO_TITLE_4: '经验分享',
  HEO_HERO_TITLE_5: '只学芳疗是无根之木',
  HEO_HERO_TITLE_LINK: 'https://falangong.cn/article/Learning-Aromatherapy',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '随便逛逛',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看精选' },
  HEO_HERO_CATEGORY_2: { title: '单方精油', url: '/tag/单方精油' },
  HEO_HERO_CATEGORY_3: { title: '芳疗方案', url: '/tag/芳疗方案' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享与热心帮助',
    '🤝 专修交互与设计',
    '🏃 脚踏实地行动派',
    '🏠 智能家居小能手',
    '🤖️ 数码科技爱好者',
    '🧱 团队小组发动机'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-bell',
  HEO_INFO_CARD_URL2: 'https://falangong.cn/article/falangong-tim',
  HEO_INFO_CARD_ICON2: 'fab  fa-weixin',
  HEO_INFO_CARD_URL3: 'https://falangong.cn/article/falangong',
  HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: '法兰贡',
      img_1: '/images/heo/法兰贡.webp',
      color_1: '#aaaa8a',
      title_2: '克里斯汀',
      img_2: '/images/heo/克里斯汀.webp',
      color_2: '#ffffff'
    },
    {
      title_1: '伊莎贝拉',
      img_1: '/images/heo/伊莎贝拉.webp',
      color_1: '#57b6e6',
      title_2: '特杜',
      img_2: '/images/heo/特杜.webp',
      color_2: '#4082c3'
    },
    {
      title_1: '法兰贡',
      img_1: '/images/heo/法兰贡1.webp',
      color_1: '#d5ba9f',
      title_2: '安娜',
      img_2: '/images/heo/安娜.webp',
      color_2: '#fbcd08'
    },
    {
      title_1: '伊莎贝拉',
      img_1: '/images/heo/伊莎贝拉1.webp',
      color_1: '#eb6840',
      title_2: '克里斯汀',
      img_2: '/images/heo/克里斯汀1.webp',
      color_2: '#8f55ba'
    },
    {
      title_1: '法兰贡2',
      img_1: '/images/heo/法兰贡2.webp',
      color_1: '#f29e39',
      title_2: '精确芳疗学',
      img_2: '/images/heo/精确芳疗学1.webp',
      color_2: '#2c51db'
    },
    {
      title_1: '药用精油学',
      img_1: '/images/heo/药用精油学.webp',
      color_1: '#f7cb4f',
      title_2: '药用精油大百科',
      img_2: '/images/heo/药用精油大百科2.webp',
      color_2: '#e9572b'
    },
    {
      title_1: '法兰贡',
      img_1: '/images/heo/法兰贡2.webp',
      color_1: '#df5b40',
      title_2: '法兰贡',
      img_2: '/images/heo/法兰贡.webp',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '联系我们',
  HEO_SOCIAL_CARD_TITLE_2: '添加小助手微信WeChat',
  HEO_SOCIAL_CARD_TITLE_3: '点击查看',
  HEO_SOCIAL_CARD_URL: 'https://falangong.cn/article/falangong-tim',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
