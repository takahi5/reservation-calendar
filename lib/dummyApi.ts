import { Reservation } from "../types/Reservation";

const RESERVATIONS: Reservation[] = [
  { day: 20210301, time: 900, isReserved: false },
  { day: 20210301, time: 930, isReserved: false },
  { day: 20210301, time: 1000, isReserved: false },
  { day: 20210301, time: 1030, isReserved: false },
  { day: 20210301, time: 1100, isReserved: false },
  { day: 20210301, time: 1130, isReserved: false },
  { day: 20210301, time: 1400, isReserved: false },
  { day: 20210301, time: 1430, isReserved: false },
  { day: 20210301, time: 1500, isReserved: false },
  { day: 20210301, time: 1530, isReserved: false },
  { day: 20210301, time: 1600, isReserved: false },
  { day: 20210301, time: 1630, isReserved: false },
  { day: 20210301, time: 1700, isReserved: false },
  { day: 20210301, time: 1730, isReserved: false },

  { day: 20210302, time: 900, isReserved: false },
  { day: 20210302, time: 930, isReserved: false },
  { day: 20210302, time: 1000, isReserved: false },
  { day: 20210302, time: 1030, isReserved: false },
  { day: 20210302, time: 1100, isReserved: false },
  { day: 20210302, time: 1130, isReserved: false },
  { day: 20210302, time: 1400, isReserved: false },
  { day: 20210302, time: 1430, isReserved: false },
  { day: 20210302, time: 1500, isReserved: false },
  { day: 20210302, time: 1530, isReserved: false },
  { day: 20210302, time: 1600, isReserved: false },
  { day: 20210302, time: 1630, isReserved: false },
  { day: 20210302, time: 1700, isReserved: false },
  { day: 20210302, time: 1730, isReserved: false },

  { day: 20210303, time: 900, isReserved: false },
  { day: 20210303, time: 930, isReserved: false },
  { day: 20210303, time: 1000, isReserved: false },
  { day: 20210303, time: 1030, isReserved: false },
  { day: 20210303, time: 1100, isReserved: false },
  { day: 20210303, time: 1130, isReserved: false },
  { day: 20210303, time: 1400, isReserved: false },
  { day: 20210303, time: 1430, isReserved: false },
  { day: 20210303, time: 1500, isReserved: false },
  { day: 20210303, time: 1530, isReserved: false },
  { day: 20210303, time: 1600, isReserved: false },
  { day: 20210303, time: 1630, isReserved: false },
  { day: 20210303, time: 1700, isReserved: false },
  { day: 20210303, time: 1730, isReserved: false },

  { day: 20210304, time: 900, isReserved: false },
  { day: 20210304, time: 930, isReserved: false },
  { day: 20210304, time: 1000, isReserved: false },
  { day: 20210304, time: 1030, isReserved: false },
  { day: 20210304, time: 1100, isReserved: false },
  { day: 20210304, time: 1130, isReserved: false },
  { day: 20210304, time: 1400, isReserved: false },
  { day: 20210304, time: 1430, isReserved: false },
  { day: 20210304, time: 1500, isReserved: false },
  { day: 20210304, time: 1530, isReserved: false },
  { day: 20210304, time: 1600, isReserved: false },
  { day: 20210304, time: 1630, isReserved: false },
  { day: 20210304, time: 1700, isReserved: false },
  { day: 20210304, time: 1730, isReserved: false },

  { day: 20210305, time: 900, isReserved: false },
  { day: 20210305, time: 930, isReserved: false },
  { day: 20210305, time: 1000, isReserved: false },
  { day: 20210305, time: 1030, isReserved: false },
  { day: 20210305, time: 1100, isReserved: false },
  { day: 20210305, time: 1130, isReserved: false },
  { day: 20210305, time: 1400, isReserved: false },
  { day: 20210305, time: 1430, isReserved: false },
  { day: 20210305, time: 1500, isReserved: false },
  { day: 20210305, time: 1530, isReserved: false },
  { day: 20210305, time: 1600, isReserved: false },
  { day: 20210305, time: 1630, isReserved: false },
  { day: 20210305, time: 1700, isReserved: false },
  { day: 20210305, time: 1730, isReserved: false },
];

export const fetchReservations = async () => {
  return RESERVATIONS;
};
