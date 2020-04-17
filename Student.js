import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


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
                    <Text style={styles.detail}>{this.props.rollNumber}</Text>
                </View>
                <View>
                    <Text style={styles.detail}>DOB: {this.props.dob}</Text>
                    <Text style={styles.detail}>Address: {this.props.address}</Text>
                    <Text style={styles.detail}>Phone Number: {this.props.phoneNumber}</Text>
                </View>
            </View>



        )
    }
}

export default Student


const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#ebeae8',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,

    },
    photo: {
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
        color: 'gray',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 15
    }


});