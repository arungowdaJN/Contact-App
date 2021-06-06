import React, {useEffect, useState} from 'react';
import Axios from "axios";

let ContactList = (props) => {
    let [contacts , setContacts] = useState([]);

    useEffect(() => {
        getAllContacts();
       //getContacts();
    }, []);

    // promised based call
    let getAllContacts = () => {
        let dataURL = 'https://gist.githubusercontent.com/thenaveensaggam/2c0a106c0b66ef2c8f4eb2b2c8c31e6d/raw/416efcc2300afc13cd0aa6413b2de4918a50ad30/contacts-02-12-2020.json';
        Axios.get(dataURL).then((response) => {
            setContacts(response.data);
        }).catch((error) => {
            console.error(error);
        });
    };

    // Async-Await
    let getContacts = async () => {
        try {
            let dataURL = 'https://gist.githubusercontent.com/thenaveensaggam/2c0a106c0b66ef2c8f4eb2b2c8c31e6d/raw/416efcc2300afc13cd0aa6413b2de4918a50ad30/contacts-02-12-2020.json';
            let response = await Axios.get(dataURL);
            setContacts(response.data);
        }
        catch (error) {
            console.error(error);
        }
    };

    let clickContact = (contact) => {
        props.sendContact(contact);
    };

    return (
        <React.Fragment>
            <React.Fragment>
                <table className="table table-hover text-center table-striped table-primary">
                    <thead className="bg-dark text-primary">
                    <tr>
                        <th>SNO</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>LOCATION</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        contacts.length > 0 ?
                            <React.Fragment>
                                {
                                    contacts.map((contact , index) => {
                                        return (
                                            <tr key={contact.login.uuid} onClick={clickContact.bind(this , contact)}>
                                                <td>{index + 1}</td>
                                                <td>{contact.name.first} {contact.name.last}</td>
                                                <td>{contact.email}</td>
                                                <td>{contact.phone}</td>
                                                <td>{contact.location.city}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </React.Fragment> : null
                    }
                    </tbody>
                </table>
            </React.Fragment>
        </React.Fragment>
    )
};
export default ContactList;