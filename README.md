# Dynamic Shopping Cart

## Project Overview

This is a simple, interactive shopping cart web application built using HTML, CSS, and JavaScript. 
Users can add items to a shopping cart, see the total price update in real time, and remove individual items as needed. 
The application uses dynamic DOM manipulation and basic form validation for user input.

---


## Reflection

### How did you dynamically create and append new elements to the DOM?

Each time a user adds a product, the application creates a new <li> element using document.createElement(). 
This list item includes the product name, price, and a "Remove" button. 
The button is also dynamically created and assigned a click event listener. 
After construction, the entire element is added to the DOM using appendChild().

### What steps did you take to ensure accurate updates to the total price?
 Whenever a product was added, the item's price was added to this variable, and whenever one was removed, it was subtracted. 
 All updates to the UI used toFixed(2) to maintain two decimal places and display the total consistently.

 ### How did you handle invalid input for product name or price?
  I used a switch(true) statement to validate input conditions before any item could be added: If the product name was empty or only whitespace, it was rejected.
If the price field was empty, non-numeric, or less than or equal to zero, it was also rejected. Alerts were used to notify users of invalid entries.There was a small bug in the original condition (!name.length === 0) which was corrected to name.length === 0 for proper validation.

### What challenges did you face when implementing the remove functionality?
Event delegation wasn’t used; instead, each remove button had its own listener added at creation. Parsing the data-price value correctly and updating the total was essential to keep the cart accurate.


