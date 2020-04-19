import React from 'react'
import { View, Text, StyleSheet, Image,Button,Alert } from 'react-native'


class PetCard extends React.Component {

    render() {
        var alertMessage = 'Bow Bow, !!, this is ' + this.props.name
        return (


            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image
                        style={styles.photo}
                        // source={{
                        //     uri: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Wayfield%27s_Young_Argos%2C_the_Labrador_Retriever.jpg",
                        // }}
                     source={this.props.photoUrl}
                    />
                    <Text style={styles.title}>{this.props.name}</Text>
                </View>

                <View style={styles.rightContainer}>
                    <Text style={styles.title}>
                        Details
                    </Text>
                    <Text style={styles.detail}>LifeSpan:10-13 years</Text>
                    <Text style={styles.detail}>Origin:Newfoundland</Text>
                    <Button 
                        style={styles.button}
                        title="Press me"
                        onPress={() => Alert.alert(alertMessage)}
                />
                </View>

               
            </View>



        )
    }
}

export default PetCard


const styles = StyleSheet.create({
    container: {
        width:600,
        backgroundColor:"#eee",
        flexDirection: "row"
      },
      leftContainer:{
          width:300,
         // flex:1,
         // backgroundColor:"green"
      },
      rightContainer:{
        width:300,
          //flex:2,
         // backgroundColor:"red"
      },
      button:{
        backgroundColor:"green"
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