#!/bin/sh

vuepress build
git stash
git checkout master
mv .vuepress/dist/* .
git add .
git commit -m 'Update pages'
git push origin master
git checkout develop
