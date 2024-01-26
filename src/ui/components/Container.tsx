import { StyleSheet, View } from 'react-native'

export const Container = ({ children, style }: { children: React.ReactNode; style?: any }) => {
  return <View style={[styles.container, style]}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginTop: 10
  }
})
