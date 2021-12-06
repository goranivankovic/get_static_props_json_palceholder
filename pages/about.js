import React, { Component } from 'react'
import axios  from 'axios'

import { setCookies } from 'cookies-next';

class about extends Component {
  constructor(props){
    super(props)
    this.state={
      ime:''
    }
  }

  render() {

  
    return (
      <div>
        about
        {/* <br/>
        <hr/>

        {this.props.data.msg.map((el)=>
        <div key={el.id}> name : {el.name}
        <br/>
 
        address {el.address.street}
        <br/>
       <hr/>
        </div>
        )} */}


{/* 
        <form   onSubmit={async (a)=>{
          try{
  a.preventDefault()
  console.log(this.state.ime);
  const ime =this.state.ime
  const sve={
    ime

  }

  const res = await axios.post('http://localhost:3000/api/postRequsets',sve)
console.log(res);


  
  

       

          }catch(err){
            console.log(err);

          }

           


          }}>
          <label htmlFor="ime">Name</label>
          <input type="text"  placeholder="name"  autoComplete="ime" onChange={(b)=>{
            this.setState({
              ime:b.target.value
            })
   

          }}/>

<button type="submit">send</button>

        

        </form>
    
 */}


   
     
        
      </div>
    )
  }
}



// export async function getStaticProps(context) {
//     const res = await fetch(`http://localhost:3000/api/test`)
//     const data = await res.json()
  
//     if (!data) {
//       return {
//         notFound: true,
//       }
//     }
  
//     return {
//       props: { data }, // will be passed to the page component as props
//     }
//   }









export default about;