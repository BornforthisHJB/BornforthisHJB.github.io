# yarn run docs:build
git pull
git status
git add .
git commit . -m "update"
git push -u origin main
git push -u githubcopy main
yarn run docs:build
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f root@121.89.218.11:/home/www/website/ts.git master
cd -