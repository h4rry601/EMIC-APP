import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';

interface User {
  id: string;
  username: string;
  password: string;
}

interface LoginResponse {
    [x: string]: any;
    "CODE":string;
    "MESSAGE": string;
    "USER_ID": string;
    "USER_ACCOUNT": string;
    "USER_NAME": string;
    "USER_ADDRESS": string;
    "USER_TEL": string;
    "USER_EMAIL": string;
    "USER_TYPE": string;
    "LASTACTIVE_TIME": string;
    "TOKEN": string;
    "TOKEN_EXPIRED": string;
    "ROLE_NAME": string;
}


type RootStackParamList = {
  HomeScreen: undefined;
  Register: undefined;
};

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    AsyncStorage.removeItem('user');
  }, []);

  const loginHandle = () => {
    if (!username) {
      Alert.alert('Xin vui lòng nhập tài khoản!');
      return;
    }
    if (!password) {
        Alert.alert('Xin vui lòng nhập mật khẩu!');
      return;
    }

    axios
      .get(
        'http://222.252.14.147:4040/api/Login?UserAccount=dangxa&Password=ktdt123456',
        {
            params: {
                UserAccount: username,
                Password: password,
            }
        }
      )
      .then((res) => {
        const resData: LoginResponse = res.data;
        if (resData.CODE === "1") {
            AsyncStorage.setItem('user', JSON.stringify(resData.user));
            navigation.navigate('HomeScreen');
          Alert.alert('Đăng nhập thành công!');
        } else {
            Alert.alert('Đăng nhập không thành công!');
          
          console.log('res.data:',JSON.stringify(res.data))
          res
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ĐĂNG NHẬP</Text>
      <TextInput
        style={styles.input}
        placeholder="Tài khoản"
        value={username}
        onChangeText={(username) => setUsername(username)}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          secureTextEntry={!showPassword}
          placeholder="Mật khẩu"
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setShowPassword(!showPassword)}>
          <Icon
            name={showPassword ? 'eye-slash' : 'eye'}
            size={20}
            color="#ccc"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={loginHandle}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.link, { marginTop: 20 }]}
        onPress={() => navigation.navigate('Register')}>
        <Text>Tạo tài khoản</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  passwordContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    flex: 1,
  },
  icon: {
    position: 'absolute',
    top: 15,
    right: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
  },
});

export default Login;


    