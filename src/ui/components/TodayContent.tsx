import { LinearGradient } from 'expo-linear-gradient'
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View
} from 'react-native'

import { theme } from '../theme'

import { Container } from '@/components/Container'
import { env } from '@/config/env'
import { useFetch } from '@/hooks/useFetch'

export const TodayContent = () => {
  const { data, isLoading } = useFetch({ url: env.apiUrl + env.apiKey })

  console.log(isLoading)

  return (
    <Container style={styles.container}>
      {isLoading && (
        <View style={styles.imageContainer}>
          <Text style={{ color: 'white' }}>Cargando info</Text>
        </View>
      )}

      {!isLoading && (
        <TouchableHighlight>
          <View style={styles.imageContainer}>
            <Image source={{ uri: data[0].url }} style={styles.imagen} />

            <LinearGradient
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.9)']}
              style={styles.gradient}
            />

            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>{data[0].title}</Text>
              <Text style={styles.textDate}>{data[0].date}</Text>
            </View>
          </View>
        </TouchableHighlight>
      )}
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: 250,
    width: '100%',
    alignItems: 'center'
  },
  imagen: {
    width: '100%',
    aspectRatio: 10 / 11,
    resizeMode: 'cover'
  },
  imageContainer: {
    position: 'relative',
    width: '80%',
    aspectRatio: 10 / 11,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19
  },
  gradient: {
    position: 'absolute',
    top: 180,
    left: 0,
    right: 0,
    bottom: 0
  },

  textTitle: {
    color: theme.colors.gulfBlue100,
    fontSize: 24,
    paddingHorizontal: 20,
    fontFamily: 'JakartaBold'
  },
  textDate: {
    color: theme.colors.gulfBlue200,
    fontSize: 16,
    paddingHorizontal: 20,
    fontFamily: 'JakartaRegular'
  },

  textContainer: { position: 'absolute', top: '60%', left: 0, gap: 10 }
})
