
Install Dojo's cli tool:

` npm install -g @dojo/cli `

Install the @dojo/cli-create-app command which creates a template project to get started:

` npm install -g @dojo/cli-create-app `

Create an app:

` dojo create app --name first-dojo-app `

After a while, 27.000 files are created with a total size of 210MB !!!

` cd first-dojo-app `

Run the app in dev mode:

` dojo build --mode dev --watch --serve --port 9999 `

  -> main.js = 632 KB, runtime.js = 14 KB

Or in production mode:

` dojo build --mode dist --watch --serve --port 9999 `

  -> main.js = 46 KB, runtime.js = 2 KB

To test the app, first install intern:

` npm i @dojo/cli-test-intern `

Run the unit tests:

` dojo test -u `