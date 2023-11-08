# edu-deploy-backend-firebase

## Before

```bash
npm install -g firebase-tools
# eller
curl -sL https://firebase.tools | bash

firebase login
```


## Instructions

### Skapa projekt
```bash
cd ~
cd ws
mkdir test-firebase-functions
cd test-firebase-functions
firebase init functions
```

### Svar på frågorna
```bash
? Please select an option: Use an existing project
? Select a default Firebase project for this directory: [Välj ett projekt du redan skapa med Blaze plan]
? What language would you like to use to write Cloud Functions? JavaScript
? Do you want to use ESLint to catch probable bugs and enforce style? No
✔  Wrote functions/package.json
✔  Wrote functions/index.js
✔  Wrote functions/.gitignore
? Do you want to install dependencies with npm now? No
```

### Testa lokalt

```bash
cd functions
npm install
cd ..
firebase emulators:start
# Kopiera den webbadess som innehåller functions: ex: http://127.0.0.1:4000/functions
# Från svaret, hitta adressen till din server.
```

### Första deploy

```bash
firebase deploy --only functions
```
