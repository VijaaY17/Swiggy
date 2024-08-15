import React from 'react'

class User extends React.Component{
  constructor(props)
  {
  super(props)
  this.state={
    count:0
  }
  }
  render() {
    const{count} = this.state
   
    return (
      <div className="user">
        <h1>Count:{this.state.count}</h1>
        <button onClick={ ()=>{
          this.setState(
            {
              count:this.state.count+1

            }
          )

         } }>Increment</button>
        <h1>Name:{this.props.name}</h1>
        <h1>Location:Coimbatore</h1>
      </div>
    )
  }
}
export default User