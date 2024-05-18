import { useEffect, useState } from 'react';

const useMenu = () => {
  const [menus, setMenus] = useState([]);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    fetch('http://localhost:5000/menu')
      .then(res => res.json())
      .then(data => {
        setMenus(data);
        setLoding(false);
      });
  }, []);
  return [menus, loding];
};

export default useMenu;
