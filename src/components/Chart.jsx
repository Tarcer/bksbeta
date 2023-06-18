import React, { useRef, useEffect } from 'react';
import { getDatabase, ref, get } from "firebase/database";
import * as d3 from 'd3';
import moment from 'moment';

const Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Declare the chart dimensions and margins.
    const width = 928;
    const height = 500;
    const marginTop = 20;
    const marginRight = 30;
    const marginBottom = 30;
    const marginLeft = 40;

    // Fetch Data 
    const database = getDatabase();
    const callTokenTransactions = ref(database, `newTokenTransactions`);

    // Create the SVG container.
    const svg = d3
      .select(chartRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .style("max-width", "100%")
      .style("height", "auto")
      .style("height", "intrinsic");

    const fetchData = async () => {
      const snapshot = await get(callTokenTransactions);
      const response = snapshot.val();
      if (response) {
        const dateAndValues = [];
        Object.values(response).forEach((transaction) => {
          const dateAndValue = Object.values(transaction).map((item) => item);
          dateAndValue.forEach((transaction) => {
            dateAndValues.push(transaction)
          })
        });

        // Sample data
        const aapl = dateAndValues.map((transaction) => ({
          date: new Date(moment(transaction.timestamp).format('LL')),
          close: transaction.lastPrice
        }));

        // Declare the x (horizontal position) scale.
        const x = d3.scaleUtc(d3.extent(aapl, d => d.date), [marginLeft, width - marginRight]);

        // Declare the y (vertical position) scale.
        const y = d3
          .scaleLinear()
          .domain([d3.max(aapl, d => d.close), 0])
          .range([marginTop,height - marginBottom]);

        // Add the x-axis.
        svg
          .append("g")
          .attr("transform", `translate(0, ${height - marginBottom})`)
          .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

        // Add the y-axis.
        svg
          .append("g")
          .attr("transform", `translate(${marginLeft},0)`)
          .call(d3.axisLeft(y).ticks(height / 40))
          .call(g => g.select(".domain").remove())
          .call(g =>
            g
              .selectAll(".tick line")
              .clone()
              .attr("x2", width - marginLeft - marginRight)
              .attr("stroke-opacity", 0.1)
          )
          .call(g =>
            g
              .append("text")
              .attr("x", -marginLeft)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text("↑ Daily close ($)")
          );

        // Add the line.
        svg
          .append("path")
          .datum(aapl)
          .attr("fill", "none")
          .attr("stroke", "steelblue")
          .attr("d", d3.line().x((d) => x(d.date)).y((d) => y(d.close)));
      }
    };

    fetchData();
  }, []);

  return <svg ref={chartRef} />;
};

export default Chart;

