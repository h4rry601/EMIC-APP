import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              style={styles.avatar}
              source={require('../assets/avatar.png')}
            />
            <Text style={styles.hello}>Xin chào dangxa</Text>
          </View>
          <Image style={styles.bell} source={require('../assets/bell.png')} />
        </View>
        <View style={styles.body}>
          <Image
            style={styles.transformer}
            source={require('../assets/transformer.jpg')}
          />
          <Text style={styles.sectionTitle}>
            Hiển thị dữ liệu cập nhật mới nhất của máy biến áp được gửi về
          </Text>
          <Text style={styles.sectionTitle}>
            Hiển thị vị trí các máy biến áp trên bản đồ
          </Text>
          <Text style={styles.sectionTitle}>
            Hiển thị các biểu đồ dữ liệu vận hành của máy biến áp
          </Text>
          <View style={styles.eventSection}>
            <Text style={styles.sectionTitle}>
              Hiển thị dữ liệu sự kiện của máy biến áp
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <Text style={styles.bottomItem}>Trang chủ</Text>
        <Text style={styles.bottomItem}>Theo dõi máy biến áp</Text>
        <Text style={styles.bottomItem}>Cài đặt</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  hello: {
    fontSize: 20,
    marginLeft: 10,
  },
  bell: {
    width: 25,
    height: 25,
  },
  body: {
    padding: 10,
  },
  transformer: {
    width: '100%',
    height: 200,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  eventSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  bottomItem: {
    fontSize: 12,
  },
});

export default HomeScreen;