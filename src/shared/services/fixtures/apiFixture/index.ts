export const getTestDataPromise = (result: any) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(result), 2000); // it takes 2 seconds to make coffee
  });
};
