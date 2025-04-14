1. **Exact Changes Needed in `js/configuration.js`:**
   - Replace all instances of `PROXY_GET` with `ProxyHandler.get`.
   - Replace all instances of `PROXY_SET` with `ProxyHandler.set`.
   - Ensure that the `ProxyHandler` class is imported or defined in the file.

2. **Where to Place the New Function/Class:**
   - If the `ProxyHandler` class is not already defined in `js/configuration.js`, you should import it at the top of the file. If it's defined in another file, use an import statement like:
     ```javascript
     import { ProxyHandler } from './path/to/proxyHandler';
     ```
   - If you prefer to define it directly in `js/configuration.js`, place the class definition at the top of the file, before any code that uses it.

3. **How to Modify the Existing Code to Use It:**
   - Locate the lines where `PROXY_GET` and `PROXY_SET` are used (lines 88-108 in this case).
   - Replace the function calls as follows:
     ```javascript
     // Original
     const value = PROXY_GET(obj, key);
     const success = PROXY_SET(obj, key, val);

     // Modified
     const value = ProxyHandler.get(obj, key);
     const success = ProxyHandler.set(obj, key, val);
     ```
   - Ensure that any error handling or edge case considerations are addressed, such as checking if `key` is a valid string and `obj` is a valid object.