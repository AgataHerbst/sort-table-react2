 import OnePost from '../components/OnePost';
 import {useState} from 'react';
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
        <span> 📧<a href={`mailto:${email}`}>{email}</a>📞<a href={`tel:${phone}`}>{phone}</a></span>
        <span>🌐<a href={`http://${website}`}>{website}</a></span>
        <span>{addressCity}</span>
        <span><b>{companyName}</b></span>
      </fieldset>

      {flag ? <button onClick={_=>setFlag(false) }>Show posts</button> : <OnePost id={id}/>}
          
        </>
      )
    }