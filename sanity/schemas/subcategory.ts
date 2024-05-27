import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'subcategory',
  title: 'Sub Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'parentCategory',
      title: 'Parent Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
});
