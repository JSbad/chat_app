import React, {Component} from 'react';
import Chat from './Components/Chat/chat';
import Login from './Components/Login/login';
import { createSignalProtocolManager, SignalServerStore } from "SignalGateway"
import './App.css';

class chatApp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      loggedInUser: {}
    }
    this.setLoggedInUser = this.setLoggedInUser.bind(this);
  }
  // ?????????? login calls to api, public keys in db and api
  setLoggedInUser(loggedInUser){
    this.setState({ LoggedIn: true, loggedInUser: {...loggedInUser} }, () => {
      createSignalProtocolManager(loggedInUser._id, loggedInUser.name, this.state.dummySignalServer)
        .then(signalProtocolManagerUser => {
          this.setState({ signalProtocolManagerUser: signalProtocolManagerUser })
        })
    })
  }
    

}

function App() {
    return (
        <div className="App">
            {!this.state.isLoggedIn && <Login loginProp={this.setLoggedinUser}/>}
            {this.state.isLoggedIn && <Chat
                loggedInUserObj={this.state.loggedInUserObj}
                signalProtocolManagerUser={this.state.signalProtocolManagerUser}/>}
        </div>
    );
}

export default App;
