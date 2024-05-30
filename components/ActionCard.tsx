import {
    Image, Linking, StyleSheet, Text, TouchableOpacity, View
} from 'react-native'
import React from 'react'
import ElevatedCard from './ElevatedCard'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What is Sharingan?
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://imgs.search.brave.com/wbqISeqZTIWHgCxLJo2inbVA8E6pYCDnk14LTS39NKc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ieWxp/bmVyLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8xMC81/QkY4MjlGNi1BMDIx/LTQ0QTktQjBGQy0y/NDFGMkQ4NUZFRkMu/cG5n',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        When a wielder of this kekkei genkai experiences a powerful emotional condition with regards to a person precious to them, their brain releases a special form of chakra that affects the optic nerves, transforming the eyes into Sharingan; for that reason the Sharingan is described as an "eye that reflects the heart" (心を写す瞳, Kokoro o utsusu hitomi).
                    </Text >
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://naruto.fandom.com/wiki/Sharingan'
                        )}
                    >
                        <Text style={styles.websiteLink}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://www.instagram.com/nitin1999n/'
                        )}
                    >
                        <Text style={styles.myInstaLink}>Follow Me</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card: {
        width:390,
        height:460,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    elevatedCard: {
        backgroundColor:'#580000',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.3
    },
    headingContainer: {
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText: {
        color:'#FFFFFF',
        fontSize:18,
        fontWeight:'600'
    },
    cardImage: {
        height: 300
    },
    bodyContainer: {
        padding:10,

    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    websiteLink: {
        fontSize:16,
        color:'#000000',
        backgroundColor:'#CC0000',
        paddingHorizontal:10,
        paddingVertical:6,
        borderRadius:6
    },
    myInstaLink: {
        fontSize:16,
        color:'#000000',
        backgroundColor:'#CC0000',
        paddingHorizontal:10,
        paddingVertical:6,
        borderRadius:6
    }
})