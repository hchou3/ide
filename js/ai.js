1. **Exact Changes Needed in `js/ai.js`:**

Replace the existing code pattern for setting up the form listener with the `setupFormListener` function.

**Original Code (lines 34-36):**
```javascript
// Assuming the original code looks something like this:
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("judge0-chat-form").addEventListener("submit", async function (event) {
        event.preventDefault();
        // ... existing form submission logic ...
    });
});
```

**Updated Code:**
```javascript
setupFormListener("judge0-chat-form", async function (event) {
    event.preventDefault();
    // ... existing form submission logic ...
});
```

2. **Where to Place the New Function/Class:**

The `setupFormListener` function should be placed in a common utility file or at the top of the `js/ai.js` file, before it is used. If you have a utilities file, it would be best to place it there and import it into `js/ai.js`.

3. **How to Modify the Existing Code to Use It:**

- Remove the existing event listener setup code.
- Call `setupFormListener` with the appropriate `formId` and `submitHandler` function.
- Ensure that the `setupFormListener` function is accessible in the `js/ai.js` file, either by defining it in the same file or importing it from a utilities module.