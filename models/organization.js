import mongoose from 'mongoose';

const OrganizationSchema = new mongoose.Schema({
    status: { 
        type: String, 
        enum: ["inactive", "active"],
        default: "inactive", 
    },
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    phone1:{
        type: String,
        required: true
    },
    phone2:{
        type: String
    },
    address: {
        type: String
    },
    admin:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true,
    }
    
}, { timestamps: true });

export default mongoose.models.Organization || mongoose.model('Organization', OrganizationSchema);


