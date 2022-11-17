import {useState} from "react";
import styles from "../Index.module.scss";
import Window from "../../Window/Window";
function MiddleSectionOne() {
  const {width, height} = Window();
  const [counter, SetCounter] = useState(0);
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
            <h3>Σουβατισμα</h3>
            <div className={width > 800 ? styles.border : styles.border_1}>
              Το σοβάτισμα δεν είναι εύκολη δουλειά που μπορεί να γίνει από τον
              οποιονδήποτε. Χρειάζεται τεχνικό συνεργείο με γνώσεις, εμπειρία,
              προσοχή στη λεπτομέρεια, καθώς και καλή γνώση των υλικών και σωστή
              εφαρμογή των στρώσεων του σοβά στον τοίχο.
            </div>
          </div>
        ) : null}
        {(width < 800 ? counter == 1 : width > 800) ? (
          <div>
            <h3>Πλακακια</h3>
            <div className={width > 800 ? styles.border : styles.border_1}>
              Ο πιο διαδεδομένος τρόπος για να ντύσεις το πάτωμά σου, είναι
              χωρίς αμφιβολία τα πλακάκια. Η μεγάλη αντοχή τους τόσο σε φθορές,
              χτυπήματα αλλά και στο χρόνο, καθώς και οι αμέτρητες επιλογές σε
              χρώματα, σχέδια και μεγέθη για να διαλέξεις, τα καθιστούν την
              ιδανικότερη επιλογή.
            </div>
          </div>
        ) : null}
        {(width < 800 ? counter == 2 : width > 800) ? (
          <div>
            <h3>Παρκε</h3>
            <div className={width > 800 ? styles.border : styles.border_1}>
              Το ξύλινο πάτωμα χαρίζει κομψότητα και αρχοντιά σε ένα χώρο. Εάν
              ήδη έχεις ή σκέφτεσαι να τοποθετήσεις ξύλινο πάτωμα στο σπίτι σου
              θα πρέπει να του δείξεις και την απαραίτητη προσοχή. Το υλικό αυτό
              αν και αισθητικά όμορφο είναι αρκετά ευαίσθητο.
            </div>
          </div>
        ) : null}
        {(width < 800 ? counter == 3 : width > 800) ? (
          <div>
            <h3>Αναπαλαίωση </h3>
            <div className={width > 800 ? styles.border : styles.border_1}>
              Τα παλιά έπιπλα κρύβουν αναμνήσεις, ιστορίες, όνειρα αγαπημένων
              προσώπων, τέχνη, σκαλίσματα και είναι φτιαγμένα από φυσικά υλικά
              (ξύλο, μάρμαρο). Αντί να μένουν στο υπόγειο ή στην αποθήκη,
              μπορούμε να τους δώσουμε δεύτερη ευκαιρία και να τα ξαναβαλουμε
              στο σπίτι μας με καινούριο ύφος και χρώμα.
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
