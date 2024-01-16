export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'string',
    },
    {
      name: 'technologies',
      title: 'Project Technologies',
      type: 'string',
    },
    {
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
    },
  ],
}
