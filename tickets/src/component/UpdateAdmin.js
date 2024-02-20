import { useParams ,useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";

function UpdateAdmin(){
    const params = useParams();
    const [data,setData]=useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const getData = async () => {
        try {
            let result=await fetch('http://localhost:8000/api/admin/'+params.id);
            result= await result.json();
            setData(result);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };


      useEffect(() => {
        getData();
        
    }, []);

    function onUpdateAdmin(){
        const updatedData = {
            name: name,
            email: email,
          };

        fetch(`http://localhost:8000/api/admin/${data.id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
       },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Stadium updated successfully", data);
        navigate("/admins");
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
                <input type="text" className="form-control" placeholder='address'  defaultValue={data.email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <button className="btn btn-primary" style={{ marginBottom: '100 px' }} onClick={onUpdateAdmin}>Update Stadium</button>
            </div>
       
        </>
    )
}
export default UpdateAdmin