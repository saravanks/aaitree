module.exports = {
  siteMetadata: {
    title: `Tree Project`,
    description: `Tree Project`,
    author: `Mouaad Boukiaou`,
    siteUrl: `https://www.example.com/az1122401`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tree Project`,
        short_name: `Tree Project`,
        start_url: `/az1122401`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      }
    }
  ]
};
