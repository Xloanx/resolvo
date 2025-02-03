import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Organization from "@/models/organization";

export async function GET(_request, {params}){
    await dbConnect();

    try {
        const {orgId} = await params

        // Fetch a single organization by id
        const organization = await Organization.findById(orgId);

        if (!organization) {
            return new Response(JSON.stringify({ success: false, message: "Organization not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ success: true, organization }), {
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

        // Update the organization document
        const updatedOrganization = await Organization.findByIdAndUpdate(id, body, {
            new: true, // Return the updated document
            runValidators: true, // Run schema validators
        });

        if (!updatedOrganization) {
            return new Response(JSON.stringify({ success: false, message: "Organization not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ success: true, data: updatedOrganization }), {
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
            return new Response(JSON.stringify({ success: false, message: "ID is required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Attempt to delete the document by id
        const deletedOrganization = await Organization.findByIdAndDelete(id);

        if (!deletedOrganization) {
            return new Response(JSON.stringify({ success: false, message: "Organization not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ success: true, data: deletedOrganization }), {
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