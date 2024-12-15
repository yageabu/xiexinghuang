module.exports = {
    base: "/notes/",
    title: '阿BU的技术笔记',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'author', content:'谢星煌' }],
        ['meta', { name: 'keywords', content:'Java Vue 运维 云原生 DevOps 敏捷 项目管理 大数据' }]
    ],
    description: 'Hack Everything',
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    const moment = require('moment');
                    moment.locale('zh-cn');
                    return moment(timestamp).format('YYYY-MM-DD')
                }
            }
        ]
    ],
    themeConfig: {
        LastUpdated: '更新时间',
        title: '阿BU的技术笔记',
        logo: '/assets/img/logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '关于', link: '/about' },
            {
                text: '技术手册',
                items: [
                    { text: '运维', link: '/DevOps/' },
                    { text: '后端', link: '/Dev/' },
                    { text: '前端', link: '/Front_end/' },
                    { text: '大数据', link: '/Bigdata/' }
                ]
            },
            {
                text: '管理手册',
                items: [
                    { text: '敏捷转型', link: '/Bigdata/' },
                    { text: 'Jira说明书', link: '/Bigdata/' },
                    { text: '人生操作系统使用手册', link: '/Bigdata/' }
                ]
            },
            { text: 'Github主页', link: 'https://github.com/yageabu' },
        ],
        sidebar: {
            '/DevOps/': [
                '',
                'DevOps'
            ],
            '/Front_end/': [
                ''
            ],
            '/Dev/': [
                '',
                'four',
                'Servlet'
            ],
            '/': [
                ''
            ]
        },
        lastUpdated: 'Last Updated'
    }
}