export const buildMapFromArrayData = (data) => {
  return data.reduce((acc, item)=> {
    acc[item.name.toLowerCase()] = item.threshold;
    return acc;
  } , {})
}