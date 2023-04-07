 import OnePost from '../components/OnePost';
 import {useState} from 'react';
 import Fetch from '../components/Fetch';

export default function OneUser({
    user: {
        id, name, username, email,
        address: {addressCity },
        phone, website,
        company: {
        name: companyName,
         
        }
      } }) {

        const [flag, setFlag]=  useState(true);

      return (
        <>
        <fieldset>
        <legend>#{id} {username}</legend>
        <h3>{name}</h3>
        <td> 📧<a href={`mailto:${email}`}>{email}</a>📞<a href={`tel:${phone}`}>{phone}</a></td>
        <td>🌐<a href={`http://${website}`}>{website}</a></td>
        <td>{addressCity}</td>
        <td><b>{companyName}</b></td>
      </fieldset>

      {flag ? <button onClick={_=>setFlag(false) }>Show posts</button> : <Fetch id={id}/>}
          
        </>
      )
    }