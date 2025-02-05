import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },

    email: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: String, 
        required: true 
    },
    password: {
        type: String,
        required: true
    },
    thumbnail: { 
        type: String
    },
    role: { 
        type: String, 
        required: true
    },
    orgId: { 
        type: [mongoose.Schema.Types.ObjectId], 
        ref: 'Organization', 
    },
    department: {
        type: String
    }
    
});

export default mongoose.models.User || mongoose.model('User', UserSchema);


