# vkdevmy-frontend

> vkdevmy official website

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## How to deploy
1. Run `yarn run generate` to generate static html file (Refer to this guide for dynamic routing file generation https://nuxtjs.org/api/configuration-generate)

2. Login to Kong's AWS account
3. Go to S3 management console (https://console.aws.amazon.com/s3/buckets/) and search for `vkdevmy.com` bucket
4. Upload the generated `.html` files to the bucket. It will be in the `dist` folder of the project directory
