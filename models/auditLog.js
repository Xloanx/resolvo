const mongoose = require('mongoose');

const AuditLogSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
    },
  action: { // e.g., 'create_ticket', 'update_status'
    type: String, 
    required: true 
    }, 
  target: { // e.g., 'ticket', 'user'
    type: String, 
    required: true 
    }, 
  targetId: { // Related record's ID
    type: mongoose.Schema.Types.ObjectId 
    }, 
  details: { // Additional data
    type: Object 
    }, 
  timestamp: { 
    type: Date, default: Date.now 
    }
});

export default mongoose.models.AuditLog || mongoose.model('AuditLog', AuditLogSchema);