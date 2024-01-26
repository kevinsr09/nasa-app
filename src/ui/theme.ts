import { Appearance } from 'react-native'

export const theme = {
  colorScheme: Appearance.getColorScheme(),

  colors: {
    gulfBlue50: '#e8f5ff',
    gulfBlue100: '#d5ebff',
    gulfBlue200: '#b4daff',
    gulfBlue300: '#88bfff',
    gulfBlue400: '#5994ff',
    gulfBlue500: '#336bff',
    gulfBlue600: '#103dff',
    gulfBlue700: '#0732fb',
    gulfBlue800: '#092dca',
    gulfBlue900: '#12309d',
    gulfBlue950: '#0a1855'
  },

  sizeLogo: {
    small: {
      width: 24,
      height: 24
    },
    medium: {
      width: 48,
      height: 48
    },
    large: {
      width: 72,
      height: 72
    }
  }
}
