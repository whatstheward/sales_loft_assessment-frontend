import React from 'react';

const PeopleLine = (props) => {

    return(
        <tr>
            <td>{props.person["display_name"]}</td>
            <td>{props.person["email_address"]}</td>
            <td>{props.person["title"]}</td>
        </tr>
    )
}

export default PeopleLine