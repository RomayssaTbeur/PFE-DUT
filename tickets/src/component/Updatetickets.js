import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Updatetickets() {
    const params = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const [matchs, setMatchs] = useState([]);
    const [selectedMatch, setselectedMatch] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [selectedType, setselectedType] = useState('');
    const getData = async () => {
        try {
            let result = await fetch('http://localhost:8000/api/getticket/' + params.id_ticket);
            result = await result.json();
            setData(result);

        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

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
        getData();
        fetchMatchs();
    }, []);


    function UpdateticketOp() {
          console.log(selectedMatch);
          console.log(description);
          console.log(price);
          console.log(selectedType);

          const updatedData = {
            matche: selectedMatch,
            description: description,
            stadium: price,
            type: selectedType,
            
          };

          fetch(`http://localhost:8000/api/ticket/${data.id_ticket}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
           },
          body: JSON.stringify(updatedData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("ticket updated successfully", data);
            navigate("/addtickets");
          })
          .catch((error) => {
            console.error("Error updating ticket", error);
          });
          
    }

    return (
        <>
            <div className='col-sm-6 offset-sm-3' >
            <select className="form-control" onChange={(e) => setselectedMatch(e.target.value)}>
                  <option value={data.matche.id_match}> {data.matche.equipe_locale.name} vs {data.matche.equipe_visiteur.name}</option>
                  {matchs.map(match => (
                      <option key={match.id_match} value={match.id_match} id={match.id_match}>{match.equipe_locale.name} vs {match.equipe_visiteur.name}</option>
                  ))}
              </select>
            
              <br/>
                <input type="text" className="form-control" placeholder='Description' defaultValue={data.description} onChange={(e) => setDescription(e.target.value)} />
                <br />
                <input type="text" className="form-control" placeholder='Price ' defaultValue={data.price} onChange={(e) => setPrice(e.target.value)} />
                <br />
                <select className="form-control" onChange={(e) => setselectedType(e.target.value)}>
                    <option value={data.type}>{data.type}</option>
                    <option value='Vip' id='Vip'>Vip</option>
                    <option value='Normal' id='Normal'>Normal</option>
                </select>
                <br />
                
                <button className="btn btn-primary" style={{ marginBottom: '100 px' }} onClick={UpdateticketOp}>Update ticket</button>
            </div>
        </>
    )
}
export default Updatetickets