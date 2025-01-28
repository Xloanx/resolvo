import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Organization from "@/models/organization";

export async function GET(request) {
    await dbConnect();

    try {
        const organizations = await Organization.find({});

        // Handle URL query parameters
        const searchParams = request.nextUrl.searchParams;
        const query = searchParams.get("query");

        const filteredOrganizations = query
            ? organizations.filter((organization) =>
                organization.name.toLowerCase().includes(query.toLowerCase()) ||
                organization.status.toLowerCase().includes(query.toLowerCase())
              )
            : organizations;

        // Handle cookies
        const theme = request.cookies.get('theme')?.value || 'default';
        const userId = request.cookies.get('userId')?.value || 'anonymous';

         // Set response headers
         const headers = new Headers({
            "Content-Type": "application/json",
        });

        headers.append("Set-Cookie", `theme=${theme}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600`);
        headers.append("Set-Cookie", `userId=${userId}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600`);


        // Return filtered organizations with headers
        return new Response(JSON.stringify({ success: true, data: filteredOrganizations }), {
            status: 200,
            headers,
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
        const organization = await Organization.create(body);

        return new Response(JSON.stringify({ success: true, data: organization }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }


    //cookies
    // const cookies = [
    //     "theme=dark; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600",
    //     `userId=${newTicket.id}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600`,
    //   ];

    // return new Response(JSON.stringify(newTicket),{
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Set-Cookie":cookies.join(", "), //setting cookies
    //     },
    //     status: 201,
    // })
}

