import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Updatematchs() {
    const params = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [teams, setTeams] = useState([]);
    const [stadiums, setStadiums] = useState([]);

    const [team1, setTeam1] = useState("");
    const [team2, setTeam2] = useState("");
    const [stadium, setStadium] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const getData = async () => {
        try {
            let result = await fetch('http://localhost:8000/api/getmatch/' + params.id_match);
            result = await result.json();
            setData(result);

        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    async function fetchTeams() {
        try {
            const response = await fetch("http://localhost:8000/api/listTeam");
            if (response.ok) {
                const data = await response.json();
                setTeams(data);
            } else {
                throw new Error('Failed to fetch teams');
            }
        } catch (error) {
            console.error('Error fetching teams:', error);
        }
    }

    async function fetchStadiums() {
        try {
            const response = await fetch("http://localhost:8000/api/listStadium");
            if (response.ok) {
                const data = await response.json();
                setStadiums(data);
            } else {
                throw new Error('Failed to fetch stadiums');
            }
        } catch (error) {
            console.error('Error fetching stadiums:', error);
        }
    }

    useEffect(() => {
        getData();
        fetchTeams();
        fetchStadiums();

        console.log(data);
    }, []);

    function Updatematch() {
          console.log('team1',team1);
          console.log('team2',team2);
          console.log('stadium',stadium);
          console.log('date',date);
          console.log('time',time);

          const updatedData = {
            equipe_locale: team1,
            equipe_visiteur: team2,
            stadium: stadium,
            date_matche: date,
            time_matche: time,
          };

          fetch(`http://localhost:8000/api/updatematche/${data.id_match}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
           },
          body: JSON.stringify(updatedData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Match updated successfully", data);
            navigate("/addmatchs");
          })
          .catch((error) => {
            console.error("Error updating match", error);
          });
    }
    return (
        <>
            <div className='col-sm-6 offset-sm-3' >
            
            <select className="form-control" onChange={(e) => setTeam1(e.target.value)}>
                    <option value={data.equipe_locale.id}>{data.equipe_locale.name}</option>
                    {teams.map(team => (
                        <option key={team.id} value={team.id} id={team.id}>{team.name}</option>
                    ))}
                </select>
                <br />
                <select className="form-control" onChange={(e) => setTeam2(e.target.value)}>
                    <option value={data.equipe_visiteur.id}>{data.equipe_visiteur.name}</option>
                    {teams.map(team => (
                        <option key={team.id} value={team.id} id={team.id}>{team.name}</option>
                    ))}
                </select>
                <br />
                <select className="form-control" onChange={(e) => { setStadium(e.target.value) }}>
                    <option value={data.stadium.id_stad}>{data.stadium.name}</option>
                    {stadiums.map(stadium => (
                        <option key={stadium.id_stad} value={stadium.id_stad} id={stadium.id_stad}> {stadium.name}</option>
                    ))}
                </select>
            
                <br />
                <input type="date" className="form-control" placeholder='Date Match' defaultValue={data.date_matche} onChange={(e) => setDate(e.target.value)} />
                <br />
                <input type="time" className="form-control" placeholder='Time Match' defaultValue={data.time_matche} onChange={(e) => setTime(e.target.value)} />
                <br />
                <button className="btn btn-primary" style={{ marginBottom: '100 px' }} onClick={Updatematch}>Update match</button>
            </div>


        </>
    )
}
export default Updatematchs