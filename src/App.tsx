import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NobelPrize from './components/NobelPrize';

class App extends Component {
  state = {
    nobels: [],
  };

  componentDidMount() {
    this.handleFetch();
  }

  handleFetch = async () => {
    const response = await fetch('https://api.nobelprize.org/2.1/nobelPrizes');
    const data = await response.json();
    const { nobelPrizes } = data;
    this.setState({ nobels: nobelPrizes });
  };

  render() {
    const { nobels } = this.state;
    return (
      <div className="App">
        <Header />
        {nobels.map((nobel, index) => <NobelPrize key={ index } nobel={ nobel } />)}
      </div>
    );
  }
}

export default App;
