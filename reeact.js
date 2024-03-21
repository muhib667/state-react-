npx create-react-app profile-app
cd profile-app
import React, { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://via.placeholder.com/150",
      profession: "Software Engineer"
    },
    show: false,
    mountedTime: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { person, show, mountedTime } = this.state;
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since mounted: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;
