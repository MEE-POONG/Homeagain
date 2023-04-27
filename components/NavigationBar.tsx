import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Container, Nav, Button, Dropdown } from 'react-bootstrap';
import { BsFillCaretDownFill } from 'react-icons/bs';

export default function NavigationBar(): JSX.Element {
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
          <Navbar.Brand href="/">
            <img src="/images/banner.jpg"className='logo' alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto me-lg-5 align-items-center f-s-bitter">
              <Link href="/" className={asPath === "/" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                หน้าหลัก
              </Link>
              {/* <Link href="/about" className={asPath === "/about" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                เกี่ยวกับเรา
              </Link> */}

              <Dropdown >
                <Dropdown.Toggle variant=""
                  className={
                    checkClickPath === "/about" || checkClickPath === "/about" || checkClickPath === "/about"
                      ? "nav-item nav-link active"
                      : "nav-item nav-link"} id="dropdown-basic">
                  เกี่ยวกับมูลนิธิ
                  <i className="me-2">
                    <BsFillCaretDownFill />
                  </i>
                </Dropdown.Toggle>

                <Dropdown.Menu
                  className=''>
                  <Dropdown.Item href="/about">ความเป็นมาของเรา</Dropdown.Item>
                  <Dropdown.Item href="/about">คณะกรรมการ</Dropdown.Item>
                  <Dropdown.Item href="/about">การทำงานของเรา</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Link href="/supportus" className={asPath === "/supportus" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                คุณสามารถช่วยเราได้อย่างไร
              </Link>
              <Link href="/adoption" className={asPath === "/adoption" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                การรับอุปการะ
              </Link>
              <Link href="/news" className={asPath === "/news" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                ข่าวสารกิจกรรม
              </Link>
              <Link href="/contact" className={asPath === "/contact" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                ติดต่อเรา
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
