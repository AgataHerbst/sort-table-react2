import s from './Tbody.module.css';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ReadOnlyRow from '../components/ReadOnlyRow';
import EditableRow from '../components/EditableRow';


function Tbody() {
  const [users, setUsers] = useState([]);
  const [editContactId, setEditContactId] = useState(null);
  const [addFormData, setAddFormData] = useState();


  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  function handleAddFormSubmit(event) {  //функция ДОБАВЛЕНИЯ контакта
    event.preventDefault();


    const newContact = { //добавление нового контакта
      id: nanoid(),
      name: addFormData.name,
      email: addFormData.email,
      address: addFormData.address?.city,
      phone: addFormData.phone,
      website: addFormData.website,
      companyName: addFormData.company?.name
    };

    const newContacts = [...users, newContact];
    setUsers(newContacts);
  };

  function handleEditFormSubmit(obj) {

    const newContacts = [...users];

    const index = users.findIndex((user) => user.id === editContactId);

    newContacts[index] = Object.assign(newContacts[index], obj);

    setUsers(newContacts);
    setEditContactId(null);
  };

  function handleEditClick(event, user) {
    setEditContactId(user.id);
  }

  function handleCancelClick() { //кнопка cancel
    setEditContactId(null);
  };

  function handleDeleteClick(userId) {
    const newContacts = [...users];

    const index = users.findIndex((user) => user.id === userId);

    newContacts.splice(index, 1);

    setUsers(newContacts);
  }

  try {
    const getUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const FinalData = await response.json();
      setUsers(FinalData)
    }

    useEffect(() => {
      getUsers();
    }, [])

  } catch (err) {
    console.log('Поймали ошибку.', err);
  }

  return <>
         
    <div className={s.container}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr className={s.th}>
            <th className={s.th}>Name</th>
            <th className={s.th}>Email</th>
            <th className={s.th}>Address.city</th>
            <th className={s.th}>Website</th>
            <th className={s.th}>Phone</th>
            <th className={s.th}>Company.Name</th>
            <th className={s.th}>Actions</th>
            <th className={s.th}>Details</th>
           </tr>
        </thead>
        <tbody className={s.tbody}>
      
          {users.map((user) => {
            return editContactId === user.id
              ? <EditableRow
                key={user.id}
                editFormData={user}
                handleEditFormSubmit={handleEditFormSubmit}
                handleCancelClick={handleCancelClick}

              />
              : <ReadOnlyRow
                key={user.id}
                user={user}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
               />
          })}

          <tr><td colSpan={8}><h2 className={s.h2}>Add a New Contact</h2>
          </td></tr>

        </tbody>
      </table>
     
     
    
      <form onSubmit={handleAddFormSubmit}>
        <input className={s.input}
          type="text"
          name="name"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input className={s.input}
          type="text"
          name="email"
          required="required"
          placeholder="Enter a email..."
          onChange={handleAddFormChange}
        />
        <input className={s.input}
          type="text"
          name="addressCity"
          required="required"
          placeholder="Enter an address..."
          onChange={handleAddFormChange}
        />
        <input className={s.input}
          type="text"
          name="phone"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input className={s.input}
          type="text"
          name="website"
          required="required"
          placeholder="Enter an website..."
          onChange={handleAddFormChange}
        />
        <input className={s.input}
          type="text"
          name=" companyName:"
          required="required"
          placeholder="Enter an companyName..."
          onChange={handleAddFormChange}
        />
        <button className={s.add} type="submit">Add</button>
      </form>
</div>
  </>

}

export default Tbody;
 