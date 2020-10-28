import React, { useEffect, useReducer } from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    ActivityIndicator,
    FlatList
 } 
from 'react-native'

import { initialState, reducer, actionCreators } from './../store/comment';

const CommetScreen = ({ route, navigation }) => {

    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { loading, error, comments } = state;

    useEffect( () => {
        const fetchComment = async() => {
            dispatch( actionCreators.loading()  )

            try{
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.postId}/comments`);
    
                const data = await res.json();
    
                dispatch( actionCreators.success(data) )
                
            }catch(err){
                dispatch( actionCreators.failur() )
            }

        }

        fetchComment()
    }, [])

    if(loading){
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        )
    }

    
    return (
        <FlatList 
            style={styles.container}
            keyExtractor={(item) => item.id.toString() }
            data={comments}
            renderItem={ ({item, index}) => (
                <View key={item.id}>
                    <View style={styles.comment}>
                        <Text style={styles.comment_from}>
                            From: {item.email}
                        </Text>
                        <Text style={styles.comment_author}>
                            {item.name}
                        </Text>
                        <Text style={styles.comment_body}>
                            {item.body}
                        </Text>
                    </View>
                </View>
            )}
        />
        
    )
}

export default CommetScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    comment: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 8
    },
    comment_from: {
        fontWeight: 'bold'
    },
    comment_author: {
        color: 'tomato'
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
