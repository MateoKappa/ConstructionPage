import styles from "../Index.module.scss";
import Window from "../../Window/Window";
import {useState} from "react";
function MiddleSectionOne() {
  const {width, height} = Window();
  const [counter, SetCounter] = useState(0);
  console.log(counter, width);
  return (
    <div
      style={{
        borderTop: "1px solid #00000036",
        position: "relative",
      }}
    >
      {" "}
      <div className={width > 800 ? styles.container : styles.container_1}>
        {" "}
        {(width < 800 ? counter == 0 : width > 800) ? (
          <div>
            <h3>Μονώσεις </h3>
            <div className={width > 800 ? styles.border : styles.border_1}>
              Οι μονώσεις στο σπίτι παρέχουν αντίσταση στη ροή θερμότητας. Όσο
              μεγαλύτερη αντίσταση ροής θερμότητας σας παρέχει η μόνωση, τόσο
              μεγαλύτερη η μείωση του κόστους θέρμανσης και ψύξης σας. Ο σωστός
              τρόπος μόνωσης του σπιτιού σας, όχι μόνο μειώνει το κόστος
              θέρμανσης και ψύξης, αλλά επίσης βελτιώνει την άνεση και τις
              συνθήκες διαβίωσής σας.
            </div>
          </div>
        ) : null}
        {(width < 800 ? counter == 1 : width > 800) ? (
          <div>
            <h3>Βαψιμο</h3>
            <div className={width > 800 ? styles.border : styles.border_1}>
              Ο ιδιωτικός σας χώρος είναι η δική σας προσωπική όαση. ‘Όμως κάθε
              τόσο, πρέπει να ανανεώνεται έτσι ώστε να ανεβάζει και την δική σας
              διάθεση. Αν ήρθε λοιπόν η ώρα που και οι δικοί σας τοίχοι
              χρειάζονται βάψιμο, μην αγχώνεστε. Προσφερουμε την πιο ακριβης και
              επαγγελματικη δουλεια που θα μπορουσατε να βρειτε.
            </div>
          </div>
        ) : null}
        {(width < 800 ? counter == 2 : width > 800) ? (
          <div>
            <h3>Τεχνοτροπια</h3>
            <div className={width > 800 ? styles.border : styles.border_1}>
              Οι τεχνοτροπίες είναι ειδικές τεχνικές ελαιοχρωματισμού που όταν
              εφαρμοστούν σωστά, το αισθητικό τους αποτέλεσμα είναι εντυπωσιακό.
              Θα μπορούσαμε να πούμε ότι είναι τεχνικές διακόσμησης του τοίχου
              οι οποίες ξεφεύγουν από τους συνηθισμένους τρόπους βαφής
            </div>
          </div>
        ) : null}
        {(width < 800 ? counter == 3 : width > 800) ? (
          <div>
            <h3>Θερμοπρόσοψη </h3>
            <div className={width > 800 ? styles.border : styles.border_1}>
              Η θερμοπρόσοψη είναι η τοποθέτηση θερμομόνωσης στο εξωτερικό μέρος
              όλων των κατακόρυφων εξωτερικών τοίχων του κτιρίου και η προστασία
              αυτής με διαδοχικές στρώσεις εξειδικευμένων υλικών ώστε να παρέχει
              μεγάλη αντοχή στο χρόνο, τις καιρικές συνθήκες, τις μηχανικές
              καταπονήσεις, τις ανεμοπιέσεις και οποιαδήποτε άλλη επίδραση
              μπορεί να επηρεάσει την λειτουργία της.
            </div>
          </div>
        ) : null}
        {width < 800 ? (
          <button
            onClick={() => {
              counter < 3 ? SetCounter(counter + 1) : SetCounter(0);
            }}
          >
            <span style={{color: "black"}}>Επομενο</span>
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default MiddleSectionOne;
