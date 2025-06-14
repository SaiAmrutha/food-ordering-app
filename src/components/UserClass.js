import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https://photo",
      },
    };
    // console.log(this.props.name + "Child Constructor");
  }
  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");
    // api call
    const data = await fetch("https://api.github.com/users/SaiAmrutha");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { login, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {login}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @amrutha.com</h4>
      </div>
    );
  }
}

export default UserClass;
