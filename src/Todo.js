import React from 'react';
function Todo(props) {
    var completedStyle = {
        color: "gray",
        textDecoration: "line-through",
        fontStyle: "italic"
    }
    return (
        <div><input type="checkbox" className="todo-item" checked={props.completed} onClick={() => { props.hc(props.keys) }} />
            {/* checkbox with class todo-item and with checked property and onChhange event handler*/}
            {/*Event handler passed as function */}
            {/* <p style={
                { fontstyle: props.completed == false && "italic" }, if props.completed is false, make it p italicized
                { completedstyle },    //will give style completedstyle
                { display: !props.name && "none" }, if name  is not listed, defaut is none and red text
                { color: !props.name && "red" }
            }>{props.name}</p> */}
            <p style={props.completed===true ? completedStyle : null}>{props.name}</p> {/*is props.completed true, if it is do completed style, else null  */}
        </div>
    );
}
export default Todo;