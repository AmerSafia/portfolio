export default {
    name: "projects",
    title: "projects",
    type: "document",
    fields: [
      {
        title: "title",
        name: "title",
        type: "string",
      },
      {
        title: "urlGitHub",
        name: "urlGitHub",
        type: "string",
      },
      {
        title: "urlDemo",
        name: "urlDemo",
        type: "string",
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true,
        },
    },
    ],
  };
  