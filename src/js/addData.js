//Funktion för att lägga till data i databasen
const errMessageEl = document.getElementById("errMessage");
export async function addExperienceToDatabase(
  companyName,
  jobTitle,
  location,
  startDate,
  endDate,
  description
) {
  if (
    //Kontrollera att ej tomt
    companyName != "" &&
    jobTitle != "" &&
    location != "" &&
    startDate != "" &&
    endDate != "" &&
    description != ""
  ) {
    const url = "http://localhost:3000/api/workexperience";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName: companyName,
          jobTitle: jobTitle,
          location: location,
          startDate: startDate,
          endDate: endDate,
          description: description,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add experience to database");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error adding experience to database:", error);
      throw error;
    }
  } else {
    errMessageEl.textContent = "Du måste fylla i alla fält. Försök igen.";
  }
  alert("Ny erfarenhet lades till!");
}
