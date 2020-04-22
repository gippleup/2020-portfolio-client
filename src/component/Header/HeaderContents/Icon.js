import React from 'react'

const Icon = (props) => (
  <div>
    <button 
    onClick={()=>window.open(props.href, "_blank")}
    style={{
      backgroundColor: '#fffffa',
      textAlign:'center',
      padding: '0px',
      marginRight: '10px',
      marginLeft: '10px',
      width:'48px', 
      height:'48px', 
      borderRadius:'32px', 
      border:'none', 
      outline:'none'}}>
        {(()=>{
          if (props.src) {
            return <img style={{
              height:'100%', 
              borderRadius:'50%'}} 
              alt={props.name} 
              src={props.src}/>
          } else {
            return props.img
          }
        })()}
    </button>
    <h6 style={{color:'white', marginTop:'4px', textAlign:'center'}}>
      {props.name}
    </h6>
  </div>
)

export default Icon;