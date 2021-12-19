const canvasAreaClassName = "sc-bRBYWo cgvuur";
const appAreaClassName = "left";

function disableRightClickOnElementsWithClass(name) {
  const elements = document.getElementsByClassName(name);
  for (let i = 0; i < elements.length; i++) {
    elements[i].setAttribute("oncontextmenu", "return false;");
  }
}

function addObserverToAppArea() {
  const appArea = document.getElementsByClassName(appAreaClassName)[0];

  const mutationObserver = new MutationObserver(function (mutationsList) {
    for (let i = 0; i < mutationsList.length; i++) {
      const mutation = mutationsList[i];

      if (mutation.type === "childList") {
        disableRightClickOnElementsWithClass(canvasAreaClassName);
      }
    }
  })

  const config = { childList: true, subtree: true };
  mutationObserver.observe(appArea, config)
}

disableRightClickOnElementsWithClass(canvasAreaClassName);
addObserverToAppArea();