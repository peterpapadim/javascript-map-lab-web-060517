const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

let sortedRobots = robots.map(function (robot) {
  let currentRobot = Object.assign({}, robot)
  if(knownDecepticons.includes(currentRobot["name"])){
    currentRobot.alliance = 'decepticon'
  }
  else {
    currentRobot.alliance = 'autobot'
  }
  return currentRobot
})


const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

let coloredZebraStripes = zebraStripes.map(function(zebra, index){
  let currentZebra = Object.assign({}, zebra)
  if (index === 0 || index % 2 === 0){
    currentZebra["color"] = "black"
  }
  else {
    currentZebra["color"] = "white"
  }
  return currentZebra
})
