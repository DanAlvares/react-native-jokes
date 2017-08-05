import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Input from './components/input/input'
import Swipe from './components/swipecards/swipe'

export default class App extends React.Component {
  state = {
    value: '',
    jokes: []
  }

  componentWillMount(){
      fetch(`http://api.icndb.com/jokes/random/100`)
        .then((response) => { return response.json() })
        .then((data) => this.setState({jokes: data.value}));
  }

  render() {
    return (
      <View style={styles.container}>
        <Swipe 
          jokes={this.state.jokes}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 50
  }
});
