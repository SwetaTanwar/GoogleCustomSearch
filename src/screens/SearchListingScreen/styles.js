import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  itemContainer: {
    backgroundColor: COLORS.white,
    marginVertical: 8,
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.gray_border,
    borderRadius: 8
  },
  image: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  text: {
    marginVertical: 8,
    padding: 8
  }
})
