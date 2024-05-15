# compare-date-fns

## Description

This repo contains some JavaScript tests that compare the behavior between v2 and v3 of the [date-fns](https://github.com/date-fns/date-fns) package.

## Installation and Usage

To run this project on your local run the following:

```shell
npm i
npm start
npm run start2
npm run simple
```

## Special Notes

- This project uses two different versions of the `date-fns` package:
  - [v2.30.0](https://www.npmjs.com/package/date-fns/v/2.30.0)
  - [v3.6.0](https://www.npmjs.com/package/date-fns/v/3.6.0)

- This is achieved using npm package aliasing - listed under the section titled `npm install <alias>@npm:<name>` on the documentation page for [`npm install`](https://docs.npmjs.com/cli/v10/commands/npm-install).

- To install both versions, we use a syntax like the following:

    ```shell
    npm i -E <ALIAS_NAME>@npm:<REAL_PACKAGE>@<PACKAGE_VERSION>
    ```

  - `i` is shorthand / alias for `install`
  - `-E` is short for [`--save-exact`](https://docs.npmjs.com/cli/v10/commands/npm-install#save-exact)
  - `<ALIAS_NAME>` the name of the package that will be used in the import statements within the code
  - `<REAL_PACKAGE>` is the name of the package available on [npmjs.com](https://www.npmjs.com/)
  - `<PACKAGE_VERSION>` is the specific version of the package being installed in semver format

- Example commands used in this repository:

    ```shell
    npm i -E  @npm:date-fns@2.30.0
    npm i -E date-fns3@npm:date-fns@3.6.0
    ```

- After this, within the files, the `date-fns` functions within the individual versions are referred to this way:

    ```javascript
    import { parse as parse2 } from 'date-fns2';
    import { parse as parse3 } from 'date-fns3';

    const outputFromVersion2 = parse2(...);
    const outputFromVersion3 = parse3(...);
    ```

## Contributing

- If you find an issue, consider filing it under the [Issues](https://github.com/akaustav/compare-date-fns/issues) tab.
- If you are willing to fix the issue, please do NOT hesitate to:
  - Fork this repository,
  - Make your changes in a branch on the fork,
  - Open a Pull Request from the fix branch in the forked repository against the `main` branch of this repository,
  - Explain which issue the Pull Request fixes in the PR notes, and
  - Don't forget to tag `@akaustav` and `@AshokMaddineni` in the PR notes too.
