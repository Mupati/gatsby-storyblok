const formatName = urlWithName =>
  urlWithName
    .split("/")[1]
    .split("-")
    .map(name => `${name[0].toUpperCase()}${name.substr(1)}`)
    .join(" ")

export default formatName
