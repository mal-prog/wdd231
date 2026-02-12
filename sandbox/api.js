// api.js
const baseUrl = "https://developer.nps.gov/api/v1/";
const kistEl = document.querySelector("#outputList");

async function getJson(endpoint) {
  // replace this with your actual key
  const apiKey = "wXjNIXvN0QbkuIFyzIVs2nYU4k42PqO35CpedDlS";
  // construct the url: baseUrl + endpoint + parameters
  const url = baseUrl + endpoint;
  // set the options. The important one here is the X-Api-Key
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey
      }
  }
  // make the request
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
  return data;
}

async function renderClimbingList(){}

function listTemplate(item){
    return `<li><a href="${item.url}">${item.fullName}</a> - ${item.states}</li>`
}

//getJson('alerts?parkCode=acad,dena');
getJson("activities/parks?q=climbing");