import { Example } from '../types';

export const createExample = ({
  id = 0,
  name = '',
}: Partial<Example> = {}): Example => ({
  id,
  name,
});
