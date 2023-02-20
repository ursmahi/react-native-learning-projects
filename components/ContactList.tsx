import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {
    const contacts = [
        {
            uid: 1,
            name: 'Hitesh Choudhary',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
            uid: 2,
            name: 'Anurag Tiwari',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
            uid: 3,
            name: 'Sanket Singh',
            status: 'Making your GPay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
            uid: 4,
            name: 'Anirudh Jwala',
            status: 'Building secure Digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
            uid: 5,
            name: 'Mahidhar Kakumani',
            status: 'Learning React Native',
            imageUrl: 'https://github.com/ursmahi.png',
        },
    ];
    return (
        <View>
            <Text style={styles.headingText}>Contacts</Text>
            <ScrollView style={styles.container} 
            scrollEnabled={false}
            >
                {
                    contacts.map(({ uid, name, status, imageUrl }) => (
                        <View style={styles.cardBody} key={uid}>
                                <Image
                                    source={{
                                        uri: imageUrl
                                    }}
                                    style={
                                        styles.cardImage
                                    }
                                />
                            <View style={styles.cardText}>
                                <Text style={styles.userName}>{name}</Text>
                                <Text style={styles.userStatus}>{status}</Text>
                            </View>
                        </View>
                    ))
                }

            </ScrollView>
        </View>
    )
}

export default ContactList

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 8,

    },
    container: {
        paddingHorizontal:18,
    },
    cardImage: {
        width: 60,
        height: 60,
        borderRadius: 60/2,
        marginLeft:15,
    },
    cardBody:{
        flex:1,
        flexDirection:'row',
        margin:3,
        backgroundColor:'#8D3DAF',
        borderRadius:9,
        padding:6,
        elevation:3,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardText:{
        justifyContent:'center',
        paddingHorizontal:8,
        paddingVertical:8,
    },
    userName:{
        fontSize:16,
        fontWeight:'bold',
        color:'#FFF'
    },
    userStatus:{
        fontSize:14,
        color:'#FFFF'
    }
})