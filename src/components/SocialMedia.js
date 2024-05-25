import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DividerWithIcons() {
  return (
    <View style={styles.container}>
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.iconsContainer}>
        <View style={[styles.iconWrapper, { backgroundColor: '#3b5998' }]}>
          <Icon name="facebook" size={30} color="#fff" style={styles.icon} />
        </View>
        <View style={[styles.iconWrapper, { backgroundColor: '#00acee' }]}>
          <Icon name="twitter" size={30} color="#fff" style={styles.icon} />
        </View>
        <View style={[styles.iconWrapper, { backgroundColor: '#db4437' }]}>
          <Icon name="google" size={30} color="#fff" style={styles.icon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width:'100%'
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    marginVertical: 10,
    width:'100%'
  },
  line: {
    height: 1,
    backgroundColor: 'gray',
    width:'20%',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: 'gray',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginTop:8,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  icon: {
    marginHorizontal: 10,
  },
});
