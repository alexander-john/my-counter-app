# Why use React?

### Basic HTML, CSS, and JavaScript Implementation

Here, we manually manipulate the DOM to update the UI:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Counter App</title>
  <style>
    #counter {
      font-size: 24px;
      margin: 20px;
    }
    button {
      margin: 5px;
      padding: 10px;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <div id="app">
    <div id="counter">0</div>
    <button id="increment">Increment</button>
    <button id="decrement">Decrement</button>
    <button id="reset">Reset</button>
  </div>
  <script>
    const counterDisplay = document.getElementById('counter');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const resetButton = document.getElementById('reset');

    let count = 0;

    incrementButton.addEventListener('click', () => {
      count++;
      counterDisplay.textContent = count;
    });

    decrementButton.addEventListener('click', () => {
      count--;
      counterDisplay.textContent = count;
    });

    resetButton.addEventListener('click', () => {
      count = 0;
      counterDisplay.textContent = count;
    });
  </script>
</body>
</html>
```

### Challenges with This Approach:

- Manual DOM Manipulation: We must find and update DOM elements manually, which gets tedious as the app grows.
- State Management: We're directly modifying count and manually updating the DOM. Tracking multiple pieces of state (e.g., additional counters) would add complexity.
- Reusability: If we wanted another counter, we’d need to duplicate the HTML, CSS, and JavaScript logic, which isn’t scalable.

# React Implementation

Now, let's use React to achieve the same functionality.

```javascript
import React, { useState } from "react";

function CounterApp() {
  // State to track the counter
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div style={{ fontSize: "24px", margin: "20px" }}>{count}</div>
      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: "5px", padding: "10px", fontSize: "16px" }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: "5px", padding: "10px", fontSize: "16px" }}
      >
        Decrement
      </button>
      <button
        onClick={() => setCount(0)}
        style={{ margin: "5px", padding: "10px", fontSize: "16px" }}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterApp;
```

### Benefits of Using React:

- Declarative UI Updates:

  - In React, you describe what the UI should look like when the state changes, and React takes care of updating the DOM. This eliminates manual DOM manipulation.
  - Example: setCount(count + 1) automatically re-renders the UI.

- State Management:

  - React's useState hook manages the state of the counter. If the app grows (e.g., with multiple counters), managing state remains straightforward.

- Reusability:

  - You can encapsulate the counter logic in a reusable CounterApp component. To add another counter, you just render <CounterApp /> again.

- Scalability:

  - React’s component-based structure makes it easier to split the app into smaller, manageable pieces. Adding new features (e.g., multiple counters, a total count) becomes more maintainable.

- Styling:

  - Inline styles (or libraries like CSS Modules) allow scoped styles for each component, avoiding global CSS conflicts.

### Start the Development Server

In the terminal, start the React app:

```bash
npm start
```
Open your app in a browser at `http://localhost:3000`.