import React, {
    Component
} from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import {
    robots
} from "./robots";
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({
                robots: users
            }));
    }
    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        // If there are no data
        if (this.state.robots.length === 0) {
            return <div className = "tc f1" > < h1 > Loading < /h1> </div >
        }

        //  If it there is not match on search and Robots
        if (filteredRobots.length === 0) {
            return <div className = "wrapperError" >
                <h1 className = "tc f1" > Robot not found </h1> <
                SearchBox searchchange = {
                    this.onSearchChange
                }
            /> </div>
        }

        // If it finds a robots
        else {
            return ( <div className = 'tc' >
                <h1 className = 'f1' > Robot Friends </h1> <
                SearchBox searchchange = {
                    this.onSearchChange
                }
                /> 
                <CardList robots = {
                    filteredRobots
                }
                /> </div>
            );
        }
    }
}

export default App;