import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  image: {
    width: '100%',
    height: 100
  },
  textInputContainer: {
    marginTop: 16,
    width: '100%'
  },
  textInput: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: COLORS.gray_border
  },
  searchButtonContainer: {
    marginTop: 24,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: COLORS.gray_background
  }
});
