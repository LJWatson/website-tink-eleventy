// For syntax highlighting only
const html = String.raw;

class ThemeToggle extends HTMLElement {
  constructor() {
    super();

    this.STORAGE_KEY = 'user-color-scheme';
    this.COLOR_MODE_KEY = '--color-mode';
  }

  connectedCallback() {
    // Allows flow spacing to work
    this.style.display = 'block';

    this.render();
  }

  getCSSCustomProp(propKey) {
    let response = getComputedStyle(document.documentElement).getPropertyValue(propKey);

    // Tidy up the string if there’s something to work with
    if (response.length) {
      response = response.replace(/\'|"/g, '').trim();
    }

    // Return the string response by default
    return response;
  }

  applySetting(passedSetting) {
    const currentSetting = passedSetting || localStorage.getItem(this.STORAGE_KEY);

    if (currentSetting) {
      this.setStatus(currentSetting);
      window.applyThemeSetting(currentSetting);
    } else {
      // Loads the value based on the custom property value instead, with a fallback of light
      const customPropValue = this.getCSSCustomProp(this.COLOR_MODE_KEY) || 'light';
      this.setStatus(customPropValue);
      window.applyThemeSetting(customPropValue);
    }
  }

  setStatus(currentSetting) {
    // Loop the buttons and set aria-pressed (active) state depending on current theme
    this.buttons.forEach(button => {
      button.setAttribute(
        'aria-pressed',
        currentSetting === button.getAttribute('data-theme') ? 'true' : 'false'
      );
    });
  }

  render() {
    this.innerHTML = html`
      <h2 class="text-600">Theme</h2>
      <div class="[ theme-toggle ] [ gap-top-300 ]">
        <button class="button" data-theme="light">Light</button>
        <button class="button" data-theme="dark">Dark</button>
      </div>
    `;

    this.afterRender();
  }

  afterRender() {
    this.buttons = this.querySelectorAll('[data-theme]');

    // Loop each button to attach the toggle event
    this.buttons.forEach(button => {
      button.addEventListener('click', evt => {
        evt.preventDefault();

        const setting = button.getAttribute('data-theme');
        this.applySetting(setting);
        localStorage.setItem(this.STORAGE_KEY, setting);
      });
    });

    this.applySetting();
  }
}

if ('customElements' in window) {
  customElements.define('theme-toggle', ThemeToggle);
}

export default ThemeToggle;
