// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getDomains = async () => {
  const response = await fetch("/domains");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getResources = async () => {
  const response = await fetch("/external-content");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default getDomains;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getOneResource = async (id: number) => {
  const response = await fetch(`/external-content/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
