import React, { useContext } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import "./SideBar.scss";
import { contactContext } from "../../../contexts/ContactContext";
const SideBar = () => {
    const { searchContact } = useContext(contactContext);
    return (
        <div className="sideBar">
            <h1>поиск</h1>
            <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount">
                    найти
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    // startAdornment={
                    //     <InputAdornment position="start">$</InputAdornment>
                    // }
                    label="Amount"
                    onChange={(e) => searchContact(e.target.value)}
                />
            </FormControl>
        </div>
    );
};

export default SideBar;
