import { tickets } from "../ticket";
import { humanReadableDate } from "@/lib/utils";

export async function GET(_request, {params}){
    const {id} = await params
    const ticket = tickets.find(ticket => ticket.id === id)
    return Response.json(ticket)
}


export async function PATCH( request, {params}){
    const {id} = await params
    const body = await request.json()
    const { status, assignedTo} = body

    const index = tickets.findIndex(ticket => ticket.id === id)
    tickets[index].status = status
    tickets[index].assignedTo = assignedTo
    tickets[index].updatedAt = humanReadableDate()

    return Response.json(tickets[index])
}

export async function DELETE(_request, { params }){
    const {id} = await params
    const remainingTickets = tickets.filter((ticket) => ticket.id !== id)
    return Response.json(remainingTickets)
}