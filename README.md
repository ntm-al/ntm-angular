# NtmAngular

![Deploy](https://github.com/ntm-al/ntm-angular/workflows/Deploy/badge.svg)
![Lint and Test](https://github.com/ntm-al/ntm-angular/workflows/Lint%20and%20Test/badge.svg?event=status)
![npm](https://img.shields.io/npm/dw/@ntm-al/angular)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ntm-al/angular?style=flat-square)
![npm](https://img.shields.io/npm/v/@ntm-al/angular)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/ntm-al/ntm-angular/compare)
how to use
import
@import '~@ntm-al/angular/styles'; into styles.scss

## Validators

- Cpf
- Email
- Instagram
- Phone
- Required
- Twitter
- MatchPassword

## Directives

- Cpf (mask)
- Instagram
- Phone (mask)
- Twitter
- Cep (mask)

## Pipes (in progress)

- Difference Time
- First and last name
- number to month

## Publishing

ng build core --prod
cd dist/core
npm publish

## TODO:

- [ ] Create test to directives
- [ ] Create test to validators
- [ ] Create test to pipes
- [x] Adding ESLint
- [ ] Typescript integration to see documentation
- [x] Lint all files
- [x] Pipes
- [ ] Create a example project to show how to use
- [ ] Create a static page with githubPages
- [ ] Create directive to currency
