import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
    };
  }

  handleClick = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <>
        <View>
          <Button title="Click" onPress={this.handleClick} />
          <Text>{this.state.contador}</Text>
        </View>
      </>
    );
  }
}
