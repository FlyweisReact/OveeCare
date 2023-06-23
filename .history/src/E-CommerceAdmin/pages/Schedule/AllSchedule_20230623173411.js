/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import ApexCharts from "react-apexcharts";

const AllSchedule = () => {
  const chartOptions = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "80%",
          background: '#000',
        },
        dataLabels: {
          value: {
            fontSize: "50px",
            textAlign : 'center',
            color : "#7d0011"
          },
        },
      },
    },
    series: [50],
    labels: [""],
  };

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
          series={chartOptions.series}
          type="radialBar"
          height={300}
        />
      </div>
    </>
  );
};

export default HOC(AllSchedule);
