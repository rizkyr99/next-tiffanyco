import { type SchemaTypeDefinition } from 'sanity';
import product from './schemas/product';
import category from './schemas/category';
import subcategory from './schemas/subcategory';
import collection from './schemas/collection';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, subcategory, collection],
};
