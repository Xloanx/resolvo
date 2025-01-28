import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
    status: { 
        type: String, 
        required: true 
    },
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: String, 
        required: true 
    },
    updatedAt: { 
        type: String, 
        required: false 
    },
    assignedTo: { 
        type: [String], 
        required: false 
    },
    ticketer: { 
        type: String, 
        required: true 
    },
    attachments: { 
        type: [String], 
        required: false 
    },
    orgId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Organization', 
        required: true,
    },
    remark: String,
});

export default mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);


