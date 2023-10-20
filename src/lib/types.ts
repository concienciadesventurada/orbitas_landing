export type Product = {
	acronym: string;
	name: string;
	desc: string;
};

export type Service = {
	img: Image;
	title: string;
	desc: string;
};

export type Image = {
	src: string;
	alt: string;
};
