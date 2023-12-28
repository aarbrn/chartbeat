import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//inspo from star wars units
const useInput = ({ start }) => {
  const [value, setValue] = useState(start);
  const onChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return [value, onChange];
};

function FoodLog(props) {
  const [image, setImage] = useState('');
  // const [date, setDate] = useInput('');
  const [bloodSugar, setBloodSugar] = useInput('');
  const [bloodPressure, setBloodPressure] = useInput('');
  const [time, setTime] = useInput('');

  const navigate = useNavigate();
  const saveEntry = async (e) => {
    e.preventDefault();
    const body = {
      image,
      date,
      bloodSugar,
      bloodPressure,
      time
    };
    try {
      const response = await fetch('http://localhost:3000/api/entry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log(data);
      console.log('Data Posted!');
      navigate('/homepage')
    } catch (error) {
      console.error('Error in front-end:', error.message);
    }
  };

  const date = new Date();

  return (props.trigger) ? (
    <form className='entries-container'>
      <div className='entries'>
        {image === '' || image === null ? (
          ''
        ) : (
          <img width={250} height={250} src={image} alt='Recipe Image' />
        )}
        <label>
          {' '}
          Date: {date.toLocaleDateString()}
        </label>
        <label>
          {' '}
          Blood Sugar:{' '}
          <input value={bloodSugar || ''} onChange={setBloodSugar}></input>
        </label>
        <label>
          {' '}
          Blood Pressure:{' '}
          <input
            value={bloodPressure || ''}
            onChange={setBloodPressure}
          ></input>
        </label>
        <label>
          {' '}
          Time: <input value={time || ''} onChange={setTime}></input>
        </label>
        <p>Before or After meal?</p>
        {/* link to where you can see the images */}
        <Link to='/foodlog'>Meal Log</Link>
        <button className='save-entry-btn' onClick={saveEntry}>
          Save Entry
        </button>
        <button className='popup-close-btn' onClick={() => props.setTrigger(false)}>Close</button>
        { props.children }
      </div>
    </form>
  ) : '';
}

export default FoodLog;
