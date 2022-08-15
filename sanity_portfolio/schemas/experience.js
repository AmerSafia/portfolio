export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      title: "language",
      name: "language",
      type: "string",
    },
    {
      title: "experience",
      name: "experience",
      type: "string",
      options: {
        list: [
          { title: "experienced", value: "experienced" },
          { title: "intermediate", value: "intermediate" },
          { title: "Basic", value: "Basic" },
        ],
      },
    },
    {
        title: "type",
        name: "type",
        type: "string",
        options: {
          list: [
            { title: "frontend", value: "frontend" },
            { title: "backend", value: "backend" },
          ],
        },
      },
  ],
};
