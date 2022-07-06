import {useState} from "react";
import { QUERY_ALL_PRICES } from "query";

import { useLazyQuery } from "@apollo/client";
import { toast } from "react-toastify";
import {PriceDataType} from "./model"

export default function useCoinsQuery() {
    const [coins, setCoins] = useState<PriceDataType[]>([]);
    const [code, setCode] = useState<string>("");
    const [coinCode, setCoinCode] = useState<string>("");

    const [fetchCoins, {loading, error}] = useLazyQuery(QUERY_ALL_PRICES, {
        variables: {
            coinCode
        },
        fetchPolicy: "network-only",
        onCompleted: (data)=> {
            let coinExist = coins?.find((coin: PriceDataType) => coin.coinCode === coinCode);

            let coinNotFound = data?.markets?.length === 0;

            if(coinExist) {
                toast.error("Coin already exists");
                setCode("");
                return
            } else if (coinNotFound){
                toast.error("Coin not found");
            }

            if (data && !coinNotFound) {
                setCoins((state: PriceDataType []) => 
                (state = [{...data.markets[0], coinCode}, ...state]));
                setCode("");
            }
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return {coins, code, setCode, coinCode, setCoins, setCoinCode, fetchCoins, loading, error};
}