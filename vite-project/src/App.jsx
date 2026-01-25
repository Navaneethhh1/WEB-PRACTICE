  import { useState } from "react"



  function App() {
    return(
      <Header></Header>
      // <CalculatePercentage></CalculatePercentage>
    )
    
  }

  function Header(){
    const [amount , setAmount] = useState(0);
    const [percentage , setPercentage] = useState(0);
    const [interest , setInterest] = useState(0);
   

    
    function CalculateInterest(){

      const calculatedInterest  = amount * (percentage/100) 
      setInterest(calculatedInterest);
    }

    const totalAmount = amount + interest;
    

    return(
      <div >

      <div style={{backgroundColor :'#000000',
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
      
      <div style={{display:"flex",
        flexDirection:"row"
      }}>

      <div style={{marginLeft:140,
        marginTop:20
      }}>
        <h4>Amount</h4>   
        <input type="number" name="" id="Amount"  placeholder="Enter Amount" onChange={(e) => setAmount(Number(e.target.value))}/>
        <h4>Percentage </h4>
        <input type="number" name="" id="Percantage" placeholder="Enter Percentage" onChange={(e)=> setPercentage(Number(e.target.value))}/>
        <p>
          <button onClick={()=>{
            CalculateInterest();
          }}>Calculate Interest  </button>
        </p>
        
      </div>


      <div style={{marginLeft:90,
        marginTop:20
      }}>
        <h4>Calculated interest amount:    {interest}</h4>
      
        <h4>Total amount: {totalAmount}</h4>
      </div>
      </div>


      </div>
      

      
    )
  }



  export default App
