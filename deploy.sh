cd dist
rm -rf * .git
git init
heroku git:remote -a ecostage-test
git pull
cd ..
gulp build -p
cd dist
mv index.html index.php
git add -A
git commit -m "Build date $(date '+%Y-%m-%d %H:%M:%S')"
git push heroku master