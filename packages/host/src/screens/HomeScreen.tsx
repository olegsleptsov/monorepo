import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {CompositeScreenProps} from '@react-navigation/native';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TabsParamList} from '../navigation/TabsNavigator';
import {HomeStackParamList} from '../navigation/HomeNavigator';
import Widget from '../components/Widget';

type Props = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList>,
  MaterialBottomTabScreenProps<TabsParamList, 'HomeNavigator'>
>;

const HomeScreen = ({navigation}: Props) => {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Для нас важно, что HOST app располагает аутентификационными данными
          </Text>
        </View>

        <Widget
          title="Виджет 1. Открывает экран внутри SO"
          onPress={() => navigation.navigate('FastBooking')}
        />
        <Widget title="Виджет 2. Открывает внутри SL" onPress={() => {}} />
        <Widget
          title="Виджет 3. Открывает фичу из HOST APP"
          onPress={() => {}}
        />
      </ScrollView>
      <TouchableOpacity style={styles.voiceAssistant}>
        <Text>Голосовой помощник</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 16,
  },
  divider: {
    backgroundColor: 'transparent',
    width: 16,
  },
  header: {
    width: '100%',
    backgroundColor: 'tomato',
    padding: 16,
  },
  headerTitle: {
    flex: 1,
  },
  voiceAssistant: {
    position: 'absolute',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 100,
    left: Dimensions.get('screen').width / 2,
    bottom: 0,
    transform: [{translateX: -50}],
    zIndex: 2,
  },
});

export default HomeScreen;
