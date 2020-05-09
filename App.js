import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, picker,SafeAreaView} from 'react-native';
import ThirdUiSampleCard from './ThirdUiSampleCard';
import SecondUiSampleCard from './SecondUiSampleCard';
import UiCard from './UiCard'
import UserStatus from './userStatus';
import PetCard from './PetCard';
import ResponsiveDesign from './ResponsiveDesign'







export default function App() {
  return (
    <SafeAreaView>
      <PetCard></PetCard>
    </SafeAreaView>
  );
}

//style={{height: 736,width: 414, backgroundColor: 'black'}}