import React from "react"

const TodoItem = props => (
    <div className="row">
        {console.log(props)}
        <div className="col-1">
            <div className="row">
                <input type="checkbox" />
            </div>
            <div className="row">
                X
            </div>
        </div>
        <div className="col-10">
            <div className="row">
                {props.todo}
            </div>
            <div className="row">
                {props.deadline}
            </div>
        </div>
        <div className="col-1">
            {props.note}
        </div>
    </div>
)

export default TodoItem