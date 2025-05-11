# Ready-to-Work Monorepo

Un boilerplate moderne pour monorepo.

## 🚀 Technologies

- **Package Manager**: [bun](https://bun.sh/) (version 1.2.13)
- **Build System**: [Turborepo](https://turbo.build/)
- **Framework Web**: [Vite](https://vitejs.dev/) avec React
- **Framework Mobile**: [Expo](https://expo.dev/)
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)
- **Linting**: [ESLint](https://eslint.org/)
- **Formatting**: [Prettier](https://prettier.io/) avec [@trivago/prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports)

## 📦 Structure du Projet

```
.
├── apps/
│   ├── native/          # Application Expo/React Native
│   └── web/             # Application Vite + React
├── packages/
│   ├── core/            # Logique métier partagée
│   ├── eslint-config/   # Configuration ESLint partagée
│   ├── localization/    # Internationalisation (en)
│   ├── typescript-config/ # Configuration TypeScript partagée
│   └── ui/              # Composants UI partagés
└── package.json
```

## 🛠 Installation

1. **Prérequis**
   - Node.js (version >=18)
   - Bun (version 1.2.13)

2. **Installation des dépendances**
   ```bash
   bun install
   ```

## 🚀 Démarrage

### 📝 Développement Web
```bash
bun dev:web
```

### 📝 Développement Mobile
```bash
bun dev:native
```

## 🏗 Architecture

### Packages Partagés

- **@repo/core**: Logique métier partagée
  - Types communs
  - Helpers utilitaires

- **@repo/localization**: Internationalisation
  - Support EN
  - Types pour l'i18n

- **@repo/ui**: Composants UI partagés
  - Composants réutilisables
  - Compatible web et mobile

- **@repo/eslint-config**: Configuration ESLint
  - Règles pour React Native/Expo
  - Règles pour Vite
  - Règles TypeScript
  - Intégration Prettier

- **@repo/typescript-config**: Configuration TypeScript
  - Configurations optimisées pour React
  - Configurations pour Node.js
