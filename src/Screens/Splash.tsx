import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
};

type SplashNavigationProps = StackNavigationProp<RootStackParamList, 'Login'>;

const Splash = () => {
  const navigation = useNavigation<SplashNavigationProps>();

  useEffect(() => {
    const replaceAction = StackActions.replace('Login');
    const timer = setTimeout(() => {
      navigation.dispatch(replaceAction);
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/emic.png')} 
        style={styles.image}
        resizeMode="contain"
      />
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },  
  image: {
    width: '80%',  
    height: '80%',    
  }
});

export default Splash;