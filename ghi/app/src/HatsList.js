
import React, { useState, useEffect } from 'react'

function HatsList() {
    const [hats, sethat] = useState([])
    async function fetchhats() {
        const response = await fetch('http://localhost:8090/api/hats/')
        console.log(response)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            sethat(data.hats)
        }
    }
    useEffect(() => {
        fetchhats()
    }, [])

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Material</th>
                    <th scope="col">Style</th>
                    <th scope="col">Color</th>
                </tr>
            </thead>
            <tbody>
                {hats.map(hat => {
                    return (
                        <tr key={hat.id}>
                            <td scope="row"><img src={hat.picture_url} alt={`Image of ${hat.material} ${hat.style} ${hat.color}`} className="img-thumbnail" style={{ maxWidth: '20em', maxHeight: '20em' }}/></td>
                            <td>{hat.material}</td>
                            <td> {hat.style}</td>
                            <td> {hat.color}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default HatsList;
