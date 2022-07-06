import { PriceDataType} from "hooks/model";

export type CryptoListProps = {
    coins: PriceDataType[];
    coinCode: string;
    setCoins: (coins: PriceDataType[]) => void;
  }