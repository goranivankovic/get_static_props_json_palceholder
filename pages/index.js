import Head from 'next/head'
import Image from 'next/image'

import 'bootstrap/dist/css/bootstrap.min.css';


import {Container,Row,Col,Table } from 'react-bootstrap'










export default function Home(props) {



  return (
    <div>

     <br></br>
     <br></br>

     

  

<Container>
  <Row>
    <Col className="text-center h4 text-danger">Json Placeholder Dommy</Col>

    <Col xs={12} className="text-center text-primary">
      <br></br>
    <Table striped hover size="sm" responsive >
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>City</th>
      <th>Address</th>
      <th>Phone</th>
      <th>Company</th>
    </tr>
  </thead>
  <tbody>
    {props.data.map((el)=>


   <tr key={el.id}>
      <th>{el.id}</th>
      <th>{el.name}</th>
      <th>{el.address.city}</th>
      <th>{el.address.street}</th>
      <th>{el.phone}</th>
      <th>{el.company.name}</th>
    </tr>
    


    )}
    
  </tbody>
</Table>


  
    </Col>






  </Row>
</Container>















   

    </div>
  )
}





export async function getStaticProps(context) {
  const res = await  fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}