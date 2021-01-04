require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Kisky",
    siteUrl: `https://www.kisky.fi`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 85,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
          name: `Kirkkonummen Seudun Kiipeilijät Ry`,
          short_name: `Kisky`,
          start_url: `/`,
          icon: `src/images/icon.png`,
          background_color: `#fff`,
          theme_color: `#fff`,
          display: `standalone`,
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
