type SubmitNetworkContactInput = {
  fullName: string;
  email: string;
  phone?: string;
  companyName?: string;
  message: string;
};

type ZohoTokenResponse = {
  access_token?: string;
  expires_in?: number;
  api_domain?: string;
  token_type?: string;
  error?: string;
  error_description?: string;
};

type ZohoCreatorErrorResponse = {
  code?: number | string;
  message?: string;
  error?: string;
};

export async function getAccessToken(): Promise<string> {
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing Zoho OAuth environment variables.");
  }

  const params = new URLSearchParams({
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "refresh_token",
  });

  const res = await fetch("https://accounts.zoho.com/oauth/v2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
    cache: "no-store",
  });

  const data = (await res.json()) as ZohoTokenResponse;

  if (!res.ok || !data.access_token) {
    throw new Error(
      data.error_description || data.error || "Failed to get Zoho access token."
    );
  }

  return data.access_token;
}

export async function submitNetworkContactToZoho(
  input: SubmitNetworkContactInput
): Promise<unknown> {
  const owner = process.env.ZOHO_ACCOUNT_NAME;
  const appLinkName = process.env.ZOHO_APP_NAME;
  const formLinkName = process.env.ZOHO_FORM_LINK_NAME;

  if (!owner || !appLinkName || !formLinkName) {
    throw new Error("Missing Zoho Creator app configuration.");
  }

  const accessToken = await getAccessToken();

  const payload = {
    data: [
      {
        Full_Name: input.fullName,
        Email: input.email,
        Phone_Number: input.phone || "",
        Company_Name: input.companyName || "",
        Message: input.message,
      },
    ],
  };

  const res = await fetch(
    `https://www.zohoapis.com/creator/v2.1/data/${owner}/${appLinkName}/form/${formLinkName}`,
    {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    }
  );

  const data = await res.json();

  if (!res.ok) {
    const errorData = data as ZohoCreatorErrorResponse;
    throw new Error(
      errorData.message || errorData.error || "Zoho Creator rejected the contact submission."
    );
  }

  return data;
}