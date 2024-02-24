import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardTypeOptions,
  View,
} from "react-native";

type InputFieldProps = {
  label: string;
  value: string;
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
  secureTextEntry?: boolean;
  multiline?: boolean;
};

const InputField = ({
  label,
  value,
  placeholder,
  keyboardType,
  onChangeText,
  secureTextEntry,
  multiline,
}: InputFieldProps) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
      />
    </View>
  );
};
export default InputField;

const styles = StyleSheet.create({
  label: {
    color: "gray",
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    maxHeight: 100,
  },
});
