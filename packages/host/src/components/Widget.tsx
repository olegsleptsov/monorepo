import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type WidgetType = {
  title: string;
  onPress: () => void;
};

const Widget = (props: WidgetType) => {
  const {title, onPress} = props;

  return (
    <TouchableOpacity style={styles.wrap} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
  },
});

export default Widget;
