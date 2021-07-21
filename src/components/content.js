import './content.css'
import {BsXCircle,BsToggleOff,BsToggleOn,BsLayers } from 'react-icons/bs'


function content(){
    return (
        <div>
             <div className="content">
           
           <div className="LeftSetting">
               <ul>
               <li class="list-search">
                   <p>Event Settings</p>
                  
               </li>
               <li>
               <hr/>
                   <p>General</p>
               </li>
               <li>
               <p>Privacy</p>
               
               </li>
               <li className="features" >
               <p>Features</p>
               
               </li>
               <li>
               <p>Customisation</p>
               
               </li>
               <li>
               <p>Integration</p>
               
               </li>
               <li>
               <p>Session Settings</p>
               
               </li>
               <li>
               <p>My plans</p>
               
               </li>
               </ul>
           </div>
           <div className="RightSetting">
               <span className="cross"><BsXCircle/></span>
           <ul>
               <li className="right-heading">
                   <h2><BsLayers/> Audience Q & A
                   <span className="toggleBtn"><BsToggleOn/></span></h2>
               </li>
               <hr/>
               <li>
               <h3>Moderation
               <span className="toggleBtn"><BsToggleOff/></span>
               </h3>
               <p>Easily review all questions before they go live</p>
               </li>
               <li>
               <h3>Labels
               <span className="toggleBtn"><BsToggleOn/></span>
               </h3>
               <p>Categorize and filter questions.</p>
               </li>
               <li>
               <h3>Downvotes
               <span className="toggleBtn"><BsToggleOn/></span>
               </h3>
               <p>Enable downvoting of questions.</p>
               </li>
               <li>
               <h3>Replies
               <span className="toggleBtn"><BsToggleOn/></span>
               </h3>
               <p>Enable participants to reply to or comment on questions.</p>
               </li>
               <li>
               <h3>Anonymous questions
               <span className="toggleBtn"><BsToggleOn/></span>
               </h3>
               <p>Let your participants send anonymous questions</p>
               </li>
               <li>
               <h3>Maximum question length
               <span className="toggleBtn"><BsToggleOff/></span></h3>
               <p>Show number of votes instead of percentage.</p>
               <button>160</button>
               <button>240</button>
               <button className="thirdbut">300</button>
               </li>   
               <li>
               <h3>Close questions
               <span className="toggleBtn"><BsToggleOn/></span>
               </h3>
               <p>Prevent the participants from sending new questions to your event.</p>
               </li>               
               </ul>
           </div>
       </div> 
    </div>
    );
}
export default content;