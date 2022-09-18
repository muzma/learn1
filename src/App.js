import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() =>{
    fetchData()
  }, [])

  const fetchData = async() =>{
    const{data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
    
  setPosts(data)
  }

  return (
    <div className="App">
      {posts.map(post => (
        <div key={post.id}>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </div>
      ))}
      
    </div>
  );
}

export default App;
