import type { Product } from "./types";

export const oss: Product = {
	acronym: "OSS",
	name: "Operation Support Systems",
	desc: "OSS es una plataforma que proporciona un ecosistema para digitalizar los procesos diarios y visibilizar los productos de la organización."
};

export const atom: Product = {
	acronym: "ATOM",
	name: "Avance tecnológico para optimizar manufactura",
	desc: "Es una plataforma de suscripción diseñada para optimizar los procesos de manufactura y los indicadores de calidad , productividad además de controlar las líneas de producción en tiempo real."
};

export const astro: Product = {
	acronym: "ASTRO",
	name: "Avance tecnológico para optimizar manufactura",
	desc: "Es una plataforma de suscripción diseñada para integrar diferentes APIs de plataformas bajo demanda entre ellas Uber Connect , Uber Eats , Uber Developers además integrar otras plataformas como Didi Foods, Rapid, Zubal entre otros."
};

export const orion: Product = {
	acronym: "ORION",
	name: "Catálogo digital de productos e-commerce",
	desc: "Es una plataforma de suscripción diseñada para dar una plataforma de e-commerce y un catálogo digital el cual permita a los clientes compartir sus productos en una tienda virtual o incrustar sus productos en sus páginas Orion permite desplegar por medio de un app, web entre otros."
};

export const sos: Product = {
	acronym: "SOS",
	name: "Service of Solutions",
	desc: "Una aplicación innovadora que te comunica con contratistas y técnicos calificados. Ellos llegarán a tu negocio y te darán una solución rápida y eficaz a cualquier problema presentado."
};

export const gymBE: Product = {
	acronym: "gymBE",
	name: "Entrenamientos de soluciones saludables colaboradores y personas",
	desc: "Es una app con la que puedes lograr buscar a tu entrenador personal, llevar tu rutina y progresar a todas partes, publica tus ganancias, ponte en contacto con otras personas, encuentra los mejores gimnasios de tu zona y mucho más."
};

const products: Product[] = [oss, atom, astro, orion, sos, gymBE];

export default products;
