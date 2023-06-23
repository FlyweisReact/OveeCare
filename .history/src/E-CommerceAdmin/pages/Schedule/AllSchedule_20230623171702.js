/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import  {ReactApexChart}  from 'apexcharts'


const AllSchedule = () => {

    const  options: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            }
          },
        },
        labels: ['Cricket'],
      },
    
    
    };
  }


          
    series: [70],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%',
          }
        },
      },
      labels: ['Cricket'],
    },
  
  

  return (
    <>
      <div className="Heading-Container">
        <p>Manage Schedule</p>
      </div>

      <div className="schedule_Three_Sec">
      <img src="https://media.sproutsocial.com/uploads/2022/06/How-to-schedule-TikTok-posts_Artboard-1-copy.jpg" alt='' />
      <img src='https://res.cloudinary.com/monday-blogs/fl_lossy,f_auto,q_auto/wp-blog/2020/09/Project-schedule.jpg' alt='' />
      <img src='https://blog.vantagecircle.com/content/images/2021/11/9-80-work--schedule.png' alt='' />
       </div>

       <div className="schedule_Button">
        <button className="first"> Cancel</button>
        <button className="second"> <i className="fa-solid fa-calendar-days"></i> Schedule Template</button>
       </div>


       <div className="Schedule_Chart">
        <p>Uploaded Schedule Template</p>
        <ReactApexChart options={} series={this.state.series} type="radialBar" height={350} />
       </div>
    </>
  );
};

export default HOC(AllSchedule);
