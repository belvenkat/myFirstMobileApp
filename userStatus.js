import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function renderUser(userName,status) {
    if (status===true) {
        return (
            <View style={venkyStyles.User}>
                <Text style={venkyStyles.UserName}>{userName}</Text>
                <View style={venkyStyles.online}></View>
            </View>
        ) 
    }else{
        return (
            <View style={venkyStyles.User}>
                    <Text style={venkyStyles.UserName}>{userName}</Text>
                    <View style={venkyStyles.offline}></View>
            </View>
        )
    }
}

export default function UserStatus() {
    return (
        <View style={venkyStyles.chats}>
            <View style={venkyStyles.chatBox}>
                {renderUser('vikram',true)}
                {renderUser('venkatesh',true)}
                {renderUser('sravanthi',false)}
                {renderUser('vikram',true)}
                {renderUser('venkatesh',true)}
                {renderUser('sravanthi',false)}
                {renderUser('vikram',true)}
                {renderUser('venkatesh',true)}
                {renderUser('sravanthi',false)}
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