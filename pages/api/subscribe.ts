import type { NextApiRequest, NextApiResponse } from "next";

const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY as string,
  server: process.env.MAILCHIMP_SERVER_PREFIX as string,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, name, lastName, role, message } = req.body;

  if (!email || !name || !lastName || !role) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID as string,
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: name,
          LNAME: lastName,
          ROLE: role,
          MESSAGE: message,
        },
      }
    );
    return res.status(200).json({ error: null });
  } catch (error: any) {
    console.error("Error subscribing user:", error);
    return res.status(500).json({
      error:
        error.response?.text || error.message || "Unexpected error occurred",
    });
  }
};
