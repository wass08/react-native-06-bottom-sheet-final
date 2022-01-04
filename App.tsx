import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import tailwind from "tailwind-rn";
import { Product } from "~/screens/Product";

export default function App() {
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <View style={tailwind("w-full h-full")}>
          <Product />
          <StatusBar style="auto" />
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
