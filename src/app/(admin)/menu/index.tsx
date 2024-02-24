import { FlatList } from "react-native";
import { Stack } from "expo-router";
import PreviewCard from "@/src/components/card/PreviewCard";
import FontAwesomeBtn from "@/src/components/button/FontAwesomeBtn";
import { teaProducts } from "@/assets/data";

export default function MenuScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "ZheTEA",
          headerRight: () => (
            <FontAwesomeBtn
              href="/(admin)/menu/create"
              iconName="plus-square-o"
            />
          ),
        }}
      />
      <FlatList
        data={teaProducts}
        renderItem={({ item }) => <PreviewCard product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </>
  );
}
