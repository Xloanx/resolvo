const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  ticketId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Ticket', 
    required: true 
    },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
    },
  rating: { 
    type: Number, 
    min: 1, 
    max: 5, 
    required: true 
    },
  comments: { 
    type: String, 
    maxlength: 500
    },
  createdAt: { 
    type: Date, 
    default: Date.now 
    }
});

export default mongoose.models.Feedback || mongoose.model('Feedback', FeedbackSchema);