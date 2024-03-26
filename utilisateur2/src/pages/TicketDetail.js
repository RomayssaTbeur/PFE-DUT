import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CCard, CCardImage, CCardBody, CButton } from '@coreui/react'; // Import de @coreui/react
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TicketDetail() {
    const params = useParams();
    const [data, setData] = useState([]);
    const [price, setPrice] = useState([]);
    const getData = async () => {

        try {
            let result = await fetch('http://localhost:8000/api/getticket/' + params.id);
            result = await result.json();
            setData(result);


        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        getData();
        toast.info('Note: you must add the image of the person who will have this ticket');
    }, []);

    
    return (
        <>


            <div className="bg-gray-100 p-8 flex justify-between ">
                <div className="w-1/3">
                    <img

                        src={'http://localhost:8000/' + data.image}
                        alt="Image"
                    />
                </div>
                
                <div className="flex-grow">
                    
                    <div className="mb-8 col-sm-6 offset-sm-3 flex items-center">
                        <select className="form-control mr-2" onChange={(e) => setPrice(e.target.value)}>
                            <option value={data.priceVip}>Vip:  {data.priceVip} </option>
                            <option value={data.priceNormal}>Normal: {data.priceNormal}</option>
                        </select>
                        <input type="file" className="form-control" placeholder='file' />
                        
                    </div>
                    
                    <div className="mb-8 col-sm-6 offset-sm-3 flex justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-36"> Add more</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-60"> buy ticket </button>

                    </div>
                </div>
            </div>




        </>
    )
}
