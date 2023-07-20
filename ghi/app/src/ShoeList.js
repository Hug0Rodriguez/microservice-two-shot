import React,{ useState } from 'react';

function ShoeList(props) {
    const [visibleShoeId, setVisibleShoeId] = useState(null);
    function refreshShoes(){
        window.location.reload(false)
    }
    async function deleteShoe(id) {
        const shoeUrl = `http://localhost:8080/api/shoes/${id}/`;
        const fetchConfig = {
            method: 'delete',
        };
        const response = await fetch(shoeUrl, fetchConfig);
        if(response.ok){
            refreshShoes();
        }
    }
    return (
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Model Name</th>
                <th>Details</th>
            </tr>
        </thead>
        <tbody>
            {props.shoes && props.shoes.map(shoe => {
                return(
                    <tr key={shoe.id}>
                        <td>{shoe.model_name}</td>
                        <td><img src={shoe.picture_url} style={{width: '100px', height: '100px'}}/></td>
                        <td>
                            <button onClick={() => setVisibleShoeId(visibleShoeId === shoe.id ? null:shoe.id)} style={{backgroundColor: 'green'}}>Show Details</button>
                            {visibleShoeId === shoe.id && (
                                <div>
                                    <p>Manufacturer:{shoe.manufacturer}</p>
                                    <p>color:{shoe.color}</p>
                                    <button onClick={() => deleteShoe(shoe.id)} style={{backgroundColor: 'red'}}>Delete</button>
                                </div>
                            )}
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
    );
}

export default ShoeList;
