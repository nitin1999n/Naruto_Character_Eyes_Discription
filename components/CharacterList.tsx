import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function characterList() {
    const character = [
        {
            uid: 1,
            name: 'Sasuke Uchiha',
            status: 'Ninja',
            imageUrl: 'https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest/scale-to-width-down/300?cb=20170716092103'
        },
        {
            uid: 2,
            name: 'Itachi Uchiha',
            status: 'Rouge Ninja',
            imageUrl: 'https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest/scale-to-width-down/300?cb=20220214112531'
        },
        {
            uid: 3,
            name: 'Madara Uchiha',
            status: 'Ghost of Uchiha',
            imageUrl: 'https://static.wikia.nocookie.net/naruto/images/f/fd/Madara.png/revision/latest/scale-to-width-down/300?cb=20160115141947'
        },
        {
            uid: 4,
            name: 'Obito Uchiha',
            status: 'The Masked Man',
            imageUrl: 'https://static.wikia.nocookie.net/naruto/images/4/4a/Obito_Uchiha.png/revision/latest/scale-to-width-down/300?cb=20220223045744'
        }
    ];
    return (
        <View>
            <Text style={styles.headingText}>Character's List</Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}>
                {character.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{
                                uri: imageUrl
                            }}
                            style={styles.userImage}
                        />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom:3
    },
    userCard: {
        flexDirection: 'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#b33939',
        padding:4,
        borderRadius:10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight:14
    },
    userName: {
        fontSize:16,
        fontWeight:'600',
        color:'#FFF'
    },
    userStatus: {
        fontSize:12
    }
})