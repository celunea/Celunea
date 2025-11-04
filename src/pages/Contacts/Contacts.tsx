import react from "react";
import styles from "./Contacts.module.css";
const Contacts: React.FC = () => {
  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.header}>Контакти</h1>
          <div className={styles.contactsWrapper}>
            <div className={styles.blockContacts}>
              <div className={styles.contact}>
                <img
                  src={require("../../assets/icons/phoneIcon.png")}
                  className={styles.icon}
                />
                <div className={styles.phones}>
                  <a
                    className={styles.contactItemText}
                    href="tel:+380989193458"
                  >
                    +38 (098) 919-34-58
                  </a>
                  <a
                    className={styles.contactItemText}
                    href="tel:+380501234567"
                  >
                    +38 (050) 123-45-67
                  </a>
                </div>
              </div>
              <div className={styles.contact}>
                <img
                  src={require("../../assets/icons/mail.png")}
                  className={styles.icon}
                />
                <p className={styles.contactItemText}>help@celunia.ua</p>
              </div>
            </div>
            <div className={styles.blockContacts}>
              <p className={styles.addressText}>
                <span style={{ fontWeight: "bold" }}>Адреса: </span>Львівська
                обл., Львів, Залізничний район., вул.Городоцька 174
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
