import { FlatList } from "react-native";
import PreviewCard from "@/src/components/card/PreviewCard";
import { teaProducts } from "@/assets/data";

export default function MenuScreen() {
  return (
    <>
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
