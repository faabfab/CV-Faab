import env from "react-dotenv";

// R get
export async function getFrontFormation() {
  const uri = `${env.URI_API}front-end-formation/`;

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(uri, requestOptions);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  return "error";
}

// R All projects
export async function getAllFrontProjects() {
  const uri = `${env.URI_API}front-end-formation/projets`;

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(uri, requestOptions);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  return "error";
}
