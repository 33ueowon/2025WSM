function Invitation(){
  const handleClick = ()=>{
    alert("축하해줘서 고마워요!") // 팝업창
  }
  return(
    <div>
      <h2>초대합니다</h2>
      <p>
        우리의 사랑이 가득한 날, <br/>
        여러분과 함께 하고 싶습니다.<br/>
      </p>
      <div>
        <p><strong>신랑 </strong>김이한</p>
        <p><strong>신부 </strong>이여원</p>
      </div>
      <div>
        <button onClick={handleClick}>축하하기</button>
      </div>
    </div>
  )
}
export default Invitation