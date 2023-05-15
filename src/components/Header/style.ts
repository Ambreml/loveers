import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 20
  },

  title_wrapper: {
    marginLeft: 20,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: colors.BLACK
  },

  btn_back: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY
  }

})
