import s from './ReadOnlyRow.module.css';
import {useState} from 'react';
import OneUser from '../components/OneUser';

function ReadOnlyRow ({user, handleEditClick, handleDeleteClick}) {

  const [showUser, setShowUser] = useState([]);
    return<>
    <tr className={s.td}>
   <td>{user.name}</td>
   <td>{user.email}</td>
   <td>{user.address?.city}</td>
   <td>{user.phone}</td>
   <td>{user.website}</td>
   <td>{user.company?.name}</td>
   <td>
    <button className={s.edit} type='button' onClick={(event) => handleEditClick(event, user)}>Edit</button>
    <button className={s.delete} type='button' onClick={()=>handleDeleteClick(user.id)}>Delete</button>
   </td>
    
     {showUser ? <button onClick={_=>setShowUser(false) }>Details</button> : <OneUser user={user}/>}
     </tr>
    
    </>
}
export default ReadOnlyRow;