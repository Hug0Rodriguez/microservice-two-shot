import React, {useEffect, useState,} from 'react';

function CreateShoe() {
    const[bins, setBins]= useState([]);

    const[manufacturer,setManufacturer] = useState('');
    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }

    const [model_name, setModel_name] = useState('');
    const handleModel_nameChange = (event)=> {
        const value = event.target.value;
        setModel_name(value)
    }

    const [color, setColor] = useState('');
    const handleColorChange = (event)=> {
        const value = event.target.value;
        setColor(value)
    }

    const [picture_url, setPicture_Url] = useState('');
    const handlePicutre_UrlChange = (event)=> {
        const value = event.target.value;
        setPicture_Url(value)
    }

    const [bin , setBin] = useState('');
    const handleBinChange = (event)=> {
        const value = event.target.value;
        setBin(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.manufacturer = manufacturer;
        data.model_name = model_name;
        data.color = color;
        data.picture_url = picture_url;
        data.bin = bin
        console.log(data);

        const shoeUrl = 'http://localhost:8080/api/shoes/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(shoeUrl,fetchConfig);
        if (response.ok){
            const newShoe = await response.json();
            console.log(newShoe)


        }
    }
    const fetchData = async () => {
        const url = 'http://localhost:8100/api/bins/';
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            setBins(data.bins)
        }
    }



    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new Shoe</h1>
                    <form onSubmit={handleSubmit} id="create-conference-form">
                    <div className="form-floating mb-3">
                        <input value={manufacturer} onChange={handleManufacturerChange} placeholder="manufacturer" required type="text" id="manufacturer" className="form-control" name="manufacturer"/>
                        <label htmlFor="manufacturer">Manufacturer</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={model_name} onChange={handleModel_nameChange} placeholder="model_name" required type="text" id="model_name" name="model_name" className="form-control"/>
                        <label htmlFor="model_name">Model Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={color} onChange={handleColorChange} placeholder="color" required type="text" id="color" name="color" className="form-control"/>
                        <label htmlFor="color">Color</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={picture_url} onChange={handlePicutre_UrlChange} placeholder="picture_url" required type="url" id="picture_url" name="picture_url" className="form-control"/>
                        <label htmlFor="picture_url">picture_url</label>
                    </div>
                    <div className="mb-3">
                    <select value={bin} required name="bin" id="bin" className="form-select" onChange={handleBinChange}>
                        <option value ="">Choose a Bin</option>
                        {bins && bins.map(bin => {
                            return (
                                <option key={bin.href} value={bin.href}>
                                {bin.closet_name}
                                </option>
                            );
                            })}
                    </select>
                    </div>
                    <button className="btn btn-primary">Create</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
        );
    }

export default CreateShoe;
