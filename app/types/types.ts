export type Product = {
    id: number;
    slug: string;
    product_name: string;
    product_code: string;
    parent_category: {
      id: number;
      slug: string;
      category_name: string;
    };
    sub_category: string;
    suplier: string;
    brand: string;
    sku: string | null;
    barcode: string | null;
    warehouse_location: string;
    units: string;
    carton_size: string | null;
    description: string;
    featured_image: string;
    featured_image_url: string;
    status: string;
    retail_price: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    gallery: {
      id: number;
      product_id: string;
      image: string;
      image_url: string;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
    }[];
  };
  
  export type Category = {
    id: number;
    slug: string;
    category_name: string;
    parent_category: string;
    status: string;
    products_count: number;
  };
  
  export type Banners = {
    id: number;
    image_url: string;
  };


  export type CartItem = Product & {
    quantity: number;
  };
  
  export type FavoriteItem = Product & {
    quantity: number;
  };