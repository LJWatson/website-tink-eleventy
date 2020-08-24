const jsdom = require('@tbranyen/jsdom');
const {JSDOM} = jsdom;
const minify = require('../utils/minify.js');
const slugify = require('slugify');

module.exports = (value, outputPath) => {
  if (!outputPath) {
    return value;
  }

  if (outputPath.endsWith('.html')) {
    const DOM = new JSDOM(value, {
      resources: 'usable'
    });

    const document = DOM.window.document;
    const codeBlocks = [...document.querySelectorAll('.post__body pre')];

    // Look for code blocks and re-format
    if (codeBlocks.length) {
      codeBlocks.forEach((block, index) => {
        const codeElement = block.querySelector('code');
        let codeLanguage = codeElement
          ? codeElement.getAttribute('class').replace('language-', '')
          : '';
        let copyButtonEnabled = true;

        if (codeLanguage.length) {
          const element = document.createElement('div');

          switch (codeLanguage) {
            case 'css':
            case 'html':
              codeLanguage = codeLanguage.toUpperCase();
              break;
            case 'js':
            case 'javascript':
              codeLanguage = 'JavaScript';
              break;
            case 'diff':
              copyButtonEnabled = false;
              codeLanguage = 'Diff - don’t copy';
              break;
          }

          block.setAttribute('id', `code-block-${index}`);

          element.innerHTML = `
            <div class="code-block__header">
              <dl>
                <dt class="visually-hidden">Code language</dt>
                <dd>${codeLanguage}</dd>
              </dl>
              ${
                copyButtonEnabled
                  ? `
                    <button hidden type="button" data-element="code-copy-button" data-code-ref="code-block-${index}">Copy to clipboard</button>
                    <div role="alert"></div>
                  `
                  : ''
              }
            </div>
            <div class="wrapper">
              <div class="code-block__code">
                ${block.outerHTML}
              </div>
            </div>
          `;

          element.classList.add('code-block');
          element.classList.add('radius');
          element.setAttribute('data-element', 'code-block');

          block.replaceWith(element);
        }
      });
    }

    return '<!DOCTYPE html>\r\n' + document.documentElement.outerHTML;
  }
  return value;
};
