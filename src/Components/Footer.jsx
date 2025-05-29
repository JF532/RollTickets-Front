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
        <FooterLink target="_blank" href="https://github.com/Feliipee013">
          Felipe Taveira
        </FooterLink>
        <FooterLink target="_blank" href="https://github.com/FerTamarindo">
          Fernanda Tamarindo
        </FooterLink>
        <FooterLink target="_blank" href="https://github.com/JF532">
          João Filipe
        </FooterLink>
        <FooterLink href="#">Professor: Walter</FooterLink>
      </FooterLinkGroup>
    </FooterFlowBite>
  );
}
