import dbConnect from '@/lib/mongoose';
import User from "@/models/user";

export async function GET(_request, {params}){
    await dbConnect();
    try {
        const {id} = await params
        // Fetch a single user by id
        const user = await User.findById(id);
        if (!user) {
            return new Response(JSON.stringify({ success: false, message: "User not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ success: true, user }), {
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
            return new Response(JSON.stringify({ success: false, message: "User ID is required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Update the user document
        const updatedUser = await User.findByIdAndUpdate(id, body, {
            new: true, // Return the updated document
            runValidators: true, // Run schema validators
        });

        if (!updatedUser) {
            return new Response(JSON.stringify({ success: false, message: "User not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ success: true, data: updatedUser }), {
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
        const {id} = await params
        if (!id) {
            return new Response(JSON.stringify({ success: false, message: "User ID is required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Attempt to delete the document by id
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return new Response(JSON.stringify({ success: false, message: "User not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ success: true, data: deletedUser }), {
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