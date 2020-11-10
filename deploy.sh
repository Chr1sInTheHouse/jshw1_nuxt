#!/usr/bin/env sh
set -e
# 打包
npm run build
cd dist
git init 
git add -A
git commit -m 'deploy'
git push -f https://github.com/chou0728/eric-project.git master:gh-pages

cd -
