module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      {
        resolve: '@plasmicapp/loader-gatsby',
        options: {
          projects: [
            {
              id: 'byT51ah2LGWp7TY4NhRWN5', // ID of a project you are using
              token: '0SU3BvNIg91GdE79QY1Z4hbcssU4me7rDwmjrJHT2ypmKClyIOYoMLOYlJyNro9HPLhwWgzb5fJFCxgpUUA' // API token for that project
            }
          ],
          // Fetches the latest revisions, whether or not they were unpublished!
          // Disable for production to ensure you render only published changes.
          preview: true
        }
      }
    ]
}
