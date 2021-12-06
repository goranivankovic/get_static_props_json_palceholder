import React, { Component } from 'react'

export default class posts extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log(this.props.post);
  }
  render() {
    return (
      <div>
        Name : {this.props.post.name} <br></br>
        User name : {this.props.post.username} <br></br>
        Website  : {this.props.post.website} <br></br>
        Email  : {this.props.post.email} <br></br>
        Phone  : {this.props.post.phone} <br></br>
        Street  : {this.props.post.address.street} <br></br>
        City  : {this.props.post.address.city} <br></br>
        
      </div>
    )
  }
}


export async function getStaticPaths() {


  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
      { params: { id: '5' } },
      { params: { id: '6' } },
      { params: { id: '7' } },
      { params: { id: '8' } },
      { params: { id: '9' } },
      { params: { id: '10' } },

    ]
    , fallback: false }
}


// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}
