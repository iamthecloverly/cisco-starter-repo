
import React from 'react'

class PublicIP1 extends React.Component{

  constructor(){
    super();
    this.state={
      data: false
    }
  }


componentDidMount(){
  let url= 'https://api.ipify.org?format=json'
  fetch(url,{
    method: 'GET',
    headers:{
      'Accept': 'application/json',
      'Content-Type':'application/json'
    }
  }).then((result)=>{
    result.json().then((json)=>{
      
      this.setState({data: json})
    })
  })
}

render(){
  const data = this.state.data;

  return(
    <div>  
    <h4> ip address: {data.ip}</h4>
    </div>
  )
}
}

export default PublicIP1
