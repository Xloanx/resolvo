"use server";
import { createTicket, updateTicket } from "@/server-utils/db-interact";
import { redirect } from "next/navigation"






export async function addTicket(organizationId, prevState, formData) {

    //get values
    const ticketer = formData.get('ticketer');
    const title = formData.get('title');
    const description = formData.get('description');
    const orgId = organizationId;
   
    //validate
    const errors = {};

    if (!title) {
        errors.title = 'Title is required';
    }

    if (!description) {
        errors.description = 'Description is required';
    }

    if (Object.keys(errors).length > 0) {
        return errors;
    }

    //if validation passes, create ticket
    const res = await createTicket(ticketer, title, description, orgId)
    return res ? { success: true } : { success: false };
}


export async function editTicket(tid, oid, prevState, formData) {
    console.log("Received FormData:", Array.from(formData.entries()));

    //get values
    const ticketid = tid;
    const orgId = oid;
    const status = formData.get('ticketStatus');
    const assignees = formData.get('selectedAgents');
    const assigneesArray = assignees.split(",").map(item => item.trim());

    //validate
    const errors = {};

    // if (ticketStatus == 'all' ) {
    //     errors.title = 'Status is required to be updated';
    // }

    // if (agents.length == 0) {
    //     errors.agents = 'Agents is required to be updated';
    // }

    // if (Object.keys(errors).length > 0) {
    //     return errors;
    // }

    //if validation passes, create ticket
    const res = await updateTicket(ticketid, orgId, status, assigneesArray)
    redirect(`/orgs/${orgId}/tickets/`)
    return res ? { success: true } : { success: false };
}