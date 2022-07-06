import React from "react"
import {FormProps} from "./model"
import { Input } from "../Input";
import Button from "../Button";

function Form({code, loading, fetchCoins, setCode, setCoinCode}: FormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value.toUpperCase());
  };

  const getCoin = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCoinCode(code);
    fetchCoins();
  }

  return (
    <div className="z-10 flex flex-1 w-full md:justify-end">
      <div className="flex w-full lg:w-[65%] bg-white p-6 lg:px-8 lg:py-6 flex-col rounded">   
        <form onSubmit={getCoin} className="flex flex-col" data-testid="form">
          <Input
            label="CRYPTOCURRENCY CODE"
            variant="outlined"
            value={code}
            onChange={handleChange}
            size="small"
            id="outlined-size-small"
            margin="normal"
            autoFocus
            data-testid="crypto-code-input"
          />
          <Button code={code} loading={loading} onClick={getCoin}>
            Add
          </Button>
        </form>
      <p className="text-sm text-gray-400 text-center tracking-[0.5px]">
        Use of this service is subject to terms and conditions.
      </p>
      </div> 
    </div>
  )
}

export default Form