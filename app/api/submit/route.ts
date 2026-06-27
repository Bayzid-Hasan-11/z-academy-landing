import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const paymentNumber = formData.get("paymentNumber") as string;

    // Authenticate with Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Prepare data for Google Sheets
    const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
    const values = [[timestamp, name, phone, paymentNumber]];

    // Append to Google Sheets (Assuming your sheet is named "Admissions", columns A to D)
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Admissions!A:D", 
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({ success: true, message: "Registration successful" });
  } catch (error) {
    console.error("Submission Error:", error);
    return NextResponse.json({ success: false, error: "Server error occurred" }, { status: 500 });
  }
}