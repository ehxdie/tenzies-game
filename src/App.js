import logo from './logo.svg';
import Die from './Components/Die'
import React from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [array, setarray] = React.useState([])
  const [tenzies, settenzies] = React.useState(false)

  
 
  React.useEffect(() => {
    setTimeout(function(){
 	//code goes here
    const allheld = array.every(item => item.isHeld)
    const firstvalue = array[0].value
    const allsamevalue = array.every(array => array.value === firstvalue)
    if (allheld && allsamevalue){
      settenzies(true)
      alert('You won')
    }
    }, 1000);
    
  }, [array])


  
 

  
  React.useEffect(() => {
    const oldarray = []
    for (let i = 0; i < 10; i++){
    oldarray.push({
      value:Math.ceil(Math.random() * 6), 
      isHeld:false,
      id:nanoid()
    })}
    setarray(oldarray)
  
    }, [])



    console.log(array)
    function reset(){
        const oldarray = []
        for (let i = 0; i < 10; i++){
        oldarray.push({
          value:Math.ceil(Math.random() * 6), 
          isHeld:false,
          id:nanoid()
        })}
        setarray(oldarray)
        settenzies(false)
    }

    

    function rolldice(){
      setarray(oldarray => oldarray.map(item => {
        return item.isHeld?
          item:
          {
          value:Math.ceil(Math.random() * 6), 
          isHeld:false,
          id:nanoid()
        }


      }))
    }





  function Changebool(id){
    setarray(oldarray => oldarray.map(item => {
      return item.id === id? {...item, isHeld:!item.isHeld}: {...item}
    })
    )
  }

    
  

  const dieelements = array.map(item => {
  return(<Die value = {item.value}
  key = {item.id}
  id = {item.id}
  isHeld = {item.isHeld}
  Changebool = {Changebool}/>)})

  
  
    

  

  
  return (
    <div className="App">
      <main className='main'>
        <div className='text'>
          <h1>Tenzies</h1>
          <p> Roll untill all dice are the same. Click each die to freeze
              it at its current value between rolls.            
          </p>

        </div>
        <div className='grid-container'>
          {dieelements}
        </div>
        <button className='re-roll'
        onClick={tenzies ? reset: rolldice}>{tenzies? 'RESET':'ROLL'}</button>
      
    
     
      </main>
      
    </div>
  );
}

export default App;
