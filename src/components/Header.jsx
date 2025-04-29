import { useEffect, useState, useRef } from "react";

function Header() {
  const [isVisible, setIsVisible] = useState(true); // ture → true
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      style={{
        position:'sticky',
        top:0,
        backgroundColor: 'white',
        transition: 'transform 0.3s ease',
        transform:isVisible?'translateY(0)': 'translateY(-100%)',
        zIndex:1000,
        padding:'20px',
        textAlign:'center',
        boxShadow:'0 2px 4px rgba(0,0,0,0.1)'
      }}>
      <h1>김이한 & 이여원</h1>
      <p>2025년 10월 20일 21시</p>
      <p>63 빌딩 웨딩홀</p>
    </header>
  );
}

export default Header;
