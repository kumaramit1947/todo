const Tasks = ({ tasks,handleDelete, handleComplete }) => {
    return (
        <div id="task-boxes">
            {
                tasks.map((ele, ind) => {
                    return (<div className="task" key={ind}>
                        <div className={`task-value ${ele.isComplete?"completed":""}`}>{ele.task}</div>
                        <div className="icon task-edit" onClick={()=>{handleComplete(ele.id)}}>
                        {ele.isComplete && (<i className="far fa-check-square"></i>)}
                        {!ele.isComplete && (<i className="far fa-square"></i>)}
                        </div>
                        <div className="icon task-delete" onClick={()=>{handleDelete(ele.id)}}>
                        <i className="far fa-trash-alt"></i>
                        </div>
                    </div>);
                })
            }
        </div>
    );
}
export default Tasks;