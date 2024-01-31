
function ListGroups(){
    const Lists  = ['Abid', 'Gul', 'Shahid', 'Marwat']
    var items = []
    const getItems = () => {
        return items.length === 0 && <p>No item found</p>
    }
  
    return (
        <>
        {getItems()}
    <h1>List</h1>
<ul className="list-group">

    {Lists.map((items) => (<li key={items}>{items}</li>))}
</ul>
</>

    )
}

export default ListGroups