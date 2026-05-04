import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// MongoDB connection
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("bookapp");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  // ✅ IMPORTANT FIX (CORS / INVALID ORIGIN solve)
  trustedOrigins: [
    "http://localhost:3000",
    "https://assignment-0-8-ne31-hp6x6dx35-rubi92948-coders-projects.vercel.app",
  ],
});