// "use client";

// import apiInstance from "@/config/axios";
// import { Box } from "@mui/material";
// import axios from "axios";
// import React, { useEffect } from "react";

// const About = () => {
//   useEffect(() => {
//     const getSessionData = async () => {
//       try {
//         // const config = {
//         //   headers: {
//         //     "Content-Type": "application/json",
//         //   },
//         // };

//         const data = await apiInstance.get("/api/mytask");

//         // console.log(res?.data, "data");
//         // const datas = res?.data;
//         return data;
//       } catch (error) {
//         console.error("Error fetching session data:", error);
//       }
//     };

//     getSessionData();
//   }, []);

//   const tasks = getSessionData();
 
//   return (
//     <Box>
//       <h2>hnhbh</h2>
//       {tasks?.map((item, id) => (
//         <Box>
//           <h2>{item.title}</h2>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default About;
import React from 'react'

const About = () => {
  return (
    <div>About</div>
  )
}

export default About
