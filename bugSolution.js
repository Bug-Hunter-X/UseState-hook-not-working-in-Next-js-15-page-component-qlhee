```javascript
// components/AboutComponent.js
import React, { useState } from 'react';

function AboutComponent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>About Page</h1>
      <p>Count: {count}</p>
    </div>
  );
}
export default AboutComponent;
```
```javascript
// pages/about.js
import AboutComponent from '../components/AboutComponent';

export default function About() {
  return (
    <AboutComponent/>
  );
}
```