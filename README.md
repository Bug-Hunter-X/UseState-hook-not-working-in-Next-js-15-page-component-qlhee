# Next.js 15 useState Hook Error in Pages Directory

This repository demonstrates a common error encountered in Next.js 15 applications when using the `useState` hook within page components. The issue arises because the `useState` hook, part of React's state management, requires a functional component to be within a component using `React.StrictMode`.  Moving it into a custom component will resolve the issue.

## Problem

The `useState` hook throws an error when used directly in a Next.js page component.  This is because these components are not necessarily wrapped in a `React.StrictMode` environment like components used within a typical React application.

## Solution

To resolve this, the functional component which uses the hook should be extracted into a separate component. Then, this component can be imported and used in your page.