import { type SchemaTypeDefinition } from 'sanity';
import Food from './Food';
import Chef from './Chef';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Food, Chef],
}
