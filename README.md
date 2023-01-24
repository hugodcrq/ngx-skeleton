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

<p align="center">
<img src="https://raw.githubusercontent.com/hugodcrq/ngx-skeleton/develop/doc/assets/banner.gif?raw=true" alt="skeleton"/>
</p>

## Demo

Live demo <a href="https://hugodcrq.github.io/ngx-skeleton" target="_blank">here</a>.

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
import { Component, inject, OnInit } from "@angular/core";
import { NgxSkeletonService } from "@hugodcrq/ngx-skeleton";

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

In `.html` use `hdSkeleton` directive

```html
<!-- with <div></div> wrapper for element without children -->
<div hdSkeleton>
  <h1>Title exemple</h1>
</div>

<!-- directly on parent if element has children or add <div></div> wrapper -->
<div class="card" hdSkeleton>
  <div class="card-header">Github logo</div>
  <div class="card-body">
    <img src="https://www.vectorlogo.zone/logos/github/github-ar21.svg" alt="github" />
  </div>
</div>
```

## Development

- [Git](#git)
  - [Commit message](#commit-message)
    - [Use npm script](#use-npm-script)
    - [Use git](#use-git)
    - [Format](#format)
    - [Type](#type)

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
