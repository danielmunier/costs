import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));





class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() { 
    return (
        <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
    )
  }

}


/* root.render(<Clock/>) */

  root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);