import axios from "axios";

export const notifyEmail = async (email) => {
  const data = {
    list_ids: [process.env.NEXT_PUBLIC_SENDGRID_LIST_ID],

    contacts: [
      {
        email: email,
      },
    ],
  };

  try {
    const response = await axios.put(
      "https://api.sendgrid.com/v3/marketing/contacts",
      data,
      {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`,
        },
      }
    );

    return response?.status;
  } catch (err) {
    throw Error("error occurred!!");
  }
};
