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

    getEmailAddresses = () => {
        const cache = {}
        let toCount = [...this.state.people].map(person => person["email_address"])
        toCount.forEach(email => {
            return this.countChar(email, cache)})
        this.setState({char: this.sortChar(cache)})
    }

    countChar = (email, cache) => {
        const splitEmail = email.split('')
        splitEmail.forEach(char => {
            if(cache[char]){
                cache[char] += 1
                return cache
            }else if(!cache[char]){
                cache[char] = 1
                return cache
            }else{
                return cache
            }
        })
    }

    sortChar = (cache) => {
        const sortable = []
        for(var char in cache){
            sortable.push([char, cache[char]])
        }
        return sortable.sort((a,b)=>{return b[1] - a[1]})
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