import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contactContext } from "../../../contexts/ContactContext";
import "./ListModal.scss";
const ListModal = ({ setModalState }) => {
    const { oneContact, deleteData } = useContext(contactContext);
    const navigate = useNavigate();
    return (
        <div className="modalPage" onClick={() => setModalState(false)}>
            <div className="modalka" onClick={(e) => e.stopPropagation()}>
                <h1>{oneContact.username}</h1>
                <div className="modalka-info">
                    <h3>
                        <span> полное имя:</span>
                        {oneContact.name}
                    </h3>
                    <h3>
                        <span> email:</span>
                        {oneContact.email}
                    </h3>
                    <h3>
                        <span> номер:</span>
                        {oneContact.phone}
                    </h3>
                    <h3>
                        <span> вебсайт:</span>
                        {oneContact.website}
                    </h3>
                    <h3>
                        <span>адресс:</span> {oneContact.address.street}
                    </h3>
                </div>
                <div className="modalka-btn">
                    <Button
                        variant="outlined"
                        color="success"
                        sx={{ marginRight: "10px" }}
                        onClick={() => navigate(`/edit/${oneContact.id}`)}
                    >
                        изменить
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={() => {
                            deleteData(oneContact.id);
                            setModalState(false);
                        }}
                    >
                        удалить
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ListModal;
