import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import NoteList from '../NoteList/NoteList';
import css from './App.module.css';
import axios from 'axios';

export default function App() {
  // const [count, setCount] = useState(1);
  const [clicks, setClicks] = useState(0);

  const query = useQuery({
    queryKey: [],
    queryFn: () => {},
  });

  useEffect(() => {
    console.log('You can see me only once!');
  });

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {/* Компонент SearchBox */}
        {/* Пагінація */}
        {/* Кнопка створення нотатки */}
      </header>
      <NoteList />
    </div>
  );
}
