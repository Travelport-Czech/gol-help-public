# Help for colour customisation of your GOL IBE front-end

<!-- tags: colour, color, customisation, CSS, design, front-end, branding -->

You can change the colour scheme of your GOL IBE booking engine using custom CSS in the admin console.

## How to change colours

1. Log into the GOL IBE admin console.
2. Go to **Supporting texts → CSS**.
3. Enter your CSS overrides in the editor.
4. Click **Save**, then go to **Code Lists → Flush HTML Caches**.

## Key colour targets

| Element | CSS selector example | Description |
|---------|---------------------|-------------|
| Primary button | `.btn-primary` | Search, Book, Pay buttons |
| Header background | `.navbar`, `.header` | Top navigation bar |
| Link colour | `a` | All hyperlinks |
| Page background | `body` | Overall background |
| Form borders | `.form-control` | Input field borders |

## Example: Change primary button colour

```css
.btn-primary {
  background-color: #0056b3;
  border-color: #0056b3;
}
.btn-primary:hover {
  background-color: #004090;
}
```

## Tips

- Use browser **Developer Tools** (F12 → Inspector) to identify the exact class names used on your front-end
- Test colour changes on a dealer front-end first before applying to production
- Ensure sufficient contrast between text and background for readability (WCAG AA: 4.5:1 ratio)
- After saving, always flush HTML caches to see the updated colours
