import React, { useState } from "react";
import { View, Image, TextInput, Button } from "react-native";

import { googleSearchPlaceholder } from "../../utils/constants/stringConstants";
import { COLORS } from "../../utils/colors";
import { Styles } from "./styles";
import { GOOGLE_LOGO } from "../../assets/images";

export default function SearchScreen ({ navigation }) {
  const [searchValue, setSearchValue] = useState("");

  return <View style={Styles.container}>
    <Image source={{ uri: GOOGLE_LOGO }} style={Styles.image} resizeMode={"contain"} />
    <View style={Styles.textInputContainer}>
      <TextInput
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder={googleSearchPlaceholder}
        style={Styles.textInput} />
    </View>
    <View style={Styles.searchButtonContainer}>
      <Button title={"SEARCH"} color={COLORS.gray_text} onPress={onSearchTap} />
    </View>
  </View>;

  function onSearchTap() {
    if (searchValue) {
      navigation.navigate('ListingScreen', {search: searchValue})
      setSearchValue('')
    }
  }
}
