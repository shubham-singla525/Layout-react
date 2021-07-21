import './leftside.css'
import {BsCollectionFill, BsColumnsGap, BsEnvelopeFill,BsSubtract,BsBoundingBox} from 'react-icons/bs'
function leftsidebar(){
    return (
        <>
        <div>
          <ul className="listL">
          <li className="intro"><BsBoundingBox/></li>
          <li><BsCollectionFill/><br></br>Events</li>
          <li><BsColumnsGap/><br></br>Teams</li>
          <li><BsEnvelopeFill/><br></br>Analytics</li>
          <li><BsSubtract/><br></br>Result</li>
          </ul>  
        </div>
        </>
    );

}
export default leftsidebar