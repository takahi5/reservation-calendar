import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ReservationCalendar } from "./components/ReservationCalendar";
import { fetchReservations } from "./lib/dummyApi";
import { Reservation } from "./types/Reservation";

export default function App() {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  // TODO: 変更できるようにする
  const fromDay = 20210301;

  useEffect(() => {
    const fetch = async () => {
      const _reservations = await fetchReservations();
      setReservations(_reservations);
    };
    fetch();
  }, []);

  return (
    <View style={styles.container}>
      {reservations.length ? (
        <ReservationCalendar reservations={reservations} fromDay={20210301} />
      ) : (
        <Text>Loading...</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
