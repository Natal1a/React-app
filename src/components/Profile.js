import React from 'react';

function Profile(props) {

    return (
     <div className="user-profile">
        <img className="user-profile__photo" src={props.user.photo} alt ="user"></img>
        <header>{props.user.name} {props.user.surname}</header>
        <p>Phone number: <br/>{props.user.cell}</p>
        <p>e-mail adress: <br/>{props.user.email}</p>
      </div>
    )

}
export default Profile
