import React, { Component } from "react"

import TodoItem from "../components/TodoItem"

import API from "../utils/API"

class List extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        API.getTodos()
            .then(res => this.setState({ todos: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container">
                <div className="col-6">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Add a todo" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Add</button>
                        </div>
                    </div>
                    {console.log(this.state.todos)}
                    {this.state.todos.map(item => (
                        <TodoItem
                            key={item._id}
                            id={item._id}
                            todo={item.todo}
                            deadline={item.deadline}
                            category={item.category}
                            completed={item.completed}
                        />
                    ))}

                </div>
            </div>
        )
    }
}

export default List