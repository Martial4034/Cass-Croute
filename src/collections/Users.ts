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
            label: "Agence",
            value: "agence"
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
      required: false,
    },
    {
      name: "firstName",
      label: "Prénom",
      type: "text",
      required: false,
    },
    {
      name: 'profilePhoto',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'bio',
      type: 'textarea',
      required: false,
    },
    {
      name: 'birthDate',
      type: 'date',
      required: false,
    },
    {
      name: 'phoneNumber',
      type: 'text',
      required: false,
    },
    
    {
      name: 'gender',
      type: 'select',
      options: [
        { label: 'Homme', value: 'men' },
        { label: 'Femme', value: 'women' },
        { label: 'Autre', value: 'other' },
      ],
      required: false,
    },
    {
      name: 'country',
      type: 'text',
      required: false,
    },
    {
      name: 'city',
      type: 'text',
      required: false,
    },
    {
      name: 'zipCode',
      type: 'text',
      required: false,
    },
    {
      name: 'address',
      type: 'text',
      required: false,
    },
    {
      name: 'verificationStatus',
      type: 'select',
      options: [
        { label: 'Non demandé', value: 'notAsked' },
        { label: 'En attente de validation', value: 'pending' },
        { label: 'Validé', value: 'verified' },
        { label: 'Refusé', value: 'denied' },
        { label: 'Certifié', value: 'certified' },
      ],
      defaultValue: 'notAsked',
    },
  ],
};
