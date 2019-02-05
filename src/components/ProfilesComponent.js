import React, {Component} from 'react';
import axios from 'axios';
import Profile from './Profile.js';


class ProfilesComponent extends Component{
  constructor(props){
    super(props);
    this.state = {profiles:[]}
  }

  componentDidMount() {
  axios.get('https://randomuser.me/api/?results=30')
  .then((response) => {
    // handle success
    console.log(response);
    this.setState({profiles: response.data.results.map(result => {
      return {
        key: result.login.username,
        photo: result.picture.large,
        name: result.name.first,
        surname: result.name.last,
        email: result.email,
        cell: result.cell}
      })
    })
    console.log(this.state.name);
  })

  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }

  handleInputChange = (event) =>{
    this.setState({searchValue:event.target.value});
  }

  filterUsers = user => {
  if (!this.state.searchValue) {
    return true
  }

  if (user.name.indexOf(this.state.searchValue) === 0 || user.surname.indexOf(this.state.searchValue) === 0) {
    return true
  }

  return false
}


  render () {
    if(this.state.profiles){
    return (<section className="users-container">
    <div className="list-container">
    <div className="search">
      <p>Search:</p>
      <input onChange={this.handleInputChange} type="input"></input>
    </div>
        <ul className="users-list">
      {this.state.profiles
        .filter(this.filterUsers)
        .map(profile =>
        <li className="users-list__element">
          {profile.name} {profile.surname}
        </li>
      )}
        </ul>
</div>
        <div className="profiles-container">
      {this.state.profiles.filter(this.filterUsers).map(profile =>
          <Profile user={profile} key={profile.key}/>
      )}
        </div>
      </section>)
    }
    return <div>Loading...</div>
  }
}
export default ProfilesComponent
