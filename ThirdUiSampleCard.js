import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function ThirdUiSampleCard() {
    return (
        <View>
            <View style={venkyStyles.Container}>
                <View style={venkyStyles.mainContainer}>

                    <View style={venkyStyles.firstLayer}>
                        <Image
                            style={venkyStyles.tinyLogo}
                            source={{
                                uri: 'https://1.bp.blogspot.com/-8dlm0TpcwfI/VIeY_BT5E-I/AAAAAAAAHxw/TShiR220lj4/s1600/venkatesh.jpg',
                            }}
                        />
                        <View style={venkyStyles.photo}>
                            <Image
                                style={venkyStyles.profilePic}
                                source={{
                                    uri: 'https://d1kkg0o175tdyf.cloudfront.net/widget/p_f211c8aaf3db-2020-01-15-20-42-05-000473.jpg',
                                }}
                            />
                        </View>
                    </View>
                    <View style={venkyStyles.secondLayer}>
                        <View style={venkyStyles.personDetails}>
                            <Text style={venkyStyles.name}>Bel Venkatesh</Text>
                            <Icon style={venkyStyles.iconStyles} name="map-marker" size={30}></Icon>
                            <Text style={venkyStyles.place}>Kalyan nagar,HYD</Text>
                        </View>
                    </View>
                    <View style={venkyStyles.thirdLayer}>
                        <View style={venkyStyles.postDetailsContainers}>
                            <View style={venkyStyles.postDetailsAligniteams}>
                                <Text style={venkyStyles.postCount}>1,201</Text>
                                <Text style={venkyStyles.postDetails}>Tweets</Text>
                            </View>
                        </View>
                        <View style={venkyStyles.postDetailsContainers}>
                            <View style={venkyStyles.postDetailsAligniteams}>
                                <Text style={venkyStyles.postCount}>113</Text>
                                <Text style={venkyStyles.postDetails}>Following</Text>
                            </View>
                        </View>
                        <View style={venkyStyles.postDetailsContainers}>
                            <View style={venkyStyles.postDetailsAligniteams}>
                                <Text style={venkyStyles.postCount}>1,026</Text>
                                <Text style={venkyStyles.postDetails}>Followers</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}


var venkyStyles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'coral',
        height: windowHeight,
        width: windowWidth
    },
    mainContainer: {
        borderRadius: 10,
        backgroundColor: 'white',
        height: windowHeight/2.55,
        //width: windowWidth,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    firstLayer: {
        flex: 2,
    },
    tinyLogo: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height: windowHeight / 4.7,
        width: windowWidth / 2.048
    },
    secondLayer: {
        flexDirection: 'row',
        flex: 0.5,
        backgroundColor: '#f2f4f3',
        zIndex: -10
    },
    personDetails: {
        flexDirection: 'row',
    },
    name: {
        color: '#858587',
        marginLeft: 10,
        marginTop: 10,
        fontSize: 18
    },
    iconStyles: {
        marginRight: 8,
        marginTop: 5,
        marginLeft: 200
    },
    place: {
        color: '#858587',
        marginTop: 10,
        fontSize: 18
    },
    thirdLayer: {
        flexDirection: 'row',
        flex: 1.2,
    },
    postDetailsContainers: {
        borderColor: 'lightgray',
        borderEndWidth: 1,
        flex: 1,
    },
    postDetailsAligniteams: {
        alignItems: 'center',
        marginTop: 15
    },
    postCount: {
        fontWeight: 'bold',
        fontSize: 35
    },
    postDetails: {
        fontSize: 20,
        color: '#858587',
    },
    profilePic: {
        borderColor: 'white',
        borderWidth: 2,
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    photo: {
        position: 'absolute',
        top: 120,
        left: 200
    }

})