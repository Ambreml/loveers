import { StyleSheet } from 'react-native'

import { colors } from '../../../styles'

export const styles = StyleSheet.create({
  container: {
   marginVertical: 5,
  },

  label_wrapper: {
    marginBottom: 10,
    color: colors.BLACK
  },

  input_wrapper: {
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.WHITE,
    paddingHorizontal: 20
  }

})
