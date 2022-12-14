import React, { Suspense } from "react";
import Loader from "../../components/Loader";
import "./profilecard.css";

function ProfileCard(props) {
  return (
    <div className="profile-card">
      <Suspense fallback={Loader}>
        <ProfilePicture src={props.picture.large} />
      </Suspense>
      <div className="profile-details">
        <div className="name">
          {props.name.title} {props.name.first} {props.name.last}
        </div>
        <div>{props.email}</div>
        <div>{props.phone}</div>
      </div>
    </div>
  );
}

function ProfilePicture({ src }) {
  return (
    <div className="profile-picture">
      <img src={src} alt="display" height={120} width={120} />
    </div>
  );
}

export default ProfileCard;
