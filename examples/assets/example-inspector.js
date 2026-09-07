// Inspector script for Fahodzi UI example elements (Right side panel, always visible)
(function () {
  'use strict';

  // Format HTML with 2-space indentation
  function formatHTML(html) {
    let formatted = '';
    let indent = 0;
    const tab = '  ';

    // Normalize whitespace between tags
    const cleanHtml = html
      .replace(/>\s+</g, '><')
      .replace(/<!--[\s\S]*?-->/g, '')
      .trim();

    // Regex to split by tags and text
    const tokens = cleanHtml.match(/(<\/?[a-zA-Z0-9\-]+(?:\s+[^>]*?)?>|[^<]+)/g) || [cleanHtml];

    const voidElements = new Set([
      'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
      'link', 'meta', 'param', 'source', 'track', 'wbr', 'fz-menu-separator'
    ]);

    tokens.forEach((token) => {
      const isClosing = token.startsWith('</');
      const isOpening = token.startsWith('<') && !isClosing;
      const isSelfClosing = isOpening && (token.endsWith('/>') || voidElements.has(token.match(/^<([a-zA-Z0-9\-]+)/)?.[1]?.toLowerCase()));

      if (isClosing) {
        indent = Math.max(0, indent - 1);
      }

      if (formatted.length > 0) {
        formatted += '\n';
      }

      formatted += tab.repeat(indent) + token;

      if (isOpening && !isSelfClosing) {
        indent++;
      }
    });

    return formatted;
  }

  // Escape HTML for safe display in code block
  function escapeHTML(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Light-theme HTML syntax highlighter
  function highlightHTML(escapedStr) {
    return escapedStr
      // Tags
      .replace(/(&lt;\/?)([a-zA-Z0-9\-]+)/g, '$1<span class="hl-tag">$2</span>')
      // Attributes and values
      .replace(/([a-zA-Z0-9\-]+)=(&quot;[^&]*&quot;|&#039;[^&#]*&#039;)/g, '<span class="hl-attr">$1</span>=<span class="hl-str">$2</span>')
      // Boolean attributes (no value)
      .replace(/\s([a-zA-Z0-9\-]+)(?=[^<]*&gt;)/g, (match, p1) => {
        if (p1 === 'class' || p1 === 'span' || p1 === 'div') return match;
        return ` <span class="hl-attr">${p1}</span>`;
      });
  }

  // Create Right Side Panel DOM (Always Visible)
  function createSidePanel() {
    const panel = document.createElement('aside');
    panel.id = 'example-code-panel';
    panel.className = 'example-code-panel';
    panel.setAttribute('aria-label', 'Component Source Code');

    panel.innerHTML = `
      <div class="example-code-header">
        <div class="example-code-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <span>HTML Source</span>
        </div>
        <div class="example-code-actions">
          <button id="example-code-copy-btn" class="example-code-btn" title="Copy code to clipboard">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span class="copy-text">Copy</span>
          </button>
        </div>
      </div>
      <div class="example-code-body">
        <pre><code id="example-code-content" class="placeholder">Click any &lt;/&gt; icon below a component to inspect its HTML source code.</code></pre>
      </div>
    `;

    document.body.appendChild(panel);

    let activeRawCode = '';

    // Copy to clipboard
    const copyBtn = panel.querySelector('#example-code-copy-btn');
    const copyText = copyBtn.querySelector('.copy-text');
    copyBtn.addEventListener('click', () => {
      if (!activeRawCode) return;
      navigator.clipboard.writeText(activeRawCode).then(() => {
        copyText.textContent = 'Copied!';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyText.textContent = 'Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      });
    });

    // Display code function
    window.showExampleCode = function (rawHtml, wrapperEl) {
      activeRawCode = formatHTML(rawHtml);
      const codeContent = panel.querySelector('#example-code-content');
      codeContent.classList.remove('placeholder');
      codeContent.innerHTML = highlightHTML(escapeHTML(activeRawCode));

      document.querySelectorAll('.example-wrapper.highlighted').forEach((el) => el.classList.remove('highlighted'));
      if (wrapperEl) {
        wrapperEl.classList.add('highlighted');
      }
    };
  }

  // Wrap example elements and inject code icon button below each element
  function initInspector() {
    createSidePanel();

    // Select candidate UI example elements
    const selectors = [
      '.buttons > button',
      '.buttons > .button',
      'section.cards > fz-card',
      'section.cards > .fz-card',
      '.variant > div > fz-dropdown',
      '.variant > div > .fz-dropdown',
      '.variant > div > .dropdown',
      'section.component > fz-dropdown',
      '.button-group',
    ];

    const targets = Array.from(document.querySelectorAll(selectors.join(', ')));

    targets.forEach((el, index) => {
      if (el.closest('.example-wrapper')) {
        return;
      }

      // Capture raw HTML before DOM restructuring
      const rawHtml = el.outerHTML;

      // Create outer wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'example-wrapper';

      // Create target holder
      const targetHolder = document.createElement('div');
      targetHolder.className = 'example-target';

      // Create footer below the element for the code button
      const footer = document.createElement('div');
      footer.className = 'example-footer';

      const codeBtn = document.createElement('button');
      codeBtn.type = 'button';
      codeBtn.className = 'example-code-icon';
      codeBtn.title = 'View component HTML code';
      codeBtn.setAttribute('aria-label', 'View HTML code');
      codeBtn.innerHTML = `
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        <span>code</span>
      `;

      codeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.showExampleCode(rawHtml, wrapper);
      });

      footer.appendChild(codeBtn);

      // Insert wrapper into DOM
      el.parentNode.insertBefore(wrapper, el);
      targetHolder.appendChild(el);
      wrapper.appendChild(targetHolder);
      wrapper.appendChild(footer);

      // Automatically display the first component on initial page load
      if (index === 0) {
        window.showExampleCode(rawHtml, wrapper);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInspector);
  } else {
    initInspector();
  }
})();
