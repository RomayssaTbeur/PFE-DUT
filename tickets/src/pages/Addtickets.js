import { useState, useEffect } from 'react';
import  ShowTickets  from "../component/ShowTickets"

function Addtickets()
{
   /*id_ticket	matche	name	description	stadium_name	price	type	image*/
   const [matchs, setMatchs] = useState([]);
   const [selectedMatch, setselectedMatch] = useState('');
   const [description, setDescription] = useState('');
   const [price, setPrice] = useState('');
   const [selectedType, setselectedType] = useState('');
   const [image, setImage] = useState(null);
   
   async function fetchMatchs() {
    try {
        const response = await fetch("http://localhost:8000/api/listmatch");
        if (response.ok) {
            const data = await response.json();
            setMatchs(data);
        } else {
            throw new Error('Failed to fetch Matchs');
        }
    } catch (error) {
        console.error('Error fetching matchs:', error);
    }
   }
   useEffect(() => {
    fetchMatchs();
    
  }, []);

  async function ADD() {
    console.log('selectedMatch',selectedMatch);
    console.log('description',description);
    console.log('price',price);
    console.log('selectedType',selectedType);

       const formData = new FormData();

        formData.append('matche', selectedMatch);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('type', selectedType);
        formData.append('image', image);

        try {

            const response = await fetch("http://localhost:8000/api/addticket", {
                method: 'POST',
                headers:{
                    
                    "Accept":"application/json"
                   },
                body: formData
            });
            if (response.ok) {
                alert("Ticket has been added successfully");
            } else {
                throw new Error('Failed to add ticket');
            }
        } catch (error) {
            console.error('Error adding ticket:', error);
        }
    
        
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  }
 
    return(
        <>
            <div className='col-sm-6 offset-sm-3'>
              
              <select className="form-control" onChange={(e) => setselectedMatch(e.target.value)}>
                  <option value="">Select match</option>
                  {matchs.map(match => (
                      <option key={match.id_match} value={match.id_match} id={match.id_match}>{match.equipe_locale.name} vs {match.equipe_visiteur.name}</option>
                  ))}
              </select>
              <br/>
              <input type="text" className="form-control" placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
              <br />
              <input type="text" className="form-control" placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
              <br />
              <select className="form-control" onChange={(e) => setselectedType(e.target.value)}>
                      <option value="">Select type</option>
                      <option  value='Vip' id='Vip'>Vip</option>
                      <option  value='Normal' id='Normal'>Normal</option>
              </select>
              <br/>
              <input type="file" className="form-control" placeholder='Image ticket' onChange={handleFileChange} />
              <br />
              <button className="btn btn-primary" onClick={ADD}>Add ticket</button>
        </div>
             
          <ShowTickets />
        </>
    )
}
export default Addtickets