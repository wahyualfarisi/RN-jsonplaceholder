import React, { useCallback, useEffect, useReducer } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, } from 'react-native'
import { initialState, reducers, actionCreators } from './../store/photo';
import { getList } from './../api/piscum';
import PhotoGrid from './../components/PhotoGrid';

const PhotosScreen = () => {

    const [state, dispatch] = useReducer(reducers, initialState);
    const { photos, nextPage, loading, error } = state;

    const fetchPhotos = useCallback( async() => {
        dispatch( actionCreators.loading() )

        try{
            const nextPhotos = await getList(nextPage);
            console.log(nextPhotos)
            dispatch( actionCreators.success(nextPhotos, nextPage) )
        }catch(err){
            // dispatch( actionCreators.failure() )
        }
    }, [nextPage]);

    

    if(photos.length === 0) {
        if(loading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="small" />
                </View>
            )
        }
    }

    if(error){
        <View style={styles.container}>
            <Text>Failed to load post</Text>
        </View>
    }



    return <PhotoGrid numColums={1} photos={photos} />
}

export default PhotosScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
