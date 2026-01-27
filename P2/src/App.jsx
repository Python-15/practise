import { useState } from "react";
import "./App.css";
import Card from "./Card";
function App() {

  const[title, setTitle]= useState('')
  const[details,setDetails]=useState('')
  const [notes, setNotes] = useState([
   
  ]);

  const handleForm = (e) => {
    e.preventDefault(); // reload hone nahi dega from ko submit hone par
    const newNotes = [...notes];
    newNotes.push({title,details})
    setNotes(newNotes)
    console.log(notes);
    setTitle("");
    setDetails('')
  };

  return (
    <div className="main-container">
      <form className="notes-form" onSubmit={(e) => handleForm(e)}>
        <input
          type="text"
          name="title"
          placeholder="Enter Notes"
          value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter you task"
          name="details"
          value={details}
          onChange={(e)=>setDetails(e.target.value)}
        ></textarea>
        <button>Submit</button>
      </form>
      <div className="card-details">
    { notes.map( (data, idx)=><div  key ={idx}><Card notes={data}></Card></div>)}
    </div>
    </div>
  );
}

export default App;
