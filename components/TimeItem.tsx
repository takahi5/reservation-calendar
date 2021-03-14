import React from "react";
import { View, StyleSheet, Text } from "react-native";

type Props = { time?: number };
export const TimeItem: React.FC<Props> = ({ time }) => {
  if (!time) {
    return <View style={styles.container} />;
  }
  const hour = Math.floor(time / 100);
  const min = ("00" + Math.floor(time % 100)).slice(-2);
  return (
    <View style={styles.container}>
      <Text>{`${hour}:${min}`} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 40,
    margin: 1,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
});
