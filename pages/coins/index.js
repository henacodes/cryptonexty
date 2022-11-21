import Image from "next/image";
import IconImg from "../../assets/fitprosport.png";
import styles from "../../styles/Coins.module.css";
import Axios from "axios";
import Link from "next/link";
const Coins = ({ coinsData }) => {
  const sliced = coinsData.coins;
  return (
    <div className={styles.coins}>
      {sliced.map((coin, index) => (
        <Link href={`coins/${index}`} key={index}>
          <div>
            <img width={200} height={200} src={coin.icon} />
            <hr style={{ border: "1px solid" }} />
            <p>{coin.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );
  return {
    props: {
      coinsData: data.data,
    },
  };
};

export default Coins;
