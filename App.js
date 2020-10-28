import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons'

//screen import
import PostsScreen from './screens/PostsScreen';
import UsersScreen from './screens/UsersScreen';
import UserPostScreen from './screens/UsersPostScreen';
import PhotosScreen from './screens/PhotosScreen';
import CommetScreen from './screens/CommetScreen';

const PostStack = createStackNavigator();
function PostStackScreen(){
  return (
    <PostStack.Navigator>
        <PostStack.Screen name="Posts" component={PostsScreen} />
        <PostStack.Screen 
          name="Comments" 
          component={CommetScreen} 
          options={ ({route}) => ({
            title: 'Comments: '+ route.params.Post 
          })}
        />
    </PostStack.Navigator>
  )
}


const UsersStack = createStackNavigator();
function UsersStackScreen(){
  return (
    <UsersStack.Navigator>
      <UsersStack.Screen name="Users" component={UsersScreen} />
      <UsersStack.Screen 
        name="UserPost" 
        component={UserPostScreen} 
        options={ ({route}) => ({
          title: `${route.params.name}`
        })}
      />
    </UsersStack.Navigator>
  )
}

const PhotosStack = createStackNavigator();
function PhotosStackScreen(){
  return (
    <PhotosStack.Navigator>
      <PhotosStack.Screen name="Photos" component={PhotosScreen} />
    </PhotosStack.Navigator>
  )
}


const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
        <Tab.Navigator 
          screenOptions={ ({route}) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let icon;

              if(route.name === 'Posts'){
                icon = <AntDesign name="home" size={size} color={color} />
              }else if(route.name === 'Users') {
                icon = <AntDesign name="user" size={size} color={color} />
              }else if(route.name === 'Photos') {
                icon = <Ionicons name="md-photos" size={size} color={color} />
              }

              return icon;
            }
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey'
          }}
        >
          <Tab.Screen name="Posts" component={PostStackScreen} />
          <Tab.Screen name="Users" component={UsersStackScreen} />
          <Tab.Screen name="Photos" component={PhotosStackScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
