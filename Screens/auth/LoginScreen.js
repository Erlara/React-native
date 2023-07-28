import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import BgdImage from "../../assets/images/bgd.jpg";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logIn } from "../../redux/auth/authOperations";

const loginUser = {
  email: "",
  password: "",
};

export const LoginScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [securePass, setSecurePass] = useState(true);
  const [formData, setFormData] = useState(loginUser);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate("Home", {
        screen: "PostsScreen",
      });
    }
  }, [isLoggedIn]);

  const keyBoardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  };

  const handleSubmit = () => {
    if (!formData.email.includes("@") || formData.email.length < 7) {
      Alert.alert(
        "Your email has to include '@' and be more than 7 symbols!!!"
      );
    }
    keyBoardHide();
    console.log(formData);
    setFormData(loginUser);
    dispatch(
      logIn({
        email: formData.email,
        password: formData.password,
      })
    );
    navigation.navigate("Home", {
      screen: "PostsScreen",
    });
  };

  return (
    <TouchableWithoutFeedback onPress={keyBoardHide}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={BgdImage}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.containerRegister,
                marginBottom: isShowKeyboard ? 60 : 0,
              }}
            >
              <View style={styles.form}>
                <Text style={styles.title}>Увійти</Text>
                <View style={styles.fieldset}>
                  <View style={styles.field}>
                    <TextInput
                      value={formData.email}
                      onChangeText={(value) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          email: value,
                        }))
                      }
                      placeholder="Адреса електронної пошти"
                      style={styles.input}
                      type="email"
                      onFocus={() => setIsShowKeyboard(true)}
                    />
                  </View>
                  <View style={styles.field}>
                    <TextInput
                      value={formData.password}
                      onChangeText={(value) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          password: value,
                        }))
                      }
                      secureTextEntry={securePass}
                      onFocus={() => setIsShowKeyboard(true)}
                      placeholder="Пароль"
                      style={styles.input}
                    />
                    <TouchableOpacity
                      style={styles.inputBtn}
                      onPress={() => setSecurePass((prevState) => !prevState)}
                    >
                      <Text style={styles.label}>
                        {securePass ? "Показати" : "Приховати"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                  <Text style={styles.loginTitle}>Увійти</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.link}
                  onPress={() => navigation.navigate("Registration")}
                >
                  <Text style={styles.label}>
                    Немає акаунту? Зареєструватися
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  containerRegister: {
    justifyContent: "center",
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingBottom: 1,
  },
  form: {
    paddingTop: 32,
    marginTop: -10,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  fieldset: {
    gap: 16,
    marginBottom: 43,
  },
  field: {
    position: "relative",
  },
  inputBtn: {
    position: "absolute",
    right: 16,
    top: 17,
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderColor: "#e8e8e8",
    height: 50,
    borderRadius: 8,
    paddingLeft: 16,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  label: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 18.75,
  },
  loginTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  title: {
    textAlign: "center",
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    fontWeight: 500,
    color: "#212121",
    marginBottom: 32,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    height: 51,
    marginBottom: 32,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    color: "#fff",
  },
  link: {
    alignItems: "center",
    marginBottom: 144,
  },
});
