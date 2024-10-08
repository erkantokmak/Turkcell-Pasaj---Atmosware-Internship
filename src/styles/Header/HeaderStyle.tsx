import Link from 'next/link';
import styled from 'styled-components';

export const NavWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 20px;
`;

export const NavLink = styled.a`
text-decoration: none;
cursor: pointer;
color: #253342;
`;

export const SearchWrapper = styled.div`
position: relative;
margin-left: 10px;
@media (max-width: 768px) {
  margin-left: 0;
  width: 100%;
}
@media (max-width: 576px) {
  margin-top: 30px;
}
`;

export const SearchModal = styled.div`
position: absolute;
top: 100%;
left: 0;
right: 0;
background-color: white;
z-index: 1000;
padding: 20px;
border-bottom-left-radius: .625rem;
border-bottom-right-radius: .625rem;
`;

export const IconWrapper = styled.div`
position:absolute;
top: 50%;
left: 15px;
transform: translateY(-50%);
color: gray;
`;

export const SearchBar = styled.input`
background-color: #eff2f5;
height: 3.75rem;
width: 40rem;
border: none;
border-radius: .5rem;
padding: .5rem;
padding-left: 3rem;
display:flex;
color: #253342;
@media (max-width: 768px) {
    width: 100%;
}
@media (max-width: 576px) {
    width: 100%;
}
`;

export const LoginButton = styled.button`
padding: 0 32px 0 25px;
border: 1px solid #eff2f5;
border-radius: .5rem;
color: #253342;
background-color: #fff;
font-size: 1rem;
height: 3.75rem;
@media (max-width: 768px) {
  width: 100%;
}
`;

export const RegisterButton = styled(LoginButton)`

`;

export const BasketButton = styled(LoginButton)`
border: none;
background-color: #FFC900;
position: relative;
padding: 0 52px 0px 26px;
`;

export const BasketCount = styled.span`
position: absolute;
top: 50%;
transform: translateY(-50%);
right: -16px;
border-radius: 50%;
border: 5px solid white;
background-color: #ED6060;
width: 38px;
height: 38px;
display: flex;
align-items: center;
justify-content: center;
color: white;
`;

export const MenuItem = styled(Link)`
color: #253342;
text-decoration: none;
font-size: 15px;
text-align: center;
cursor: pointer;
padding: 10px 20px;
line-height: 16px;
font-weight: 500;
display: flex;
border-bottom: 2px solid transparent;
&:hover{
color: #ffc900;
font-weight: 700;
border-bottom: 2px solid #ffc900;
}
`;

export const SubMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 590px;
  background-color: white;
  z-index: 1000;
  .menuItem:hover & {
    display: block;
  }
`;

export const SubMenuItem = styled(Link)`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: #253342;
  &:hover {
    color: #FFC900;
  }
`;

export const BreadCrumb = styled.div`
background-color: #f8f8f8;
padding: 10px 0;
font-size: 14px;
`;

export const MiniMenu = styled.div`
@media (max-width: 576px) {
  display: none;
}
`;

export const MobileMenu = styled.div`
display: none;
@media (max-width: 576px) {
  display: block;
}
`;

export const MenuContainer = styled.div`
  position: relative;
`;

export const HamburgerIcon = styled.div<{ isOpen: boolean }>`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
  div {
    width: 24px;
    height: 3px;
    background-color: #333;
    margin: 5px 0;
    transition: 0.4s;
  }

  ${({ isOpen }) => isOpen && `
    div:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }

    div:nth-child(2) {
      opacity: 0;
    }

    div:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  `}
`;


export const MenuItems = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    background-color: white;
    z-index: 1000;
  }
`;
