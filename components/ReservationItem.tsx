import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Reservation } from "../types/Reservation";

type Props = {
  reservation?: Reservation;
  onPress: (reservation: Reservation) => void;
};
export const ReservationItem: React.FC<Props> = ({ reservation, onPress }) => {
  const _onPress = () => {
    if (reservation) {
      onPress(reservation);
    }
  };

  if (!reservation) {
    return (
      <View style={styles.container}>
        <Text style={styles.disabledText}>-</Text>
      </View>
    );
  } else if (reservation.isReserved) {
    return (
      <View style={styles.container}>
        <Text style={styles.disabledText}>x</Text>
      </View>
    );
  } else {
    return (
      <TouchableOpacity style={styles.container} onPress={_onPress}>
        <Text style={styles.activeText}>o</Text>
      </TouchableOpacity>
    );
  }
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
  activeText: {
    color: "#000",
  },
  disabledText: {
    color: "#888",
  },
});
