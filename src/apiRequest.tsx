const apiRequest = async (url: string, optionsObj: RequestInit = {}) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

    // Only parse JSON for non-DELETE methods
    if (optionsObj.method !== "DELETE") {
      return await response.json();
    }

    return null; // DELETE requests usually don't return JSON
  } catch (err: any) {
    console.error("API Request Error:", err.message);
    return { error: err.message };
  }
};

export default apiRequest;
