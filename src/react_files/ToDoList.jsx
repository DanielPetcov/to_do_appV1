import ToDoItem from "./ToDoItem";
import { useState} from "react";
import React from "react";
import '../styles/list_style/list_style.css';

export const Context = React.createContext();

export default function ToDoList(){
    const [items, setItems] = useState([]);
    const [newText, setNewText] = useState("");

    const addItem = (e) => {
        if(newText.trim().length > 0){
            setItems(t => [...t, newText.trim()]);
            setNewText("");
        }
        e.preventDefault();
    }

    const changeNewText = (e) => {
        setNewText(e.target.value);
    }
    
    return(
        <div className="to-do-list">
            <h1>To do app</h1>
            <form onSubmit={addItem} className="list-form">
                <div className="input-field">
                    <input 
                    className="input-text"
                    type="text" 
                    placeholder="What to do..." 
                    value={newText}
                    onChange={changeNewText}/>
                    <br />
                    <input type="submit"  value={'add'} className="input-btn"/>
                </div>
            </form>
        
           <div className="tasks">
                <Context.Provider value={[items, setItems]}>
                    {items.map((item, index) => {
                        return <ToDoItem key={index} text={item} id={index} />
                    })}
                </Context.Provider>
           </div>
        
        </div>   
    ) 
}