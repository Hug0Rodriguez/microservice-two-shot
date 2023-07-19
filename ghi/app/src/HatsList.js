function HatsList(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Material</th>
                    <th>Style</th>
                    <th>Color</th>
                </tr>
            </thead>
            <tbody>
                {props.hats.map(hat => {
                    return (
                        <tr key={hat.id}>
                            <td>{ hat.material }</td>
                            <td>{ hat.style }</td>
                            <td>{ hat.color }</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}


export default HatsList
