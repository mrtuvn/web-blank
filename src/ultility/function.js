// Function: Convert JSON object to array
export const jsonToArray = (json: any) => {
  var result: any[] = [];
  var keys = Object.keys(json);
  for (var key of keys) {
    result.push(json[key]);
  }
  return result;
};
