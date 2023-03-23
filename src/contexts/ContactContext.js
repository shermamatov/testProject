import React, { createContext, useState } from "react";
import axios from "axios";

export const contactContext = createContext();
const ContactContext = ({ children }) => {
    const [contacts, setContacts] = useState([]);
    const API = "https://jsonplaceholder.typicode.com/users";
    const [oneContact, setOneContact] = useState(
        JSON.parse(localStorage.getItem("oneContact")) || {}
    );
    function getOneContact(oneContactId) {
        if (localStorage.getItem("contacts")) {
            let data = JSON.parse(localStorage.getItem("contacts"));
            let oneData = data.find((item) => item.id == oneContactId);
            localStorage.setItem("oneContact", JSON.stringify(oneData));
            setOneContact(oneData);
        } else {
            getDataAPI();
        }
    }
    async function getDataAPI() {
        if (!localStorage.getItem("contacts")) {
            // ! FETCH
            // let products = await fetch(API)
            //     .then((res) => res.json())
            //     .catch((err) => {
            //         console.log(err);
            //         console.log("errrorr");
            //     });
            // ! AXIOS
            let { data } = await axios(API);
            localStorage.setItem("contacts", JSON.stringify(data));
            getData();
        }
    }
    async function getData() {
        if (localStorage.getItem("contacts")) {
            let data = JSON.parse(localStorage.getItem("contacts"));
            let a = data.sort((a, b) => {
                if (a.username < b.username) {
                    return -1;
                }
                if (a.username > b.username) {
                    return 1;
                }
                return 0;
            });
            setContacts(a);
        } else {
            await getDataAPI();
            getData();
        }
    }
    function searchContact(input) {
        if (input) {
            let data = contacts.filter((item) => {
                if (
                    item.username.toLowerCase().includes(input.toLowerCase()) ==
                    true
                ) {
                    return true;
                } else {
                    return false;
                }
            });
            setContacts(data);
        } else if (!input) {
            getData();
        }
    }
    function editData(id, obj) {
        if (localStorage.getItem("contacts")) {
            let data = JSON.parse(localStorage.getItem("contacts"));
            let indexContact = data.findIndex((item) => item.id == id);
            data.splice(indexContact, 1, obj);
            localStorage.setItem("contacts", JSON.stringify(data));
            getData();
        } else {
            getDataAPI();
        }
    }
    function deleteData(id) {
        if (localStorage.getItem("contacts")) {
            let data = JSON.parse(localStorage.getItem("contacts"));
            let indexContact = data.findIndex((item) => item.id == id);
            data.splice(indexContact, 1);
            localStorage.setItem("contacts", JSON.stringify(data));
            getData();
        } else {
            getDataAPI();
        }
    }
    return (
        <contactContext.Provider
            value={{
                getDataAPI,
                setContacts,
                contacts,
                getData,
                searchContact,
                getOneContact,
                oneContact,
                editData,
                deleteData,
            }}
        >
            {children}
        </contactContext.Provider>
    );
};

export default ContactContext;
