import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, picker } from 'react-native';
import Dolly from './Pet/Dolly'
import Browine from './Pet/Browine'
import Pet from './Pet/Pet'
import Student from "./Student"

var studentsData = [
  {
    name: "Doberman",
    lifespan : "9 – 13 years",
    origin: "Germany",
    photoUrl: require('./Doberman.jpg'),
  },
  {
    name: "Gernam Shepherd",
    lifespan : "10 – 13 years",
    origin: "Germany",
    photoUrl: require('./GermanShepherd.jpg'),
  },
  {
    name: "Golden retriever",
    lifespan : "10 – 12 years",
    origin: "United Kingdom",
    photoUrl: require('./GoldenRetriever.jpg'),
  },
  {
    name: "Labrador Retriever",
    lifespan : "10 – 14 years",
    origin: "Newfoundland",
    photoUrl: require('./LabradorRetriever.jpg'),
  },
  {
    name: "Pitbull",
    lifespan : "8 – 15 years",
    origin: "United Kingdom",
    photoUrl: require('./Pitbull.jpg'),
  },
  {
    name: "Pomeranian",
    lifespan : "12 – 16 years",
    origin: "poland",
    photoUrl: require('./Pomeranian.jpg'),
  },
  {
    name: "Poodle",
    lifespan : "12 – 15 years",
    origin: "france",
    photoUrl: require('./Poodle.jpg'),
  },
  {
    name: "Pug",
    lifespan : "12 – 15 years",
    origin: "China",
    photoUrl: require('./Pug.jpg'),
  },
  {
    name: "Rottweiler",
    lifespan : "8 – 10 years",
    origin: "Germany",
    photoUrl: require('./Rottweiler.jpg'),
  },
  {
    name: "Syberian Husky",
    lifespan : "12 – 15 years",
    origin: "Siberia",
    photoUrl: require('./SyberianHusky.jpg'),
  },
  {
    name: "Saint Bernard",
    lifespan : "8 – 10 years",
    origin: "Switzerland",
    photoUrl: require('./SaintBernard.jpg'),
  }
]





export default function App() {
  return (
    <View contentContainerStyle={styles.container}> 
    <ScrollView>
      <Student name={studentsData[1].name} lifespan ={studentsData[1].lifespan } origin={studentsData[1].origin} photoUrl={studentsData[1].photoUrl} />
      <Student name={studentsData[0].name} lifespan ={studentsData[0].lifespan } origin={studentsData[0].origin} photoUrl={studentsData[0].photoUrl}/>
      <Student name={studentsData[2].name} lifespan ={studentsData[2].lifespan } origin={studentsData[2].origin} photoUrl={studentsData[2].photoUrl} />
      <Student name={studentsData[3].name} lifespan ={studentsData[3].lifespan } origin={studentsData[3].origin} photoUrl={studentsData[3].photoUrl} />
      <Student name={studentsData[4].name} lifespan ={studentsData[4].lifespan } origin={studentsData[4].origin} photoUrl={studentsData[4].photoUrl} />
      <Student name={studentsData[5].name} lifespan ={studentsData[5].lifespan } origin={studentsData[5].origin} photoUrl={studentsData[5].photoUrl} />
      <Student name={studentsData[6].name} lifespan ={studentsData[6].lifespan } origin={studentsData[6].origin} photoUrl={studentsData[6].photoUrl} />
      <Student name={studentsData[7].name} lifespan ={studentsData[7].lifespan } origin={studentsData[7].origin} photoUrl={studentsData[7].photoUrl} />
      <Student name={studentsData[8].name} lifespan ={studentsData[8].lifespan } origin={studentsData[8].origin} photoUrl={studentsData[8].photoUrl} />
      <Student name={studentsData[9].name} lifespan ={studentsData[9].lifespan } origin={studentsData[9].origin} photoUrl={studentsData[9].photoUrl} />
      <Student name={studentsData[10].name} lifespan ={studentsData[10].lifespan } origin={studentsData[10].origin} photoUrl={studentsData[10].photoUrl} />
    </ScrollView>
    </View>
    


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