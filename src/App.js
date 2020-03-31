import React, { useState, useEffect } from 'react';
import FarmCard from './components/FarmCard'
import NumberCard from './components/NumberCard'
import DayCounter from './components/DayCounter'


function App() {

  const [seedCount, setSeedCount] = useState(0)
  const [digCount, setDigCount] = useState(0)
  const [sowCount, setSowCount] = useState(0)
  const [error, setError] = useState("")
  const [bankAmount, setBankAmount] = useState(100)
  const [harvestCount, setharvestCount] = useState(0)
  const [dayCount, setDayCount] = useState(0)
  const [hourCount, setHourCount] = useState(6)
  const [winner, setWinner] = useState("")

  useEffect(() => {
    setTimeout(() => {
      const newHourCount = hourCount + 1
      if (hourCount === 24){
        setHourCount(0)
        const newDayCount = dayCount + 1
        if (newDayCount > 3){
          setWinner(`YOU WIN! You made ${bankAmount} in 3 days!`)
        } else {
          setDayCount(newDayCount)
        }
      } else {
          setHourCount(hourCount + 1)
      }
    }, 2000);
  });

  const isDay = hourCount > 5 && hourCount < 18

  const sow = () => {
    if (!isDay) {
      setError("You cannot sow in the dark!");
    } else if (seedCount < 10 || digCount < 1){
      setError("You must have at least 10 seeds and 1 land to sow.");
    } else {
      setError("");
      setSeedCount(seedCount - 10)
      setDigCount(digCount - 1)
      setSowCount(sowCount + 1)
    }
  }

  const withdraw = (amount) => {
    const newBankAmount = bankAmount - amount
    if (newBankAmount < 0) {
      setError("You have no money to withdraw.")
      return false;
    } else {
      setBankAmount(newBankAmount)
      return true;
    }
  }

  const buySeeds = () => {
    const withdrawSuccess = withdraw(1)
    if(withdrawSuccess){
      setSeedCount(seedCount + 1)
    }
  }

  const digLand = () => {
    if (!isDay) {
      setError("You cannot dig in the dark!");
    } else {
      setDigCount(digCount + 1)
    }
  }

  const harvest = () => {
    if(sowCount < 1){
      setError("You must have at least 1 sown land.");
    } else if (!isDay) {
      setError("You cannot harvest in the dark!");
    } else {
      setError("");
      setharvestCount(harvestCount + 1)
      setSowCount(sowCount - 1)
      setBankAmount(bankAmount + 20)
    }

  }

  return (
    <div className="App">
      <h1>Welcome to Click Gardening</h1>
      <h2>How much money can you make in 3 days?</h2>
      <main>
        <DayCounter id="day"
                    day={dayCount}
                    hour={hourCount} />
        <NumberCard id="bank"
                    title="Bank"
                    amount={bankAmount} />
        <FarmCard id="buy"
              description="Seeds"
              count={seedCount}
              counter={buySeeds}
              btnLabel="Buy" />
        <FarmCard id="dig"
              description="Land"
              count={digCount}
              counter={digLand}
              btnLabel="Dig" />
        <FarmCard id="sow"
              description="Sown"
              count={sowCount}
              counter={sow}
              btnLabel="Sow"/>
        <FarmCard id="harvest"
              description="Sold"
              count={harvestCount}
              counter={harvest}
              btnLabel="Harvest"/>
      </main>
      <p className="error">{error}</p>
      <p id="win">{winner}</p>
        <div className="footer">
          Icons made by
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div>
    </div>
  );
}


export default App;
