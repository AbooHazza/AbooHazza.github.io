
##  Overview

This portfolio features a sleek, fast, and modular structure using **Vanilla JavaScript (Fetch API)** to load sections dynamically without page reloads.

- **Modular Architecture:** Every section (`about`, `certs`, `repos`, `stack`, `goals`, `contact`) is an independent HTML file inside the `sections/` folder.
- **Terminal Aesthetic:** Dark mode palette, custom status badges, JetBrains Mono font, ASCII Art, and subtle scanline animations.
- **Keyboard Navigation:** Quick tab switching using keys `1` to `6`.
- **Live Clock:** Real-time Riyadh timezone (`Asia/Riyadh`) clock in the footer.

---

##  Project Structure

```text
portfolio/
├── index.html          # Main container & UI wrapper
├── style.css           # Theme variables, layouts & terminal styling
├── script.js           # Fetch API logic, keyboard events & live clock
├── README.md           # Project documentation
└── sections/           # Standalone modular HTML sections
    ├── about.html        # Bio, ASCII header, & basic info
    ├── certs.html        
    ├── repos.html       
    ├── stack.html        
    ├── goals.html        
    └── contact.html      
```

© 2026 Moyed Alaybani.
