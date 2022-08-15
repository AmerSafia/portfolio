export default {
   name: "user",
   title: "User",
   type: "document",
   fields: [
      {
         name: "name",
         title: "name",
         type: "string",
      },
      {
         name: "image",
         title: "Your Image",
         type: "image",
         options: {
            hotspot: true,
         },
      },
      {
         name: "developer",
         title: "Developer",
         type: "string",
         options: {
            list: [
               { title: "Fullstack Developer", value: "Fullstack developer" },
               { title: "Frontend Developer", value: "Frontend Developer" },
               { title: "Backend Developer", value: "Backend Developer" },
            ],
         },
      },
      {
         name: "detailsExperiance",
         title: "years of Experiance",
         type: "number",
      },
      {
         name: "detailsClients",
         title: "Number of Clients",
         type: "number",
      },
      {
         name: "detailsProjects",
         title: "Number of Projects",
         type: "number",
      },
      {
         name: "description",
         title: "Description",
         type: "string",
      },
   ],
};
