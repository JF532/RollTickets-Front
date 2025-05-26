import React from "react";
import {
  Footer as FooterFlowBite,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export default function Footer() {
  const ano = new Date().getFullYear;

  return (
    <FooterFlowBite container>
      <FooterCopyright href="#" by="Roll Tickets™" year={ano} />
      <FooterLinkGroup>
        <FooterLink href="#">Felipe Taveira</FooterLink>
        <FooterLink href="#">Fernanda Tamarindo</FooterLink>
        <FooterLink href="#">João Filipe</FooterLink>
        <FooterLink href="#">Professor: Walver</FooterLink>
      </FooterLinkGroup>
    </FooterFlowBite>
  );
}
