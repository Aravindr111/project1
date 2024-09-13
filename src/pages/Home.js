import React, { useState } from 'react';
import Header from "./homecomponents/header"
import EventsList from "./homecomponents/EventsList";
import AddEventModal from "./homecomponents/AddEvent";
import './homecomponents/Home.css'

function Home(){
const [isModalOpen, setModalOpen] = useState(false);

  
  const openModal = () => setModalOpen(true);

  
  const closeModal = () => setModalOpen(false);

    return(
        <div>
        <Header/>
        
        <div className="App">
        <div className='events'>
       <button className="add-event-button" onClick={openModal}>
        Add Event
       </button>
       <AddEventModal isOpen={isModalOpen} onClose={closeModal} />
       </div>
       </div>
        <EventsList/>
        
        </div>

    )
}

export default Home;