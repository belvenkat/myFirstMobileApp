import React from "react"
import { Text, View, StyleSheet, Image, Dimensions, ImageBackground, Button, alert, Alert, TouchableHighlight, TouchableOpacity } from "react-native"
import petData from './data.json'
const windowWidth = 414
const windowHeight = 736





function PetCard({ name, breed, age, image, lifespan, gender, favoriteFood }) {
    return (
        <View>
            <View style={styles.petCardBackGroundLayer}>
                <View style={styles.petCardFirstLayer}>
                    <View style={styles.petCardFirstLayerPartition}>
                        <Image style={styles.petImage}
                            source={{
                                uri: image
                            }}>
                        </Image>
                    </View>
                    <View style={styles.petCardFirstLayerPartition}>
                        <View style={styles.petCardFirstLayerPartition}>
                            <View style={styles.petNameStyles}>
                                <Text style={styles.boldTextStyles}>Name :- {name}</Text>
                            </View>
                        </View>
                        <View style={styles.petCardFirstLayerPartition}>
                            <TouchableOpacity
                                onPress={() => {
                                    Alert.alert('Click here for more Details');
                                }}>
                                <ImageBackground
                                    style={styles.boneImageStyles}
                                    resizeMode={'contain'}
                                    source={{
                                        uri: 'https://i.ibb.co/XY1BvmG/png-bone.png'
                                    }}>
                                    <Text style={styles.petButtonTextStyle}>Click Here</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.petCardSecondLayer}>
                    <View style={styles.petDetailsStyle}>
                        <Text style={styles.boldTextStyles}> Breed:{breed}</Text>
                        <Text style={styles.boldTextStyles}> Age: {age}</Text>
                        <Text style={styles.boldTextStyles}> LifeSpan:{lifespan}</Text>
                        <Text style={styles.boldTextStyles}> Gender: {gender}</Text>
                        <Text style={styles.boldTextStyles}> Favorite Food: {favoriteFood}</Text>
                    </View>
                </View>
                <View style={styles.petCardThirdLayer}>
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert('Thank you');
                        }}>
                        <View style={styles.buttonStyle}>
                            <Text style={styles.thirdLayerTextstyle}>Click here for Vaccination Details</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


export default PetCard

var styles = StyleSheet.create({
    petCardBackGroundLayer: {
        borderRadius: 20,
        marginTop: 15,
        marginLeft: 15,
        //height:300 ,
        width: windowWidth - 30,
        backgroundColor: '#FFBC7D'
    },
    petCardFirstLayer: {
        flexDirection: 'row',
        flex: 1,
    },
    petCardFirstLayerPartition: {
        flex: 1
    },
    petImage: {
        marginTop: 5,
        marginLeft: 5,
        height: 90,
        width: 90,
        borderRadius: 45
    },
    petButtonTextStyle: {
        marginTop: 12,
        marginLeft: 10
    },

    petNameStyles: {
        marginTop: 10
    },
    boldTextStyles: {
        fontWeight: 'bold'
    },
    boneImageStyles: {
        height: 40,
        marginRight: 100
    },
    petCardSecondLayer: {
        borderTopWidth: 1,
        flex: 1,
    },
    petDetailsStyle: {
        marginTop: 5
    },
    petCardThirdLayer: {
        alignItems: 'center',
        justifyContent: "center",
        borderTopWidth: 1,
        flex: 1,
    },
    buttonStyle: {
        //marginTop:10,
        margin:20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 250,
        borderRadius: 25,
        borderWidth: 2,
    },

})