import React from "react";
import styles from "./Contact.module.scss";
import Map from "../Map/Map";
function Contact2() {
  return (
    <div className={styles.Page}>
      <div className={styles.Components}>
        <div className={styles.Contact}>
          <h1> Επικοινωνηστε Μαζι Μας!</h1>
          <h3>Μιληστε μαζι μας μεσω email!</h3>
          <div className={styles.Inputs}>
            <div className={styles.FullName}>
              {" "}
              <div className={styles.InputContainer}>
                <h4>First Name</h4>
                <input placeholder="First Name" type="text" />
              </div>
              <div className={styles.InputContainer}></div>
              <div className={styles.InputContainer}>
                <h4>Last Name</h4>
                <input placeholder="Last Name" />
              </div>
            </div>
            <div className={styles.Email}>
              <h4>Email</h4>
              <input type="email" placeholder="You@email.com" />
            </div>

            <div className={styles.Phone}>
              <h4>Phone Number</h4>
              <input type="tel" placeholder="+30 69** *** ***" />
            </div>
            <div className={styles.BigText}>
              <h4>Message</h4>
              <textarea placeholder="" name="Text" className={styles.bigtext} />
            </div>
            <div className={styles.Button}>
              {" "}
              <button> Sumbit</button>
            </div>
          </div>
        </div>
        <div className={styles.Map}>
          <Map prop={13} />
        </div>
      </div>
    </div>
  );
}

export default Contact2;
