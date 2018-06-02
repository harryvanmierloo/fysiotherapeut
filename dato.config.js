// dato.config.js

module.exports = (dato, root, i18n) => {

  // inside a "src/articles" directory...
  root.createPost(
    "src/index.md", "yaml", {
      frontmatter: { 
        layout: "layout.html",
        page_title: dato.homePage.pageTitle,
        avatar: dato.homePage.avatar.url({
          w: 320
        }),
        section_title: dato.homePage.sectionTitle,
        linkedin_link: dato.homePage.linkedinLink,
      },
      content: dato.homePage.description
    }
  );
};
