import { useParams ,useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";

function UpdateTeam(){
    const params = useParams();
    const [data,setData]=useState([]);
    const [newname, setNewName] = useState("");
    const [newimage, setNewImage] = useState("");
    const navigate = useNavigate();

    const getData = async () => {
    
        try {
            let result=await fetch('http://localhost:8000/api/equipe/'+params.id);
            result= await result.json();
            setData(result);


        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };

      useEffect(() => {
        getData();
      }, []);

     useEffect(() => {
        console.log("data", data);
        console.log("data.name", data.name);
        console.log("data.image", data.image);
        
      }, [data]);

      const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setNewImage(selectedFile);
      }
    
     /* async function OnUpdate() {
        const formData = new FormData();
        formData.append('name', newname);
        formData.append('image', newimage);
        
        console.log("form",formData);
        try {
          const response = await fetch(`http://localhost:8000/api/equipe/${params.id}`, {
            method: 'PUT',
            body: formData
          });
      
          if (response.ok) {
            const updatedData = await response.json();
            setData(updatedData);
            navigate('/teams');
          } else {
            console.error('Error updating team:', response.statusText);
          }
        } catch (error) {
          console.error('Error updating team:', error);
        }
      }*/

      async function OnUpdate() {
        const formData = new FormData();
        formData.append('name', newname);
      
        // Create a File object from newimage
        if (newimage instanceof File) {
          formData.append('image', newimage);
        }
      
        try {
          // Set the Content-Type header to multipart/form-data
          const response = await fetch(`http://localhost:8000/api/equipe/${params.id}`, {
            method: 'PUT',
            body: formData,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
      
          if (response.ok) {
            const updatedData = await response.json();
            setData(updatedData);
            navigate('/teams');
          } else {
            console.error('Error updating team:', response.statusText);
          }
        } catch (error) {
          console.error('Error updating team:', error);
        }
      }
    return(
        <>
           <div className='col-sm-6 offset-sm-3' >
        <br />
        <input type="text" className="form-control" placeholder='name' defaultValue={data.name} onChange={(e) => setNewName(e.target.value)} />
        <br />
        <input type="file" className="form-control" placeholder='file' defaultValue={data.image} onChange={handleFileChange} />
        <br />
        <img src={'http://localhost:8000/'+data.image} style={{width:'50 px',height:'50 px'}} />
        <br />
        <button className="btn btn-primary" style={{marginBottom:'100 px'}} onClick={OnUpdate} >Update Team</button>
      </div>
        </>
    )
}
export default UpdateTeam