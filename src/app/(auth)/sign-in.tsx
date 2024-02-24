import { StyleSheet, Text, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import BasicBtn from "@/src/components/button/BasicBtn";
import Colors from "@/constants/Colors";

const SignInPage = () => {
  const router = useRouter();

  const signInAccount = () => {
    console.warn("Sign your account");
  };
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign in" }} />

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
    padding: 10,
  },
  textBtn: {
    alignSelf: "center",
    fontWeight: "700",
    color: Colors.light.tint,
    marginVertical: 10,
  },
});
