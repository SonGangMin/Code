const orderInfo = document.querySelector("#orderInfo");
const orderButton = document.querySelector("#order");
const title = document.querySelector("#container > h2");

// This code adds an event listener to an order button which creates a new paragraph element with the title of the product and appends it to an order information container when clicked. The event listener is set to run only once.

// Good parts:
// 1. The code uses a descriptive variable name for the button element.
// 2. The event listener is set to run only once, which prevents the possibility of the same element being added to the container multiple times.
// 3. The code creates a new paragraph element and appends it to the order information container, which is a good way to display the order information.

// Bad parts:
// 1. The code does not check for the existence of the elements before manipulating them, which could lead to runtime errors if the elements do not exist.
// 2. The code sets the font size and color of the new paragraph element using inline styles, which can make it difficult to maintain the code and style consistency across the application. It would be better to create a CSS class and apply it to the element using the classList property.
// 3. The code only adds the product title to the order information container. It should also include the product details, such as price, quantity, and any customization options.

orderButton.addEventListener(
  "click",
  () => {
    let newP = document.createElement("p");
    let textNode = document.createTextNode(title.innerText);
    newP.appendChild(textNode);
    newP.style.fontSize = "0.8em";
    newP.style.color = "blue";
    orderInfo.appendChild(newP);
  },
  { once: true }
);
