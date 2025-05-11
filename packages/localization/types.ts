import { resources } from './index';

export type Locales = keyof typeof resources;

export type Namespaces = keyof (typeof resources)['en'];
