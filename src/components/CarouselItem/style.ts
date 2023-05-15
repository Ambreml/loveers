import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 20,
    paddingTop: 50
  },

  image_wrapper: {
    height: 300, 
    width: '100%',
    borderRadius: 15
  },

  title_wrapper: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 18,
    color: colors.BLACK
  }
})
