import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { theme } from '@/ui/theme'

export const AppBar = () => {
  return (
    <SafeAreaView>
      <View style={style.container}>
        <Text style={style.text}>Home</Text>
      </View>

      <StatusBar style={theme.colorScheme ?? 'light'} />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'JakartaBold'
  }
})
