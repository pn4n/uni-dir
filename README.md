# Gustau's restaurant app
A simple web application built with SvelteKit framework and Directus headless CMS.

## Demos

There is a [SvelteKit demo](https://gustaus-sveltekit.onrender.com/) available on Render, along with a [Directus demo](https://gustaus-rest.onrender.com/). To access the admin panel, use the default credentials:
```
ADMIN_EMAIL: admin@example.com
ADMIN_PASSWORD: d1r3ctu5
```

These demos are deployed on a free plan, so there may be a delay in the response of the first request as free instance types spin down with inactivity.

## Node + pnpm issue
Note that there is an [issue](https://github.com/sveltejs/kit/issues/10649) in older versions of pnpm with Node v20. This project uses Node v19.8.1. When deploying to Render, you can  force it to use [newer version of pnpm](https://community.render.com/t/how-to-specify-pnpm-version/8743/5)