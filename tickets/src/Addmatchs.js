import Header from './header';
import { useState } from 'react';

function Addmatchs() {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [matchDate, setMatchDate] = useState("");
    const [matchTime, setMatchTime] = useState("");
    const [stadiumName, setStadiumName] = useState("");
    const [file, setFile] = useState("");

    async function ADD() {
        console.warn(name1, name2, matchDate, matchTime, stadiumName, file);
        const formData = new FormData();
        formData.append('name1',name1);
        formData.append('name2',name2);
        formData.append('matchDate',matchDate);
        formData.append('matchTime',matchTime);
        formData.append('stadiumName',stadiumName);
        formData.append('file',file);

        let result=await fetch("http://localhost:8000/api/Addmatchs",{
            method:'POST',
            body:formData
        })
        alert("data has been saved")
        

    }

    return (
        <div>
            <div className='col-sm-6 offset-sm-3'>
                <br />
                <input type="text" className="form-control" placeholder='name1' onChange={(e) => setName1(e.target.value)} />
                <br />
                <input type="text" className="form-control" placeholder='name2' onChange={(e) => setName2(e.target.value)} />
                <br />
                <input type="date" className="form-control" placeholder='matchDate' onChange={(e) => setMatchDate(e.target.value)} />
                <br />
                <input type="time" className="form-control" placeholder='matchTime' onChange={(e) => setMatchTime(e.target.value)} />
                <br />
                <input type="text" className="form-control" placeholder='stadiumName' onChange={(e) => setStadiumName(e.target.value)} />
                <br />
                <input type="file" className="form-control" placeholder='file' onChange={(e) => setFile(e.target.files[0])} />
                <br />

                <button className="btn btn-primary" onClick={ADD}> Add Match</button>
            </div>
        </div>
    );
}

export default Addmatchs;
