/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      setBookName: '',
      setIn: '',
      setOut: '',
      fetchData: [],
      fetchAll: [],
      reviewUpdate: ''
    }
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value
    this.setState({
      [nam]: val
    })
  }

  handleChange2 = (event) => {
    this.setState({
      reviewUpdate: event.target.value
    })
  }

  componentDidMount() {
    axios.get("/get")
      .then((response) => {
        this.setState({
          fetchData: response.data
        })
      })
    axios.get("/getAll")
      .then((response) => {
        this.setState({
          fetchAll: response.data
        })
      })
  }
  submit = () => {
    axios.post('/insert', this.state)
      .then(() => { alert('success post') })
    console.log(this.state)
    document.location.reload();
  }

  delete = (id) => {
    if (confirm("Do you want to delete? ")) {
      axios.delete(`/api/delete/${id}`)
      document.location.reload()
    }
  }

  edit = (id) => {
    axios.put(`/api/update/${id}`, this.state)
    document.location.reload();
  }
  render() {
    return (

      <>
        <div className="d-flex justify-content-around">
          <Card style={{ width: '20rem' }}>
            <Card.Body>

              <div><h1>Entry</h1></div>
              <div className='form'>
                <input name='setBookName' placeholder='Enter Name' onChange={this.handleChange} />
                <input name='setIn' placeholder='Enter In' onChange={this.handleChange} />
                <input name='setOut' placeholder='Enter Out' onChange={this.handleChange} />


              </div>


              <Button className='my-2' variant="primary" onClick={this.submit}>Submit</Button> <br /><br />
            </Card.Body>
          </Card>
          <Card style={{ width: '40rem' }}>
            <Card.Body>

              <div><h1>Today sell/stock</h1></div>


              <table class="table" heigth="300" title="hello">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Stock(In)</th>
                    <th scope="col">Stock(Out)</th>
                  </tr>
                </thead>
                <tbody>


                  {this.state.fetchData.map((val, key) => { return (<><tr><th scope="row">{val.id}</th><td>{val.book_name}</td><td>{val.book_in}</td><td>{val.book_out}</td></tr></>); })}



                </tbody>
              </table>
            </Card.Body>
          </Card>


          <Card style={{ width: '40rem' }}>
            <Card.Body>
              <div><h1>Stock in Hand</h1></div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Stock(In)</th>
                    <th scope="col">Stock(Out)</th>
                    <th scope="col">available</th>
                  </tr>
                </thead>
                <tbody>


                  {this.state.fetchAll.map((val, key) => {if(val.book_in===""){val.book_in="0"}if(val.book_out===""){val.book_out="0"} return (<><tr><th scope="row">{val.id}</th><td>{val.book_name}</td><td>{val.book_in}</td><td>{val.book_out}</td><td>{parseInt(val.book_in) - parseInt(val.book_out)}</td></tr></>); })}



                </tbody>
              </table>
            </Card.Body>
          </Card>
        </div></>);
  }
}
export default App;
