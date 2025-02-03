import dbConnect from '@/lib/mongoose';
import Organization from "@/models/organization";
import Ticket from "@/models/ticket";
import { NextRequest } from 'next/server';

export async function getOrganizations(){
    await dbConnect();
    const organizations = await Organization.find().sort({ createdAt: -1 }).lean();
    return { success: true, data:organizations };

}

export async function getOrganization(orgId){
    await dbConnect();
    const plainOrg = await Organization.findOne({orgId: orgId}).lean();
    return { success: true, data:plainOrg};

}

export async function createOrganization(name, email, phone1, phone2, address, admin) {
    await dbConnect();
    const newOrg = await Organization.create({
        name, 
        email, 
        phone1, 
        phone2, 
        address, 
        admin
    });
    return newOrg._id

}

export async function updateOrganizationStatus(orgId, status) {
    await dbConnect();
    const updatedOrganization = await Organization.findOneAndUpdate({_id: orgId}, 
                                                        {
                                                            status: status
                                                        }, 
                                                        { 
                                                            new: true, 
                                                            runValidators: true,
                                                        }
    );
    return updatedOrganization
}

export async function getTickets(orgId){
    await dbConnect();
    const plainTickets = await Ticket.find({orgId: orgId}).sort({ createdAt: -1 }).lean();
    return { success: true, data:plainTickets };

}

export async function getTicket(orgId, ticketId){
    await dbConnect();
    const plainTicket = await Ticket.findOne({orgId: orgId, _id: ticketId}).lean();
    return { success: true, data:plainTicket };

}

export async function createTicket(ticketer, title, description, orgId) {
    await dbConnect();
    const newItem = await Ticket.create({
        title,
        description,
        ticketer,
        orgId
    });
    return newItem._id

}

export async function updateTicket(ticketId, orgId, status, assignees) {
    await dbConnect();
    const updatedTicket = await Ticket.findOneAndUpdate({_id: ticketId, orgId: orgId}, 
                                                        {
                                                            status: status,
                                                            assignedTo: assignees
                                                        }, 
                                                        { 
                                                            new: true, 
                                                            runValidators: true,
                                                        }
    );
    return updatedTicket
}

export async function deleteTicket(ticketId, orgId) {
    await dbConnect();
    const deletedTicket = await Ticket.findOneAndDelete({orgId: orgId, _id: ticketId});
    return deletedTicket
}