import "./projects.css";
import { getUnsplashAPI} from "./pexelAPI/pexelAPI.js";

const title = "My Projects";

export async function projects() {
  try {
    const { unsplash, query, perPage } = getUnsplashAPI();
    const response = await unsplash.get(`search/photos?query=${query}&per_page=${perPage}`);
    const photos = response.data.results;
    // console.log(response);

    const projects = photos
      .map(
        (photo, index) => `
      <div class = "project">
        <h3>Project ${index + 1}</h3>
        <img src = ${photo.urls.small} alt = "project ${index + 1}" />
        <p>${photo.description || "nein"}</p>
      </div>`,
      )
      .join("");

    const projectsSection = `
    <section class = "projects">
      <h2 class = "projectTitleClass">${title}</h2>
      <div class = "projectsContainer">
        ${projects}
      </div>
    </section>
  `;
    return projectsSection;
  } catch (error) {
    console.error("Error fetching projects ", error);
    return "";
  }
}
// YXna99vPo7Rw8olvv2nigXAL6jUMYU3do1El29JoUigM1gxY49cgtP3p
