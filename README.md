# <img src="https://www.vectorlogo.zone/logos/angular/angular-icon.svg" alt="semantic-release logo" width="24px"/> ngx-skeleton

[![npm](https://img.shields.io/npm/v/@hugodcrq/ngx-skeleton?style=flat&logo=npm)](https://www.npmjs.com/package/@hugodcrq/ngx-skeleton)
[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat)](https://github.com/hugodcrq/ngx-skeleton/blob/master/LICENSE)
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/hugodcrq/ngx-skeleton/compare)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![hugodcrq](https://img.shields.io/badge/@-hugodcrq-383636?style=flat-square&labelColor=8f68d4)](https://github.com/hugodcrq/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

<br>

⌛ Easily create skeleton loadings without SVG.

<img src="https://github.com/hugodcrq/ngx-skeleton/blob/develop/doc/assets/banner.png?raw=true" alt="skeleton"/>

## Demo

Live demo [here](https://hugodcrq.github.io/ngx-skeleton/).

## Installation

Install ngx-skeleton via NPM, using the command below.

```bash
npm install @hugodcrq/ngx-skeleton
```

Import `NgxSkeletonModule` in your `app.module`.

```typescript
import { NgxSkeletonModule } from "@hugodcrq/ngx-skeleton";
@NgModule({
  imports: [NgxSkeletonModule],
})
class AppModule {}
```

Import library styles to your global `styles.scss` file

```scss
@use "node_modules/@hugodcrq/ngx-skeleton/src/styles/styles.scss";
```

or if you use CSS add this to your styles inside your `angular.json`:

```json
{
  // projects.[your_project].architect.build.options
  "styles": ["node_modules/@hugodcrq/ngx-skeleton/src/styles/styles.css"]
}
```

## Basic Usage

In `.ts` component

```typescript
import { NgxSkeletonService } from "@hugodcrq/ngx-skeleton";
import { OnInit } from "@angular/core";

@Component({})
export class AppComponent implements OnInit {
  skeleton = inject(NgxSkeletonService); // You can also inject via the constructor

  constructor() {}

  ngOnInit() {
    this.skeleton.show();

    // simulate long task (3s) and hide
    setTimeout(() => {
      this.skeleton.hide();
    }, 3000);
  }
}
```

In `.html` component add `hsSkeleton` directive

```html
<!-- with single children -->
<div hdSkeleton>
  <h1>Title exemple</h1>
</div>

<!-- with multiples children -->
<a class="card" target="_blank" rel="noopener" href="https://angular.io/tutorial" hdSkeleton>
  <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
  </svg>
  <span>Learn Angular</span>
  <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
</a>
```

## Development

- [Introduction](#introduction)
- [Git](#git)
  - [Commit message](#commit-message)
    - [Use npm script](#use-npm-script)
    - [Use git](#use-git)
    - [Format](#format)
    - [Type](#type)

### Introduction

This starter-kit provide complete implementation of an electron application with angular front framework
and complete pipe to deployment.

> To respect the standard of [Conventional Commits](https://www.conventionalcommits.org), things have been put in place, for more information see the [git section below](#git).

Currently runs with:

- [angular](https://github.com/angular/angular) - Building mobile and desktop web applications
- [semantic-release](https://github.com/semantic-release/semantic-release) - Fully automated version management and package publishing
- [commitlint](https://github.com/conventional-changelog/commitlint) - Checks if your commit messages meet the conventional commit format
- [commitizen](https://github.com/commitizen/cz-cli) - Simple commit conventions from terminal prompt
- [cz-git](https://github.com/Zhengqbbb/cz-git) - Adapter for commitizen to custom easy configuration

### Git

#### Commit message

> By default `git-commit` is disable with a `pre-commit` hook to force usage of `npm run commit`

#### Use npm script

This command allow to create formatted commit message from prompt with
[commitizen](https://github.com/commitizen/cz-cli) &
[cz-git](https://github.com/Zhengqbbb/cz-git).

```
npm run commit
```

#### Use git

You can disable `pre-commit` hook with `--no-verify` flag. But respect these rules below ⬇️

```
git commit --no-verify
```

- #### Format

  - A commit message consists of a **header**, **body** and **footer**.
  - The header has a **type** and a **subject**:

```text
<type>[(<scope>)]: <emoji> <subject>
[BLANK LINE]
[body]
[BLANK LINE]
[breaking changes]
[BLANK LINE]
[footer]
```

- #### Type

  - ✨ `feat` — A new feature
  - 🐛 `fix` — A bug fix
  - 📝 `docs` — Documentation only changes
  - 💄 `style` — Markup, white-space, formatting, missing semi-colons... not affect the meaning of the code
  - ♻ `refactor` — A code change that neither fixes a bug or adds a feature
  - ⚡ `perf` — A code change that improves performance
  - ✅ `test` — Adding missing tests
  - 📦️ `build` — Changes that affect the build system or external dependencies
  - 🎡 `ci` — CI related changes
  - 🔨 `chore` — Other changes that don't modify src or test files
  - ⏪️ `revert` — Reverts a previous commit

---

## Angular default README

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
