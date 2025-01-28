import dbConnect from '@/lib/mongoose';
import Ticket from "@/models/ticket";

export async function GET(_request, {params}){
    await dbConnect();

    try {
        const {id} = await params

        // Fetch a single organization by id
        const ticket = await Ticket.findById(id);

        if (!ticket) {
            return new Response(JSON.stringify({ success: false, message: "Ticket not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ success: true, ticket }), {
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


export async function PATCH(request, {params}){
    await dbConnect();

    try {
        const {id} = await params
        // Parse the request body
        const body = await request.json();
        if (!id) {
            return new Response(JSON.stringify({ success: false, message: "ID is required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Update the ticket document
        const updatedTicket = await Ticket.findByIdAndUpdate(id, body, {
            new: true, // Return the updated document
            runValidators: true, // Run schema validators
        });

        if (!updatedTicket) {
            return new Response(JSON.stringify({ success: false, message: "Ticket not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ success: true, data: updatedTicket }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}



export async function DELETE(_request, {params}){ 
    await dbConnect();
    try {
        // Extract `id` from params
        const {id} = await params
        if (!id) {
            return new Response(JSON.stringify({ success: false, message: "Ticket ID is required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Attempt to delete the document by id
        const deletedTicket = await Ticket.findByIdAndDelete(id);

        if (!deletedTicket) {
            return new Response(JSON.stringify({ success: false, message: "Ticket not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ success: true, data: deletedTicket }), {
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