import { tickets } from "../ticket";


export async function GET(_request, {params}){
    const {id} = await params
    const ticket = tickets.find(ticket => ticket.id === id)
    return Response.json(ticket)
}


export async function PATCH( request, {params}){
    const {id} = await params
    const body = await request.json()
    const { status, title, description, created, ticketer } = body
    const index = tickets.findIndex(ticket => ticket.id === id)
    tickets[index].status = status
    tickets[index].title = title
    tickets[index].description = description
    tickets[index].created = created
    tickets[index].ticketer = ticketer
    tickets[index].updated = Date.now()

    return Response.json(tickets[index])
}