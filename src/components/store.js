<LineChart width={500} height={300} data={data}>
  <XAxis dataKey="date" tickFormatter={xAxisFormatter} />
  <YAxis
    type="number"
    tickFormatter={(value, index) =>
      millify(Number(value), {
        precision: 2,
      })
    }
  />
  <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
  <Line type="monotone" dataKey="value" stroke="#82ca9d" />
</LineChart>;
