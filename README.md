# nuxt-pkg-template

[Nuxt](https://github.com/nuxt/nuxt.js) and [Express](https://github.com/expressjs/express) project template with [pkg](https://github.com/vercel/pkg) config.
Express in builded application can use fs relative to executable file. Nuxt **can't** build from executable, so it must run with `NODE_ENV=production` environment variable.

**Please note**, that you need to specify your own build target (or targets), by default it`s Node 12 Windows x64 executable only.

## Commands overview

```$ dev```

Runs Nuxt in standalone dev mode with hot-reload.

```$ build```

Builds Nuxt files.

```$ nuxt-start```

Starts Nuxt as standalone app without hot reload.

```$ start```

Runs `app.js` with Express server and Nuxt.

```$ server-dev```

Runs `app.js` with nodemon.

```$ pkg-build```

Builds executable file with `pkg`. Output folder is `./dist`.

## Configuration

To config pkg build edit `"pkg"` variable in `package.json`.
It looks like this:

```json
"pkg": {
  "targets": [ "node12-win-x64" ],
  "outputPath": "dist"
}
```

You can configure output path to your own. Also, you need to change build `target`. By default, it's Node 12 Windows x64 executable only. For additional information about `target` possible values visit GitHub [pkg repo](https://github.com/vercel/pkg).
