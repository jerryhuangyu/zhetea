import { Text, View, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import Colors from "@/constants/Colors";
import BasicBtn from "@/src/components/button/BasicBtn";
import InputField from "@/src/components/InputField";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const createAccount = () => {
    console.warn("Creating account");
  };
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign up" }} />
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
      <BasicBtn text="Create account" onPress={createAccount} />
      <Text
        style={styles.textBtn}
        onPress={() => router.navigate("/(auth)/sign-in")}
      >
        Sign in
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
