import { StyleSheet, Text, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import BasicBtn from "@/src/components/button/BasicBtn";
import InputField from "@/src/components/InputField";
import Colors from "@/constants/Colors";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signInAccount = () => {
    console.warn("Sign your account");
  };
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign in" }} />
      <InputField
        label="Email"
        value={email}
        placeholder="example@mail.com"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <InputField
        label="Password"
        value={password}
        placeholder=""
        keyboardType="default"
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.empty} />
      <BasicBtn text="Sign in" onPress={signInAccount} />
      <Text
        style={styles.textBtn}
        onPress={() => router.navigate("/(auth)/sign-up")}
      >
        Create an account
      </Text>
    </View>
  );
};
export default SignInPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    gap: 20,
  },
  empty: {
    height: 50,
  },
  textBtn: {
    alignSelf: "center",
    fontWeight: "700",
    color: Colors.light.tint,
  },
});
