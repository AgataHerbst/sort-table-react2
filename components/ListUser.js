import OneUser from '../components/OneUser';
import Fetch from '../components/Fetch';
import { useState } from 'react';

function ListUser({ users: propsUsers }) {
  const [detailsId, setDetailsId] = useState([]);
  
return <>
<div>
  <tbody>
   <tr>
    <td>
    { propsUsers.map((user,key) =><OneUser user={user} key={key}/>)}
    { detailsId.map(id => <Fetch id={id} key={id} />)}
    </td>
  </tr>
  </tbody>
  </div>
  </>
 };

 export default  ListUser;