import React from 'react';
const CharCounter = (props) => {
    
            return(
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    Character
                                </td>
                                <td>
                                    Count
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {props.char.map(char=>{
                                return(
                                <tr>
                                    <td>
                                        {char[0]}
                                    </td>
                                    <td>
                                        {char[1]}
                                    </td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                </div>
            )
}

export default CharCounter