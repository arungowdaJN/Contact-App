import React, {useState} from 'react';
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";

let ContactApp = () => {
    let [selectedContact , setSelectedContact] = useState({});

    let receiveContact = (contact) => {
        setSelectedContact(contact);
    };

    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary">Contact App</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum ex expedita maxime odit, officia. Asperiores delectus distinctio eius eos fugit id ipsa laboriosam quis ratione similique! Deserunt est, officia!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <ContactList sendContact={receiveContact}/>
                        </div>
                        <div className="col-md-3">
                            <ContactCard selectedContact={selectedContact}/>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default ContactApp;