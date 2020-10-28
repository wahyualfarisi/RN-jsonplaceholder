import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const UsersPostScreen = () => {
    return (
        <View style={styles.container}>
            
            <View style={styles.header_user}>
                <View style={styles.thumnail}>
                    <Text style={styles.thumnail_text}>W</Text>
                </View>

                <View style={styles.user_info}>
                    <Text style={styles.user_info_name}>Wahyu Alfarisi</Text>
                    <Text style={styles.user_info_web}>www.alfarisilab.com</Text>
                </View>
            </View>

            <View style={styles.user_contact}>
                <View style={styles.user_contact_item}>
                    <MaterialIcons style={styles.icon_contact} name="phone" size={24} color="#a6a6a4" />
                    <Text style={styles.contact_text}>081317726873</Text>
                </View>
                <View style={styles.user_contact_item}>
                    <MaterialIcons style={styles.icon_contact} name="email" size={24} color="#a6a6a4" />
                    <Text style={styles.contact_text}>wahyualfarisi30@gmail.com</Text>
                </View>
                <View style={styles.user_contact_item}>
                    <MaterialIcons style={styles.icon_contact} name="location-on" size={24} color="#a6a6a4" />
                    <Text style={styles.contact_text}>Jakarta</Text>
                </View>
                <View style={styles.user_contact_item}>
                    <MaterialIcons style={styles.icon_contact} name="location-city" size={24} color="#a6a6a4" />
                    <Text style={styles.contact_text}>Kulas Light</Text>
                </View>
            </View>

            <View style={styles.user_counter}>
                <View style={styles.user_counter_info}>
                    <Text style={styles.counter_total}>$140.000</Text>
                    <Text style={styles.counter_title}>Post</Text>
                </View>
                <View style={styles.user_counter_info}>
                    <Text style={styles.counter_total}>12</Text>
                    <Text style={styles.counter_title}>Orders</Text>
                </View>
            </View>

        </View>
    )
}

export default UsersPostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header_user: {
        flexDirection: 'row',
        
        padding: 20
    },
    thumnail: {
        marginRight: 20,
        backgroundColor: '#db6400',
        width: 100,
        height: 100,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    thumnail_text: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fff'
    },
    user_info: {
        justifyContent: 'center',
    },
    user_info_name: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#1c2b2d'
    },
    user_info_web: {
        color: '#a6a6a4'
    },


    user_contact: {
        padding: 20,
        
    },
    user_contact_item: {
        flexDirection: 'row',
        marginBottom: 10
    },
    icon_contact: {
        marginRight: 20
    },
    contact_text: {
        color: '#a6a6a4'
    },




    user_counter: {
        flexDirection: 'row',
    },
    user_counter_info: {
        flexBasis: '50%',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 25,
        
        justifyContent: 'center',
        alignItems: 'center'
    },
    counter_total: {
        fontWeight: 'bold',
        fontSize: 15
    },
    counter_title: {
        color: '#a6a6a4'
    }

})
