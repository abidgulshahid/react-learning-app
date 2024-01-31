
function ListGroups(){
    const Lists  = ['Abid', 'Gul', 'Shahid', 'Marwat']
    var items = []
    const getItems = () => {
        return items.length === 0 && <p>No item found</p>
    }
    let count = 0
    const counter = () => {
        count = count + 1
        return count

    }
  
    return (
        <>
        {getItems()}
    <h1>List</h1>
<ul className="list-group">

    {Lists.map((items) => (<li onClick={() => console.log(items)} className="list-group-item" key={items}>{items}</li>))}
</ul>
</>

    )
}

export default ListGroups