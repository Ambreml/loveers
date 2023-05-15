import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  title_wrapper: {
    color: colors.BLACK,
    paddingHorizontal: 20,
    marginVertical: 30
  },

  row: {
    flexDirection: 'row',
    marginVertical: 10
  },

  card_wrapper: {
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    height: 80,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  card_title: {
    color: colors.BLACK
  },

  btn_wrapper: {
    paddingHorizontal: 20
  },

  subtitle_wrapper: {
    color: colors.GRAY,
    paddingHorizontal: 20,
    marginVertical: 30
  }
})
