import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function renderUser(userName) {
    if (users.indexOf(userName) == -1) {
        return (
            <View style={venkyStyles.User}>
                <Text style={venkyStyles.UserName}>{userName}</Text>
                <View style={venkyStyles.offline}></View>
            </View>
        )
    } else {
        return (

            <View style={venkyStyles.User}>
                <Text style={venkyStyles.UserName}>{userName}</Text>
                <View style={venkyStyles.online}></View>
            </View>
        )
    }
}

export default function UserStatus() {

    var users = [
        {
            name: 'Venkatesh',
            gender: 'male',
            age: 22,
            status: true
        },
        {
            name: 'Vikram',
            gender: 'male',
            age: 29,
            status: false
        },
        {
            name: 'Sravanthi',
            gender: 'female',
            age: 27,
            status: true
        }
    ]
    var userViews = []

    for (var i = 0; i < users.length; i++) {
        // <Text>users[i]</Text>
        if (users[i].status === true) {
            userViews.push(
                <View style={venkyStyles.User}>
                    <Text>{users[i].name}</Text>
                    <View style={venkyStyles.online}></View>
                </View>
            )

        } else {
            userViews.push(
                <View style={venkyStyles.User}>
                    <Text>{users[i].name}</Text>
                    <View style={venkyStyles.offline}></View>
                </View>
            )
        }

    }

    return (
        <View style={venkyStyles.chats}>
            <View style={venkyStyles.chatBox}>
                {userViews}
            </View>
        </View>
    );
}


var venkyStyles = StyleSheet.create({
    chats: {
        height: windowHeight,
        width: windowWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'coral'
    },
    chatBox: {
        height: 300,
        width: 250,
        backgroundColor: 'peachpuff'
    },
    online: {
        marginRight: 10,
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'green'
    },
    User: {
        flexDirection: 'row'
    },
    UserName: {
        flex: 9
    },
    offline: {
        marginRight: 10,
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'red'
    }
})