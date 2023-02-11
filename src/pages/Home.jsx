import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const { todo } = useSelector(state => state);
  return <div>home</div>;
}
