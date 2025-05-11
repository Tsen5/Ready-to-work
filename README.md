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
- **Git Hooks**: [Husky](https://typicode.github.io/husky/)
- **Commit Linting**: [commitlint](https://commitlint.js.org/)
- **Staged Files**: [lint-staged](https://github.com/okonet/lint-staged)

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

3. **Configuration des Git Hooks**
   ```bash
   bun prepare
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

## 📝 Scripts Disponibles

- `bun build` - Build tous les packages et applications
- `bun dev` - Lance le développement pour toutes les applications
- `bun lint` - Lance le linting sur tous les packages
- `bun format` - Formate le code avec Prettier

## 🔍 Qualité de Code

### Git Hooks avec Husky

- Vérification des commits avant le push
- Formatage automatique du code
- Linting des fichiers modifiés

### Commit Linting

Le projet suit les conventions de commit [Conventional Commits](https://www.conventionalcommits.org/). Format attendu :

```
type(scope): description

[optional body]

[optional footer]
```

Types de commit supportés :

- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Formatage
- `refactor`: Refactoring
- `test`: Tests
- `chore`: Maintenance

### Lint Staged

- ESLint sur les fichiers `.js`, `.jsx`, `.ts`, `.tsx`
- Prettier sur tous les fichiers supportés

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
