import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      service,
      budget,
      timeline,
      message,
    } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        {
          status: 400,
        },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    await connectDB();

    const lead = await Lead.create({
      name,
      email,
      company,
      service,
      budget,
      timeline,
      message,
      status: "new",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your project inquiry has been received.",
        leadId: lead._id,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("CONTACT_API_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}