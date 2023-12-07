/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {useAuth} from '../contexts/AuthContext';
import AuthService from '../services/AuthService';

const AccountScreen = () => {
  const {signOut} = useAuth();
  const [tenant, setTenant] = useState<string | null>('');
  const [token, setToken] = useState<string | null>('');

  useEffect(() => {
    const getTenant = async () => {
      try {
        const tenantFromStorage = await AuthService.shared.getTenant();
        setTenant(tenantFromStorage);
      } catch (error) {
        console.error('Error fetching tenant:', error);
      }
    };
    const getToken = async () => {
      try {
        const tenantFromStorage = await AuthService.shared.getCredentials();
        setToken(tenantFromStorage);
      } catch (error) {
        console.error('Error fetching tenant:', error);
      }
    };

    getTenant();
    getToken();
  }, []);

  return (
    <View style={styles.container}>
      {!!tenant && <Text>Ваш тенант: {tenant}</Text>}
      {!!token && <Text>Ваш token: {token}</Text>}
      <Button mode="contained" onPress={signOut}>
        Logout
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
  },
});

export default AccountScreen;
