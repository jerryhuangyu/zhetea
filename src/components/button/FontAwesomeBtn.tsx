import { Href, Link } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

type FontAwesomeBtnProps = {
  href: string;
  iconName: keyof typeof FontAwesome.glyphMap;
};

const FontAwesomeBtn = ({ href, iconName }: FontAwesomeBtnProps) => {
  return (
    <Link href={href as Href<string>} asChild>
      <Pressable>
        {({ pressed }) => (
          <FontAwesome
            name={iconName}
            size={25}
            color={Colors.light.tint}
            style={{ opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable>
    </Link>
  );
};
export default FontAwesomeBtn;

const styles = StyleSheet.create({});
