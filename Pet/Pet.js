import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';



var pet = {
  name: "Dolly",
  ageInMonths: "19",
  gender: "female",
  weight: "39",
  breed: "lab",
  color: "gold"
}

export default class Pet extends React.Component {
  render() {
    return (

      <View style={styles.container}>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>PetName : </Text>
          <Text style={styles.fieldValue}>{this.props.petName}</Text>
        </View>



        <View style={styles.field}>
          <Text style={styles.fieldLabel}>AgeInMonths : </Text>
          <Text style={styles.fieldValue}>{pet.ageInMonths}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Gender : </Text>
          <Text style={styles.fieldValue}>{this.props.gender}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>weight: </Text>
          <Text style={styles.fieldValue}>{this.props.weight}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>breed: </Text>
          <Text style={styles.fieldValue}>{pet.breed}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>color: </Text>
          <Text style={styles.fieldValue}>{pet.color}</Text>
        </View>


        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Button
          title="Hello press me"
          onPress={() => Alert.alert('Hello i am dolly')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  fieldLabel: {
    color: '#ff0000',
    backgroundColor: 'tan',
    flex: 1,
  },
  fieldValue: {
    color: '#008000',
    fontWeight: 'bold',
    backgroundColor: 'peachpuff',
    flex: 1
  },
  field: {
    flexDirection: 'row',

  }
});