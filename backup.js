import React from 'react';
import { StyleSheet, Text, View, Image, Button,Alert } from 'react-native';

export default function App() {
  return (
  



    <View style={styles.container}>
      <Text>hello welcome jkll</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Button
          title="Venkatesh"
          color="black"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
    </View>










  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  }
});
