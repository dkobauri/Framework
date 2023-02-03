# Open folder and run following command in the terminal:

- npm init -y

- npm init wdio

(Where should your tests be lunched? -> local)

(Where is your automation backend located? -> On my local machine)

(Which wramework do you want to use? -> Mocha)

(Do you want to use compiler? -> No!)

(Do you want WebdriverIO to autogenerate some test files? -> No)

(Which reporter do want to use? -> spec)

(Do you want to add a plugin to your test setup? -> wait-for)

(Do you want to add a service to your test setup? -> chromedriver)

(What is the base url? -> http://localhost)

(Do you want to run "npm install" -> Y)

# Configure "wdio.conf.js" file: 

- './test/specs/**/*.js' (specs)

- maxInstances:1 (capabilities)

- logLevel: 'error'

# Move 'test/specs' folder from repository to your folder.

# Run following command in the terminal to execute the code:

- npm run wdio
