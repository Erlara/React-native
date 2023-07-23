//import { Text } from "react-native";
//import { View } from "react-native";
import { PostsScreen } from "./PostsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Tabs = createBottomTabNavigator();

export const Home = ({ navigation }) => {
  // const navigation = useNavigation();

  return (
    <Tabs.Navigator tabBarOptions={{ showLabel: false }}>
      <Tabs.Screen
        name="Публікації"
        component={PostsScreen}
        options={({ route }) => ({
          // tabBarStyle: getTabBarStyle(route),
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="appstore-o" size={24} color="#212121" />
          ),
          headerShown: false,
        })}
      />
      <Tabs.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                width: 70,
                height: 40,
                backgroundColor: "#FF6C00",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
              }}
            >
              <Octicons name="plus" size={15} color="#FFF" />
            </View>
          ),
          headerTitleAlign: "center",
          tabBarStyle: [{ display: "none" }],
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 15 }}
              onPress={() => navigation.navigate("Публікації")}
            >
              <Ionicons
                name="ios-arrow-back-outline"
                size={28}
                color="#BDBDBD"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <FontAwesome5 name="user" size={24} color="#212121" />
          ),
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};
