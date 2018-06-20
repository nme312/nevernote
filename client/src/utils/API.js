import axios from "axios";

export default {
        // Get todos from the /api/todos/ route on our Express server
        getTodos: function() {
            return axios.get("/api/todos");
        },
        //Create a tod by making a post request to /api/todo on the Express sever
        createNewTodo: function(newTodo) {
            return axios.post("/api/todo", newTodo);
        }
};