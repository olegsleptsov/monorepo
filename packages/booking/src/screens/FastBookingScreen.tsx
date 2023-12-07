import React from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {Button} from 'react-native-paper';
import {getRandomNumber} from '../utils/utils';

const FastBookingScreen = ({}) => {
  const createBooking = () => {
    const roomNumber = getRandomNumber(1, 99);
    const tableNumber = getRandomNumber(100, 999);
    Alert.alert(
      `Вы создали быстрое бронирование. Ваш кабинет: ${roomNumber}, ваш стол: ${tableNumber}`,
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 20}}>
        Это экран внутри приложения Booking (SO). Он был разработан командой SO.
        Поддерживается тоже командой SO.
      </Text>
      <Text style={{marginBottom: 50}}>
        Но открываьтся этот экран может, как внути "HOST App", так и внутри SO.
        Причём мы можем узнать откуда пользователь перешёл. Из SO или из HOST
      </Text>
      <Button mode="contained" onPress={createBooking}>
        Создать быстрое бронирование
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 16,
  },
  divider: {
    backgroundColor: 'transparent',
    height: 8,
  },
});

export default FastBookingScreen;
