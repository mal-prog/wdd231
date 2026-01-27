import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

async function init() {
    const parkData = await getParkData();
  
    setHeaderFooter(parkData);
    setParkIntro(parkData);
    setParkInfoLinks(parkInfoLinks);
  }
  
  init();