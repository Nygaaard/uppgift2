//Funktion för att radera inlägg
export async function deleteExperienceFromDatabase(id) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/workexperience/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete experience from database");
    }
    return true;
  } catch (error) {
    console.error("Failed to delete experience from database:", error);
    return false;
  }
}
