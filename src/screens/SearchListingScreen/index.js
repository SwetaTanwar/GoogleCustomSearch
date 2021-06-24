import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View, TouchableOpacity } from "react-native";

import { GOOGLE_IMAGE_SEARCH } from "../../utils/constants/appConstants";
import { imageSearchAPIRequest } from "../../utils/request";

import { Styles } from "./styles";

export default function SearchListingScreen ({navigation, route}) {
  const [data, setData] = useState([])
  const [startIndex, setStartIndex] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const count = 10

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData () {
    const searchQuery = route.params.search
    const url = `${GOOGLE_IMAGE_SEARCH}${searchQuery}&start=${startIndex}`
    const res = await imageSearchAPIRequest(url)
    if (res.items?.length > 0) {
      setData((prevData) => [...prevData, ...res.items])
      setStartIndex((prevData) => prevData + count)
    } else {
      setHasMore(false)
    }
  }

  function _onEndReached() {
    hasMore && fetchData()
  }

  return <View style={Styles.container}>
    <FlatList
      data={data}
      renderItem={_renderItem}
      onEndReached={_onEndReached}
      keyExtractor={(_, index) => index.toString()}/>
  </View>

  function _renderItem ({item, index}) {
    const imageUrl = item.pagemap?.cse_thumbnail
      ? item.pagemap.cse_thumbnail[0].src
      : item.pagemap?.cse_image
        ? item.pagemap?.cse_image[0].src
        : '';
    const onPress = () => _onItemPress(item)

    return imageUrl ? <TouchableOpacity style={Styles.itemContainer} onPress={onPress}>
      <Image source={{uri: imageUrl}} style={Styles.image}/>
      <Text style={Styles.text}>{item.title}</Text>
    </TouchableOpacity> : null
  }

  function _onItemPress (data) {
    navigation.navigate('DetailScreen', {data})
  }
}
