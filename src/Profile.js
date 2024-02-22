import React from "react";
import UserContext from "./utils/UserContext"; 

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy",
      },
    };
    console.log("constructor called");
  }
  async componentDidMount() {
    setTimeout(() => {
            console.log("timed out");
    },2000)
    console.log("componentDidMount called");
    const response = await fetch("https://api.github.com/users/Deepeshji121");
    const data = await response.json();
    console.log(data);
    this.setState({
      userInfo: data,
    });
    return(
        clearTimeout()
        
    )

  }
   render() {
    console.log("render called");
    return (
      <div>
        <h1>Profile</h1>
        <UserContext.Consumer>
           {({user})=><div>{user.name}</div>}
        </UserContext.Consumer>
        <img src={this.state.userInfo.avatar_url}></img>
        <div>name:{this.state.userInfo.name}</div>
        <div>location:{this.state.userInfo.location}</div>
      </div>
    );
  }
}
export default Profile;
