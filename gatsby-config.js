module.exports = {
  siteMetadata: {
    title: 'potential-fiesta',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'potential-fiesta',
        short_name: 'pf',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/face.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
