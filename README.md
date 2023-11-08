# edu-deploy-backend-firebase

## Instructions

### Skapa egen app
```bash
cd ~
cd ws
cd test-firebase-functions
cd functions
npm install express
npm install dotenv
cd ..
```


### ./functions/index.js

```bash
cat > ./functions/index.js << EOF
const app = require('./server.js');

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

exports.api = onRequest(app);
EOF
```

### ./functions/firebase.json

```bash
cat > ./functions/firebase.json << EOF
{
  "functions": {
    "predeploy": []
  },
  "hosting": {
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "function": "api"
      }
    ]
  }
}
EOF
```

### ./functions/server.js
```bash
cat > ./functions/server.js << EOF
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
   res.json({status: "ok"});
});

module.exports = app;
EOF
```

### ./functions/service.js

```bash
cat > ./functions/service.js << EOF
require('dotenv').config();
const app = require('./server.js');
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`http server listening on port ${PORT}`)
});
EOF
```

