import { useMemo, useState } from "react";
import { TextInput, Button, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export function CalculatorInSupermarket() {
  const [itemName, setItemName] = useState("Fleisch");
  const [priceText, setPriceText] = useState("");
  const [weightText, setWeightText] = useState("");
  const [allResult, setAllResult] = useState("");

  const calculatedValue = useMemo(() => {
    const price = parseFloat(priceText);
    const weight = parseFloat(weightText);

    const result = price / weight;

    return `${itemName}: ${price} € ${weight}kg is ${result}`;
  }, [itemName, priceText, weightText]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={setItemName}
          value={itemName}
          placeholder="Item Name"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={setPriceText}
          value={priceText}
          keyboardType="numeric"
          placeholder="Total price"
        />

        <TextInput
          style={styles.textInput}
          onChangeText={setWeightText}
          value={weightText}
          keyboardType="numeric"
          placeholder="weight"
        />

        <Button
          title="ADD"
          onPress={() => {
            setAllResult((prev) => calculatedValue + "\n" + prev);
          }}
        />

        <Text style={styles.text}>{calculatedValue}</Text>
        <Text>LIST</Text>
        <Text style={styles.text}>{allResult}</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column", alignItems: "flex-start" },
  textInput: {
    borderColor: "red",
    borderWidth: 1,
    height: 30,
    width: 300,
  },
  text: {},
});
