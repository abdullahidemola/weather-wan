const dateval = new Date();

const backDate = 50 * 0.1;

const backDate2 = new Date().setMinutes(new Date().getDate() - backDate);

const data = {
  pressure: [
    {
      value: 2.62,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 10),
    },
    {
      value: 2.62,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 9),
    },
    {
      value: 2.62,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 8),
    },
    {
      value: 2.64,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 7),
    },
    {
      value: 2.6667,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 6),
    },
    {
      value: 2.661,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 5),
    },
    {
      value: 2.643,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 4),
    },
    {
      value: 2.62,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 3),
    },
    {
      value: 2.64,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 2),
    },
    {
      value: 2.667,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 1),
    },
  ],
  temperature: [
    {
      value: 30.7,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 10),
    },
    {
      value: 30.8,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 9),
    },
    {
      value: 30.8,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 8),
    },
    {
      value: 30.7,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 7),
    },
    {
      value: 30.8,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 6),
    },
    {
      value: 30.7,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 5),
    },
    {
      value: 30.8,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 4),
    },
    {
      value: 30.8,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 3),
    },
    {
      value: 30.7,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 2),
    },
    {
      value: 30.8,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 1),
    },
  ],
  relativeHumidity: [
    {
      value: 0.592,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 10),
    },
    {
      value: 0.593,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 9),
    },
    {
      value: 0.6,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 8),
    },
    {
      value: 0.6,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 7),
    },
    {
      value: 0.595,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 6),
    },
    {
      value: 0.592,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 5),
    },
    {
      value: 0.593,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 4),
    },
    {
      value: 0.6,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 3),
    },
    {
      value: 0.595,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 2),
    },
    {
      value: 0.595,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 1),
    },
  ],
  atmoshphericPressure: [
    {
      value: 97.96001,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 10),
    },
    {
      value: 98.96001,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 9),
    },
    {
      value: 96.96001,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 8),
    },
    {
      value: 96.96001,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 7),
    },
    {
      value: 95.96001,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 6),
    },
    {
      value: 97.96001,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 5),
    },
    {
      value: 94.96001,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 4),
    },
    {
      value: 94.96001,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 3),
    },
    {
      value: 98.96001,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 2),
    },
    {
      value: 97.96001,
      date: new Date().setMinutes(new Date().getMinutes() - backDate * 1),
    },
  ],
};

export default data;
