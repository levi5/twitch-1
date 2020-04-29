import axios from "axios";



import ChatterService from '../services/ChatterService';



const participants = new Map();

setInterval(async () => {
  try {
    const viewers = await ChatterService.getViewers();

    viewers.forEach((viewer) => {
      let point = participants.get(viewer) ?? 0;
      participants.set(viewer, ++point);
      console.log(`${viewer} have ${point} points`);
    });
  } catch (error) {
    console.log(error);
  }
}, 60 * 1000);


export default participants;
