export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '614ea2acf581d8783ce6872f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-798wqmx9',
                  apiId: 'e932d68b-f93d-4e14-a083-5330e1194b5e'
                },
                {
                  buildHookId: '614ea2aca9a29a859be888da',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-9ntrnync',
                  apiId: '765fcad7-bda7-4417-a942-abe4b1295e4a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sinrider/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-9ntrnync.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
