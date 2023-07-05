# Test Automation Example

We will be using Playwright for automating the tests. For additional information, please refer to the [documentation](https://playwright.dev/docs/intro).

## Quick Start

Ensure that you have the necessary dependencies installed in order to run the tests correctly.

### Core Dependencies:

- Node.js
  - Download and install [Node](https://nodejs.org/en).
- Yarn
  - Confirm that Node and NPM are installed correctly by running `node -v` and `npm -v`
  - Install Yarn by running `npm i -g yarn`

### Installing Test Dependencies

Command:

```bash
yarn
```

### Running Test Examples

Command:

```bash
yarn test
```

The test should start in UI mode, allowing you to follow along.

You can decrease the speed of the test by adjusting the value of the `slowMo` property in the `playwright.config.js` file.

### Recommendations

I recommend using [Visual Studio Code](https://code.visualstudio.com/) in conjunction with the [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName%253Dms-playwright.playwright) extension.

The extension enables you to record all interactions with the website or application you are testing, thereby generating a test scenario automatically.

The results are not perfect, but they help to become familiar with the tool more rapidly.

<img title="Record new" alt="Playwright Test for VSCode" width=300 src="assets/plugin.png">
