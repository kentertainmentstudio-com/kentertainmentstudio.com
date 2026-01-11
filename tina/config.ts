import { defineConfig } from "tinacms";

/**
 * TinaCMS Configuration for K Entertainment Studio
 * 
 * This configuration sets up:
 * - Content collections for pages, features, stats, and testimonials
 * - MDX support for rich content
 * - Git-based content storage in /content/ folder
 * 
 * To enable TinaCMS:
 * 1. Run: npx @tinacms/cli@latest init
 * 2. Create a TinaCMS Cloud account at https://tina.io
 * 3. Configure your project in the Tina Cloud dashboard
 * 4. Replace the clientId and token below with your values
 */

// Your Tina Cloud credentials (get these from tina.io dashboard)
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID || "",
  // Get this from tina.io
  token: process.env.TINA_TOKEN || "",
  branch,
  
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  
  schema: {
    collections: [
      // =========================================
      // Pages Collection
      // =========================================
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Meta Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "heroHeadline",
            label: "Hero Headline",
          },
          {
            type: "string",
            name: "heroSubheadline",
            label: "Hero Subheadline",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Page Content",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return "/";
            }
            return `/${document._sys.filename}`;
          },
        },
      },
      
      // =========================================
      // Features Collection (What We Protect)
      // =========================================
      {
        name: "feature",
        label: "Features",
        path: "content/features",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Feature Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "icon",
            label: "Icon Name",
            description: "Lucide icon name (e.g., Film, Music, Gamepad2)",
            required: true,
          },
          {
            type: "string",
            name: "size",
            label: "Card Size",
            options: ["large", "medium", "small"],
            required: true,
          },
          {
            type: "string",
            name: "gradient",
            label: "Gradient Classes",
            description: "Tailwind gradient classes",
          },
          {
            type: "string",
            name: "stats",
            label: "Stats Display",
            description: "e.g., '50,000+ titles protected'",
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
          },
        ],
      },
      
      // =========================================
      // Stats Collection (Trust Signals)
      // =========================================
      {
        name: "stat",
        label: "Trust Stats",
        path: "content/stats",
        format: "json",
        fields: [
          {
            type: "string",
            name: "value",
            label: "Stat Value",
            description: "e.g., '99.999%', '256-bit'",
            required: true,
          },
          {
            type: "string",
            name: "label",
            label: "Stat Label",
            description: "e.g., 'Uptime SLA', 'Encryption'",
            required: true,
          },
          {
            type: "string",
            name: "icon",
            label: "Icon Name",
            description: "Lucide icon name",
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
          },
        ],
      },
      
      // =========================================
      // Value Propositions Collection
      // =========================================
      {
        name: "valueProp",
        label: "Value Propositions",
        path: "content/value-props",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "icon",
            label: "Icon Name",
            description: "Lucide icon name",
            required: true,
          },
          {
            type: "string",
            name: "accentColor",
            label: "Accent Color",
            description: "CSS color value",
          },
          {
            type: "object",
            name: "features",
            label: "Feature List",
            list: true,
            fields: [
              {
                type: "string",
                name: "text",
                label: "Feature Text",
              },
            ],
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
          },
        ],
      },
      
      // =========================================
      // Testimonials Collection
      // =========================================
      {
        name: "testimonial",
        label: "Testimonials",
        path: "content/testimonials",
        format: "json",
        fields: [
          {
            type: "string",
            name: "quote",
            label: "Quote",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author Name",
            required: true,
          },
          {
            type: "string",
            name: "role",
            label: "Author Role/Title",
          },
          {
            type: "string",
            name: "company",
            label: "Company/Organization",
          },
          {
            type: "image",
            name: "avatar",
            label: "Author Avatar",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Testimonial",
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
          },
        ],
      },
      
      // =========================================
      // Site Settings (Global)
      // =========================================
      {
        name: "siteSettings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Site Name",
          },
          {
            type: "string",
            name: "tagline",
            label: "Tagline",
          },
          {
            type: "string",
            name: "description",
            label: "Default Meta Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "social",
            label: "Social Links",
            fields: [
              {
                type: "string",
                name: "twitter",
                label: "Twitter/X URL",
              },
              {
                type: "string",
                name: "linkedin",
                label: "LinkedIn URL",
              },
              {
                type: "string",
                name: "github",
                label: "GitHub URL",
              },
              {
                type: "string",
                name: "discord",
                label: "Discord URL",
              },
            ],
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Information",
            fields: [
              {
                type: "string",
                name: "email",
                label: "Contact Email",
              },
              {
                type: "string",
                name: "phone",
                label: "Phone Number",
              },
              {
                type: "string",
                name: "address",
                label: "Address",
              },
            ],
          },
        ],
      },
      
      // =========================================
      // Roadmap Items Collection
      // =========================================
      {
        name: "roadmapItem",
        label: "Roadmap",
        path: "content/roadmap",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Milestone Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "quarter",
            label: "Quarter",
            description: "e.g., Q1 2026",
            required: true,
          },
          {
            type: "string",
            name: "status",
            label: "Status",
            options: ["planned", "in-progress", "completed"],
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
          },
        ],
      },
    ],
  },
});
