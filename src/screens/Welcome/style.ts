import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },

  content_wrapper: {
    flex: 1
  },

  logo_wrapper: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.BLACK
  },

  btn_wrapper: {
    top: -30,
    paddingHorizontal: 20
  },

  paginationStyle: {
    top: -40
  },

  dotStyle: {
    backgroundColor: colors.PRIMARY
  }
})
