
import './App.css'
import axios from 'axios'
function App() {
   const getData = async ()=>{
   const response=  await axios.get('https://picsum.photos/v2/list')
   console.log(response.data);
   }

  return (
   <div>
  
    <button onClick={getData}>
      Get Button
    </button>
   </div>
  )
}

export default App
