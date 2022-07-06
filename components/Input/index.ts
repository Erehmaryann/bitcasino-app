import { TextField, styled } from "@mui/material";

export const Input = styled(TextField)({
    "& label.Mui-focused": {
        color: "#000",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#000",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#000",
        },
        "&:hover fieldset": {
            borderColor: "#000",
        },
        "& .Mui-focused fieldset": {
            borderColor: "#000",
        }
    }
})