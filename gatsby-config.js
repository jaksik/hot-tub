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
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-7254180817286668`
      },
    },
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-136621668-4",
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `epic-national-parks`,
        short_name: `epic`,
        start_url: `/`,
        background_color: `#3F2314`,
        theme_color: `#3F2314`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
