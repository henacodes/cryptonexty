import Axios from "axios";
import styles from "../../styles/Coins.module.css";
const Coin = ({ coinData }) => {
  console.log(coinData);
  const {
    name,
    icon,
    marketCap,
    priceChange1d,
    priceChange1w,
    price,
    rank,
    websiteUrl,
    symbol,
  } = coinData;
  return (
    <div className={styles.coinDiv}>
      <div>
        <img src={icon} />
        <p>{name + `(${symbol})`}</p>
      </div>
      <p>Price: {price + "$"}</p>
      <p>Market Capital: {marketCap + "$"}</p>
      <p>Price change per day:{priceChange1d + "$"}</p>
      <p>Price change per week: {priceChange1w + "$"}</p>
      <p>Crypto Rank: {rank}</p>
      <p>
        Website : <a href={websiteUrl}>{name + "'s Website"}</a>
      </p>
    </div>
  );
};

export default Coin;

export const getServerSideProps = async ({ params }) => {
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );
  return {
    props: {
      coinData: data.data.coins[params.id],
    },
  };
};
