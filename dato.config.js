// dato.config.js

module.exports = (dato, root, i18n) => {

  // inside a "src/instruments" directory...
  root.directory("src/instruments", (instrumentsDir) => {

    // ...iterate over the "Instrument" records...
    dato.instruments.forEach((instrument) => {

      // ...and create a markdown file for each instrument!
      instrumentsDir.createPost(
        `${instrument.slug}.md`, "yaml", {
          frontmatter: { 
            title: instrument.title,
          },
          content: instrument.description
        }
      );
    });
  });
};
