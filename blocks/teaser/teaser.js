export default function decorate($block) {
    // Parse key-value pairs
    const pairs = [...$block.querySelectorAll(':scope > div')];
    const data = {};

    pairs.forEach(pair => {
        const cells = pair.querySelectorAll('div');
        if (cells.length === 2) {
            const key = cells[0].textContent.trim();
            const value = cells[1].innerHTML.trim();
            if (key) data[key] = value;
        }
    });
    const teaserId = `teaser-${Math.random().toString(36).substring(2, 10)}`;

    $block.innerHTML = `
      <div class="teaser">
        <div id="${teaserId}" class="cmp-teaser" data-cmp-data-layer='{
          "${teaserId}": {
            "@type": "core-components-examples/components/teaser",
            "dc:title": "${data.title}",
            "dc:description": "${data.description}"
          }
        }'>
          <div class="cmp-teaser__content">
            <h2 class="cmp-teaser__title">${data.title}</h2>
            <div class="cmp-teaser__description">
              <p>${data.description}</p>
            </div>
            <div class="cmp-teaser__action-container">
              <a class="cmp-teaser__action-link"
                 id="${teaserId}-cta"
                 href="${data.ctaUrl}"
                 target="${data.ctaClickBehavior}"
                 data-cmp-data-layer='{
                   "${teaserId}-cta": {
                     "@type": "core-components-examples/components/teaser/cta",
                     "dc:title": "${data.ctaLabel}",
                     "xdm:linkURL": "${data.ctaUrl}"
                   }
                 }'
                 data-cmp-clickable="">
                ${data.ctaLabel}
              </a>
            </div>
          </div>
          <div class="cmp-teaser__image">
            ${data.heroImage}
          </div>
        </div>
      </div>
    `;
}