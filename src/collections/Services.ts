import { SERVICES_CATEGORIES } from "../config";
import { CollectionConfig } from "payload/types";

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    useAsTitle: "title",
  },
  access: {
    // Définir ici les règles d'accès
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
      hasMany: false,
      admin: {
        condition: () => true,
      },
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
    {
      name: "category",
      label: "Catégories",
      type: "select",
      options: SERVICES_CATEGORIES,
    },
    {
      name: "skills",
      type: "array",
      fields: [
        {
          type: "text",
          name: "skill",
        },
      ],
    },
    {
      name: "location",
      type: "text",
      required: false, // Peut être rendu obligatoire selon les besoins
    },
    {
      name: "reviews",
      type: "array",
      fields: [
        {
          type: "textarea",
          name: "review",
        },
        {
          type: "number",
          name: "rating",
          max: 5,
          min: 1,
        },
      ],
    },
    {
      name: "images",
      type: "array",
      label: "Services Images",
      minRows: 1,
      maxRows: 9,
      required: true,
      labels: {
        singular: "Image",
        plural: "Images",
      },
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "approvedForPublic",
      label: "Verification par un Admin du Service",
      type: "select",
      defaultValue: "En attente",
      access: {
        create: ({ req }) => req.user.role === "admin",
        read: ({ req }) => req.user.role === "admin",
        update: ({ req }) => req.user.role === "admin",
      },
      options: [
        {
          label: "En attente de vérification",
          value: "pending",
        },
        {
          label: "Approuvé",
          value: "approved",
        },
        {
          label: "Refusé",
          value: "denied",
        },
      ],
    },
    {
      name: "serviceStatus",
      label: "Statut du Service",
      type: "select",
      defaultValue: "available",
      options: [
        { label: "Disponible", value: "available" },
        { label: "Déjà Réservé", value: "booked" },
        { label: "Temporairement Indisponible", value: "unavailable" },
      ],
    },
    {
      name: "stripeId",
      type: "text",
      access: {
        create: ({ req }) => req.user.role === "admin",
        read: ({ req }) => req.user.role === "admin",
        update: ({ req }) => req.user.role === "admin",
      },
    },
  ],
};
