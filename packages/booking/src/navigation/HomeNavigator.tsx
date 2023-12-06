import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NavBar from '../components/NavBar';
import FastBookingScreen from '../screens/FastBookingScreen';

export type HomeStackParamList = {
  Home: undefined;
  FastBooking: undefined;
};

const Home = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Home.Navigator
      screenOptions={{
        header: NavBar,
        title: 'Booking',
      }}>
      <Home.Screen name="Home" component={HomeScreen} />
      <Home.Screen name="FastBooking" component={FastBookingScreen} />
    </Home.Navigator>
  );
};

export default HomeNavigator;
