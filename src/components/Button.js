import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native'
import { theme } from '../core/theme'

export default function But() {
  return (
    <Button
      style={styles.button}
      // labelStyle={styles.text}
      
    ></Button>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})