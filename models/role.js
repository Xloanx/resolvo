const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
  name: { // e.g., 'Admin', 'Agent', 'Manager'
    type: String, 
    required: true, 
    unique: true 
    }, 
  permissions: { // e.g., ['create_ticket', 'view_reports']
    type: [String], 
    required: true 
    } 
}, { timestamps: true }

);


export default mongoose.models.Role || mongoose.model('Role', RoleSchema);


