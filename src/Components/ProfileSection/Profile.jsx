import React from "react";
import Image from "../../Assets/images/avatars/Image-1.png";
import "./style.css";
function Profile() {
  const person = { Name: "John Doe", ProfileImage: Image };
  return (
    <div className="profile-section">
      <div className="profile">
        <div className="personel-information">
          <span className="name ">{person.Name}</span>
          <span className="personel-information-profil">Profile</span>
        </div>
        <img
          src={person.ProfileImage}
          alt={person.firstName}
          className="img-profile"
        />
      </div>
    </div>
  );
}
export default Profile;
