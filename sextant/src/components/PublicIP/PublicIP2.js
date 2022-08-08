import React from 'react'

class PublicIP2 extends React.Component{

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
    result.json().then((resp)=>{
      
      this.setState({data: resp})
    })
  })
}

render(){
  const data =this.state.data;

  return(
    <div>
      <h4> ip: {data.ip}</h4>  
    </div>
  )
}
}

export default PublicIP2
