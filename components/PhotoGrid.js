import React from 'react'
import { StyleSheet, Text, View, Dimensions, FlatList, Image } from 'react-native'
import { formatPhotoUri } from './../api/piscum';


const PhotoGrid = ({ photos, numColums = 1 }) => {

    const { width  } = Dimensions.get('window');

    const size = width / numColums;

    

    return (
        <FlatList 
            data={photos}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <Image 
                    source={{
                        width: size,
                        height: size,
                        uri: formatPhotoUri(item.id, size, size)
                    }}
                />
            )}
        />
    )
}

export default PhotoGrid

const styles = StyleSheet.create({})
