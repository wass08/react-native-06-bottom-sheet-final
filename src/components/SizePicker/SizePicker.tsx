import React from "react";
import {
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tailwind from "tailwind-rn";

interface SizePickerProps {
  currentSize: string;
  onSizeChange: (size: string) => void;
  sizes: string[];
}

export const SizePicker = ({
  currentSize,
  onSizeChange,
  sizes,
}: SizePickerProps) => {
  const renderItem: ListRenderItem<string> = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onSizeChange(item)}>
        <View
          style={tailwind(
            `w-20 py-2 border-b-2 ${
              currentSize === item ? "border-black" : "border-transparent"
            }`
          )}
        >
          <Text style={tailwind("w-full text-center font-bold")}>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      horizontal
      data={sizes}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      showsHorizontalScrollIndicator={false}
    />
  );
};
