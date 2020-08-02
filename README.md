# Ntm Angular

![Deploy](https://github.com/ntm-al/ntm-angular/workflows/Deploy/badge.svg)
![Test](https://github.com/ntm-al/ntm-angular/workflows/Test/badge.svg)
[![codecov](https://codecov.io/gh/ntm-al/ntm-angular/branch/master/graph/badge.svg)](https://codecov.io/gh/ntm-al/ntm-angular)
![Lint](https://github.com/ntm-al/ntm-angular/workflows/Lint/badge.svg)
![npm](https://img.shields.io/npm/dw/@ntm-al/angular)
![npm](https://img.shields.io/npm/v/@ntm-al/angular)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/ntm-al/ntm-angular/compare)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Ntm angular is a package to helps angular developers code faster.

### Installation

Ntm Angular requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies

```bash
$ npm i @ntm-al/angular
```

### Setup

**step 1:** add css

- copy [ntmAngular scss](/projects/core/styles.scss) to your project.

```scss
@import '~@ntm-al/angular/styles';
```

**step 2:** add NtmCoreModule to app NgModule

```typescript
import { CommonModule } from '@angular/common';
import { NtmCoreModule } from '@ntm-al/angular';

@NgModule({
  imports: [CommonModule, NtmCoreModule],
  bootstrap: [App],
  declarations: [App],
})
class MainModule {}
```

# Features!

We have developed Validators, Directives, Pipes...

#### Directives

- Cpf (mask)
- Cnpj (mask)
- Phone (mask)
- Instagram (mask)
- Input Only numbers
- Shimmer
- Twitter (mask)
- Zipcode (mask)

#### Validators

- Cnpj
- Cpf
- Date GreaterThan
- Email
- Instagram
- Match Passwords
- Phone
- Required
- Twitter

### Pipes (in progress)

- Difference Time
- First and last name
- Number to month

## Publishing

```bash
$ ng build core --prod
$ cd dist/core
$ npm publish
```

## TODO:

- [ ] Create test to validators
- [ ] Create test to pipes
- [ ] Create a example project to show how to use
- [ ] Create a static page with githubPages
- [ ] Create directive to currency
