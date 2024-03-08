# Nuxt 3 Starter

## Features

- Nuxt3
- Tailwind CSS
- State management with Pinia
- Custom authentication store via use-auth
- Internationalization via @nuxtjs/i18n
- Api management using Repository Pattern

## Directory Structure

```bash
├── apps # Nuxt Layer
│ └── index # Home Page
├── components # Global Components
├── layouts # Layouts
├── plugins # Plugins
├── stores # Stores
├── services # Api management
├── shared # Constants
├── utils # Utils
```

# How to use

## Setup

```bash
Please use Yarn package managers.
```

Make sure to install the dependencies:

```bash
Node.js - v18.0.0 or newer
```

```bash
# yarn
yarn install

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# yarn
yarn develop

```

## Production with only one environment .env

Build the application for production:

```bash
# yarn
yarn build

```

Locally preview production build:

```bash
# yarn
yarn preview

```

Launches a Node server after build.

```bash
# yarn
yarn start

```

## Production with multiple environments (develop - staging - production)

Environment files:

```bash
# env file
.env file for the develop environment
.env.staging file for the staging environment
.env.production file for the staging environment

```

Build the application according to the corresponding environment:

```bash
# yarn
yarn build
yarn build:staging
yarn build:production

```

Locally preview build according to the corresponding environment:

```bash
# yarn
yarn preview
yarn preview:staging
yarn preview:production


```

Launches a Node server after build.

```bash
# yarn
yarn start

```
