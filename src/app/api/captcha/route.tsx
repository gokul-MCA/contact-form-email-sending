import axios from "axios";

export async function POST(req: Request) {
  // Validate HTTP method (optional if this is in a POST-specific handler)
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ message: "Only POST requests are allowed" }),
      { status: 405 },
    );
  }

  // Parse request body
  const data = await req.json();
  const { token } = data;

  // Validate token
  if (!token) {
    return new Response(JSON.stringify({ message: "Token not found" }), {
      status: 400, // 400 Bad Request for missing parameters
    });
  }

  // Validate secret key
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    return new Response(
      JSON.stringify({ message: "Secret key not configured" }),
      { status: 500 }, // Internal server error for missing config
    );
  }

  try {
    // Send request to Google reCAPTCHA API
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null, // No body
      {
        params: {
          secret: secretKey,
          response: token,
        },
      },
    );

    // Handle Google API response
    if (response.data.success) {
      return new Response(JSON.stringify({ message: "Success" }), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify({ message: "Failed to verify" }), {
        status: 403, // Forbidden for failed verification
      });
    }
  } catch (error) {
    console.error("Verification error:", error);
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
      { status: 500 },
    );
  }
}
