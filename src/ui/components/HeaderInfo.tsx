import { Image, StyleSheet, Text, View } from 'react-native'

import { Container } from '@/components/Container'
import { theme } from '@/ui/theme'

export const HeaderInfo = () => {
  return (
    <Container style={styles.container}>
      <View>
        <Text style={styles.text}>Explore</Text>
      </View>
      <View>
        <Image source={require('@/assets/nasa-logo.png')} style={styles.logo} />
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gulfBlue50
  },
  logo: {
    width: theme.sizeLogo.medium.width,
    height: theme.sizeLogo.medium.height
  },
  text: {
    color: theme.colors.gulfBlue50,
    textAlign: 'center',
    fontSize: 24
  }
})
