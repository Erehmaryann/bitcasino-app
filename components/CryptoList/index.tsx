/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PriceDataType } from "hooks/model";
import {CryptoListProps} from "./model";

import CloseIcon from "@mui/icons-material/Close";

function CryptoList({coins, setCoins, coinCode}: CryptoListProps) {

  const deleteCoin = (coinCode: string, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let deletedCoins = coins.filter(
      (coin: PriceDataType) => coin.coinCode !== coinCode
    );
    setCoins(deletedCoins);
  }

  return (
    <div className="mt-[32px] z-[20] pb-28px" data-testid="crypto-list">
      {
        coins?.map((coin: PriceDataType) => (
          <div className="flex items-center justify-between w-full lg:w-[280px] py-3 border-b-[1px] border-[#9484a4]"
            key={coin?.coinCode}
            data-testid="crypto-list-item"
          >
            <div className="flex items-center gap-x-8">
              <img src="/assets/svg/icon.svg" alt="trophy" />
              <div className="flex flex-col gap-2">
                <p className="text-white capitalize">
                  {coin?.coinCode}
                </p>
                <p className="text-[#9484a4] text-[13px]">
                  {Number(coin?.ticker?.lastPrice || 0).toFixed(2)}€
                </p>
              </div>
            </div>
            <button
              aria-label={`Delete ${coin?.coinCode}`}
              type="button"
              title={`Delete ${coin?.coinCode}`}
              className="z-10 text-white outline-none cursor-pointer"
              onClick={(e) => deleteCoin(coin?.coinCode, e)}
              data-testid="delete-coin"
            >
              <CloseIcon color="inherit" style={{height: "15px"}} />
            </button>
          </div>
        ))
      }
    </div>
  )
}

export default CryptoList