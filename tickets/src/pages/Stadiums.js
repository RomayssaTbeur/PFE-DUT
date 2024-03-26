import { useState } from 'react';
import ShowStadiums from '../component/ShowStadiums'

function Stadiums() {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [capacite, setCapacite] = useState("");
    
    const [file, setFile] = useState(null);

    async function AddStad(){
        const formData = new FormData();
        formData.append('name', name);
        formData.append('address', address);
        formData.append('capacite', capacite);
       formData.append('image', file);

        let result = await fetch("http://localhost:8000/api/stadium", {
        method: 'POST',
         headers:{
        
        "Accept":"application/json"
         },
        body: formData
      });
      console.log(result);
      if(result.ok){
        setName("");
        setAddress("");
        alert("Data has been saved");
        
      }else{
        alert("there is a problem");
      }
    }
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
    }

    return (
        <>

            <div className='col-sm-6 offset-sm-3' >
                <br />
                <input type="text" className="form-control" placeholder='name' onChange={(e) => setName(e.target.value)}  />
                <br />
                <input type="text" className="form-control" placeholder='capacite' onChange={(e) => setCapacite(e.target.value)} />
                <br />
                <input type="text" className="form-control" placeholder='address' onChange={(e) => setAddress(e.target.value)} />
                <br />
                <input type="file" className="form-control" placeholder='file' onChange={handleFileChange} />
                <br />
                <button className="btn btn-primary" style={{ marginBottom: '100 px' }} onClick={AddStad}>Add Stadium</button>
                
            </div>
            <br/>
            <ShowStadiums />
        </>
    )
}
export default Stadiums