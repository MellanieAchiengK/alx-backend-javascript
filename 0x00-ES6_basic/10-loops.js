export default function appendToEachArrayValue(array, appendString) {
    const temp = [];
    for (const value of array) {
      temp.push(appendString + value);
    }
  
    return temp;
  }