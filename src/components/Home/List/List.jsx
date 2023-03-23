import React, { useContext, useEffect, useState } from "react";
import { contactContext } from "../../../contexts/ContactContext";
import "./List.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import user from "../../../assets/user.png";
import ListModal from "../Modal/ListModal";
const List = () => {
    const { getDataAPI, getOneContact, contacts, getData } =
        useContext(contactContext);
    const [modalState, setModalState] = useState(false);

    useEffect(() => {
        getDataAPI();
        getData();
    }, []);

    return (
        <>
            <div className="list">
                {contacts ? (
                    contacts.map((item) => (
                        <div
                            className="card"
                            onClick={() => {
                                getOneContact(item.id);
                                setModalState(true);
                            }}
                            key={item.id}
                        >
                            <div className="avatar">
                                <img src={user} alt="" />
                            </div>
                            <div className="card-text">
                                <h3>{item.username}</h3>
                                <h4>{item.email}</h4>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1 className="notFound">здесь пока нечего нет</h1>
                )}
            </div>
            {modalState && <ListModal setModalState={setModalState} />}
        </>
    );
};

export default List;
