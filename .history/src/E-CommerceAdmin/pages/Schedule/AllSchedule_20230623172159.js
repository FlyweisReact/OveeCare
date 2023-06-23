/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import ApexCharts from "react-apexcharts";

const AllSchedule = () => {
  const chartOptions = {
     
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    

  const chartSeries = [
  ];

  return (
    <>
      <div className="Heading-Container">
        <p>Manage Schedule</p>
      </div>

      <div className="schedule_Three_Sec">
        <img
          src="https://media.sproutsocial.com/uploads/2022/06/How-to-schedule-TikTok-posts_Artboard-1-copy.jpg"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/monday-blogs/fl_lossy,f_auto,q_auto/wp-blog/2020/09/Project-schedule.jpg"
          alt=""
        />
        <img
          src="https://blog.vantagecircle.com/content/images/2021/11/9-80-work--schedule.png"
          alt=""
        />
      </div>

      <div className="schedule_Button">
        <button className="first"> Cancel</button>
        <button className="second">
          {" "}
          <i className="fa-solid fa-calendar-days"></i> Schedule Template
        </button>
      </div>

      <div className="Schedule_Chart">
        <p>Uploaded Schedule Template</p>
        <ApexCharts
          options={chartOptions}
          series={chartSeries}
          type="radialBar"
          height={300}
        />
      </div>
    </>
  );
};

export default HOC(AllSchedule);
