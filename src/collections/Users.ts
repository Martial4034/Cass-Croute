import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
        return `
          <!DOCTYPE html>
          <html lang="fr">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vérifiez votre adresse email</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 0; padding: 20px; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: auto; background: #f4f4f4; padding: 20px; border-radius: 10px; }
              h1 { color: #444; }
              a.button { background-color: #007bff; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; }
              a.button:hover { background-color: #0056b3; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Vérification de l'adresse email</h1>
              <p>Merci de vous être inscrit sur notre plateforme. Avant de continuer, nous devons vérifier votre adresse email.</p>
              <p>Cliquez sur le bouton ci-dessous pour vérifier votre adresse email :</p>
              <a href="${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}" class="button">Vérifier mon email</a>
              <p>Si vous n'avez pas créé de compte sur notre plateforme, veuillez ignorer cet email.</p>
            </div>
          </body>
          </html>
        `;
      }
    }
  },
  access:{
    read: () => true,
    create: () => true,
  },
  fields: [
    {
        name: "role",
        defaultValue: "user",
        required: true,
        type: "select",
        options: [
            {
                label: "Admin",
                value: "admin"
            },
            {
                label: "User",
                value: "user"
            }
        ],
    },
    {
      name: "job",
      defaultValue: "freelancer",
      required: true,
      type: "select",
      options: [
          {
              label: "Freelancer",
              value: "freelancer"
          },
          {
              label: "Hiring",
              value: "hiring"
          }
      ],
  },
    {
      name: "lastName",
      label: "Nom",
      type: "text",
      required: true,
    },
    {
      name: "firstName",
      label: "Prénom",
      type: "text",
    }
  ],
};
