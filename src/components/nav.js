import './nav.css'
import {BsLaptop,BsPhone,BsFilterLeft} from 'react-icons/bs'



function navbar(){
    return(
        <div className="body">
        <div className="navmid">
           <ul className="list" >
               <li className="midlist">
                   <h1 className="text"><BsFilterLeft/>Admin Dashboard
                   <div className="preview"><p>Preview on:<BsPhone/><BsLaptop/></p></div></h1>
               </li>
            </ul> 
        </div>
        </div>
       
        
        
    );

}
export default navbar