import { MouseEvent, useState } from "react"

function ListGroups(){
    const Lists  = ['Abid', 'Gul', 'Shahid', 'Marwat']
    const items = []
    const getItems = () => {
        return items.length === 0 && <p>No item found</p>
    }

    const [count, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(count + 1 )
    }

  
    return (
        <>
        {getItems()}
    <h1>List</h1>
<ul className="list-group">

    {Lists.map((items) => (<li onClick={() => console.log(items)} className="list-group-item" key={items}>{items}</li>))}
    <button className="btn btn-success" onClick={() => {handleClick()}}>Click Me! {count}</button>
</ul>
</>

    )
}

export default ListGroups