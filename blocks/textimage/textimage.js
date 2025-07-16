export default function decorate(block) {
    const rows = [...block.children];

    // Expected structure: first row is image, second row is content
    if (rows.length >= 2) {
        const imageRow = rows[0];
        const contentRow = rows[1];

        // Add classes for styling
        const imageDiv = imageRow.querySelector('div');
        const contentDiv = contentRow.querySelector('div');

        if (imageDiv) {
            imageDiv.classList.add('textimage-image');

            // Handle image caption if present
            const img = imageDiv.querySelector('img');
            const textNodes = [...imageDiv.childNodes].filter(node =>
                node.nodeType === Node.TEXT_NODE && node.textContent.trim()
            );

            if (textNodes.length > 0 || imageDiv.children.length > 1) {
                // Look for caption text after the image
                const possibleCaption = imageDiv.querySelector('p') ||
                    imageDiv.querySelector('em') ||
                    imageDiv.querySelector('i');

                if (possibleCaption) {
                    possibleCaption.classList.add('image-caption');
                }
            }
        }

        if (contentDiv) {
            contentDiv.classList.add('textimage-content');
        }

        // Check for image position variant
        const firstCell = block.querySelector('div > div');
        if (firstCell && firstCell.textContent.trim() && !firstCell.querySelector('img')) {
            // If first cell has text content and no image, it's text-first layout
            block.classList.add('image-right');
        }
    }

    // Handle links - ensure they have proper attributes
    const links = block.querySelectorAll('a');
    links.forEach(link => {
        if (!link.getAttribute('title') && link.textContent) {
            link.setAttribute('title', link.textContent.trim());
        }

        // Add analytics attributes if needed
        if (!link.dataset.analytics && link.textContent) {
            link.dataset.analytics = `link|${link.textContent.trim()}`;
        }
    });
}