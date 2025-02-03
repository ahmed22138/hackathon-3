import { type SchemaTypeDefinition } from 'sanity';
import Food from './Food';
import Chef from './Chef';


import blog from './blog';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Food, Chef,blog ],
}
