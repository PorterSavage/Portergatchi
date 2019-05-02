import React from 'react';
import Button from './Button';

class Portegatchi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
      play: 100,
      food: 100,
      sleep: 100,
    };
  }

  componentDidMount() {
    this.startingAge = setInterval(() => this.initialAge(), 60000);
    this.startingPlay = setInterval(() => this.initialPlay(), 1000);
    this.startingFood = setInterval(() => this.initialFood(), 1000);
    this.startingSleep = setInterval(() => this.initialSleep(), 1000);
  }

  initialAge() {
    const { age } = this.state;
    this.setState({ age: age + 1 });
  }

  initialPlay() {
    const { play } = this.state;
    this.setState({ play: play - 1 });
  }

  initialFood() {
    const { food } = this.state;
    this.setState({ food: food - 1 });
  }

  initialSleep() {
    const { sleep } = this.state;
    this.setState({ sleep: sleep - 1 });
  }

  updatePlay() {
    const { play } = this.state;
    this.setState({ play: play + 1 });
  }

  updateFood() {
    const { food } = this.state;
    this.setState({ food: food + 1 });
  }

  updateSleep() {
    const { sleep } = this.state;
    this.setState({ sleep: sleep + 1 });
  }

  render() {
    const {
      age,
      play,
      food,
      sleep,
    } = this.state;
    return (
      <div>
        <div>
          <style>
            {`
  
            `}
          </style>
        </div>
        <div>
          <p>{`Age: ${age}`}</p>
          <p>{`Play Level: ${play}`}</p>
          <p>{`Food Level: ${food}`}</p>
          <p>{`Rest Level: ${sleep}`}</p>
          <Button
            onPlayButtonClicked={e => this.updatePlay(e)}
            onFoodButtonClicked={e => this.updateFood(e)}
            onSleepButtonClicked={e => this.updateSleep(e)}
          />
        </div>
      </div>
    );
  }
}

export default Portegatchi;
