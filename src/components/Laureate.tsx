import React from 'react';

class Laureate extends React.Component<any> {
  render() {
    const { laureate: { laureates } } = this.props;

    return (
      <div>
        {laureates.map((winner:any, index:any) => (
          <div key={ index }>
            <h3>
              { winner.knownName?.en || winner.orgName.en }
            </h3>
            <p>{winner.motivation.en}</p>
          </div>
        ))}

      </div>
    );
  }
}

export default Laureate;
