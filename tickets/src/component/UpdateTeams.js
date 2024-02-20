import { useParams ,useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";

function UpdateTeams(){
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
    console.log("data",data);
    console.log("data.name",data.name);
    console.log("data.image",data.image);
}, []);
/*
const handleFileChange = (e) => {
  const selectedFile = e.target.files[0];
  setNewImage(selectedFile);
}
function UpdateTeam(){
  const updatedData = {
    name: newname,
    image: newimage,
  };

  console.log(updatedData);

  fetch(`http://localhost:8000/api/equipe/${data.id}`, {
    method: "PUT",
    headers: {
    "Content-Type": "application/json",
   },
  body: JSON.stringify(updatedData),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Team updated successfully", data);
    navigate("/teams");
  })
  .catch((error) => {
    console.error("Error updating stadium", error);
  });

}*/

    return(
      <>
       <div className='col-sm-6 offset-sm-3' >
        <br />
        <input type="text" className="form-control" placeholder='name' defaultValue={data.name} onChange={(e) => setNewName(e.target.value)} />
        <br />
        <input type="file" className="form-control" placeholder='file' defaultValue={data.image}  />
        <br />
        <img src={'http://localhost:8000/'+data.image} style={{width:'50 px',height:'50 px'}} />
        <br />
        <button className="btn btn-primary" style={{marginBottom:'100 px'}}  >Update Team</button>
      </div>
      </>
    )

}
export default UpdateTeams

