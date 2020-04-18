import React, { cloneElement } from 'react'
import { View, Text, StyleSheet, Image,Button,Alert } from 'react-native'


class Student extends React.Component {

    render() {
        return (


            <View style={styles.container}>
                <Image
                    style={styles.photo}
                    // source={{
                    //     uri: this.props.photoUrl,
                    // }}
                    source={this.props.photoUrl}
                />
                <View>
                    <Text style={styles.title}>{this.props.name}</Text>
                </View>
                <View>
                    <Text style={styles.detail}>LifeSpan: {this.props.lifespan }</Text>
                    <Text style={styles.detail}>Origin: {this.props.origin}</Text>
                <Button
                        title="Press me"
                        onPress={() => Alert.alert('Hello i am')}
                />
                </View>
                </View>



        )
    }
}

export default Student


const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingLeft:500
      },
    photo: {
        borderRadius:20,
        marginBottom:20,
        width: 300,
        height: 200
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
    },
    detail: {
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 15
    }


});