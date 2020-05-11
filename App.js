import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, picker, SafeAreaView, ImageBackground, } from 'react-native';
import PetCard from './PetCard';
import PetsData from './data.json';





export default function App() {
  return (

    <SafeAreaView>
      <ImageBackground
        style={style.appBackGroundImage}
        source={{
          uri: "https://i.ibb.co/py0zRdW/b4.jpg",
        }}>
        <ScrollView>
          <PetCard
            image={PetsData[0].PetPhotoUrl}
            name={PetsData[0].Name}
            breed={PetsData[0].Breed}
            age={PetsData[0].Age}
            lifespan={PetsData[0].LifeSpan}
            gender={PetsData[0].Gender}
            favoriteFood={PetsData[0].FavoriteFood}
          />
          <PetCard
            image={PetsData[1].PetPhotoUrl}
            name={PetsData[1].Name}
            breed={PetsData[1].Breed}
            age={PetsData[1].Age}
            lifespan={PetsData[1].LifeSpan}
            gender={PetsData[1].Gender}
            favoriteFood={PetsData[1].FavoriteFood}
          />

        </ScrollView>
      </ImageBackground>
    </SafeAreaView>



  );
}

var style = StyleSheet.create({
  appBackGroundImage: {
    height: 736,
    width: 414
  }
})

//style={{height: 736,width: 414, backgroundColor: 'black'}}