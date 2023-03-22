import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contactContext } from "../../contexts/ContactContext";
import "./Edit.scss";
import leftArrow from "../../assets/left.png";
const Edit = () => {
    let { id } = useParams();
    const { oneContact, editData, getOneContact } = useContext(contactContext);
    const [username, setUsername] = useState(oneContact && oneContact.username);
    const [name, setName] = useState(oneContact && oneContact.name);
    const [email, setEmail] = useState(oneContact && oneContact.email);
    const [phone, setPhone] = useState(oneContact && oneContact.phone);
    const [website, setWebsite] = useState(oneContact && oneContact.website);
    const [street, setStreet] = useState(
        oneContact && oneContact.address.street
    );
    const navigate = useNavigate();
    useEffect(() => {
        getOneContact(id);
    }, []);
    function handleEdit() {
        let obj = {
            id,
            name,
            username,
            email,
            address: { ...oneContact.address, street },
            phone,
            website,
            company: oneContact.company,
        };
        editData(id, obj);
    }

    return (
        <div className="edit">
            <div className="editBlock">
                <h1>изменить контакт</h1>
                <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="text"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                />
                <input
                    type="text"
                    onChange={(e) => setWebsite(e.target.value)}
                    value={website}
                />
                <input
                    type="text"
                    onChange={(e) => setStreet(e.target.value)}
                    value={street}
                />
                <button
                    onClick={() => {
                        handleEdit();
                        navigate("/");
                    }}
                >
                    изменить
                </button>
            </div>
            <img src={leftArrow} alt="" onClick={() => navigate("/")} />
        </div>
    );
};

export default Edit;
