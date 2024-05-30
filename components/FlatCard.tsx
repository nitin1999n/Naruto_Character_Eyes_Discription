import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

export default function FlatCard() {
    return (
        <View>
            <Text style={styles.headingText}>FlatCard</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <View style={styles.cardContent}>
                        <Image
                            source={{
                                uri: 'https://i.pinimg.com/originals/59/92/e0/5992e0c1b1e66b76e08042b2000aff18.png',
                            }}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardText}>Uchiha's</Text>
                    </View>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <View style={styles.cardContent}>
                        <Image
                            source={{
                                uri: 'https://w0.peakpx.com/wallpaper/145/615/HD-wallpaper-uzumaki-black-circles-clan-cool-dope-naruto-red-simple-swirl.jpg',
                            }}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardText}>Uzumaki's</Text>
                    </View>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <View style={styles.cardContent}>
                        <Image
                            source={{
                                uri: 'https://i.pinimg.com/originals/9e/54/7f/9e547f767cc490dd352eb6b24be8fd8c.jpg',
                            }}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardText}>Huga's</Text>
                    </View>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <View style={styles.cardContent}>
                        <Image
                            source={{
                                uri: 'https://static.wikia.nocookie.net/narutofanworks/images/d/dd/%C5%8Ctsustuki_Clan_Symbol.png/revision/latest?cb=20211108054825',
                            }}
                            style={[styles.cardImageOtsusuki]}
                        />
                        <Text style={styles.cardText}>Otsusuki's</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    container:{
        flex: 1,
        flexDirection: 'row',
        padding: 28,
    },
    card:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 4,
        margin: 7,
    },
    cardElevated:{
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#FFFFFF',
        shadowOpacity: 0.4,
        shadowRadius: 3
    },
    cardContent:{
        position: 'relative',
        width: 80,
        height: 80,
        alignItems:'center',
        // justifyContent: 'center',
        backgroundColor:'#000000',
        borderRadius:4
    },
    cardImage:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: 4,
        marginTop:10
    },
    cardText:{
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    cardImageOtsusuki:{
        width: '65%',
        height: '65%',
        position: 'absolute',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginTop:20,
    }

})