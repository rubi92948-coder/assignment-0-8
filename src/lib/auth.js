import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// =====================
// ENV CHECK
// =====================
const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("❌ MONGODB_URI is missing");
}

// =====================
// MONGO CLIENT
// =====================
const client = new MongoClient(uri);

// =====================
// DB CONNECT (SAFE)
// =====================
async function getDB() {
  if (!client.topology?.isConnected?.()) {
    await client.connect();
  }
  return client.db("tiles-db");
}

// =====================
// BETTER AUTH
// =====================
export const auth = betterAuth({
  trustedOrigins: [
    "http://localhost:3000",
    "https://assignment-0-8-ne31.vercel.app",
  ],

  database: mongodbAdapter(client.db("tiles-db"), {
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
});