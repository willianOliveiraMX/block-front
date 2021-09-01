// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getDomains = async () => {
  const response = await fetch("/domains");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default getDomains;
