#!/bin/sh
echo "---------------------------------------------"
echo " You can stop using CTRL + C"
echo " Wait the build to stop "
echo " Wait for each '... done' message "
echo "---------------------------------------------"
sleep 4

cd my-games-backend/
mvn clean package
cd ..
docker-compose up --build

