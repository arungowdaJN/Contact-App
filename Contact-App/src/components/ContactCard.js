import React from 'react';

let ContactCard = (props) => {
    let { selectedContact } = props;
    return (
        <React.Fragment>
            {
                Object.keys(selectedContact).length > 0 ?
                    <React.Fragment>
                        <div className="card sticky-top">
                            <div className="card-header bg-primary">
                                <div className="p-3"/>
                            </div>
                            <div className="card-body text-center">
                                <img src={selectedContact.picture.large} alt="" className="w-50 rounded-circle img-thumbnail contact-img"/>
                                <ul className="list-group mt-3">
                                    <li className="list-group-item list-group-item-primary">
                                        {selectedContact.name.first} {selectedContact.name.last}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        {selectedContact.email}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        {selectedContact.phone}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        {selectedContact.dob.age} yrs
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        {selectedContact.location.city}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </React.Fragment> : null
            }
        </React.Fragment>
    )
};
export default ContactCard;