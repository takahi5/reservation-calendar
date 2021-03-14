import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Reservation } from "../types/Reservation";

type Props = { reservation?: Reservation };
export const ReservationItem: React.FC<Props> = ({ reservation }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{!reservation ? "-" : reservation.isReserved ? "x" : "o"} </Text>
    </TouchableOpacity>
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
