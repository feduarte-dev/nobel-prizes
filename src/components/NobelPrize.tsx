import React from 'react';
import Laureate from './Laureate';

class NobelPrize extends React.Component<any> {
  render() {
    const { nobel } = this.props;

    return (
      <div>
        <h2>{nobel.categoryFullName.en}</h2>
        <h4>{nobel.dateAwarded}</h4>

        <Laureate laureate={ nobel } />
      </div>
    );
  }
}

export default NobelPrize;
