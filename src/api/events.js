const express = require('express');
const router = express.Router();
const Event = require('../../models/Event'); 

router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events); 
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events' });
  }
});

router.post('/add', async (req, res) => {
  try {
    const { name,game, description, date,location } = req.body;

   
    const newEvent = new Event({
      name,
      game,
      description,
      date: new Date(date), 
      location,
    });

  
    await newEvent.save();

    
    res.status(201).json({ message: 'Event added successfully!' });
  } catch (error) {
    console.error('Error adding event:', error); 
    res.status(500).json({ message: 'Failed to add event' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ message: 'Failed to delete event' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ message: 'Event updated successfully', updatedEvent });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update event', error });
  }
});
module.exports = router;

