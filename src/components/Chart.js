import dayjs from "dayjs";
import millify from "millify";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  Label,
} from "recharts";

import { SpinnerCircular } from "spinners-react";

const AppChart = ({ data = [], chartType }) => {
  //   console.log(dayjs());

  const xAxisFormatter = (value, index) => {
    return dayjs(value).format("HH:mm");
  };

  const CustomTooltip = ({ payload, label, active }) => {
    if (active && payload) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Date: ${dayjs(label).format("HH:mm")}`}</p>
          <p className="label">{`Amount: ${
            !isNaN(payload[0]?.value) &&
            millify(payload[0]?.value, {
              precision: 2,
            })
          }`}</p>
        </div>
      );
    }

    return null;
  };

  const time = 2.5;
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowChart(true);
    }, time * 1000);
  }, []);

  return (
    <div className="chart_container">
      {!showChart ? (
        <>
          <div
            style={{
              flex: 1,
              gap: "12px",
              width: "100%",
              wordSpacing: "2px",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              border: "1px solid #347baa",
            }}
          >
            <SpinnerCircular
              size={50}
              color="#e5fff6"
              secondaryColor="#347baa"
            />
            <p style={{ fontSize: "16px" }}>
              Fetching <span style={{ fontSize: "15px" }}>{chartType}</span>{" "}
              data
            </p>
          </div>
        </>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={730}
            height={250}
            data={[
              ...data.map(item => {
                return {
                  ...item,
                  amount: Number(item.amount),
                };
              }),
            ]}
            margin={{ top: 0, right: 30, left: 10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis dataKey="date" tickFormatter={xAxisFormatter}></XAxis>
            <YAxis
              type="number"
              tickFormatter={(value, index) =>
                millify(Number(value), {
                  precision: 2,
                })
              }
              label={{
                value: chartType || "",
                angle: -90,
                position: "insideLeft",
              }}
            />

            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{ border: "none", outline: "none" }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#2b0fff"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default AppChart;
