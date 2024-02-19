

import { useState, useEffect } from 'react';

function Addmatchs() {
    const [teams, setTeams] = useState([]);
    const [selectedTeam1, setSelectedTeam1] = useState("");
    const [selectedTeam2, setSelectedTeam2] = useState("");
    const [matchDate, setMatchDate] = useState("");
    const [matchTime, setMatchTime] = useState("");
    const [stadiumName, setStadiumName] = useState("");

    useEffect(() => {
        async function fetchTeams() {
            try {
                const response = await fetch("http://localhost:8000/api/list");// api/equipes
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

        fetchTeams();
    }, []);

    async function ADD() {
        const formData = new FormData();
        formData.append('team1', selectedTeam1);
        formData.append('team2', selectedTeam2);
        formData.append('matchDate', matchDate);
        formData.append('matchTime', matchTime);
        formData.append('stadiumName', stadiumName);

        try {
            const response = await fetch("http://localhost:8000/api/matche", {// api/addmatchs
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
        <div>
            <div className='col-sm-6 offset-sm-3'>
                <br />
                <select className="form-control" onChange={(e) => setSelectedTeam1(e.target.value)}>
                    <option value="">Select Team 1</option>
                    {teams.map(team => (
                        <option key={team.id} value={team.id}>{team.name}</option>
                    ))}
                </select>
                <br />
                <select className="form-control" onChange={(e) => setSelectedTeam2(e.target.value)}>
                    <option value="">Select Team 2</option>
                    {teams.map(team => (
                        <option key={team.id} value={team.id}>{team.name}</option>
                    ))}
                </select>
                <br />
                <input type="date" className="form-control" placeholder='Match Date' onChange={(e) => setMatchDate(e.target.value)} />
                <br />
                <input type="time" className="form-control" placeholder='Match Time' onChange={(e) => setMatchTime(e.target.value)} />
                <br />
                <input type="text" className="form-control" placeholder='Stadium Name' onChange={(e) => setStadiumName(e.target.value)} />
                <br />
                <button className="btn btn-primary" onClick={ADD}>Add Match</button>
            </div>
        </div>
    );
}

export default Addmatchs;

