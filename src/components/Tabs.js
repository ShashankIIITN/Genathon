import React, { useContext, useEffect, useState } from 'react'
import TabContent from './TabContent'
import NewContext from '../context/NewContext'

let lsit = [{
    "Tab": "Home",
    "TabContent": "Home"
},
{

    "Tab": "Profile",
    "TabContent": "Profile"
},
{

    "Tab": "Messages",
    "TabContent": "Messages"
}
]
let lisit = [{
    "Tab1": "Home",
    "Tab2": "Profiles",
    "Tab3": "messages"
}]
function Tabs(props) {
    
    const Contexts = useContext(NewContext) 
    let adder = "v-pills-";
    const [activeTab, setactiveTab] = useState(lsit[0].Tab)

    const [tabData, settabData] = useState(lsit)
    const [tabDataCont, settabDataCont] = useState(null)

    useEffect(() => {
        settabData(Contexts.Tabs);
        // console.log("latesr, " + Contexts.Tabs[0].TabContent[0].bot)
    }, [Contexts.Tabs])


    const LeftTabData = [
        {

            "id": ""
        }
    ]

    return (
        <div className="d-flex align-items-start w-100 h-100">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
                {tabData && tabData.map((e,ind) => {
                   return <button className="nav-link " id={`v-pills-${e.Tab}-tab`}  key={`v-pills-${e.Tab.toLowerCase()}-tab`}  data-bs-toggle="pill" data-bs-target={`#v-pills-${e.Tab.toLowerCase()}`} type="button" role="tab" aria-controls={`v-pills-${e.Tab.toLowerCase()}`} onClick={()=>{setactiveTab(e.Tab)}} aria-selected="false">{e.Tab}</button>
                })}
                {/* <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
                
                <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button> */}
            </div>
            <div className="tab-content d-flex" id="v-pills-tabContent">
            <div className="tab-pane fade  h-100 w-100 show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0"><TabContent data = {[]}/></div>
            {tabData && tabData.map((e,ind) => {
                
                   return tabData && <div className={`tab-pane fade  h-100 w-100 ${activeTab === e.Tab ? "show active " : ""}`} id={`v-pills-${e.Tab.toLowerCase()}`} key={`v-pills-${e.Tab.toLowerCase()}`} role="tabpanel" aria-labelledby={`v-pills-${e.Tab.toLowerCase()}-tab`} tabIndex="0"><TabContent data={e.TabContent}/></div>
                })}
                { 
               /* <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">2</div>
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0">4</div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex="0">5</div> */}
            </div>
        </div>
    )
}

export default Tabs