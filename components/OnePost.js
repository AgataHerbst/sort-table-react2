import {useState,useEffect} from 'react';
import OnePost from '../components/OnePost';

export default function FetchPost({ id }) {
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchData() {
    try{
      setError(null);
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
      if (!res.ok) throw(new Error(res.status))
      let p = await res.json();
      setPost(p);
    } catch(err) {
      setError(err);
      }
}
fetchData();
},[id]); 
  if (error)
    return <div>Ошибка: {error.message}</div>
  else if (post?.id)
    return <OnePost post={post} />
  else
    return <div className="spinner" />
}