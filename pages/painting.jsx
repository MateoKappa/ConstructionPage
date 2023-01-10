import {useState} from "react";
import styles from "../components/Paintings/Paintings.module.scss";
import {motion, AnimatePresence} from "framer-motion";
import Window from "../components/Window/Window.jsx";
import LastComponent from "../components/LastComponent/LastComponent.jsx";
const images = [
  "https://i.imgur.com/MU8Wkd8.jpg",
  "https://i.imgur.com/2Q1DYbm.jpg",
  "https://i.imgur.com/ztNIJwo.jpg",
  "https://i.imgur.com/1TvPYxL.jpg",
  "https://i.imgur.com/Sssrry9.jpg",
  "https://i.imgur.com/zkN2VWJ.jpg",
];

const SectionOneComp = () => {
  const {height, width} = Window();
  return (
    <div className={styles.SectionOne}>
      <div className={styles.TextOne}>
        <h1>Δεν υπαρχει τελος στην τεχνη!</h1>
        <div className={styles.SmallText}>
          <h2>Τι είναι η τέχνη;</h2>
          <h3>
            {" "}
            Tέχνη θεωρείται η ανθρώπινη δραστηριότητα ή δημιουργία που είναι
            σημαντική εξαιτίας της έλξης που προκαλεί στις ανθρώπινες αισθήσεις
            καθώς και η δημιουργική έκφραση που αποτυπώνει την ψυχική κατάσταση
            τα συναισθήματα, τις ιδέες, την αίσθηση, τον οραματισμό του
            καλλιτέχνη.
          </h3>
        </div>
        <div className={styles.SmallText}>
          {" "}
          <h2> Τοιχογραφιες</h2>
          <h3>
            Αν σκοπεύεται να κάνετε μια τοιχογραφία στο δικό σας σπίτι θα
            φροντίσουμε να σας το παραδώσουμε ταχύτατα και ποιητικά όπως
            παρουσιάζουμε παρακάτω δουλεύοντας στον σχεδιασμό με συνεργασία μαζί
            σας. Η ζωγραφιές στους τοίχους γίνονται απο ακρυλικά χρώματα
            ζωγραφικής.
          </h3>
        </div>
        <div className={styles.SmallText}>
          <h2>Αναπαλαίωση επίπλων</h2>
          <h3>
            {" "}
            Όμως όσο και εάν θέλετε μία συνολικά ανανέωση, είναι γεγονός πως τα
            έπιπλα κοστίζουν ακριβά. Από την μια μεριά θέλετε να τα πετάξετε ή
            να τα χαρίσετε, αλλά από την άλλη είναι πραγματικά κρίμα, καθώς τα
            περισσότερα από αυτά είναι κατασκευασμένα από μασίφ ξύλο.
            Περιληπτικά η διαδικασία είναι, ξύσιμο και μετά σχεδιασμός του
            επίπλου.
          </h3>
        </div>
      </div>
      {width > 1000 ? (
        <div className={styles.ButtonOne}>
          <button>
            {" "}
            <i className="fas fa-arrow-alt-down"></i>
          </button>
        </div>
      ) : null}
      <div className={styles.ImageOne}>
        <div className={styles.image}>
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_aiapd4ct.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className={styles.brush}>
          <lottie-player
            src="https://assets4.lottiefiles.com/private_files/lf30_Ji2scO.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default function Painting() {
  const ImageComponent = (imageName) => {
    console.log(imageName.imageName);
    return (
      <div className={styles.ImageContainer}>
        <img src={imageName.imageName}></img>{" "}
        {shown ? (
          <i
            className="fas fa-eye"
            onClick={() => {
              SetPicture(imageName.imageName), SetShown(false);
            }}
          />
        ) : (
          <i
            className="fas fa-times"
            onClick={() => {
              SetShown(true);
            }}
          />
        )}
      </div>
    );
  };
  const [picture, SetPicture] = useState("");
  const [shown, SetShown] = useState(true);
  console.log(picture);
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.65}}
          exit={{
            opacity: 0,
            transition: {
              duration: "0.25",
            },
          }}
          key={{picture}}
          className={styles.App}
        >
          <SectionOneComp />
          <div
            className={shown ? styles.SectionTwo : styles.SectionTwoV2}
            style={shown ? {} : {height: "100vh"}}
          >
            <div className={styles.LottieLeft}>
              <lottie-player
                src="https://assets4.lottiefiles.com/packages/lf20_gduz3izv.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                style={shown ? {} : {height: "100vh"}}
              ></lottie-player>
            </div>
            <div className={styles.LottieRight}>
              <lottie-player
                src="https://assets4.lottiefiles.com/packages/lf20_gduz3izv.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                style={shown ? {} : {height: "100vh"}}
              ></lottie-player>
            </div>
            {shown ? (
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                className={styles.ImageCapacity}
              >
                <motion.div>
                  <ImageComponent imageName="/PaintingsY/Children.jpg" />
                  <ImageComponent imageName="/PaintingsY/birds.jpg" />
                  <ImageComponent imageName="/PaintingsY/HugeRoom.jpg" />
                </motion.div>
                <motion.div style={{marginTop: 60}}>
                  <ImageComponent imageName="/PaintingsY/City.jpg" />
                  <ImageComponent imageName="/PaintingsY/Babies.jpg" />
                  <ImageComponent imageName="/PaintingsY/tzaki.jpg" />
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.25}}
                key={{picture}}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: "5",
                  },
                }}
              >
                <ImageComponent imageName={picture} />
              </motion.div>
            )}
          </div>
        </motion.div>
        <LastComponent
          Title="Κοιτάξτε και κάποιες απo τις δουλειες μας !"
          Text="  Εδώ παρουσιάζουμε κάποιες τελειωμένες ανακαινίσεις σπιτιού. Για να πάρετε και εσείς μια γεύση και κάποιες ιδέες για μελλοντικές δουλειές !  "
          Image="https://i.imgur.com/B33q5db.jpg"
          Right={true}
          Page="/works"
        />
      </AnimatePresence>
    </div>
  );
}
