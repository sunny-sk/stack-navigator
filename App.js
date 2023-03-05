import "react-native-gesture-handler";
import React from "react";
import { View, Button, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: "User",
          }}
          name="User"
          component={User}
        />
        <Stack.Screen
          options={{
            title: "User Details",
          }}
          name="UserDetails"
          component={UserDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const User = (props) => {
  const goToUserDetails = () => {
    props.navigation.navigate("UserDetails");
  };
  return (
    <View style={styles.screen}>
      <Button onPress={goToUserDetails} title="Go User Details" />
    </View>
  );
};
const UserDetails = (props) => {
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <View style={styles.screen}>
      <Button onPress={goBack} title="Go Back" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
