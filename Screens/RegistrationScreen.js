import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import BgdImage from "../assets/images/bgd.jpg";

export const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  return (
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
              <View style={styles.avatarWrapper}>
                <View style={styles.avatar}>
                  <TouchableOpacity style={styles.iconThumb}>
                    <Svg width={25} height={25} viewBox="0 0 25 25">
                      <Path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
                        fill="#FF6C00"
                      />
                    </Svg>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <View style={styles.fieldset}>
                <View style={styles.field}>
                  <TextInput placeholder="Логін" style={styles.input} />
                </View>
                <View style={styles.field}>
                  <TextInput
                    placeholder="Адреса електронної пошти"
                    style={styles.input}
                  />
                </View>
                <View style={styles.field}>
                  <TextInput placeholder="Пароль" style={styles.input} />
                  <TouchableOpacity style={styles.inputBtn}>
                    <Text style={styles.label}>Показати</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.registrationTitle}>Зареєструватися</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.link}>
                <Text style={styles.label}>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
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
    marginTop: -10,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  avatarWrapper: {
    alignItems: "center",
  },
  avatar: {
    position: "relative",
    marginTop: -60,
    marginHorizontal: "auto",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",

    borderRadius: 16,
    marginBottom: 32,
  },
  iconThumb: {
    position: "absolute",
    borderColor: "#FF6C00",
    borderWidth: 1,
    borderRadius: 50,
    bottom: 10,
    right: -10,
    width: 25,
    height: 25,
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
    color: "#BDBDBD",
  },
  label: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 18.75,
  },
  registrationTitle: {
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
    marginBottom: 66,
  },
});