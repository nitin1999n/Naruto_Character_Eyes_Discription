import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>FancyCard</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'data:image/jpeg;base64,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'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Sharingan Eye</Text>
                    <Text style={styles.cardLable}>Uchiha clan</Text>
                    <Text style={styles.cardDescription}>The Sharingan (写輪眼, literally meaning: Copy Wheel Eye, meaning (Viz): Mirror Wheel Eye) is the dōjutsu kekkei genkai of the Uchiha clan that appears selectively among its members.</Text>
                    <Text style={styles.cardFooter}>Powerfull character in Naruto</Text>
                    
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
        borderRadius:6

    },
    card: {
        width:390,
        height:390,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    cardElevated: {
        backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage: {
        height: 180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6
    },
    cardLable:{
        fontSize:18,
        color:'#000000',
        marginBottom:4
    },
    cardDescription:{
        fontSize:15,
        color:'#707070',
        marginBottom:12,
        marginTop:6,
        flexShrink:1
    },
    cardFooter:{
        color:'#000000'
    }

})