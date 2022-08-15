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
         name: "facebookUrl",
         title: "FacebookUrl",
         type: "string",
      },
      {
         name: "messengerUrl",
         title: "messengerUrl",
         type: "string",
      },
      {
         name: "whatsapp",
         title: "Whatsapp",
         type: 'number',
      },
      {
         name: "email",
         title: "Email",
         type: 'email',
      },
      {
         name: "twitterUrl",
         title: "TwitterUrl",
         type: "string",
      }, {
         name: "linkedInUrl",
         title: "LinkedInUrl",
         type: "string",
      },
      {
         name: "githubUrl",
         title: "GithubUrl",
         type: "string",
      },
      {
         name: "instagramUrl",
         title: "InstagramUrl",
         type: "string",
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
