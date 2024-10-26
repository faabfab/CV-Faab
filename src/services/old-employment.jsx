import env from "react-dotenv";

// =============================================================================
// Services for old employment
// =======================================================================

// R
export async function getOldEmployment() {
  const uri = `${env.URI_API}old-employment`;

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
