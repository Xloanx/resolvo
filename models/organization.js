import mongoose from 'mongoose';

const OrganizationSchema = new mongoose.Schema({
    status: { 
        type: String, 
        required: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    contact: { 
        type: String, 
        required: true 
    },
    
});

export default mongoose.models.Organization || mongoose.model('Organization', OrganizationSchema);


