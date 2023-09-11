import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import './Single.css'

function Single() {
    const param = useParams()
    const [data, setData] = useState();
    useEffect(() => {
        axios.get(`https://sheetdb.io/api/v1/k8mj1pd1lj09a`).then(res => {
            setData(res.data[+param.id]);
        }).catch(err => {
            console.log(err);
        })
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

        <div className='team'>
            <div className='members'><h2>No of team Members : {data['How many team members do you have? (Except you)']}</h2></div>

           {data['How many team members do you have? (Except you)']>0? <table>
                <tr><th>Name</th><th>Register number</th></tr>
                
                <tr><td>{data['Team Member #1 Name']}</td><td>{data['Team Member #1 Reg. No']}</td></tr>
                {data['Team Member #2 Name'] && <tr><td>{data['Team Member #2 Name']}</td><td>{data['Team Member #2 Reg. No']}</td></tr>}
                {data['Team Member #3 Name'] && <tr><td>{data['Team Member #3 Name']}</td><td>{data['Team Member #3 Reg. No']}</td></tr>}
            </table> : null}
        </div>
    </div>) : null;

    return (
        details
    )
}

export default Single