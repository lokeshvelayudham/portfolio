# Slick Portfolio With Svelte.
# Lokesh Poluru Velayudham's Portfolio

Welcome to my personal portfolio website built with Svelte and SvelteKit.

## About

This portfolio showcases my projects, skills, and experience as a software developer. It's designed to be a clean, responsive, and interactive representation of my professional profile.

## Features

- Responsive design
- Project showcase
- Skills and technologies section
- About me page
- Contact information

## Technologies Used

- Svelte
- SvelteKit
- TypeScript
- UnoCSS
- Markdown for content
- GitHub Actions for deployment

## Local Development

To run this project locally:

1. Clone the repository
2. Install dependencies:
   ```
   yarn install --immutable --immutable-cache --check-cache
   ```
3. Start the development server:
   ```
   yarn dev
   ```

## Building for Production

To create a production build:

<!-- 
Vercel-like style portfolio template for developers.

[For a reference, check out my personal protfolio, slightly changed, but uses this template.](https://riadhadrani.github.io/RiadhAdrani)

## Create

You can either clone or fork this repository :

### `fork`

You can fork the project, maintaining a link to the original repo using the `fork` button.

![alt text](./screenshots/image.png)

### `clone`

- using `git` :

```bash
# ssh
git clone git@github.com:RiadhAdrani/slick-portfolio-svelte.git protfolio

# https
git clone https://github.com/RiadhAdrani/slick-portfolio-svelte.git protfolio
```

- using `degit` npm executable :

```bash
npx degit RiadhAdrani/slick-portfolio-svelte portfolio
```

if you don't have `degit`, it will prompt you to accept, enter `y`.

> You can add the main repo as another remote repo to maintain updates in the future.
>
> ```bash
> # ssh
> git remote add main git@github.com:RiadhAdrani/slick-portfolio-svelte.git
> ```

## Adapt to your needs

If you want to use the template as it is, you can :

- update files in `src/lib/data` with your data.
- update `src/lib/index.scss` for custom styling.
- update `static/favicon.ico` to customize the tab's icon.

Feel free to explore and hack the template to your needs if you feel like it.

## Deploy to GitHub pages

Before deploying to `GitHub Pages`:

- make sure to change the `base` parameter in `svelte.config.js`.
- make sure to update the target branch of the `deploy.yml` file, it is set to build from `master` branch by default.
- Allow `GitHub Pages` in your repo settings with correct permissions:
  - Permissions:
    - go to your repo `Settings` > `Actions` > `General`
    - in `Actions permissions` : check `Allow all actions and reusable workflows`
  - Pages:
    - go to your repo's `Settings` > `Pages`
    - in Source section, select `Deploy from a branch`.
    - in Branch section, select `gh-pages` and `/ (root)` and click on save
- push another commit (or an empty one).

if you did all the above `CORRECTLY`, and no workflow was launched, try to push another commit (maybe an empty one), otherwise you can create an issue and link your repo.

## Known issues:

- Svelte no longer support `node 14`, use a newer version instead. -->
