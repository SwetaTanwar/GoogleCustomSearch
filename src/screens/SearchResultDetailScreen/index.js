import React from "react";
import { Image, Text, View } from "react-native";
import { Styles } from "./styles";

export default function SearchResultDetailScreen({ route }) {
  const data = route.params.data
  const imageUrl = data.pagemap?.cse_thumbnail
    ? data.pagemap.cse_thumbnail[0].src
    : data.pagemap?.cse_image
      ? data.pagemap?.cse_image[0].src
      : '';

  return <View style={Styles.container}>
    <Text style={Styles.titleText}>{data.title}</Text>
    <Image source={{uri: imageUrl}} style={Styles.image}/>
    <Text style={Styles.descText}>{`Kind: \n${data.kind}`}</Text>
    <Text style={Styles.descText}>{`Snippet: \n${data.snippet}`}</Text>
    <Text style={Styles.descText}>{`FormattedUrl: \n${data.formattedUrl}`}</Text>
  </View>
}
