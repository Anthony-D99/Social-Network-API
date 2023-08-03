const Thought = require('../models/Thought');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createThought(req, res) {
    try {
      const dbThoughtData = await Thought.create(req.body);
      res.json(dbThoughtData);
    } catch (err) {
      res.status(500).json(err)
    }
  },
  async deleteThought(req, res){
    try{
        const dbThoughtData = await Thought.deleteOne({ _id: req.params.thoughtId })
        res.json(dbThoughtData)
    }catch (err){
        res.status(500).json(err);
    }
  },
  async updateThought (req, res){
    try{
        const dbThoughtData = await Thought.updateOne({ _id: req.params.thoughtId })
        res.json(dbThoughtData)
    }catch(err){
        res.status(500).json(err)
    }
  },
  async createReaction(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err)
    }
  },
  async deleteReaction(req, res){
    try{
        const dbUserData = await User.deleteOne({ _id: req.params.friendId })
        res.json(dbUserData)
    }catch (err){
        res.status(500).json(err);
    }
  },
};
