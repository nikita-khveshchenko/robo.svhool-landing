class Toolbox {
  selectors = {
    toolTip: "[data-js-tooltip]",
    toolBox: "[data-js-toolbox]"
  }

  stateClasses = {
    isActive: "is-active"
  }

  constructor() {
    this.toolTipElement = document.querySelector(this.selectors.toolTip);
    this.toolBoxElement = document.querySelector(this.selectors.toolBox);
    this.init();
  }

  showToolBox = () => {
    this.toolBoxElement.classList.add(this.stateClasses.isActive);
  }

  hiddenToolBox = () => {
    this.toolBoxElement.classList.remove(this.stateClasses.isActive);
  }

  init() {
    this.toolTipElement.addEventListener("mouseenter", this.showToolBox);
    this.toolTipElement.addEventListener("mouseleave", this.hiddenToolBox);
  }
}

export default Toolbox;