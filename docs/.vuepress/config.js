module.exports = {
    themeConfig: {
        title: '阿BU的技术笔记',
        head: [
            ['link', { rel: 'icon', href: '/favicon.ico' }]
        ],
        logo: '/assets/img/nav-logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '转到doscify博客', link: 'https://yageabu.github.io/runningboy/' },
        ],
        sidebar: {
            '/DevOps/': [
                ''
            ],
            '/Web Develop/': [
                'Intro'
            ],
            '/Agile/': [
                '',
                'Blog'
            ],
            '/': [
                ''
            ]
        }
    }
}