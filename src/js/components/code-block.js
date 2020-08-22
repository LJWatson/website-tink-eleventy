const codeBlock = () => {
  const blocks = document.querySelectorAll('[data-element="code-block"]');
  const urlParams = new URLSearchParams(window.location.search);
  const screenshotMode = urlParams.get('screenshot') === 'true';

  if (!blocks.length) {
    return;
  }

  blocks.forEach(block => {
    const button = block.querySelector('[data-element="code-copy-button"]');

    // Screenshot mode, add exception and remove copy button
    if (screenshotMode) {
      button.setAttribute('hidden', '');
      block.setAttribute('data-mode', 'screenshot');
    }

    // No Clipboard support means no button, pal
    if (!navigator.clipboard) {
      button.setAttribute('hidden', '');
      return;
    }

    if (button) {
      const codeElement = block.querySelector(`#${button.getAttribute('data-code-ref')}`);
      const alert = button.parentNode.querySelector('[role="alert"]');

      if (codeElement) {
        button.removeAttribute('hidden');
        button.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(codeElement.innerText);
            alert.innerHTML = `<div class="code-block__alert">Code copied!</div>`;

            // Reset the alert element after 3 seconds,
            // which should be enough time for folks to read
            setTimeout(() => {
              alert.innerHTML = '';
            }, 3000);
          } catch (ex) {
            alert.innerHTML = '';
          }
        });
      }
    }
  });
};

codeBlock();
