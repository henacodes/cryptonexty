import Head from "next/head";
import styles from "../styles/Home.module.css";
import growthIMG from "../assets/online.png";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className={styles.banner}>
        <div>
          <section>
            <div>
              <p>Get latest updates on </p>
              <p>Cryptos</p>
              <Link href="/coins">
                <button className={styles.bannerButton}>Browse</button>
              </Link>
            </div>
          </section>
          <section>
            <Image style={{ objectFit: "cover" }} src={growthIMG} />
          </section>
        </div>
      </div>
    </>
  );
}
