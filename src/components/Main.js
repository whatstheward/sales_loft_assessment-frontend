import React from 'react';
import PeopleContainer from './PeopleContainer'
import '../css/Main.css'

class Main extends React.Component {
    state = {
        people: [],
        char: [],
        showCount: false
    }

    componentDidMount=()=>{
        fetch('http://localhost:3000/people')
        .then(res => res.json())
        .then(data => this.setState({people: data}))
    }


    getEmailAddresses = () => {
        const cache = {}
        let toCount = [...this.state.people].map(person => person["email_address"])
        toCount.forEach(email => {
            return this.countChar(email, cache)})
        this.setState({char: this.sortChar(cache)})
    }

    render(){
        return(
            <>
        <div>
            <PeopleContainer people={this.state.people} />
        </div>
            </>
    )}
}

export default Main