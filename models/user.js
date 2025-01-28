import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    username: {
        type: String
    },
    email: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: String, 
        required: true 
    },
    thumbnail: { 
        type: String, 
        required: false 
    },
    orgId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Organization', 
        required: true,
    },
    department: {
        type: String,
        required: true
    }
    
});

export default mongoose.models.User || mongoose.model('User', UserSchema);


