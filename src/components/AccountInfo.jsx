import { useState } from "react"
import useCopyClipboard from "../hooks/useCopyClipboard"

function AccoutInfo(){
  const groomCopy = useCopyClipboard();
  const brideCopy = useCopyClipboard();

  const groomAccount = {
    name:"김이한",
    bank:"기업은행",
    number:"212-2121-2121-21"
  }
  const brideAccount={
    name:"이여원",
    bank:"농협은행",
    number:"352-1525-0393-43"
  }
  const [copiedName, setCopiedName] = useState('')
  const [copied,setCopied] = useState(false)

  const copyToClipboard = (who, text) =>{
    navigator.clipboard.writeText(text)
    .then(()=>{
      setCopiedName(who)
      setCopied(true)
      setTimeout(()=>{
        setCopied(false)
      },2000)
    })
    .catch(()=>{
      alert('복사에 실패했습니다.')
    })
  }

  return(
    <section>
      <h2>마음 전하실 곳</h2>
      <div style= {{border: '1px solid #ccc',
                    padding:'10px',
                    marginBottom:'10px'}}>
            <p><strong>신랑{groomAccount.name}</strong></p>
            <p>{groomAccount.bank} {groomAccount.number}</p>
            <button onClick={()=> groomCopy.copy('신랑 ', groomAccount.number)}>
              복사하기
            </button>
            {groomCopy.copied &&(
              <p style={{color:'green'}}>계좌번호가 복사되었습니다.</p>
            )}
      </div>

      <div style= {{border: '1px solid #ccc',
                    padding:'10px',
                    marginBottom:'10px'}}>
            <p><strong>신부{brideAccount.name}</strong></p>
            <p>{brideAccount.bank} {brideAccount.number}</p>
            <button onClick={()=> brideCopy.copy('신부 ',brideAccount.number)}>
              복사하기
            </button>
            {brideCopy.copied &&(
              <p style={{color:'green'}}>계좌번호가 복사되었습니다.</p>
            )}
      </div>
    </section>
  )
}
export default AccoutInfo