import { Calculator } from "@/components/Calculator";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Ebrahim Salehi</Text>

      <Calculator />
    </View>
  );
}
