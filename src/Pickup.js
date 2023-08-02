import React , { useState}  from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import "./Pickup.css";
function Pickup() {
    const [pickupLocation, setPickupLocation] =useState('');
    const [dropOffLocation, setDropOffLocation] =useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handlePickupChange = (event) => {
      setPickupLocation(event.target.value);
    };

    const handleDropOffChange = (event) => {
      setDropOffLocation(event.target.value);
    };

    const handleDateChange = (event) => {
      setDate(event.target.value);
    };

    const handleTimeChange = (event) => {
      setTime(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      console.log( {
        pickupLocation,
        dropOffLocation,
        date,
        time,
      });
    };
    return (
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <div className='nav'>
            <ul>
              <li>ONE WAY</li>
              <li>HOURLY HIRE</li>
            </ul>
          </div>
        <div className='inputbox'>
          <LocationOnIcon/>
          <label>
            <span>PICK UP</span>
            <input type="text" placeholder='Pickup Location' value= {pickupLocation} onChange={handlePickupChange} />
          </label>
          </div>
          <br/>
          <br/>
        <div className='inputbox1'>
          <LocationOnIcon/>
          <label>
            <span>DROP OFF</span>
            <input type='text' placeholder='Drop Location' value = {dropOffLocation} onChange={handleDropOffChange} />
          </label>
        </div>
        <br/>

        <div className='inputbox2'>
          <CalendarTodayIcon/>
          <label>
            <span>DATE</span>
            <input type='text' placeholder='dd-mm-yyyy' value={date} onChange={handleDateChange} />
        </label>
        </div>
        <br/>

        <div className='inputbox3'>
          <AccessTimeFilledIcon/>
          <label>
            <span>TIME</span>
            <input type='text' placeholder='--:--' value={time} onChange={handleTimeChange} />
          </label>
          </div>
        <br/>
        <div className='button1'>
        <p className='para'>Chauffer will wait 15 minutes free of charge</p>
        <button type='submit'>SEARCH</button>
        </div>
        </form>
      </div>
    );
}
export default Pickup;
