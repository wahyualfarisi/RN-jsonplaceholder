import React, { useEffect, useReducer } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { initialState, reducers, actionCreators  } from './../store/user';

const UsersScreen = ({ route , navigation }) => {

    const [ state, dispatch ] = useReducer(reducers, initialState);

    const { loading, error, users } = state;

    console.log({
        loading,
        error,
        users
    })

    useEffect( () => {

        const fetchUsers = async() => {
            dispatch( actionCreators.loading() )

            try{
                const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
                const data = await res.json();
                dispatch( actionCreators.success(data) )
            }catch(err){
                dispatch( actionCreators.failure() )
            }

        }

        fetchUsers();

    }, [])


    if( loading ){
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        )
    }

    return (
       <FlatList 
        data={users}
        keyExtractor={(item) => item.id.toString()}

        renderItem={({ item, index }) => (
            <TouchableOpacity 
                style={styles.user} 
                onPress={() => navigation.navigate('UserPost', { name: item.name, userId: item.id })  }>
                <View style={styles.rounded}>
                    <Text style={styles.rounded_text}>
                        {item.name.split('')[0]}
                    </Text>
                </View>

                <View style={styles.user_info}>
                    <Text style={styles.user_info_name}>{item.name}</Text>
                    <Text>{item.website}</Text>
                </View>

                <View style={styles.user_navigation}>
                    <Ionicons name="ios-arrow-dropright" size={15} color="black" />
                </View>
            </TouchableOpacity>
        )}
       />
    )
}

export default UsersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1 
    },
    user: {
        backgroundColor: '#fff',
        padding: 20,
        flexDirection: 'row',
        borderBottomWidth: .8,
        borderBottomColor: '#ccc'
    },
    rounded: {
        backgroundColor: '#db6400',
        borderRadius: 200,
        marginRight: 20,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rounded_text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'
    },
    user_info: {
        marginRight: 'auto'
    },
    user_info_name: {
        fontWeight: 'bold',
        fontSize: 18
    },  
    user_navigation: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
