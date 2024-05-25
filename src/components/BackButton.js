import React from 'react'
import {  Image, StyleSheet, Pressable } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function BackButton({ goBack }) {
  return (
    <Pressable onPress={goBack} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/back.png')}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 40,
  },
  image: {
    width: 24,
    height: 24,
  },
})
