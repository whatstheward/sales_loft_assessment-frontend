import React from 'react';
import PersonLine from './PeopleLine'


const PeopleContainer = (props) => {
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <strong>Name</strong>
                            </td>
                            <td>
                                <strong>Email Address</strong>
                            </td>
                            <td>
                                <strong>Job Title</strong>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.people.map(person => <PersonLine person={person}/>)}
                    </tbody>
                </table>
            </div>
        )
    }

export default PeopleContainer