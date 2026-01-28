import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Card(){

  const[weather , setWeather] = useState(null);
  const[city , setCity] = useState("")
  function getWeather(){
      console.log(city)
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1ddac358337856f43bb9383e1fe67ad9&units=metric
      `).then((response)=> response.json())
      .then((data)=>{
      console.log(data)

      setWeather(data)
})
  }

  return(

    <div>
    <div style={{height : 350,
      width : 450,
      backgroundColor : "black",
      borderRadius:15
    }}>
      <div style={{height:40 , display:"",
        
      }}>

     <h3 style={{padding:20}}> Get weather of your City </h3>
      </div>
      <br />
      
      <input 
  style={{
    height: 35, 
    borderRadius: 7, 
    boxShadow: 'none',
    width: 250,
    padding: '0 10px',
    fontSize: 16,
    border: '2px solid #444',
    outline: 'none',
    transition: 'border 0.3s ease'
  }}
  type="text" 
  placeholder='Enter City'
  onChange={(e) => setCity(e.target.value)}
  onFocus={(e) => e.target.style.border = '2px solid #6c63ff'}
  onBlur={(e) => e.target.style.border = '2px solid #444'}
/>

<button 
  onClick={getWeather}
  style={{
    height: 37,
    marginLeft: 10,
    padding: '0 20px',
    borderRadius: 7,
    border: 'none',
    backgroundColor: '#6c63ff',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(108, 99, 255, 0.3)'
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = '#5a52d5';
    e.target.style.transform = 'translateY(-2px)';
    e.target.style.boxShadow = '0 6px 12px rgba(108, 99, 255, 0.4)';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = '#6c63ff';
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = '0 4px 6px rgba(108, 99, 255, 0.3)';
  }}
> 
  Get weather
</button>
      <br />
      <br />
      <br />
      {weather && weather.cod === 200 &&  (
          <div>
            <p>City: {weather.name}</p>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Condition: {weather.weather[0].description}</p>
          </div>
        )}
      {weather && weather.cod === "404" &&  (
          <div style={{color: "red", fontSize: 18}}>
            <h3>City not found </h3>
          </div>
        )}

    </div>
  </div>
    )
}
function App() {
  

  return (
     <div style={{
      height: '100vh',
      width: '100vw',
      backgroundImage: "url('https://img.freepik.com/free-photo/white-clouds-blue-sky_326561-7.jpg?semt=ais_user_personalization&w=740&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
      padding: 0
    }}>

      <Card></Card>
    </div>
  )
}

export default App
