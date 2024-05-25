import React from 'react'
import { View, StyleSheet } from 'react-native'
import { theme } from '../core/theme'

export default function Background({ children }) {
  return (
    <View style={styles.background}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.background,
  },
})
