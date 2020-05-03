import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, picker } from 'react-native';
import ThirdUiSampleCard from './ThirdUiSampleCard';
import SecondUiSampleCard from './SecondUiSampleCard';
import UiCard from './UiCard'
import UserStatus from './userStatus';







export default function App() {
  return (
    <ScrollView>
      <UserStatus></UserStatus>
     <ThirdUiSampleCard></ThirdUiSampleCard>
     <UiCard></UiCard>
     <SecondUiSampleCard></SecondUiSampleCard>
    </ScrollView>
  );
}