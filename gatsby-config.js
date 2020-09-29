module.exports = {
  siteMetadata: {
    title: `Epic National Parks`,
    description: `Enjoy national parks? Explore and discover the most beautiful national parks in the nation form Epic National Parks.`,
    author: `@jaksik`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `blogImages`,
    //     path: `${__dirname}/src/pages/blog`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogStateImages`,
        path: `${__dirname}/src/pages/blog-states`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `aboutpages`,
        path: `${__dirname}/src/pages/info`,
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/src/pages/blog`,
    //     name: 'pages',
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/src/pages/blog-states`,
    //     name: 'statepages',
    //   },
    // },

    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              withWebp: true,
              tracedSVG: true,
              linkImagesToOriginal: false
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
