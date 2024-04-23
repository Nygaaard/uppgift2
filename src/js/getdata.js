//Fil för att hämta data från API

const url = "http://localhost:3000/api/workexperience";

export async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch {
    console.log("Något gick fel...");
  }
}
