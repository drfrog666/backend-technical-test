import React, { Component } from 'react';

import './App.css';
import {Webgl} from './Webgl';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class App extends Component {
  constructor(props) {
     super(props);
     this.state = {
         zoom:14,
       value: '',
       locations:[],currentLocation:[],
       showingInfoWindow: true
     }
     
         this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }
    
    
    
  //state = {locations:[],currentLocation:[]}

  
  
  
    componentDidMount(){
	fetch("/locations")
	    .then(res=> res.json())
	    .then(locations =>this.setState({locations: locations,currentLocation:locations[0]}));
    }
   
   handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {      
      
    event.preventDefault(); 
    
    fetch('/locations/create', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({location: this.state.value})
    })
    .then(res=> res.json())
    .then(location => (
        this.setState({value:'',locations:this.state.locations.concat(location)}),
        alert('Created Location:' + location.location)
    )   );
    //    needs catch on error
  }
  
   clickMe(location)  {

     this.setState({
       currentLocation: location
     });
     
        //this.forceUpdate();
  
   }
   
    render() {

    return (
        
	    
	  

<div className="App">
  <div className="boxdiv header">
  
  <div className="form">
   <h1>Locations</h1>
        <form onSubmit={this.handleSubmit} >
            Create Location: <input name="location" value={this.state.value} onChange={this.handleChange}></input>
            <button type="submit">submit</button>
        </form>
      </div>
      <div  className="currentInfo">
      <div style={{width:'30%'}}>
      <ul>
      <li>{this.state.currentLocation.location}</li>
      <li>{this.state.currentLocation.long} {this.state.currentLocation.lat}</li>
      <li>{this.state.currentLocation.temp}C</li>
      </ul>
      </div>
      <div style={{width:'70%',left:10,position:'relative'}}>
              <Webgl index={Math.random()} temp={this.state.currentLocation.temp + " C"}></Webgl>
      </div>
      </div>
      
      
  </div>
  
  <div className="boxdiv sidebar">
  
  
	    <div >
	    
            <ul >
                {this.state.locations.map( location =>
                    <li key={location.id}>
                    
                    {location.location} {location.temp.toFixed(2)}C
                    <br></br>
                    <button onClick={() => this.clickMe(location)}>View</button>
                    <button>update</button><button>delete</button>
                    <br></br><br></br>
                    </li>
                )}
            </ul>
	    
            
      
       </div>
  
  </div>
  <div className="boxdiv content">
           <div style={{height: '100%', 
                        width: '100%', 
                        display: 'flex', 
                        align:'center',
                        position: 'relative',
                        padding: 0,
               color:'#000',
                backgroundColor: '#555555'
        }}>
            <Map google={this.props.google} zoom={this.state.zoom} center={new window.google.maps.LatLng(this.state.currentLocation.lat, this.state.currentLocation.long)}>

            <Marker onClick={this.onMarkerClick}
                name={this.state.currentLocation.location} position={new window.google.maps.LatLng(this.state.currentLocation.lat, this.state.currentLocation.long)}/>
{
//             <InfoWindow className="mapInfoWindow" onClose={this.onInfoWindowClose} visible={true}  position={new window.google.maps.LatLng(this.state.currentLocation.lat,this.state.currentLocation.long)}>
//                 <h1>{this.state.currentLocation.temp}C</h1>
//       
//             </InfoWindow>
}
            </Map>
           </div>
  </div>
  <div className="boxdiv footer">&copy; Clayton</div>
</div>


     
       
    );
  }
}

//export default App;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDm-EpTfg6Ezn464ARGaNTJWmKiV8jKsJo'
})(App)
