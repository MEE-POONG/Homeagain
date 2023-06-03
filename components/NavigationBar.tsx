import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Container, NavDropdown } from 'react-bootstrap';
import { NavigationBarData } from '../data/titleTag';
const NavigationBar: React.FC = () => {
  const { asPath } = useRouter();
  const [navbarTop, setNavbarTop] = useState<boolean>(false);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const bodyScroll = document.body.scrollTop;
    const elementScroll = document.documentElement.scrollTop;
    if (bodyScroll > 20 || elementScroll > 20) {
      setNavbarTop(true);
    } else {
      setNavbarTop(false);
    }
  };

  const [checkClickPath, setCheckClickPath] = useState("/");
  useEffect(() => {
    setCheckClickPath(asPath);
  }, [asPath]);
  return (
    <div id="sticky-wrapper" className="sticky-wrapper" >
      <Navbar expand="lg" className={navbarTop ? 'fixed-top' : ''}>
        <Container>
          <Navbar.Brand href='/'>
            <img src="/images/banner.jpg" className='logo' alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className='justify-content-end'>
            <Link href="/" className={asPath === "/" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
              หน้าหลัก
            </Link>
            <NavDropdown title="เกี่ยวกับมูลนิธิฯ" id="basic-nav-dropdown" className={asPath === "/about" || asPath === "/about/origin" || asPath === "/about/committee" ? "active" : ""}>
              <Link href="/about" className={asPath === "/about" ? "dropdown-item active" : "dropdown-item"}>ความเป็นมาของมูลนิธิฯ</Link>
              <Link href="/about/origin" className={asPath === "/about/origin" ? "dropdown-item active" : "dropdown-item"}>ประกาศจัดตั้ง</Link>
              <Link href="/about/committee" className={asPath === "/about/committee" ? "dropdown-item active" : "dropdown-item"}>คณะกรรมการของมูลนิธิ</Link>
            </NavDropdown>
            <Link href="/supportus" className={asPath === "/supportus" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
              การบริจาค
            </Link>
            <Link href="/patronage" className={asPath === "/patronage" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
              การอุปถัมภ์สุนัข
            </Link>
            <Link href="/adoption" className={asPath === "/adoption" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
              การรับอุปการะสุนัข
            </Link>
            <Link href="/contact" className={asPath === "/contact" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
              ติดต่อเรา
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavigationBar;
