import axios                        from 'axios';
import React, { Component }         from 'react';
import Dropdown                     from './Components/Dropdownmenu';
import Loading                      from './Components/Loading';
import                                    './App.css';






export default class App extends Component {

  constructor(props) {
    super(props) 
      this.state = {
        failedRequest: false
      }
  }




  componentWillMount(){
    //get url and mount
     axios.get('http://localhost:8080/')
      .catch( err => {
        console.log(err);
      })
      .then(res => {
        if (res.status !== 200) {
          console.log(res.status)
          throw Error('Request Failed')
          this.state = {
            failedRequest: true
          }

        } 

        else{
            this.setState ({
              request: res.data 
            });
          } 
      });
  }  

  componentDidMount() {
      console.log('Component DID MOUNT!')
   }



 
 render() {
    //if no state render loading component
    if (!this.state.request) return <Loading />

        let records = this.state.request
         //send over as prop
        let friend = records.map(record =>{
          return record.friends
        });

        //map relevant data points and return them
        let data = records.map(record => {
          return <tr key={record.index}>
                    <td>{record.name} </td>
                    <td>{record.about} </td>
                    <td>{record.tags[0]} </td>
                    <Dropdown 
                            key={record.index}
                            name={friend}/>
                  </tr>
        });        

    return (

        <div>
          <div>
            <h2 id='title'>Welcome to PitStop</h2>
          </div>

          <div className='container'>
            <table className="table table-bordered table-responsive" id='mainTable'>
              <thead>
               <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Tags</th>
                  <th>Friends</th>
                </tr>
              </thead>
                  <tbody>
                    {data}
                  </tbody>
              </table>
            </div>
            
        </div>


    )
  }
}



