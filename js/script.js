import AccordionList from "./modules/accordion-list.js";
import SlideNav from "./modules/slide.js";

const accordionList = new AccordionList("[data-script='accordion-list'] dt");
accordionList.iniciar();

const slideNav = new SlideNav(".slide", ".slide-wrapper");
slideNav.iniciar();
slideNav.addEventoControle();