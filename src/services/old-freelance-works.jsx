import env from "react-dotenv";

// =============================================================================
// Services for Old freelance works
// =============================================================================

// R
export async function getOldFreelanceWork() {
  const uri = `${env.URI_API}old-freelance-works`;

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
