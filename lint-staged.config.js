const escape = require('shell-quote').quote;
const isWin = process.platform === 'win32';

module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': filenames => {
    const escapedFileNames = filenames
      .map(filename => `"${isWin ? filename : escape([filename])}"`)
      .join(' ');
    return [
      `prettier --write ${escapedFileNames}`,
      `eslint --fix ${filenames.map(f => `"${f}"`).join(' ')}`,
      `git add ${escapedFileNames}`
    ];
  },
  'src/**/*.{json,css,less}': filenames => {
    const escapedFileNames = filenames
      .map(filename => `"${isWin ? filename : escape([filename])}"`)
      .join(' ');
    return [
      `prettier --write ${escapedFileNames}`,
      `git add ${escapedFileNames}`
    ];
  }
};
