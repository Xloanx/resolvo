const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
    },
  type: { 
    type: String, 
    required: true 
    }, // e.g., 'ticket_update', 'payment_reminder'
  message: { 
    type: String, 
    required: true 
    },
  isRead: { 
    type: Boolean, 
    default: false 
    },
  createdAt: { 
    type: Date, 
    default: Date.now 
    }
});

export default mongoose.models.Notification || mongoose.model('Notification', NotificationSchema);