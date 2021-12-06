import React, { Component } from 'react'

import { getCookie,checkCookies } from 'cookies-next';

class login extends Component {
    constructor(props){
        super(props)

    }
    render() {
        return (
            <div>

     
                
            </div>
        )
    }
}

export const getServerSideProps = ({ req, res }) => {
  
  const x=  checkCookies('key', { req, res})

  if (!x) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }    


  return { props: {x}};
}




export default login