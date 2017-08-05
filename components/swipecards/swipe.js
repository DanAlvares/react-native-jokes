import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
    render(){
        return(
            <View style={styles.card}>
                <Text style={styles.joke}>{this.props.joke}</Text>
            </View>
        )
    }
}

class NoMoreCards extends React.Component {
    render(){
        return(
            <View>
                <Text>No More Jokes</Text>
            </View>
        )
    }
}

export default class Swipe extends React.Component {
    handleAccept(){
        console.log('LIKE')
    }

    handleReject(){
        console.log("NOT")
    }

    render(){
        return(
            <SwipeCards 
                cards={this.props.jokes} 
                renderCard={(jokeObj) => <Card joke={jokeObj.joke} />} 
                renderNoMoreCards={() => <NoMoreCards />}

                handleYup={this.handleAccept}
                handleNope={this.handleReject}
                />
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 300,
        borderRadius: 10,
        borderColor: '#eeeeee',
        borderWidth: 2,
        backgroundColor: '#f4f4f4',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    joke: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});