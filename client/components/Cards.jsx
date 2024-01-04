import React from 'react'
import { useState } from 'react'
import Card from './Card'

function Cards() {
    const [ items, setItems ] = useState([
        //initial state (images) of game set at random 
        {id: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKgTdIiFehLcSrq_kWjg4os4zjWniIKwvQA&usqp=CAU', state: ''},
        {id: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKgTdIiFehLcSrq_kWjg4os4zjWniIKwvQA&usqp=CAU', state: ''},
        {id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWy0MB3Vfq0wD4VQYt97U-aNS53sBbfshIw&usqp=CAU', state: ''},
        {id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWy0MB3Vfq0wD4VQYt97U-aNS53sBbfshIw&usqp=CAU', state: ''},
        {id: 3, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQovFnT101_w4o0-4BV-4AvYZGYX6vFKOTBw&usqp=CAU', state: ''},
        {id: 3, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQovFnT101_w4o0-4BV-4AvYZGYX6vFKOTBw&usqp=CAU', state: ''},
        {id: 4, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaow2iKQip4vi6bHFTEnuyCJm1hWZOdJ-SdA&usqp=CAU', state: ''},
        {id: 4, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaow2iKQip4vi6bHFTEnuyCJm1hWZOdJ-SdA&usqp=CAU', state: ''},
        {id: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrd-hxtsmh8dIBZ_y6xVm2kln78U5MhTBdg&usqp=CAU', state: ''},
        {id: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrd-hxtsmh8dIBZ_y6xVm2kln78U5MhTBdg&usqp=CAU', state: ''},
        {id: 6, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLBJrfB0yhD85TGjWl7ImTZ7X8qusigwdHg&usqp=CAU', state: ''},
        {id: 6, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLBJrfB0yhD85TGjWl7ImTZ7X8qusigwdHg&usqp=CAU', state: ''},
        {id: 7, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZ-1OJcSNxD_zOaiRyRUol1AKH5NzSOQ2Ig&usqp=CAU', state: ''},
        {id: 7, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZ-1OJcSNxD_zOaiRyRUol1AKH5NzSOQ2Ig&usqp=CAU', state: ''},
        {id: 8, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQp16jfrdh8Eesd9gLxXVspjHRlXyh6eZzQ&usqp=CAU', state: ''},
        {id: 8, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQp16jfrdh8Eesd9gLxXVspjHRlXyh6eZzQ&usqp=CAU', state: ''},
    ].sort(() => Math.random()-0.5))

    //When prev is -1, means that there's no previously clicked card, game is in a state where it is ready to handle the first card click
    const [ prev, setprev ] = useState(-1)
    
    function check(current) {
        //if current index of card clicked matches prev clicked card, cards are set to "correct" meaning there's a match 
        if (items[current].id == items[prev].id) {
            items[current].state = 'correct';
            items[prev].state = 'correct';
            //reset state to -1 when cards match 
            setprev(-1)
        }
        else {
            //set the state of both cards to 'wrong', indicates cards don't match
            items[current].state = 'wrong';
            items[prev].state = 'wrong';
            setItems([...items]);
            // introduce a small delay before resetting the card states back to its original state 
            setTimeout(() => {
                //reset the state of both cards to an empty string, likely reverting their appearance or behavior to the default state
                items[current].state = ''
                items[prev].state=''
                //changes the state of cards by creating shallow copy or orig items array
                //basically re-renders original layout of cards after a certain amt of time (10ms) when cards are wrong 
                setItems([...items])
                setprev(-1)
            },10)
        }
    }

    function handleClick(id){
        //if card hasn't been clicked yet and then first card gets selected, status turns to active
        if(prev== -1){
            items[id].state = 'active';
            //state changes when card gets selected and a shallow copy of array of cards is created with state change 
            setItems([...items]);
            //prev is set to the index(id) of the card that was just clicked 
            setprev(id)
        }
        else {
            //otherwise if 2 cards are selected, run check func
            check(id)
        }
    }

  return (
    <div>
        <div className='boardGame'>
        {/* loop through our items */}
        { items.map((item, index) => (
            //prop drill the handleClick fxn to card component 
            <Card key={index} item={item} id={index} handleClick={handleClick} />
        ))}
        </div>
    </div>
  )
}

export default Cards
