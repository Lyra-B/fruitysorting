// TODO

// 1. Sortables

// 2. calculatePositions

// 3. Set positions on the box

function calculatePositions(element){
  var expectedData = [];
  for(var i = 0; i < element.children.length; i++){
    element.children[i].setAttribute("data-position", i );
    var ExpId = element.children[i].id
    var ExpPos = element.children[i].dataset.position
    expectedData.push({ id: parseInt(ExpId), position: parseInt(ExpPos)})
  }
  return expectedData;
}



