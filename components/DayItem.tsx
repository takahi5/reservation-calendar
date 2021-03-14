import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

type Props = { day: number };
export const DayItem: React.FC<Props> = ({ day }) => {
  const dayData = dayjs(day.toString(), "YYYYMMDD");
  return (
    <View style={styles.container}>
      <Text>{dayData.format("D(ddd)")} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 40,
    margin: 1,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
});
