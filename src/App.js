import React, { useEffect, useState } from 'react';
import TestObject from './testObject';
import TestNavBar from './testNavBar';

function App() {

  const [active, setActive] = useState('red');

  const handleScroll = () => {
    const scrollPos = window.pageYOffset;
    const pages = document.getElementById('pages').children;
    for (const page of pages) {
      const {y, height} = page.getBoundingClientRect();
      if (y < scrollPos && (y + height) >= scrollPos) {
        setActive(page.id);
        window.location.hash = page.id;
      }
    }
  }

  useEffect(() => {
    if (window.location.hash) {
      setActive(window.location.hash.substr(1));
    }

    document.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {

  })
  return (
    <div className="App">
      <TestNavBar active={active} />
      <div id='pages'>
        <TestObject color='red' />
        <TestObject color='blue' />
        <TestObject color='green' />
      </div>
    </div>
  );
}

export default App;
