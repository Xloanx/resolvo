import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
    status: { 
        type: String, 
        enum: ["Open", "In_progress", "Resolved", "Closed"],
        default: "Open", 
    },
    title: { 
        type: String, 
        required: true,
        trim: true,
    },
    description: { 
        type: String, 
        required: true,
        trim: true, 
    },
    assignedTo: { 
        type: [String]
    },
    ticketer: { 
        type: String, 
        required: true,
        trim: true,
    },
    attachments: { 
        type: [String],
        default:[]
    },
    orgId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Organization', 
        required: true,
    }
}, { timestamps: true });

export default mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);


