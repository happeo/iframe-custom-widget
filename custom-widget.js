// Create a class for the element
class IframeWidget extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create div
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper");

    // you can change the width and height as necessary
    wrapper.innerHTML =
      '<iframe height="600" width="800" src="https://www.youtube.com/embed/HbPItEgPBZc" title="My Iframe" />';

    // Create some CSS to apply to the shadow dom
    const style = document.createElement("style");

    // add any needed css below
    style.textContent = `
      
        `;

    // Attach the created elements to the shadow dom
    shadow.appendChild(wrapper);
  }
}

// Define the new element
const slug = "enter-your-slug-within-these-quotes";

window.customElements.get(slug) ||
  window.customElements.define(slug, IframeWidget);
