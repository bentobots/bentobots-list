const create = (inputs = {}) => {
  const list = Object.keys(inputs)
    // extract numbers from "ITEM${NUMBER}"
    .map(k => k.match(/\d+$/)[0])
    // sort 'naturally'
    .sort((a, b) => a - b)
    // return input values in correct order
    .map(sorted => inputs[`ITEM${sorted}`]())

  return { LIST: list }
}

export default create
