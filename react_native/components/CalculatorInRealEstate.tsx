import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, TextInput, View, Text } from "react-native";
import {
  GrossRentalYield,
  HouseFeesPerSquareMeter,
  PurchasePriceFactor,
} from "@/utils/FlatCalculations";

function CalculatorInRealEstate() {
  const [purchasePrice, setPurchasePrice] = React.useState("");
  const [monthlyRent, setMonthlyRent] = React.useState("");
  const [livingArea, setLivingArea] = React.useState("");
  const [houseFees, setHouseFees] = React.useState("");

  const getPurchasePriceInfo = React.useMemo(() => {
    const purchasePriceFactor = new PurchasePriceFactor(
      Number(monthlyRent),
      Number(purchasePrice)
    );
    const resultPurchasePriceFactor = `purchasePriceFactor:${purchasePriceFactor.purchasePriceFactor}, rating: ${purchasePriceFactor.rating.score} , ${purchasePriceFactor.rating.status}`;

    const grossRentalYield = new GrossRentalYield(
      Number(monthlyRent),
      Number(purchasePrice)
    );

    const resultGrossRentalYield = `grossRentalYield:${grossRentalYield.grossRentalYield}, rating: ${grossRentalYield.rating.score} , ${grossRentalYield.rating.status}`;

    const houseFeesPerSquareMeter = new HouseFeesPerSquareMeter(
      Number(houseFees),
      Number(livingArea)
    );

    const resultHouseFeesPerSquareMeter = `houseFeesPerSquareMeter:${houseFeesPerSquareMeter.houseFeesPerSquareMeter}, rating: ${houseFeesPerSquareMeter.rating.score} , ${houseFeesPerSquareMeter.rating.status}`;

    return (
      resultPurchasePriceFactor +
      "\n" +
      resultGrossRentalYield +
      "\n" +
      resultHouseFeesPerSquareMeter
    );
  }, [purchasePrice, monthlyRent, livingArea, houseFees]);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.textInput}
          value={livingArea}
          onChangeText={setLivingArea}
          keyboardType="numeric"
          placeholder="Living Area"
        />

        <TextInput
          style={styles.textInput}
          value={purchasePrice}
          onChangeText={setPurchasePrice}
          keyboardType="numeric"
          placeholder="Purchase Price"
        />

        <TextInput
          style={styles.textInput}
          value={monthlyRent}
          onChangeText={setMonthlyRent}
          keyboardType="numeric"
          placeholder="Monthly Rent"
        />

        <TextInput
          style={styles.textInput}
          value={houseFees}
          onChangeText={setHouseFees}
          keyboardType="numeric"
          placeholder="House fees"
        />
        <View>
          <Text>{getPurchasePriceInfo}</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 100,
    borderWidth: 1,
  },
});

export default CalculatorInRealEstate;
