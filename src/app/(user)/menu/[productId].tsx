import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
const DetailPage = () => {
  const { productId } = useLocalSearchParams();
  return (
    <View>
      <Text>DetailPage of {productId}</Text>
    </View>
  );
};
export default DetailPage;
const styles = StyleSheet.create({});
