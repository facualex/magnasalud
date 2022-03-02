module.exports = {
  siteMetadata: {
    site: `magnasalud`,
    title: `Clinica Dental Magna Salud`,
    titleTemplate: `%s - Magna Salud`,
    description: `Sitio web de la clinica dental Magna Salud`,
    siteUrl: `https://www.magnasalud.cl`,
    language: `spa`,
    color: `#003580`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
