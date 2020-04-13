import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


class Student extends React.Component {

    render() {
        return (


            <View style={styles.container}>
                <Text>Name: {this.props.name}</Text>
                <Text>Roll No: {this.props.rollNumber}</Text>
                <Text>DOB: {this.props.dob}</Text>
                <Text>Address: {this.props.address}</Text>
                <Text>P.No: {this.props.phoneNumber}</Text>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: this.props.photoUrl,
                    }}
                />
            </View>



        )
    }
}

export default Student


const styles = StyleSheet.create({
    container: {
        height: 200
    },
    tinyLogo: {
        width: 50,
        height: 50,
      }
});