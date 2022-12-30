import { useState, useEffect } from "react";
import "../../stylesheets/style001.css";
import Tasks from "./Tasks";
const Main001 = () => {
    const getStorage = (dataKey) =>{
        const newListItem = localStorage.getItem(dataKey);
        if(newListItem){
            return JSON.parse(newListItem);
        }
        return [];
    }
    const [item, setItem] = useState("");
    const [listItem, setListItem] = useState(getStorage("todo"));
    useEffect(()=>{
        localStorage.setItem("todo",JSON.stringify(listItem));
    },[listItem]);
    const handleAdd = () => {
        if (!item) return;
        const newListItem = [...listItem];
        let id = new Date();
        newListItem.push({ id: id.getTime(), task: item, isComplete: false });
        setListItem(newListItem);
        setItem("");
    }
    const handleComplete =(id)=>{
        const newListItem=[...listItem];
        for(let ind=0;ind<newListItem.length;ind++){
            if(newListItem[ind].id === id){
                newListItem[ind].isComplete=!newListItem[ind].isComplete;
            }
        }
        setListItem(newListItem);
    }
    const handleDelete = (id) =>{
        setListItem(listItem.filter((ele)=>{
            return ele.id !== id;
        }));
    }
    const handleRemove = () => {
        setListItem([]);
    }
    return (
        <div id="main001">
            <div className="skeleton">
                <div className="input-container">
                    <input type="text"
                        maxLength="30"
                        placeholder="Add item here..."
                        value={item}
                        onChange={(e) => { setItem(e.target.value) }} />
                    {!item && <span className="unformatted-plus" onClick={handleAdd}><i className="fas fa-plus"></i></span>}
                    {item && <span className="formatted-plus" onClick={handleAdd}><i className="fas fa-plus"></i></span>}
                </div>
                {listItem && <div className="taskboxes-container">
                    <Tasks tasks={listItem} handleDelete={handleDelete} handleComplete={handleComplete}/>
                </div>}
                {listItem.length > 1 &&
                    <div className="remBtn-container">
                        <button className="remove-all" onClick={handleRemove}>Remove</button>
                    </div>}
            </div>
        </div>
    );
}
export default Main001;