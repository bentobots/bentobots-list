const getItemAtIndex = ({ LIST = () => ([]), INDEX = () => (0)} = {}) => {
  return { ITEM: LIST()[INDEX()] }
}

export default getItemAtIndex
