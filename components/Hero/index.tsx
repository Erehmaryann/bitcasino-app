import React from "react"

import Form from "../Form"
import Intro from "../Intro"
import CryptoList from "../CryptoList"

import useCoinsQuery from "hooks/useCoinsQuery";

function Hero() {
    const {coins, code, setCode, coinCode, setCoins, setCoinCode, fetchCoins, loading, error} = useCoinsQuery();

    if(error) return <div className="error-text">`${error.message}`</div>;

  return (
    <main className="my-4 lg:mt-10 lg:mb-9">
        <section>
            <div className="flex flex-col flex-wrap items-center justify-between w-full lg:flex-row gap-y-6">
                <Intro/>
                <Form 
                    setCode={setCode}
                    code={code}
                    setCoinCode={setCoinCode}
                    fetchCoins={fetchCoins}
                    loading={loading}
                />
            </div>

            <CryptoList coinCode={coinCode} coins={coins} setCoins={setCoins}/>
        </section>
    </main>
  )
}

export default Hero