import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, picker } from 'react-native';
import ThirdUiSampleCard from './ThirdUiSampleCard';
import SecondUiSampleCard from './SecondUiSampleCard';
import UiCard from './UiCard'







export default function App() {
  return (
    <ScrollView>
     <ThirdUiSampleCard></ThirdUiSampleCard>
     <UiCard></UiCard>
     <SecondUiSampleCard></SecondUiSampleCard>
    </ScrollView>
  );
}