# yarn run docs:build
git pull
git status
git add .
git commit . -m "update"
git push -u origin main
# 生成静态文件
# yarn run docs:build
# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f git@121.89.218.11:/home/www/website/ts.git master
git push -f website main
yarn run docs:dev

cd -