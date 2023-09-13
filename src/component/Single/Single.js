import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Spinner from '../Spinner/Spinner'
import './Single.css'

function Single() {
    const param = useParams()
    const [data, setData] = useState();
    useEffect(() => {
        // axios.get(`https://sheetdb.io/api/v1/yy2hi54tj0omq`).then(res => {
        //     setData(res.data[+param.id]);
        // }).catch(err => {
        //     console.log(err);
        // })

        const res = JSON.parse(localStorage.getItem('eng001'));;
        setData(res[+param.id])
    }, [])

    const details = data ? (<div className='single'>
        <div className='main'>
            <div className='left shadow'>
                <h1>{data.Name}</h1>
                <h1>{data['Register number']}</h1>
                <h2>{data.Department}</h2>
                <h2>{data.Year}</h2>
            </div>
            <div className='right'><h2>Phone: {data['Mobile No']}</h2></div>
        </div>

        <div className='events'>
            <h2>Events :</h2>
            <div className='enent'>
                {data['Choose Event'].split(",").map(el => <h3> {`=> ${el}`}</h3>)}
            </div>
        </div>

        <div className='team'>
            <div className='members'><h2>No of team Members : {data['How many team members do you have? (Except you)']}</h2></div>

            {data['How many team members do you have? (Except you)'] > 0 ? <table>
                <tr><th>Name</th><th>Register number</th></tr>

                <tr><td>{data['Team Member #1 Name']}</td><td>{data['Team Member #1 Reg. No']}</td></tr>
                {data['Team Member #2 Name'] && <tr><td>{data['Team Member #2 Name']}</td><td>{data['Team Member #2 Reg. No']}</td></tr>}
                {data['Team Member #3 Name'] && <tr><td>{data['Team Member #3 Name']}</td><td>{data['Team Member #3 Reg. No']}</td></tr>}
            </table> : null}
        </div>
    </div>) : <Spinner />;

    return (
        details
    )
}

export default Single