class DisclosureToggle extends HTMLElement {
  constructor() {
    super();

    // Create some component-level state
    this.state = {
      triggerExpanded: 'collapsed'
    };
  }

  // Render the component's markup and grab interactive elements
  connectedCallback() {
    // Store the inherited content for later processing
    this.originalContent = this.innerHTML;

    this.innerHTML = this.render();

    this.trigger = this.querySelector('[data-element="trigger"]');
    this.panel = this.querySelector('[data-element="panel"]');

    // Remove the original heading
    this.querySelector('h2').remove();

    // Now the elements are grabbed, we can bind events and trigger the runner
    this.trigger.addEventListener('click', () => this.run());

    this.run();
  }

  // Sets the relevant aria role based on its current value. Sets it to false by default
  // if no value is set
  setState() {
    let currentExpandedState = this.trigger.getAttribute('aria-expanded');

    // If it's not set yet, set it to true so it is reversed below
    if (currentExpandedState === null) {
      currentExpandedState = 'true';
    }

    // Update our global state so other functions know what's up
    this.state.triggerExpanded = currentExpandedState === 'true' ? 'false' : 'true';

    if (currentExpandedState === 'true') {
      this.panel.setAttribute('hidden', '');
    } else {
      this.panel.removeAttribute('hidden');
    }

    this.trigger.setAttribute('aria-expanded', this.state.triggerExpanded);
  }

  // A handy runner that is called from multiple places
  run() {
    this.setState();
  }

  // Getters are great and we use them to create a nice variable
  // for our button label text with a fallback
  get buttonLabel() {
    return this.getAttribute('button-label') || 'Toggle content';
  }

  render() {
    return `
    <button class="[ trigger-button ] [ text-600 weight-bold font-serif ]" type="button" data-element="trigger">
      ${this.buttonLabel}
      <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false" fill="currentColor" width="1em" height="1em">
        <path d="M60 99.333l196 196 196-196 60 60-256 256-256-256z"></path>
      </svg>
    </button>
    <div data-element="panel">
      ${this.originalContent}
    </div>
    `;
  }
}

if ('customElements' in window) {
  customElements.define('disclosure-toggle', DisclosureToggle);
}
