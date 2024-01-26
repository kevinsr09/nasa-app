import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'

import { TodayContent } from './ui/components/TodayContent'

import { Header } from '@/components/Header'
import { theme } from '@/ui/theme'

SplashScreen.preventAutoHideAsync()

export const Main = () => {
  const [fontsLoaded, fontError] = useFonts({
    JakartaRegular: require('@/assets/fonts/Jakarta/static/PlusJakartaSans-Regular.ttf'),
    JakartaBold: require('@/assets/fonts/Jakarta/static/PlusJakartaSans-Bold.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Header />
      <TodayContent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gulfBlue950
  }
})
