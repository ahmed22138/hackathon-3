import { type SchemaTypeDefinition } from 'sanity';
import Food from './Food';
import Chef from './Chef';

import blogs from './blogs';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Food, Chef, blogs],
}
