import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, picker } from 'react-native';
import Dolly from './Pet/Dolly'
import Browine from './Pet/Browine'
import Pet from './Pet/Pet'
import Student from "./Student"

var studentsData = [
  {
    name: "Vikram",
    rollNumber: 1,
    dob: "22-07-1991",
    address: "Madhapur",
    phoneNumber: 8367623751,
    photoUrl: require('./Vikram.jpg'),
  },
  {
    name: "Shiva",
    rollNumber: 2,
    dob: "21-03-1990",
    address: "kalyan Nagar",
    phoneNumber: 1234567890,
    photoUrl: require('./Vikram.jpg'),
  },
  {
    name: "Sai",
    rollNumber: 3,
    dob: "25-04-1992",
    address: "Beeramguda",
    phoneNumber: 12345678,
    photoUrl: require('./Vikram.jpg'),
  },
  {
    name: "Venkatesh",
    rollNumber: 4,
    dob: "12-11-1998",
    address: "kalyan nagar",
    phoneNumber: 897872888,
    photoUrl: require('./Venkatesh.jpg'),
  },
  {
    name: "Venki",
    rollNumber: 5,
    dob: "12-11-2000",
    address: "kalyan nagar",
    phoneNumber: 897872888,
    photoUrl: require('./Vikram.jpg'),
  },
  {
    name: "Ram",
    rollNumber: 4,
    dob: "12-11-1998",
    address: "kalyan nagar",
    phoneNumber: 897872888,
    photoUrl: require('./Vikram.jpg'),
  },
  {
    name: "Sai Ram",
    rollNumber: 4,
    dob: "12-11-1998",
    address: "kalyan nagar",
    phoneNumber: 8978728882,
    photoUrl: require('./Vikram.jpg'),
  },
  {
    name: "Sravanthi",
    rollNumber: 4,
    dob: "12-11-1998",
    address: "kalyan nagar",
    phoneNumber: 897872,
    photoUrl: require('./Vikram.jpg'),
  },
  {
    name: "Raju",
    rollNumber: 4,
    dob: "12-11-1998",
    address: "kalyan nagar",
    phoneNumber: 8978728882,
    photoUrl: require('./Vikram.jpg'),
  },
  {
    name: "Rajesh",
    rollNumber: 4,
    dob: "12-11-1998",
    address: "kalyan nagar",
    phoneNumber: 8978728882,
    photoUrl: require('./Vikram.jpg'),
  },
  {
    name: "Santosh",
    rollNumber: 4,
    dob: "12-11-1998",
    address: "kalyan nagar",
    phoneNumber: 1978728882,
    photoUrl: require('./Vikram.jpg'),
  }
]





export default function App() {
  return (

    <ScrollView contentContainerStyle={styles.container}>
      <Student
        name={studentsData[0].name}
        rollNumber={studentsData[0].rollNumber}
        dob={studentsData[0].dob} address={studentsData[0].address}
        phoneNumber={studentsData[0].phoneNumber} photoUrl={studentsData[0].photoUrl}/>
      <Student name={studentsData[1].name} rollNumber={studentsData[1].rollNumber} dob={studentsData[1].dob} address={studentsData[1].address} phoneNumber={studentsData[1].phoneNumber} photoUrl={studentsData[1].photoUrl} />
      <Student name={studentsData[2].name} rollNumber={studentsData[2].rollNumber} dob={studentsData[2].dob} address={studentsData[2].address} phoneNumber={studentsData[2].phoneNumber}photoUrl={studentsData[2].photoUrl} />
      <Student name={studentsData[3].name} rollNumber={studentsData[3].rollNumber} dob={studentsData[3].dob} address={studentsData[3].address} phoneNumber={studentsData[3].phoneNumber}photoUrl={studentsData[3].photoUrl} />
      <Student name={studentsData[4].name} rollNumber={studentsData[4].rollNumber} dob={studentsData[4].dob} address={studentsData[4].address} phoneNumber={studentsData[4].phoneNumber}photoUrl={studentsData[4].photoUrl} />
      <Student name={studentsData[5].name} rollNumber={studentsData[5].rollNumber} dob={studentsData[5].dob} address={studentsData[5].address} phoneNumber={studentsData[5].phoneNumber}photoUrl={studentsData[5].photoUrl} />
      <Student name={studentsData[6].name} rollNumber={studentsData[6].rollNumber} dob={studentsData[6].dob} address={studentsData[6].address} phoneNumber={studentsData[6].phoneNumber}photoUrl={studentsData[6].photoUrl} />
      <Student name={studentsData[7].name} rollNumber={studentsData[7].rollNumber} dob={studentsData[7].dob} address={studentsData[7].address} phoneNumber={studentsData[7].phoneNumber}photoUrl={studentsData[7].photoUrl} />
      <Student name={studentsData[8].name} rollNumber={studentsData[8].rollNumber} dob={studentsData[8].dob} address={studentsData[8].address} phoneNumber={studentsData[8].phoneNumber}photoUrl={studentsData[8].photoUrl} />
      <Student name={studentsData[9].name} rollNumber={studentsData[9].rollNumber} dob={studentsData[9].dob} address={studentsData[9].address} phoneNumber={studentsData[9].phoneNumber}photoUrl={studentsData[9].photoUrl} />
      <Student name={studentsData[10].name} rollNumber={studentsData[10].rollNumber} dob={studentsData[10].dob} address={studentsData[10].address} phoneNumber={studentsData[10].phoneNumber}photoUrl={studentsData[10].photoUrl} />
    </ScrollView>


  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    height: 50,
    width: 50
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
  },

});


//<View style={styles.field}>
//<Text style={styles.fieldLabel}>Education Details: </Text>
//<Text style={styles.fieldValue}>{personEducationDetails}</Text>
//</View>