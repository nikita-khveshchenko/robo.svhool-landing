class Menu {
  selectors = {
    root: "[data-js-header]",
    overlay: "[data-js-header-overlay]",
    openButton: "[data-js-header-open-button]",
    closeButton: "[data-js-header-close-button]"
  }

  stateClasses = {
    isActive: "is-active",
    isLook: "is-look"
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.overlayElement = this.rootElement.querySelector(this.selectors.overlay);
    this.openButtonElement = this.rootElement.querySelector(this.selectors.openButton);
    this.closeButtonElement = this.rootElement.querySelector(this.selectors.closeButton);
    this.init();
  }

  onClickOpenButton = () => {
    this.overlayElement.classList.add(this.stateClasses.isActive);
    document.documentElement.classList.add(this.stateClasses.isLook);
  }

  onClickCloseButton = () => {
    this.overlayElement.classList.remove(this.stateClasses.isActive);
    document.documentElement.classList.remove(this.stateClasses.isLook);
  }

  init() {
    this.openButtonElement.addEventListener("click", this.onClickOpenButton);
    this.closeButtonElement.addEventListener("click", this.onClickCloseButton);
  }
}

export default Menu;