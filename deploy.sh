#!/usr/bin/env sh

# 有时候bash会遇到失败，最好一步一步在终端中执行
# set NODE_OPTIONS=--openssl-legacy-provider  忽略SSL错误

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init && git add -A && git commit -m 'deploy-12-17'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:yageabu/xiexinghuang.git main:gh-pages

cd -

echo '按任意键退出'