import env from "react-dotenv";

export async function getUser() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  };
  const response = await fetch(env.URI_API, requestOptions);
  if (response.status === 200) {
    const data = await response.json();
    return data[0];
  }
  return "error";
}

// =============================================================================
// User Contents
// =============================================================================
/**
 * Studies
 */
// URI
const studiesURI = `${env.URI_API}studies/`;

export async function getUserStudies() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  };
  const response = await fetch(studiesURI, requestOptions);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  return "error";
}

/**
 * Hobbies
 */
// URI
const hobbiesURI = `${env.URI_API}hobbies/`;

export async function getUserHobbies() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(hobbiesURI, requestOptions);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  return "error";
}

/**
 * Links
 */
// URI
const linksURI = `${env.URI_API}links/`;

export async function getUserLinks() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(linksURI, requestOptions);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  return "error";
}

// =============================================================================
// Competences
// =============================================================================
// URI
const competenceURI = `${env.URI_API}competence/`;

export async function getUserCompetence() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(competenceURI, requestOptions);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  return "error";
}

// =============================================================================
// Competences Element
// =============================================================================
// URI
const competenceElementURI = `${env.URI_API}competence/element/`;

// Get
export async function getUserCompetenceElementAll() {
  const elementGetURI = competenceElementURI;

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(elementGetURI, requestOptions);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  return "error";
}

// Get by ID
export async function getUserCompetenceElement(id) {
  const elementGetURI = competenceElementURI + id;

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(elementGetURI, requestOptions);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  return "error";
}

// =============================================================================
// Element Items
// =============================================================================
// C

// R
export async function readItems() {
  const itemURI = `${env.URI_API}items`;
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(itemURI, requestOptions);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  return "error";
}
// R by Id
export async function readItemById(id) {
  const itemURI = `${env.URI_API}item/${id}`;
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(itemURI, requestOptions);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  return "error";
}
