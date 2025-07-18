# Introduction

This is the front-end application used to serve the personal website: www.qladstone.com

# Dev setup

Download and install npm on dev machine:
https://nodejs.org/en/download

Install vite:
```
npm install -g vite
```

Verify that vite is installed globally:
```
npm list -g
```

Clone project:
```
git clone git@github.com:Qladstone/my-website.git && cd my-website
```

Install project module dependencies:
```
npm install
```

# Running

To run locally:

```
npm run dev
```

# Build and deploy

To build:
```
npm run build
```

This generates a folder named `dist` under the project root. Copy this folder to your deployment environment.

On your deployment environment, download and install: `npm` and `serve`:
```
apt install npm
npm install -g serve
```

Verify that serve is installed globally:
```
npm list -g
```

To deploy:
```
serve -s dist
```
