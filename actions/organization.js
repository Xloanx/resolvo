"use server";
import { createOrganization, updateOrganizationStatus, getOrganization } from "@/server-utils/db-interact";
import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server";


export async function fetchOrganization(orgId){
    const _id = orgId;
    console.log(await getOrganization(orgId))
    // const res = await getOrganization(orgId)
    // return res ? { success: true, res } : { success: false };
}


export async function addOrganization(prevState, formData) {
    
    //get values
    const admin = "6798a0ac19338dd06de20419"; //to be picked after auth 
    const name = formData.get('org_name');
    const email = formData.get('org_email');
    const phone1 = formData.get('org_phone1');
    const phone2 = formData.get('org_phone2');
    const address = formData.get('org_address');
    
    //validate
    const errors = {};
    
    if (!name) {
        errors.name = "Organization's name is required";
    }
    if (!email) {
        errors.email = "Organization's support email is required";
    }
    if (!phone1) {
        errors.phone1 = "At least, one phone number is required";
    }
    
    
    if (Object.keys(errors).length > 0) {
        return errors;
    }

    console.log(admin)
    
    //if validation passes, create organization
    const res = await createOrganization(name, email, phone1, phone2, address, admin);
    redirect(`/dashboard`)
    return res ? { success: true } : { success: false };
}

export async function editOrganizationStatus(oid, newStatus) {

    //get values
    const orgId = oid;
    const status = newStatus;

    //     errors.title = 'Status is required to be updated';
    // }

    // if (agents.length == 0) {
    //     errors.agents = 'Agents is required to be updated';
    // }

    // if (Object.keys(errors).length > 0) {
    //     return errors;
    // }

    //if validation passes, create ticket
    const res = await updateOrganizationStatus(orgId, status)
    return res ? { success: true } : { success: false };
}


// export async function editTicket(tid, oid, prevState, formData) {
//     console.log("Received FormData:", Array.from(formData.entries()));

//     //get values
//     const ticketid = tid;
//     const orgId = oid;
//     const status = formData.get('ticketStatus');
//     const assignees = formData.get('selectedAgents');
//     const assigneesArray = assignees.split(",").map(item => item.trim());

//     //validate
//     const errors = {};

//     // if (ticketStatus == 'all' ) {
//     //     errors.title = 'Status is required to be updated';
//     // }

//     // if (agents.length == 0) {
//     //     errors.agents = 'Agents is required to be updated';
//     // }

//     // if (Object.keys(errors).length > 0) {
//     //     return errors;
//     // }

//     //if validation passes, create ticket
//     const res = await updateTicket(ticketid, orgId, status, assigneesArray)
//     redirect(`/orgs/${orgId}/tickets/`)
//     return res ? { success: true } : { success: false };
// }