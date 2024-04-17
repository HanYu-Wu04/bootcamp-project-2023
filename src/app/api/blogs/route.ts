import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db"
import Blog from "@/database/blogSchema"

export async function GET(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
		return NextResponse.json(blogs, { status: 200 });
	} catch (err) {
	    return NextResponse.json("Failed to fetch events: " + err, {
            status: 400,
        });
	}
}