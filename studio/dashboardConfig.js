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
                  buildHookId: '5f9c6ccce9ae6236dd0d1982',
                  title: 'Sanity Studio',
                  name: 'sanity-rfr-studio',
                  apiId: '395ece14-8451-4cf3-a6bc-9df53ee63317'
                },
                {
                  buildHookId: '5f9c6d9b29cd8c3610139ff1',
                  title: 'Website',
                  name: 'sanity-rfr-frontend',
                  apiId: '92e566f7-4f64-42a9-83ec-0cfe5113b7f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Quanda/rfr/',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://repsforresponders.org/',
            category: 'apps'
          }
        ]
      }
    },
    // {
    //   name: 'gatsby',
    //   options: {
    //     sites: [
    //       {
    //         siteUrl: 'https://preview-rfrfrontend.gtsb.io'
    //       }
    //     ]
    //   }
    // },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      layout: { width: 'medium' }
    }
  ]
};
