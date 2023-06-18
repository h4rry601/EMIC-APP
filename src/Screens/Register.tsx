import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface RegisterProps {
  navigation: any;
}

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  const [UserAccount, setUserAccount] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [UserName, setUserName] = useState('');
  const [Address, setAddress] = useState('');
  const [Email, setEmail] = useState('');
  const [Tel, setTel] = useState('');
  const [Note, setNote] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const registerHandle = () => {
    fetch('http://222.252.14.147:4040/api/Register?', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        UserAccount: UserAccount,
        Password: Password,
        ConfirmPassword: ConfirmPassword,
        UserName: UserName,
        Address: Address,
        Email: Email,
        Tel: Tel,
        Note: Note,
      }),
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success) {
          AsyncStorage.setItem('user', JSON.stringify(resData.user));
        } else {
          Alert.alert('Tạo tài khoản không thành công!');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TẠO TÀI KHOẢN</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tài khoản"
          value={UserAccount}
          onChangeText={(UserAccount) => setUserAccount(UserAccount)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          secureTextEntry={!showPassword}
          placeholder="Mật khẩu"
          value={Password}
          onChangeText={(Password) => setPassword(Password)}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.icon}>
          {showPassword ? (
            <FontAwesome name="eye-slash" size={20} color="#aaa" />
          ) : (
            <FontAwesome name="eye" size={20} color="#aaa" />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          secureTextEntry={!showConfirmPassword}
          placeholder="Nhập lại mật khẩu"
          value={ConfirmPassword}
          onChangeText={(ConfirmPassword) =>
            setConfirmPassword(ConfirmPassword)
          }
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          style={styles.icon}>
          {showConfirmPassword ? (
            <FontAwesome name="eye-slash" size={20} color="#aaa" />
          ) : (
            <FontAwesome name="eye" size={20} color="#aaa" />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Họ tên"
          value={UserName}
          onChangeText={(UserName) => setUserName(UserName)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Địa chỉ"
          value={Address}
          onChangeText={(Address) => setAddress(Address)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="Email"
          value={Email}
          onChangeText={(Email) => setEmail(Email)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          placeholder="Điện thoại"
          value={Tel}
          onChangeText={(Tel) => setTel(Tel)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
         style={styles.input}
          placeholder="Ghi chú"
          value={Note}
          onChangeText={(Note) => setNote(Note)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={registerHandle}>
        <Text style={styles.buttonText}>Tạo tài khoản</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.link, { marginTop: 20 }]}
        onPress={() => navigation.navigate('Login')}>
        <Text>Đăng nhập</Text>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  input: {
    flex: 1,
  },
  icon: {
    padding: 10,
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

export default Register;