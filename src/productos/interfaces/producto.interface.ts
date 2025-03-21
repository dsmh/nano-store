export interface Producto {
  id?: number; // Optional because MongoDB will generate _id, and we'll map it
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}
