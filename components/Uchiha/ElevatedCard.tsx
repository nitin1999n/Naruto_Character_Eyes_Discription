import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

export default function ElevatedCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink).catch(err => console.error("Failed to open URL:", err));
    }

    return (
        <View>
            <Text style={styles.headingText}>Elevated card</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <TouchableOpacity style={[styles.card, styles.cardElevated]} 
                    onPress={() => openWebsite('https://naruto.fandom.com/wiki/Sharingan')}>
                    <View style={styles.cardContent}>
                        <Image
                            source={require('./Images/Uchiha/Sharinganphase1.png')}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardText}>Phase 1</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.card, styles.cardElevated]} 
                    onPress={() => openWebsite('https://naruto.fandom.com/wiki/Sharingan')}>
                    <View style={styles.cardContent}>
                        <Image
                             source={require('./Images/Uchiha/Phase2.png')}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardText}>Phase 2</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.card, styles.cardElevated]} 
                    onPress={() => openWebsite('https://naruto.fandom.com/wiki/Sharingan')}>
                    <View style={styles.cardContent}>
                        <Image
                            source={require('./Images/Uchiha/Phase3.png')}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardText}>Phase 3</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.card, styles.cardElevated]} 
                    onPress={() => openWebsite('https://naruto.fandom.com/wiki/Sasuke_Uchiha#:~:text=English-,Sasuke%20Uchiha,-SIGN%20IN%20TO')}>
                    <View style={styles.cardContent}>
                        <Image
                            source={require('./Images/Uchiha/mangekyo_sasuke.png')}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardText}>Sasuke's Mangekyo</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.card, styles.cardElevated]} 
                    onPress={() => openWebsite('https://naruto.fandom.com/wiki/Madara_Uchiha')}>
                    <View style={styles.cardContent}>
                        <Image
                            source={require('./Images/Uchiha/mangekyo_madara.png')}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardText}>Madara's Mangekyo</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.card, styles.cardElevated]} 
                    onPress={() => openWebsite('https://naruto.fandom.com/wiki/Itachi_Uchiha')}>
                    <View style={styles.cardContent}>
                        <Image
                            source={require('./Images/Uchiha/mangekyo_itachi.png')}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardText}>Itachi's Mangekyo</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.card, styles.cardElevated]} 
                    onPress={() => openWebsite('https://naruto.fandom.com/wiki/Obito_Uchiha')}>
                    <View style={styles.cardContent}>
                        <Image
                            source={require('./Images/Uchiha/mangekyo_kakashi.png')}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardText}>Obitos's Mangekyo</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    container: {
        padding: 8,
        flex: 1,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        margin: 3,
        borderRadius: 4,
    },
    cardElevated: {
        backgroundColor: '#909090',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    cardContent: {
        position: 'relative',
        width: 100,
        height: 117,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardImage: {
        height: 117,
        width: 100,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    cardText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});
