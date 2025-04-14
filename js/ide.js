1. **Exact Changes Needed in `js/ide.js`:**

- Replace the repeated AJAX request pattern with a call to `makeAjaxRequest`.
- Ensure `makeAjaxRequest` is defined or imported at the top of the file.

2. **Where to Place the New Function/Class:**

- Place the `makeAjaxRequest` function at the top of the `js/ide.js` file, before any code that uses it. If it's defined elsewhere, ensure it is imported correctly.

3. **How to Modify the Existing Code to Use It:**

**Original Code (lines 373-383):**
```javascript
$.ajax({
    url: `${AUTHENTICATED_BASE_URL[flavor]}/submissions?base64_encoded=true&wait=false`,
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(data),
    headers: AUTH_HEADERS,
    success: function (data, textStatus, request) {
        // ...
    },
    error: handleRunError
});
```

**Modified Code:**
```javascript
makeAjaxRequest({
    url: `${AUTHENTICATED_BASE_URL[flavor]}/submissions?base64_encoded=true&wait=false`,
    data: data,
    successHandler: function (data, textStatus, request) {
        // ...
    },
    errorHandler: handleRunError
});
```

**Additional Considerations:**
- Ensure `AUTH_HEADERS` is defined and accessible.
- Validate `data` before passing it to `makeAjaxRequest`.
- Check that `successHandler` and `errorHandler` are defined and are functions.