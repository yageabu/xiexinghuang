module.exports = {
    base: '/xiexinghuang/',
    title: '阿BU的技术笔记',
    description: 'Just play',
    themeConfig: {
        title: '技术笔记',
        head: [
            ['link', { rel: 'icon', href: '/favicon.ico' }]
        ],
        logo: '/assets/img/nav-logo.png',
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
            { text: 'Github主页', link: 'https://yageabu.github.io/runningboy/' },
        ],
        sidebar: {
            '/DevOps/': [
                ''
            ],
            '/Agile/': [
                ''
            ],
            '/Dev/': [
                '',
                'three',
                'four'
            ],
            '/': [
                ''
            ]
        },
        lastUpdated: 'Last Updated'
    }
}