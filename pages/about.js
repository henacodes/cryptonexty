import styles from "../styles/About.module.css";
import pp from "../assets/pp-square.jpg";
import Image from "next/image";
const About = () => {
  return (
    <div className={styles.aboutDiv}>
      <div>
        <Image src={pp} />
      </div>
      <div>
        <p className={styles.myname}>Henok Ayenew</p>
        <p>
          Heyyoo there, Henok here. I am passionate web developer. I made this
          website This website as a first kickstart project for my NextJs
          framework roadmap.
          <p>Tools used:</p>
          <ul>
            <li>
              <a href="nextjs.org">NextJs</a>
            </li>
            <li>
              <a href="api.coinstats.app">Coinstats API</a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default About;
