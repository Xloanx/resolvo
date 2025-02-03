import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Ticket from "@/models/ticket";

export async function GET(NextRequest) {
    await dbConnect();

    try {
        const tickets = await Ticket.find({});

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
        const body = await request.json(); // Parse the request body
        const ticket = await Ticket.create(body);

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


