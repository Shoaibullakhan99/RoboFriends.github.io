import React from 'react';
//import { Robots } from './Robots';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import Searchbox from '../components/Searchbox';
import './App.css';
//import { Robots } from '../Robots';


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            Robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ Robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const {Robots, searchfield} = this.state;
        const filteredRobots = Robots.filter(Robots => {
            return Robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !Robots.length ?
         <h1 style={{textAlign: "center"}}>Loading...</h1> :
                <div className="tc" >
                    <h1 className="f2">RoboFriends</h1>
                    <Searchbox searchChange={this.onSearchChange} />
                    <Scroll>
                    <CardList Robots={filteredRobots} />
                    </Scroll>
                </div>
            
        }

    }

export default App