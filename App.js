import "react-native-gesture-handler";
import * as React from "react";
import { View, StatusBar, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'

import { Colors } from "react-native/Libraries/NewAppScreen";

import SearchScreen from "./src/screens/SearchScreen";
import SearchListingScreen from "./src/screens/SearchListingScreen";
import SearchResultDetailScreen from "./src/screens/SearchResultDetailScreen";

const Stack = createStackNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{ ...backgroundStyle, flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Home'} >
          <Stack.Screen name={'Home'} component={SearchScreen} options={{headerShown: false}}/>
          <Stack.Screen name={'ListingScreen'} component={SearchListingScreen} options={{ title: 'Results' }}/>
          <Stack.Screen name={'DetailScreen'} component={SearchResultDetailScreen} options={{ title: 'Details' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
