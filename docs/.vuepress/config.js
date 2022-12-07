module.exports = {
    base: "/xiexinghuang/",
    title: '阿BU的技术笔记',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'author', content:'谢星煌' }],
        ['meta', { name: 'keywords', content:'Java 运维手册 云原生 DevOps 敏捷 项目管理' }]
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
                    { text: '开发', link: '/Dev/' },
                    { text: '项目管理', link: '/Agile/' }
                ]
            },
            { text: 'Github主页', link: 'https://github.com/yageabu' },
        ],
        sidebar: {
            '/DevOps/': [
                '',
                'DevOps'
            ],
            '/Agile/': [
                ''
            ],
            '/Dev/': [
                '',
                'four'
            ],
            '/': [
                ''
            ]
        },
        lastUpdated: 'Last Updated'
    }
}