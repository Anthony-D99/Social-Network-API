const { Schema, model } = require('mongoose');

const thoughtSchema = new mongoose.Schema(
    {
        thoughtText: {type: String, required: true, minLength:1, maxLength:280},
        createdAt:{ type: Date, default: {currentTime:()=> Date.now()}, get: formatTime},
        username:{type: String, required: true},
        reactions:[{type: Schema.Types.ObjectId, ref: 'Reaction',}]
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

userSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
})

function formatTime(createdAt){

}

const Thought = model('thought', thoughtSchema);

module.exports = Thought