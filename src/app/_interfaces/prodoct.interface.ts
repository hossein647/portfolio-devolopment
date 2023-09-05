export interface Product {
    title: string; 
    color: string;
    years: string;
    src: string;
    feature: string[];
    technology: { front: string[], back: string[] };
}