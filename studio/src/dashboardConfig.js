export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fbb6271bd6bc94e9cb152a8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1wm6h7xe',
                  apiId: 'd6e71f59-e769-4bb6-a83f-9896241ed80a'
                },
                {
                  buildHookId: '5fbb6271d05eed46273f003c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-vyv899s5',
                  apiId: '5019c42b-17a0-4403-b1c4-888206ef2473'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adalarsen/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-vyv899s5.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
