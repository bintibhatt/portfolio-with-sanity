export default {
  name: 'project',
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
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
    },
  ],
}
