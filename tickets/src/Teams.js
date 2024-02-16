import { useState } from 'react';

function Teams() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null); // Modify the initial state of the file to null

  async function ADD() {
    console.log(name, file);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', file);

    let result = await fetch("http://localhost:8000/api/equipe", {
      method: 'POST',
      headers:{
        
        "Accept":"application/json"
       },
      body: formData
    });
    console.log(result);

    if(result.ok){
      alert("Data has been saved");
    }

   
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  }

  return (
    <div>
      <div className='col-sm-6 offset-sm-3'>
        <br />
        <input type="text" className="form-control" placeholder='name1' onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="file" className="form-control" placeholder='file' onChange={handleFileChange} />
        <br />
        <button className="btn btn-primary" onClick={ADD}>Manage Teams</button>
      </div>
    </div>
  );
}

export default Teams;