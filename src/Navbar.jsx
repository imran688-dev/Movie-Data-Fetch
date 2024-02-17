import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  // const NavLink: React.ForwardRefExoticComponent<NavLinkProps & React.RefAttributes<HTMLAnchorElement>>

  return (
    <>
      <div className="navbar bg-base-100 max-w-[1100px] mx-auto">
        <div className="flex-1">
          <NavLink to={"/"} className="btn btn-ghost text-2xl text-secondary">
            Farabi's <span className='text-pink-500'>Website</span>
          </NavLink>

        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-2xl">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/search"}>Search</NavLink>
            </li>
            <li>
              <details>
                <summary>
                  More
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none relative z-[99] gap-[5px]">
                  <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/movies"}>Movies</NavLink>
                  </li>

                  <li>
                    <NavLink to={"/carouselimage"}>Carousel</NavLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}


