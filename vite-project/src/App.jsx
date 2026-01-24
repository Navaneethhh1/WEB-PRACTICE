import { useState } from "react"



function App() {
  return(
    <Header></Header>
    // <CalculatePercentage></CalculatePercentage>
  )
  
}

function Header(){
  const [amount , setAmount] = useState("");
  const [percentage , setPercentage] = useState("");
  const [calc , setCalc] = useState("");

  
  function CalculateInterest(){

    const res  = amount * (percentage/100) 
    setCalc(res);
  }

  return(
    <div>

    <div style={{backgroundColor :'#6D8196',
       width: '100vw', 
       height : 160,
       display:"flex" ,
       flexDirection:"column",
       justifyContent:"center",
       alignContent:"center",
       alignItems:"center"}}>

      <h1>Percentage Calculator</h1>
      <h3>Simple and Precise Calculations</h3>
    </div>
    <div>
      <input type="number" name="" id="Amount"  placeholder="Enter Amount" onChange={(e) => setAmount(e.target.value)}/>
      <input type="number" name="" id="Percantage" placeholder="Enter Percentage" onChange={(e)=> setPercentage(e.target.value)}/>
      <button onClick={CalculateInterest}>Calculate Interest  </button>
    </div>
    <div>
      {calc}
    </div>
    </div>
    

    
  )
}



export default App
