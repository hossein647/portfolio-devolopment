export interface Product {
    title: string; 
    color: string;
    years: string;
    shortDescription: string;
    demo: string;
    github: string;
    src: string;
    feature: string[];
    technology: { front: string[], back: string[] };
}