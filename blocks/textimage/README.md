# TextImage Block

A responsive two-column block that displays an image alongside text content. Perfect for feature highlights, testimonials, or content sections.

## Usage

The TextImage block expects a table structure with two rows:
1. First row: Image
2. Second row: Text content (heading, description, links)

### Basic Structure

```html
<div class="textimage">
  <div>
    <div>
      <img src="/path/to/image.jpg" alt="Description">
      <p><em>(Optional caption)</em></p>
    </div>
  </div>
  <div>
    <div>
      <h3>Your Heading</h3>
      <p>Your description text goes here.</p>
      <p><a href="/link">Call to Action</a></p>
    </div>
  </div>
</div>
```

### Document Authoring (Table Format)

In your document, create a table like this:

| TextImage |
|-----------|
| ![Image](path/to/image.jpg) |
| # Heading<br>Description text<br>[Link text](url) |

### Image Position Variants

- **Default**: Image on left, text on right (desktop)
- **Image Right**: Text on left, image on right (add `.image-right` class or swap table rows)

### Features

- Responsive design (stacked on mobile, side-by-side on desktop)
- Automatic image caption detection
- Link enhancement with analytics attributes
- Flexible content structure
- Background color support
- Proper semantic HTML structure

### Responsive Behavior

- **Mobile**: Stacked layout (image top, content bottom)
- **Tablet**: Adjusted spacing and font sizes
- **Desktop**: Side-by-side layout with proper spacing

### Example Content

Based on the FedEx Frederick W. Smith feature:

| TextImage |
|-----------|
| ![Frederick W. Smith](./media_1234567890.jpeg)<br>*(Annie Leibovitz, 2023)* |
| ### Honoring the Legacy of Frederick W. Smith, Visionary Founder of FedEx<br><br>An innovative leader whose legacy will be felt for generations to come.<br><br>[Read about Mr. Smith's legacy](https://newsroom.fedex.com/newsroom/global-english/frederick-w-smith-visionary-founder-of-fedex-dies-at-80) | 