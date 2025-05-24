export const getVitals = () => {
  return Promise.resolve({
    heartRate: 72,
    temperature: 37,
    oxygenLevel: 98,
  });
};
