# yarn run docs:build
git pull
git status
git add .
git commit . -m "update"
git push -u origin main

git push -u gitee main

# yarn run docs:build
# cd docs/.vuepress/dist

# git init
# git add -A
# git commit -m 'deploy'
# git push -f git@121.89.218.11:/home/www/website/ts.git master
# cd -