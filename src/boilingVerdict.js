const { Template } = require("webpack");

const scaleNames = {
  c: 'Celcius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = MAth.round
}

class BoilingVerdict(props) {
  if (props.celcius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

class Calculator extends React.Component {
  render() {
    const temperature = this.state.temperature;

    return (
      <div>
        <Temperature scale="c" />
        <Temperature scale="f" />
      </div>
    );
  }
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: ''}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}