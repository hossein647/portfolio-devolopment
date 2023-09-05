export interface Product {
    title: string; 
    color: string;
    years: string;
    feature: string[];
    technology: { front: string[], back: string[] };
}