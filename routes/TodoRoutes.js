const mongoose = require("mongoose");
const { clearKey } = require("../services/cache");
const Todo = mongoose.model("Todo");


module.exports = app => {
  app.get("/fetchAllTasks", async (req, res) => {
    let todos;
    
      todos = await Todo.find().cache({
        time: 10
      });
    

    res.send(todos);
  });

  app.post("/add", async (req, res) => {
 
    const todo = new Todo({
      content:req.body.decription
      
    });

    try {
      await todo.save();
      clearKey(Todo.collection.collectionName);
      res.send(todo);
    } catch (err) {
      res.status(400).send(err);
    }
  });
};