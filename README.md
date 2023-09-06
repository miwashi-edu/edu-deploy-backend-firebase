# edu-deploy-backend-firebase

## Before

```bash
npm install -g firebase-tools
firebase login
```


## Instructions

```bash
cd ~
cd ws
mkdir deploytest
cd deploytest
firebase init function
curl -L https://raw.githubusercontent.com/miwashi-edu/edu-deploy-backend-firebase/main/resources/index.js -o ./functions/index.js
curl -L https://raw.githubusercontent.com/miwashi-edu/edu-deploy-backend-firebase/main/resources/firebase.json -o ./functions/firebase.json
curl -L https://raw.githubusercontent.com/miwashi-edu/edu-deploy-backend-firebase/main/resources/server.js -o ./functions/server.js
curl -L https://raw.githubusercontent.com/miwashi-edu/edu-deploy-backend-firebase/main/resources/service.js -o ./functions/service.js
cd functions
npm install express dotenv
cd ..
firebase emulators:start
firebase deploy
```
