import { Stack, useLocalSearchParams } from "expo-router";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import InputField from "@/src/components/InputField";
import BasicBtn from "@/src/components/button/BasicBtn";
import Colors from "@/constants/Colors";
import Default from "@/constants/Default";

const CreateScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const { id } = useLocalSearchParams();
  const isUpdating = !!id;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const onSubmit = () => {
    if (isUpdating) {
      onUpdate();
    } else {
      onCreate();
    }
  };
  const resetFields = () => {
    setName("");
    setPrice("");
  };
  const validateInput = () => {
    setErrors("");
    if (!name) {
      setErrors("Name is required");
      return false;
    }
    if (!price) {
      setErrors("Price is required");
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setErrors("Price is not a number");
      return false;
    }
    return true;
  };
  const onCreate = () => {
    if (!validateInput()) {
      return;
    }
    console.warn("Creating product", name);
    // Save in the database
    resetFields();
  };
  const onUpdate = () => {
    if (!validateInput()) {
      return;
    }
    console.warn("Updating product", name);
    // Save in the database
    resetFields();
  };
  const onDelete = () => {
    console.warn("DELETE!!!");
  };
  const confirmDelete = () => {
    Alert.alert("Confirm", "Are you sure you want to delete this product", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: onDelete },
    ]);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: isUpdating ? "Updating Product" : "Create Product",
          headerTintColor: Colors.light.tint,
          headerTitleStyle: { color: "black" },
        }}
      />
      <Image source={{ uri: image || Default.teaImage }} style={styles.image} />
      <Text style={styles.textBtn} onPress={pickImage}>
        Select Image
      </Text>
      <InputField
        label="Name"
        placeholder="product name"
        value={name}
        keyboardType="default"
        onChangeText={setName}
      />
      <InputField
        label="Price ($)"
        placeholder="9.99"
        value={price}
        keyboardType="numeric"
        onChangeText={setPrice}
      />
      <InputField
        label="Product Description"
        placeholder="(產品描述)"
        value={description}
        keyboardType="default"
        onChangeText={setDescription}
        multiline
      />
      <BasicBtn text={isUpdating ? "Update" : "Create"} onPress={onSubmit} />
      {isUpdating && (
        <Text onPress={confirmDelete} style={styles.textBtn}>
          Delete
        </Text>
      )}
      <Text style={{ color: "red" }}>{errors}</Text>
    </View>
  );
};
export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    gap: 14,
  },
  textBtn: {
    alignSelf: "center",
    fontWeight: "700",
    color: Colors.light.tint,
    marginVertical: 10,
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
    borderRadius: 8,
  },
});
