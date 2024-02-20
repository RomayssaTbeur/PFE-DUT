import { useParams ,useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";

function UpdateStadiums(){
    
    const params = useParams();
    const [data,setData]=useState([]);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const getData = async () => {
        try {
            let result=await fetch('http://localhost:8000/api/stadium/'+params.id_stad);
            result= await result.json();
            setData(result);

        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };


      useEffect(() => {
        getData();
    }, []);
    
    function UpdateStad(){
        const updatedData = {
            name: name,
            address: address,
          };

        fetch(`http://localhost:8000/api/stadium/${data.id_stad}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
       },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Stadium updated successfully", data);
        navigate("/stadiums");
      })
      .catch((error) => {
        console.error("Error updating stadium", error);
      });
    }
    
    return(
        <>
             <div className='col-sm-6 offset-sm-3' >
                <br />
                <input type="text" className="form-control" placeholder='name' defaultValue={data.name} onChange={(e) => setName(e.target.value)}/>
                <br />
                <input type="text" className="form-control" placeholder='address'  defaultValue={data.address} onChange={(e) => setAddress(e.target.value)} />
                <br />
                <button className="btn btn-primary" style={{ marginBottom: '100 px' }} onClick={UpdateStad}>Update Stadium</button>
            </div>
       
        </>
    )
}
export default UpdateStadiums