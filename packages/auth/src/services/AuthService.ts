import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthService {
  TOKEN_KEY = 'token';
  TENANT_KEY = 'tenant';

  getCredentials(): Promise<string | null> {
    return AsyncStorage.getItem(this.TOKEN_KEY);
  }

  getTenant(): Promise<string | null> {
    return AsyncStorage.getItem(this.TENANT_KEY);
  }

  setCredentials(token: string): Promise<void> {
    return AsyncStorage.setItem(this.TOKEN_KEY, token);
  }

  setTenant(tenant: string): Promise<string | void> {
    return AsyncStorage.setItem(this.TENANT_KEY, tenant);
  }

  removeCredentials(): Promise<void> {
    return AsyncStorage.removeItem(this.TOKEN_KEY);
  }

  removeTenant(): Promise<void> {
    return AsyncStorage.removeItem(this.TENANT_KEY);
  }

  static shared = new AuthService();
}

export default AuthService;
