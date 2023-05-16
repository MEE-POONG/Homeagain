import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Container, Nav, Button, Dropdown, NavDropdown } from 'react-bootstrap';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BiMenu } from 'react-icons/bi';

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
          <Navbar.Brand href='/'>
            <img src="/images/banner.jpg" className='logo mx-lg-5' alt="" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Link href="/" className={asPath === "/" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
              หน้าหลัก
            </Link>

            <Dropdown>
              <Dropdown.Toggle onMouseOver={() => {
                setCheckClickPath("/about");
              }}
                className={
                  checkClickPath === "/about/origin" ||
                    checkClickPath === "/about/committee"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"}
                id=""
              >
                <Link href="/about" >
                  เกี่ยวกับมูลนิธิฯ
                </Link>
                <i className="me-2">
                  <IoMdArrowDropdown />
                </i>
              </Dropdown.Toggle>

              <Dropdown.Menu className=''
                show={
                  checkClickPath === "/about" ||
                  checkClickPath === "/about/origin" ||
                  checkClickPath === "/about/committee"
                }>
                <Dropdown.Item
                  id="buttons"
                  href="/about"
                  className={
                    asPath === "/about"
                      ? "dropdown-item ps-5 active"
                      : "dropdown-item ps-5"
                  }
                >
                  ความเป็นมาของมูลนิธิฯ
                </Dropdown.Item>
                <Dropdown.Item
                  id="buttons"
                  href="/about/origin"
                  className={
                    asPath === "/about/origin"
                      ? "dropdown-item ps-5 active"
                      : "dropdown-item ps-5"
                  }
                >
                  ประกาศจัดตั้ง
                </Dropdown.Item>
                <Dropdown.Item
                  id="buttons"
                  href="/about/committee"
                  className={
                    asPath === "/about/committee"
                      ? "dropdown-item ps-5 active"
                      : "dropdown-item ps-5"
                  }
                >
                  คณะกรรมการของมูลนิธิ
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Link href="/supportus" className={asPath === "/supportus" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
              ร่วมบริจาค
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
