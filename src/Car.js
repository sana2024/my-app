import{useState} from "react";
import './App.css';
function Myform(props){
     
 const [color, setColor] = useState("blue");
 
 return <> 
 <h1>My faviorate color is {color}</h1>
<button onClick={background}>Blue</button>
<button onClick={()=> setColor("Yellow")}>Yellow</button>
<button onClick={()=> setColor("Green")}>Green</button>
   </>  
 }
 function background(){
     if(Myform.setColor="blue"){
     <header className="App-header"></header>
     }
 }
export default Myform;