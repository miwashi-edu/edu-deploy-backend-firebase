# edu-deploy-backend-firebase

https://www.youtube.com/watch?v=LW26kpjGl2c&t=511s

npm install -g firebase-tools

skapa firebase project

firebase login
firebase init hosting

#? What do you want to use as your public directory? public
#? Configure as a single-page app (rewrite all urls to /index.html)? Yes
#? Set up automatic builds and deploys with GitHub? No

# functions
-rw-r--r--@  1 miwa  staff  1166 Aug 17 10:22 .gitignore
-rw-r--r--@  1 miwa  staff    59 Aug 17 10:22 .firebaserc
-rw-r--r--@  1 miwa  staff   236 Aug 17 10:22 firebase.json
drwxr-xr-x@  3 miwa  staff    96 Aug 17 10:22 public

firebase functions:config:set someservice.apikey="yourapikey"



> Firebase Cloud Functions: Use Firebase Cloud Functions to handle dynamic server-side logic and API endpoints. This is useful for things like processing data, interacting with databases, and performing backend tasks.

> Firebase Hosting: Use Firebase Hosting to serve your static content, like HTML, CSS, and client-side JavaScript. This also enables you to define routes that redirect to your Cloud Functions for server-side processing.

> By combining both Cloud Functions and Hosting, you get the best of both worlds: the ability to have a dynamic backend with serverless architecture and the ability to serve static content efficiently.
