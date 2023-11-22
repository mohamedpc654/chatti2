import React, { useState } from "react";
import "./UserProfile.css";

const UserProfile = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  

  return (
    <div className={`main__userprofile ${isInfoOpen ? "open" : ""}`}>
      <div className="profile__card user__profile__image">
        <div className="profile__image">
          <img
            src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/357492723_111695148642941_2163416847320970769_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sHlbH5urMawAX-9brAq&_nc_ht=scontent.ftun8-1.fna&oh=00_AfBFw81SiDTYwmMbLIL6aey5B6np1rw_5A4EikWnJPMwtQ&oe=656281F8"
            alt="Profile"
          />
        </div>
        <h4>Mohamed El Fehri</h4>
        <p>Iset Kairouan</p>
      </div>
      <div className="profile__card">
        <div className="card__header" >
          <h4>Information</h4>
          
        </div>
        <div className="card__content">
          " Bac Info 2022 " <br />
          " 20 Years old "
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
