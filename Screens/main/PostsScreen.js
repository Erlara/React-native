import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
//import { useNavigation } from "@react-navigation/native";
//import { DefaultPostsScreen } from "./DefaultPostsScreen";
import { MapScreen } from "./MapScreen";
import { CommentsScreen } from "./CommentsScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { DefaultPostsScreen } from "./DefaultPostsScreen";
//import { useDispatch } from "react-redux";
//import { logOut } from "../redux/auth/authOperations";

//import { Text } from "react-native";
//import { View } from "react-native";

export const PostsScreen = ({ navigation }) => {
  const PostStack = createStackNavigator();
  //   const navigation = useNavigation();
  //   const dispatch = useDispatch();

  const handleLogout = () => {
    // dispatch(logOut());
    navigation.navigate("Login");
  };

  return (
    <PostStack.Navigator>
      <PostStack.Screen
        name="Публікації"
        component={DefaultPostsScreen}
        options={{
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={handleLogout}
            >
              <MaterialIcons name="logout" size={28} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          headerLeft: () => false,
        }}
      />
      <PostStack.Screen name="Локація" component={MapScreen} />
      <PostStack.Screen name="Коментарі" component={CommentsScreen} />
    </PostStack.Navigator>
  );
};
