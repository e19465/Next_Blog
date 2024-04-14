export const getTokenInfo = (access_token) => {
  if (access_token) {
    // Split the token into its three parts: header, payload, and signature
    const tokenParts = access_token?.split(".");

    if (tokenParts?.length !== 3) {
      throw new Error("Invalid JWT token format");
    }

    // Extract the payload part, which is the second part of the token
    const payloadBase64 = tokenParts[1];

    // Decode the payload from base64 to a string using atob
    const decodedPayloadString = atob(payloadBase64);

    // Parse the JSON string to an object
    const decodedPayloadObject = JSON.parse(decodedPayloadString);

    // Return the decoded payload object
    return decodedPayloadObject;
  }
};
