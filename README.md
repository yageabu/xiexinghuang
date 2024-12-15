# yageabu.github.io
打算用VuePress做一下个人笔记练习，加油2023！

### 使用步骤
- 查看官网[Vuepress官方文档](www.vuepress.cn)
- 下载github上xiexinghuang仓库main分支源码（gh-page分支是编译后的页面文件）
- 安装node环境
- 热启动服务器（npm run docs:dev）报错的话，尝试从新安装Vuepress（npm init，npm install -D vuepress）
- 如果是SSL错误可能是node版本太高，尝试在控制台输入这句话set NODE_OPTIONS=--openssl-legacy-provider
  
- 部署到github
  先运行npm run docs:build 打包生成.vuepress/dist目录  
  然后Git上传到gh-pages分支，然后将根目录所有文件也通过Git上传到main分支下，注意：本地可能是master  
  然后在Gitee上同步一下仓库资料，因为国内的比较块。  
  
- 页面地址 [https://xiexinghuang.gitee.io/](https://xiexinghuang.gitee.io/)


### 注意事项
- 注意在.vuepress/config.js中，base路径要写成/，否则会出现404错误
- 注意在.vuepress/config.js中，head中title要写成你自己的名字，否则会出现404错误
- 注意在.vuepress/config.js中，head中favicon要写成你自己的favicon地址
- 不把.idea、node_modules、docs/.vuepress/dist放入代码包中保存，每次拉取都要重新npm i一下，重新build一下，以后用vscode打开