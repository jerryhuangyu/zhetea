import { FlatList } from "react-native";
import PreviewCard from "@/src/components/PreviewCard";
import { teaProduct } from "@/assets/data";

export default function MenuScreen() {
  return (
    <>
      <FlatList
        data={teaProduct}
        renderItem={({ item }) => <PreviewCard product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </>
  );
}
