import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Button, MD3Colors, Text} from 'react-native-paper';
import {useAuth} from '../contexts/AuthContext';

const SignInScreen = () => {
  const {signIn} = useAuth();

  const [tenant, setTenant] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.welcomeHeadline}>
        Welcome!
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setTenant}
        value={tenant}
        placeholder="tenant"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={setLogin}
        value={login}
        placeholder="login"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="password"
        autoCapitalize="none"
      />
      <Button
        mode="contained"
        onPress={() => {
          signIn(tenant);
        }}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeHeadline: {
    color: MD3Colors.primary20,
  },
  welcomeText: {
    padding: 16,
    paddingBottom: 32,
  },
  input: {
    height: 40,
    margin: 12,
    width: '100%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

export default SignInScreen;
