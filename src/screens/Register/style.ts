import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 30
  },

  row: {
    flexDirection: 'row'
  },

  photo_wrapper: {
      height: 90,
      width: 90,
      borderRadius: 15,
      backgroundColor: colors.PRIMARY,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10
  },

  add_photo: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -5,
    right: -5
  },

  input_wrapper: {
    flex: 1,
    marginLeft: 20
  }
})
