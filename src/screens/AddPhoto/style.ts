import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  row: {
    flexDirection: 'row',
    marginVertical: 10
  },

  content: {
    flex: 1,
  },

  btn_wrapper: {
    paddingHorizontal: 20
  },

  title: {
    color: colors.GRAY,
    textAlign: 'center',
    marginBottom: 20,
  }
})
