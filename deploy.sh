# yarn run docs:build
git pull
git status
git add .
git commit . -m "update"
git push -u origin main
git push -f git@121.89.218.11:/home/www/website/ts.git main
# git push -f website main
# yarn run docs:dev

