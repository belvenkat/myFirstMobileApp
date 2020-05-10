import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, picker,SafeAreaView} from 'react-native';
import PetCard from './PetCard';




export default function App() {
  return (
    <SafeAreaView>
      <PetCard></PetCard>
    </SafeAreaView>
  );
}

//style={{height: 736,width: 414, backgroundColor: 'black'}}