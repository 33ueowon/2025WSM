import { useState,useEffect } from "react";

function Countdown(){
  const [dayLeft, setDayLeft] = useState(0)

  useEffect(()=>{
    const today = new Date()
    const targetDate = new Date('2025-10-20')
    const diff = targetDate-today
    //D-day 만들기

    const remaining = Math.ceil(diff/(1000*60*60*24))
    //필요한 수식 (시험x)
    setDayLeft(remaining)
  },[])
  
  return(
    <div>
      <h2>결혼식까지 남은 날짜</h2>
      <p>{dayLeft}일 남았습니다.</p>
    </div>
  )
}
export default Countdown