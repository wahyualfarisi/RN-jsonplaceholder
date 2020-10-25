import React, { useEffect, useReducer } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import { actionCreators, initialState, postReducers } from './../store/postReducer';




const PostsScreen = () => {

    const [state, disptach] = useReducer(postReducers, initialState);

    useEffect( ( ) => {

        const fetchPost = async() => {
            disptach( actionCreators.loading() )

            try{
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    
                const data = await res.json();
                
                disptach( actionCreators.success(data) );

            }catch(err){
                disptach( actionCreators.failure() )
            }
        }

        fetchPost();

    }, [])

    const {loading, error, posts} = state;

    if(loading){
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        )
    }

    if(error) {
        return (
            <View style={styles.center}>
                <Text>Something went wrong</Text>
            </View>
        )
    }



    return (
        <FlatList 
            style={styles.container}
            keyExtractor={(post) => post.id}
            data={posts}
            renderItem={ ( { item, index } ) => (
                <View key={item.id} style={styles.post}>
                    <Text style={styles.title}> {index}. {item.title} </Text>
                    <Text> {item.body.slice(0, 20)} ... </Text>
                </View>
            )}

        />
    )
}

export default PostsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    post: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 20,
        paddingRight: 20,
        marginLeft: 20
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000' 
    },
    body: {
        marginTop: 0,
        fontSize: 10,
        color: '#f8f8f8'
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
