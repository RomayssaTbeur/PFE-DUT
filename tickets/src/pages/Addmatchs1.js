import { useState, useEffect } from 'react';
function Addmatchs1() {
    const [teams, setTeams] = useState([]);
    const [stadiums, setStadiums] = useState([]);
    const [stadiumId, setStadiumId] = useState("");
    const [IdTeam1, setIdTeam1] = useState("");
    const [IdTeam2, setIdTeam2] = useState("");
    const [matchDate, setMatchDate] = useState("");
    const [matchTime, setMatchTime] = useState("");

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

        fetchTeams();
        fetchStadiums();
        
    }, []);

    const dateObject = new Date(matchDate);
    const timeArray = matchTime.split(':');
    dateObject.setHours(timeArray[0], timeArray[1], 0, 0);


    async function ADD() {

        console.log("IdTeam1",IdTeam1);
        console.log("IdTeam2",IdTeam2);
        console.log("matchDate",matchDate);
        console.log("matchTime",matchTime);
        console.log("stadiumId", stadiumId);


        const formData = new FormData();
        formData.append('equipe_locale', IdTeam1);
        formData.append('equipe_visiteur', IdTeam2);
        formData.append('date_matche', dateObject);
        //formData.append('date_matche', matchDate, matchTime);
       // formData.append('time_match', matchTime);
        formData.append('stadium', stadiumId);

        try {
            const response = await fetch("http://localhost:8000/api/matche", {
                method: 'POST',
                headers:{
                    'Content-Type': 'multipart/form-data',
                    "Accept":"application/json"
                   },
                body: formData
            });
            if (response.ok) {
                alert("Match has been added successfully");
            } else {
                throw new Error('Failed to add match');
            }
        } catch (error) {
            console.error('Error adding match:', error);
        }
    }

    return (
        <>
            <div className='col-sm-6 offset-sm-3'>
                <select className="form-control" onChange={(e) => setIdTeam1(e.target.value)}>
                    <option value="">Select Team 1</option>
                    {teams.map(team => (
                        <option key={team.id} value={team.id} id={team.id}>{team.name}</option>
                    ))}
                </select>

                <br />
                <select className="form-control" onChange={(e) => setIdTeam2(e.target.value)}>
                    <option value="">Select Team 2</option>
                    {teams.map(team => (
                        <option key={team.id} value={team.id} id={team.id}>{team.name}</option>
                    ))}
                </select>

                <br />
                <select className="form-control" onChange={(e) => { setStadiumId(e.target.value) }}>
                    <option value="">Select Stadiums</option>
                    {stadiums.map(stadium => (
                        <option key={stadium.id_stad} value={stadium.id_stad} id={stadium.id_stad}> {stadium.name}</option>
                    ))}
                </select>
                <br />

                <input type="date" className="form-control" placeholder='Match Date' onChange={(e) => setMatchDate(e.target.value)} />
                <br />
                <input type="time" className="form-control" placeholder='Match Time' onChange={(e) => setMatchTime(e.target.value)} />
                <br />

                <button className="btn btn-primary" onClick={ADD}>Add Match</button>
            </div>
        </>
    )
}
export default Addmatchs1