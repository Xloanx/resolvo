import { tickets } from './ticket';

export async function GET(){
    return Response.json(tickets)
}

export async function POST(request){
    const ticket = request.json();
    const newTicket ={
        id : tickets.length + 1,
        status: ticket.status,
        title: ticket.title,
        description: ticket.description,
        created: ticket.created,
        ticketer:ticket.ticketer
    }
    tickets.push(newTicket)
    return new Response(JSON.stringify(newTicket),{
        headers: {"Content-Type": "application/json"},
        status: 201,
    })
}