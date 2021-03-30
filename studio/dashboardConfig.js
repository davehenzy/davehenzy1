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
                  buildHookId: '606276613a8a5c008b68aeaa',
                  title: 'Sanity Studio',
                  name: 'davehenzy-1-studio',
                  apiId: '114f7c56-ebb7-43ba-b938-98c01167da72'
                },
                {
                  buildHookId: '60627662ea8e4400bf42029d',
                  title: 'Blog Website',
                  name: 'davehenzy-1',
                  apiId: '1b54f1e3-44aa-4fbf-92ae-0d1afe22a48c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/davehenzy/davehenzy1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://davehenzy-1.netlify.app', category: 'apps'}
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
