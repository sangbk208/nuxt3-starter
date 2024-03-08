import packageJson from './package.json';

/* eslint no-console: "off" */
function logEnv() {
  const dataLog = {
    app_name: packageJson.name,
    app_version: packageJson.version,
    NUXT_PUBLIC_API_HOST: process.env.NUXT_PUBLIC_API_HOST
  };

  Object.keys(dataLog).forEach((key) => {
    console.log('\x1B[32m', `${key}:`, dataLog[key], '\x1B[0m');
  });
}

const nuxtConfigHelpers = {
  logEnv,
  appName: packageJson.name,
  appVersion: packageJson.version
};

export default nuxtConfigHelpers;
