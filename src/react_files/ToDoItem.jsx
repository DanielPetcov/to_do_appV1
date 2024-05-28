import { Context } from "./ToDoList"
import { useContext, useState } from "react";
import "../styles/task_style/task_style.css";
import 'animate.css';

export default function ToDoItem(props){
    const [items, setItems] = useContext(Context);

    function deleteItem(item_id){
        const new_items_list = items.filter((_, i) => i !== item_id);
        setItems(new_items_list);
    }

    return <>
        <div className="task animate__animated animate__fadeIn">
            <span className="task-text">{props.text}</span>
            <button className="delete-btn" onClick={() => deleteItem(props.id)}>
            </button>
        </div>
    </>
}