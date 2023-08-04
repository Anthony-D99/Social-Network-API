const { Schema, model } = require('mongoose');

// , get: formatTime(createdAt)
const thoughtSchema = new Schema(
    {
        thoughtText: {type: String, required: true, minLength:1, maxLength:280},
        createdAt:{ type: Date, default: Date.now()},
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

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
})

// function formatTime(createdAt){
//   console.log(createdAt)
// }

const Thought = model('thought', thoughtSchema);

module.exports = Thought