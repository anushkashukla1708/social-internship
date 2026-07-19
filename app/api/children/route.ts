import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Child from "@/models/child";

export async function GET() {
  try {
    await connectDB();

    const children = await Child.find();

    return NextResponse.json(children);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch children" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const child = await Child.create(body);

    return NextResponse.json(child, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create child" },
      { status: 500 }
    );
  }
}