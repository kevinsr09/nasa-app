import { Image, Text, View } from 'react-native'

import { AppBar } from '@/components/AppBar'
import { HeaderInfo } from '@/components/HeaderInfo'

export const Header = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <AppBar />

      <HeaderInfo />
    </View>
  )
}
