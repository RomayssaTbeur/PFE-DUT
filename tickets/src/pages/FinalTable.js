import React from 'react'
import { useState, useEffect } from 'react';

export default function FinalTable() {

    const [teams, setTeams] = useState([]);
    const [IdTeam1, setIdTeam1] = useState("");
    const [IdTeam2, setIdTeam2] = useState("");
    const [step, setStep] = useState("");
 
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

    useEffect(() => {

        fetchTeams();
      
    }, []);

    async function ADD() {

        console.log("IdTeam1",IdTeam1);
        console.log("IdTeam2",IdTeam2);
        console.log("step",step);
    }
  return (
    <>
     <div className='col-sm-6 offset-sm-3'>
              <br/>
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
              <select className="form-control" onChange={(e) => setStep(e.target.value)}>
                  <option value="1/8">1/8</option>
                  <option value="1/4">1/4</option>
                  <option value="1/2">1/2</option>
                  <option value="final">final</option>

              </select>
              <br/>
              <button className="btn btn-primary" onClick={ADD}>Add </button>
         </div>
    </>
  )
}
