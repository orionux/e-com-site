import { Product, Category, Banners } from "../types/types";

// export const apiUrl = 'https://orionuxerp.store/api/v1/';
export const apiUrl = 'https://orionuxerp.store/ferolis/api/v1';


// Fetch all categories
export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`${apiUrl}/categories`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

// Fetch all products
export const fetchAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${apiUrl}/products`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Fetch products with filters
export const fetchFilteredProducts = async (
  category: number | string,
  searchTerm: string,
  sort: string,
  minPrice: number,
  maxPrice: number
): Promise<Product[]> => {
  const bodyData = {
    category: category || "all",
    search: searchTerm,
    sort_by: sort,
    min_price: minPrice,
    max_price: maxPrice,
  };

  try {
    const response = await fetch(
      `${apiUrl}/filter-products`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error fetching filtered products:", error);
    return [];
  }
};


// Fetch all Banners
export const fetchBanners = async (): Promise<Banners[]> => {
  try {
    const response = await fetch(`${apiUrl}/banners`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};