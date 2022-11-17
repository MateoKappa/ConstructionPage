import styles from "../components/Index/Index.module.scss";
import {useState} from "react";
import SectionOne from "../components/Index/Section1/SectionOne";
import SectionTwo from "../components/Index/Section2/SectionTwo";
import SectionThree from "../components/Index/Section3/SectionThree";
import MiddleSectionOne from "../components/Index/MiddleSections/MiddleSectionOne";
import MiddleSectionTwo from "../components/Index/MiddleSections/MiddleSectionTwo";
export default function Index() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  console.log(counter);

  return (
    <div className={styles.page}>
      <SectionOne />
      <MiddleSectionTwo />
      <SectionTwo />
      <MiddleSectionOne />
      <SectionThree />
    </div>
  );
}
