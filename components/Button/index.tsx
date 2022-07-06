import React, {FC} from "react";
import {ButtonProps} from "./model";

import { ClipLoader } from "react-spinners";

const Button: FC<ButtonProps> = ({code, loading, children}) => {
    return (
        <button
            aria-label="add-coin"
            type="submit"
            disabled={!code || loading}
            className="disabled:bg-[#fd4c24bc] 
            disabled:cursor-not-allowed border-0 outline-none 
            bg-[#fd4b24] p-[10px] text-white rounded-[20px] text-sm mb-10 flex items-center justify-center"
            >
            {loading ? <ClipLoader size={20} color={"#fff"} loading={loading} /> : children}
        </button>
    );
};

export default Button;