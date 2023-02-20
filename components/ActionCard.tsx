import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in Javascript 21 - ES12
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/uyfohHiTxho/upload/3d75fdffdd798f373f1d4f9c25130c97.jpeg'
                    }}
                    style={
                        styles.cardImage
                    }
                />
                <View style={styles.cardBodyContainer}>
                    <Text numberOfLines={3} style={{color:'#000'}}>
                        ECMAScript 2021 version is expected to be released in the next year, and now that we are finalizing this dystopic 2020 is an excellent time to review the new functionality that will bring the ES12 version.

                        This list is based on ECMAScript proposal four, which means that these features will be in the next version.


                    </Text>
                </View>
                <View style={styles.cardFooterContainer}>
                    <TouchableOpacity
                        onPress={() => { openWebsite('https://blog.kmc.one/a-beginners-guide-to-react-native-on-linux-installing-and-creating-a-hello-world-app') }}
                    >
                        <Text style={styles.socialLink}>
                            Read More
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={
                        () => { openWebsite('https://twitter.com/MahiKMC') }
                    }>
                        <Text style={styles.socialLink} >Follow Me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ActionCard

const styles = StyleSheet.create({

    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        width: 350,
        height: 350,
        borderRadius: 10,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        shadowColor: '#333',
        elevation:3,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },
    cardImage: {
        height: 190,
    },
    cardBodyContainer: {
        padding:10,

    },
    cardFooterContainer: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',

    },
    socialLink: {
        fontSize:16,
        color:'#000',
        backgroundColor:'#FFF',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6,
    },

})