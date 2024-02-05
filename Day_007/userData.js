async function fetchUserData() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      if (response.ok) {
        console.log("SUCCESS!");
        const data = await response.json();
        console.log(data);
        const processedData = await processUserData(data);
        const totalAge = await summarizeAge(data);
        console.log("Processed User Data: ");
        console.log(processedData);
        console.log("Total Age of Male Users: ", totalAge);
      } else {
        console.error("FAILURE!");
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  const processUserData = async (data) => {
    return await data.users
      .filter(({ gender }) => gender !== "male")
      .map(({ firstName, age }) => `Name: ${firstName}, Age: ${age}`);
  };
  
  const summarizeAge = async (data) => {
    return await data.users
      .filter(({ gender }) => gender === "male")
      .reduce((totalAge, { age }) => totalAge + age, 0);
  };
  
  fetchUserData();