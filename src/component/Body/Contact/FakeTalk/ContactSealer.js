import React from 'react'
import anime from 'animejs'

export default function ContactSealer({emailReceived}) {
  let emailOption = (email) => (
    <>
      <label>{email}</label>
      <input type="radio"></input>
    </>
  )

  const animations = {
    optionSelect(e) {
      let input = e.target;
      let checked = input.checked;
      let target = input.parentElement;
      anime.remove(target);
      if (checked) {
        anime({
          targets: target,
          backgroundColor: '#ff3333',
          duration: 1000
        })
      } else {
        anime({
          targets: target,
          backgroundColor: '#000000',
          duration: 1000
        })
      }
    }
  }

  return (
    <div 
    style={{
      left: 0,
      display: 'flex',
      zIndex: '100',
      position:'absolute',
      textAlign: 'center',
      height: '100%',
      width: '100%',
      borderRadius: '20px',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <div 
        className='.avoid-click'
        style={{
          borderRadius: '2vw',
          paddingTop: '1vw',
          height: 'fit-content',
          maxHeight: '50%',
          overflowY: 'auto',
          minWidth: '50%',
          width: 'fit-content',
          boxShadow: '0 5px 5px rgba(0,0,0,0.2)',
          backgroundColor:'white',
          position: 'relative'}}>
            {/* 직접적으로 인풋에 이벤트를 걸지 말고 컨테이너에 건 후에 그 안에 있는 인풋들 중 선택된 놈을 선택해야 한다.
            정리하자면 컨테이너에 클릭 이벤트 걸고 그 이벤트에서는 
            '현재 선택된 버튼'이 무엇인지 확인해서 
            그 버튼의 부모 컨테이너에 대해 애니메이션을 재생하면 된다.*/}
            <h1 style={{fontSize:'3vw', paddingBottom:'1vw', boxShadow:'0 5px 5px rgba(214, 212, 206, 0.5)'}}>Choose your main email</h1>
            <div className='.avoid-click' style={{backgroundColor:'#faf7f0'}}>
              <div className='.avoid-click' style={{width:'20px', height:'20px', borderRadius:'50%', backgroundColor:'black', display:'inline-block'}}>
                <input onChange={animations.optionSelect} name="dummy" style={{opacity:0.3}} type="radio"/>
              </div>
              <label>Dummy label</label><br/>
              <input name="dummy" style={{opacity:0.3}} type="radio"/>
              <label>Dummy label</label><br/>
              <input name="dummy" style={{opacity:0.3}} type="radio"/>
              <label>Dummy label</label><br/>
            </div>
          {emailReceived.map(email => emailOption(email))}
        </div>
    </div>
  )
}
