# Midterm Lab - CSC336 Web Technologies

Name: Fatima Khan
Roll number: FA24-BCS-033
N = 33, BP = 633px, H = 231 (accent hsl(231, 70%, 45%)), K = 3

## Files changed

- midterm.css (new): all new CSS, styles.css untouched
- index.html, sunglasses.html, product.html: navbar item, midterm.css link, cart icon link
- checkout.html (new): checkout form
- script.js (new): cart badge and mini cart (linked from index.html and sunglasses.html)
- README.md

## Task 1 - Mega-menu

Added "Shop by Category" to the navbar with 3 columns (K = 3) of 4 links, each under a heading. It opens on hover and on keyboard focus (:focus-within), and floats over the page without pushing it down. Below 633px the same groups are <details>/<summary> accordions in the hamburger menu.

## Task 2 - Checkout form

checkout.html has Contact and Delivery fieldsets with labels joined by for/id. Phone uses pattern, the date uses min/max (29 Oct to 1 Dec 2026), and :user-invalid shows red borders and messages only after interaction. CSS Grid puts the fieldsets side by side from 633px; the cart icon now links to this page.

## Task 3 - Cart

script.js reads name and price from the card, stores them in an array and shows the count in a badge. The cart icon toggles a mini cart with Remove buttons and a reduce() total. Each product can be added 3 times, then its button shows "Limit reached" until one is removed.

## AI tools used

Claude (Anthropic)
