const mongoose = require('mongoose');

const SLASchema = new mongoose.Schema({
  organizationId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Organization', 
    required: true 
    },
  priority: { 
    type: String, 
    enum: ['Low', 'Medium', 'High', 'Critical'], 
    required: true 
    },
  responseTime: { 
    type: Number, 
    required: true 
    }, // in hours
  resolutionTime: { 
    type: Number, 
    required: true 
    } // in hours
}, { 
    timestamps: true 
    }
);


export default mongoose.models.SLA || mongoose.model('SLA', SLASchema);