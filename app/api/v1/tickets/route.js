import { tickets } from './ticket';
import { NextRequest } from 'next/server';
import { humanReadableDate } from '@/lib/utils';

export async function GET(NextRequest){
    // For URL Query Parameters functionality
    const searchParams = NextRequest.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredTickets = query
    ?tickets.filter((ticket) => ticket.description.includes(query))
    :tickets
    const theme = NextRequest.cookies.get('theme')
    const userId = NextRequest.cookies.get('userId')
    return new Response(JSON.stringify(filteredTickets),{
        headers: {
            "Content-Type": "application/json",
            "Set-Cookie": `theme=${theme}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600`,
            "Set-Cookie": `userId=${userId}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600`,
        },
    })
   
}

export async function POST(request){
    const ticket = await request.json();
    const newTicket ={
        id : tickets.length + 1,
        status: ticket.status,
        title: ticket.title,
        description: ticket.description,
        createdAt: humanReadableDate(),
        ticketer:ticket.ticketer,
        updatedAt:"",
        assignedTo:[],
    }
    tickets.push(newTicket)

    //cookies
    const cookies = [
        "theme=dark; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600",
        `userId=${newTicket.id}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600`,
      ];

    return new Response(JSON.stringify(newTicket),{
        headers: {
            "Content-Type": "application/json",
            "Set-Cookie":cookies.join(", "), //setting cookies
        },
        status: 201,
    })
}


