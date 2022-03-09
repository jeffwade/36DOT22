module.exports = {
  siteMetadata: {
    siteUrl: `https://jeffdo.es/36dot22`,
  },
  pathPrefix: "/36dot22",
  plugins: [
    {
      resolve: "@plasmicapp/loader-gatsby",
      options: {
        projects: [
          {
            id: "byT51ah2LGWp7TY4NhRWN5", 
            token:
              "0SU3BvNIg91GdE79QY1Z4hbcssU4me7rDwmjrJHT2ypmKClyIOYoMLOYlJyNro9HPLhwWgzb5fJFCxgpUUA", 
          },
        ],
        // Fetches the latest revisions, whether or not they were unpublished!
        // Disable for production to ensure you render only published changes.
        preview: true,
      },
    },
  ],
};
