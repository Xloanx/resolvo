import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import User from "@/models/user";

export async function GET(request) {
    await dbConnect();

    try {
        const users = await User.find({});

        // Handle URL query parameters
        const searchParams = request.nextUrl.searchParams;
        const query = searchParams.get("query");

        const filteredUsers = query
            ? users.filter((user) =>
                user.name.toLowerCase().includes(query.toLowerCase())
              )
            : users;

        // Return filtered users with headers
        return new Response(JSON.stringify({ success: true, data: filteredUsers }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export async function POST(request){
    await dbConnect();

    try {
        const body = await request.json(); // Parse the request body
        const user = await User.create(body);

        return new Response(JSON.stringify({ success: true, data: user }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}


