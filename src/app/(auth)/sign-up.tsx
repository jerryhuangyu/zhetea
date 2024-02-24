import { Text, View, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import BasicBtn from "@/src/components/button/BasicBtn";

const SignInPage = () => {
  const router = useRouter();

  const createAccount = () => {
    console.warn("Creating account");
  };
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign up" }} />

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
    padding: 10,
  },
  textBtn: {
    alignSelf: "center",
    fontWeight: "700",
    color: Colors.light.tint,
    marginVertical: 10,
  },
});
