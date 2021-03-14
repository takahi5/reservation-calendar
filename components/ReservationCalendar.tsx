import React from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import { ReservationItem } from "./ReservationItem";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Reservation } from "../types/Reservation";
import { DayItem } from "./DayItem";
import { TimeItem } from "./TimeItem";
dayjs.extend(customParseFormat);

const DAY_COUNT = 7;

type Props = {
  fromDay: number;
  reservations: Reservation[];
};

const TIMES = [
  900,
  930,
  1000,
  1030,
  1100,
  1400,
  1430,
  1500,
  1530,
  1600,
  1630,
  1700,
  1730,
];

export const ReservationCalendar: React.FC<Props> = ({
  fromDay,
  reservations,
}) => {
  const fromDayData = dayjs(fromDay.toString(), "YYYYMMDD");
  const days = [...Array(DAY_COUNT)].map((_, i) => {
    const targetDayData = fromDayData.add(i, "day");
    return parseInt(targetDayData.format("YYYYMMDD"), 10);
  });

  const onPressReservation = (reservation: Reservation) => {
    Alert.alert("タップされました", `${reservation.day}-${reservation.time}`);
  };

  const renderTimesColumn = () => (
    <View style={styles.column}>
      <TimeItem />
      {TIMES.map((time) => (
        <TimeItem time={time} />
      ))}
    </View>
  );

  const renderColumn = (day: number) => {
    const targetReservations = reservations.filter((r) => r.day === day);
    const items = TIMES.map((time) => {
      const reservation = targetReservations.find((r) => r.time === time);
      return (
        <ReservationItem
          reservation={reservation}
          onPress={onPressReservation}
        />
      );
    });
    return (
      <View style={styles.column}>
        <DayItem day={day} />
        {items}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.calendar}>
        {renderTimesColumn()}
        {days.map((day) => renderColumn(day))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  calendar: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
