module.exports = {
  siteMetadata: {
    title: `Blog.`,
    description: ``,
    siteUrl: `http://localhost:8000`,
    logo: `logo.png`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `Blog`,
        link: `/blog`,
        partiallyActive: true,
      },
      {
        name: `About`,
        link: `/about`,
      },
      {
        name: `Projects`,
        link: `/projects`,
      },
      {
        name: `Books`,
        link: `/books`,
      },
      {
        name: `Uses`,
        link: `/uses`,
      },
    ],
    socialLinks: [
      {
        name: `Gitlab`,
        url: `https://gitlab.com/oscarteg`,
        icon: `fab fa-gitlab`,
      },
      {
        name: `Instagram`,
        url: `https://instagram.com/oscartegiffel`,
        icon: `fab fa-instagram`,
      },
      {
        name: `Linkedin`,
        url: `https://www.linkedin.com/in/otegiffel/`,
        icon: `fab fa-linkedin`,
      },
      {
        name: `Twitter`,
        url: `https://twitter.com/oscartegiffel`,
        icon: `fab fa-twitter`,
      },
      {
        name: `Github`,
        url: `https://github.com/oscarteg`,
        icon: `fab fa-github`,
      },
    ],
  },
  plugins: [
    `@oscarteg/gatsby-theme-deepmind`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-61119473-9`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Oscar te Giffel - Homepage`,
        short_name: `oscartegiffel`,
        start_url: `/`,
        background_color: `#f8fafc`,
        theme_color: `#f2d024`,
        display: `standalone`,
        // icon: `content/assets/images/profile.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
};
