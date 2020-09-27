export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '5f7109881083211990bffacc',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-sp7zjvwy',
                  apiId: '0c1e644e-2e08-49bd-a0a8-16b967c828dd'
                },
                {
                  buildHookId: '5f710988a28201ec4db1e753',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-48j1x2y9',
                  apiId: '9d6c20e4-ca2d-4c45-b27c-2de5f448cc7e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hypebeast/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-48j1x2y9.netlify.app', category: 'apps'}
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
