import './rightside.css'
import {BsDashCircle,BsGeoAlt,BsInfoCircleFill} from 'react-icons/bs'

function rightsidebar(){
    return (
        <>
        <div>
          <ul className="listR">
          <span><li><BsDashCircle/></li></span>
          <span><li><BsGeoAlt/></li></span>
          <span><li><BsInfoCircleFill/></li></span>
          </ul>  
        </div>
        </>
    );
}
export default rightsidebar