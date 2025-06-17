Parcel is a beast. Points on parcel:
Dev build - Parcel quickly bundles code for development with debugging support.
Local server - Starts a local development server to test the app in the browser.
HMR - Hot Module Replacement - updates only the changes module in the browser without full reload.
File Watching Algorithm - written in C++ - uses a fast C++ algorithm to detect file changes efficiently.
Caching - faster builds - saves intermediate build so that it can avoid redundant work and speed up builds.
Image optimization - automatically compresses and optimizes image assets.
Minification - reduces code size by removing unnecessary characters and whitespaces.
Building - generates final output files for deployment.
Compress - applies compression algorithms like gzip to reduce file sizes.
Consistent hashing - uses content based hashing for files to enable long-term caching.
Code splitting - breaks code into smaller chunks to load only what's needed.
Differential bundling - support older browsers - creates separate bundles for modern and older browsers.
Diagnostic - shows detailed and helpful error/warning messages.
Error handling - gives user-friendly errors with stack traces and suggestions.
HTTPs hosting - can serve the app over HTTPS during development.
Tree shaking - remove unused code to reduce bundle size
Dev / prod bundles - generates separate optimized bundles for dev and prod.

FOOD APP
/\*\*

- HEADER
- - LOGO
- - NAVBAR
- BODY
- - SEARCH BAR
- - RESTAURANTS CONTAINER
-      - RESTAURANT CARD
-          - Img
-          - Name of rest, Star Rating, Cuisine, Delivery time
- FOOTER
- - COPYRIGHT
- - LINKS
- - ADDRESS
- - CONTACT
    \*\*/

#Two types if Export/Import

- -Default Export/Import
  export default Component;
  import Component from "path";

- -Named Export/Import
  export const Component;
  import {Component} from "path";

# -REACT HOOKS

(Normal JS utility function)
useState
useEffect

# -2 types of Routing in web apps

Client Side Routing
Server Side Routing

# Redux toolkit

- Install @redux/toolkit and react-redux
- Build our store
- Connect our store to our app
- Create a cart slice (to add items to cart)
- dispatch(action)
- Read data using Selector

# Types of Testing (By Developer)

- unit testing
- integration testing
- end to end testing (e2e)
