import React from 'react'

function TabContent(props) {
    const chatData = props.data
    console.log(chatData)
    return (
        <>
            <div className='chatMenu container w-75 '>
                {
                    chatData.map(e=>{
                        return <div className='' >
                        <p className=' text-success h4'>{e.me}: Me</p>
                        <p className=' text-secondary h4'>Bot: {e.bot}</p>
                        </div>
                    })
                }
            </div>
            <div className=" position-absolute bottom-0 w-75 align-self-center input-group mb-3">
                <input type="text" className="form-control" placeholder="Ask about something" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Ask</button>
            </div>
        </>
    )
}

export default TabContent