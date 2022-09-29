import React from 'react';

const Question = () => {
  return (
    <div>
      <h1>Here the Answer of Question</h1>
      <div>
        <h2>How does react work?</h2>
        <p>React basically maintains a tree. This tree is able to do efficient diff computations on the nodes.HTML code is like as a tree. This is exactly how the browser treats with DOM (rendered HTML on the browser). React allows to effectively re-construct DOM in JavaScript and push only those changes to the DOM which have actually occurred. ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It’s possible to have as many components as necessary without cluttering code.</p>
      </div>
      <div>
        <h2>Why useEffect is used?</h2>
        <p>useEfftect is one of the most important hooks in react. The useEffect Hook is used to perform side effects in react components. It is used for not only fetching data but also used for directly updating the DOM without page reloading which is called rendering data. Another purpose is to manipulate timing function of this hook.</p>
      </div>
      <div>
        <h2>Difference between props and state</h2>
        <h4> Props</h4>
        <li>something</li>
        <li>something</li>
        <li>something</li>
        <li>something</li>
      </div>
    </div>
  );
};

export default Question;