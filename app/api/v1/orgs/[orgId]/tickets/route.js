import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Ticket from "@/models/ticket";

export async function GET(NextRequest, {params}) {
    const {orgId} = params
    await dbConnect();

    try {
        const tickets = await Ticket.find({orgId: orgId}).sort({ createdAt: -1 });

        // Handle URL query parameters
        const searchParams = NextRequest.nextUrl.searchParams;
        const query = searchParams.get("query");

        const filteredTickets = query
            ? tickets.filter((ticket) =>
                ticket.description.toLowerCase().includes(query.toLowerCase())
              )
            : tickets;

        // Return filtered tickets with headers
        return new Response(JSON.stringify({ success: true, data: filteredTickets }), {
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
        // Parse FormData from the request
        const formData = await request.formData();
        const title = formData.get("title");
        const description = formData.get("description");
        const ticketer = formData.get("ticketer");
        const orgId = formData.get("orgId");
        // const attachments = formData.getAll("attachments");

        // Validate required fields
        if (!title || !description || !ticketer || !orgId) {
            return new Response(JSON.stringify({ success: false, error: "Missing required fields" }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Handle file uploads (if applicable)
        // const uploadedFiles = [];
        // for (const file of attachments) {
        //     const buffer = await file.arrayBuffer();
        //     const filename = `${Date.now()}-${file.name}`;
        //     // Save the file (e.g., to local storage, AWS S3, etc.)
        //     uploadedFiles.push({ filename, buffer });
        // }
        
        // Create the ticket in the database
        const ticket = await Ticket.create({
            title,
            description,
            ticketer,
            orgId,
            // attachments: uploadedFiles, // Adjust schema as needed
        });

        return new Response(JSON.stringify({ success: true, data: ticket }), {
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


