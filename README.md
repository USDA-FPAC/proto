# proto

Open Source design resource that allows for quick prototypes utilizing the Farm Production and Conservation Design System.

This digital resouce is made available across the Department and to other Federal agencies. It supports the requirements of OMB Memorandum M-16-21, “Federal Source Code Policy: Achieving Efficiency, Transparency, and Innovation through Reusable and Open Source Software". This policy requires agencies to develop plans to release at least 20 percent of new custom-developed source code as Open Source Software (OSS) when commissioning new custom software.


```sh
npm install
```

Now that all of your dependencies are installed, you can build the project and serve up the project locally by running the following command:

```sh
npm run dev
```

This project is built to be hosted locally and on github, so it runs out of a local folder as the base configuration, eg. http://localhost:3000/proto/ For this reason, you will need to change "proto" to your project name in multiple locations.

1. In the root of this project, locate the vite.config.js file, and replace "proto" with your project name.

2. Because this is a SPA, the base location within the Router also needs to be changed. It is located `/src/_router/routes.js` and you should replace the word "proto" in this line of code `history: createWebHistory('/proto/')` with your project name.

