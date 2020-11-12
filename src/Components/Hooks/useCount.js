import { useState } from 'react';

export function useCount(openItem) {

  const newCount = openItem.count ? openItem.count : 1;
  const [count, setCount] = useState(newCount);

  const onChange = e => setCount(e.target.value);

  return { count, setCount, onChange };
}