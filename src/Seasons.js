import React from 'react';

class Seasons extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor called');
        this.state = {
            lat: null,
            long: null,
            error: ''
        };
    }
    render() {
        console.log('render called');
        if (this.state.error) {
            return <div>Error: {this.state.error}</div>;
        } else if (this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }
        return <div>Loading...</div>;
    }
    componentDidMount() {
        console.log('component did mount');
        window.navigator.geolocation.getCurrentPosition(
            (pos) => this.setState({ lat: pos.coords.latitude, long: pos.coords.longitude }),
            (err) => this.setState({ error: err.message })
        );
    }
    componentDidUpdate() {
        console.log('component did update');
    }
}

export default Seasons;
