import OneUser from '../components/OneUser';
import Fetch from '../components/Fetch';
import { useState } from 'react';

function ListUser({ users: propsUsers }) {
  const [detailsId, setDetailsId] = useState([]);
  
return <>
      <tr>
    <tbody>
    { propsUsers.map((user,key) =><OneUser user={user} key={key}/>)}
    { detailsId.map(id => <Fetch id={id} key={id} />)}
    </tbody>
  </tr>
  </>
 };

 export default  ListUser;