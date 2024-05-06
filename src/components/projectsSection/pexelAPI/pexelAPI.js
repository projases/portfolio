import axios from "axios";

// Function to get Unsplash API configuration
export function getUnsplashAPI() {
  // Create an Axios instance with Unsplash base URL and your access key
  const unsplash = axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
      Authorization: `Client-ID FPU4NrLT1z3ylxu8t4SM0ZQQZd7Ge5hUvEa25jfhdrE`, // Unsplash access key
    },
  });

  const query = "wireframe";
  const perPage = 6;

  // Return the Axios instance, query, and perPage values
  return { unsplash, query, perPage };
}

// Functi
