# Gustau's restaurant app
A simple web application built with SvelteKit framework and Directus headless CMS.

## Demos

[SvelteKit demo on Render](https://gustaus-sveltekit.onrender.com/)

[Directus demo on Render](https://gustaus-rest.onrender.com/)

Both SvelteKit and Directus parts are deployed on Render free plan, so it might take a long time to load app for the first time, as free instance types is spinning down with inactivity.

## pnmp + node issue
Note that there is an [issue](https://github.com/sveltejs/kit/issues/10649) in older versions of pnpm with node v20. This project uses node v19.8.1. Another solution is to force Render to use [newer version of pnpm](https://community.render.com/t/how-to-specify-pnpm-version/8743/5)

