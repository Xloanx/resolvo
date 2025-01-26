import { organizations } from "../orgAPI";

export async function GET(_request, {params}){
    const {id} = await params
    const organization = organizations.find(organization => organization.id === id)
    return Response.json(organization)
}


// export async function PATCH( request, {params}){
//     const {id} = await params
//     const body = await request.json()
//     const { status, assignedTo} = body

//     const index = tickets.findIndex(ticket => ticket.id === id)
//     tickets[index].status = status
//     tickets[index].assignedTo = assignedTo
//     tickets[index].updatedAt = humanReadableDate()

//     return Response.json(tickets[index])
// }

// export async function DELETE(_request, { params }){
//     const {id} = await params
//     const remainingTickets = tickets.filter((ticket) => ticket.id !== id)
//     return Response.json(remainingTickets)
// }