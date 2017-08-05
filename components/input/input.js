import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class Input extends React.Component {
    fetchData(){
        fetch(`http://api.icndb.com/jokes/random/${this.props.value}`)
            .then((response) => { return response.json() })
            .then((data) => this.props.updateJokes(data.value));
    }

    render(){
        return(
            <View>
                <TextInput 
                    keyboardType={'numeric'}
                    style={styles.input}
                    value={this.props.value}
                    onChangeText={(text) => this.props.onChange(text)}
                />
                <TouchableHighlight onPress={() => this.fetchData()} style={styles.button}>
                    <Text style={styles.text}>Search</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 2
    },
    button: {
        backgroundColor: 'blue',
        height: 40,
        width: 100,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    }
})