import { Product, Category, Banners } from "../types/types";

// export const apiUrl = 'https://orionuxerp.store/api/v1/';
// export const apiUrl = 'https://orionuxerp.store/ferolis/api/v1';
export const apiUrl = 'https://erpadmin.orionux.xyz/api/v1';


export const getTokenFromCookies = (): string | null => {
  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find(cookie => cookie.startsWith("api_token="));
  return tokenCookie ? tokenCookie.split("=")[1] : null;
};

// Fetch all categories
export const fetchCategories = async (): Promise<Category[]> => {
  const token = getTokenFromCookies();

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


export const getOrderData = async (customerId: string | null, token: string | null) => {
  try {
      const response = await fetch(
        `${apiUrl}/orders/${customerId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      );
      
      if (response.ok) {
          const data = await response.json();
          // console.log("order: ", data)
          return data;
      } else {
          throw new Error(`Failed to fetch order data: ${response.statusText}`);
      }
  } catch (error) {
      console.error('Error fetching order data:', error);
      return null;
  }
};


export const getCustomerProductData = async (customerId: string | null, token: string | null) => {
  try {
      const response = await fetch(
        `${apiUrl}/order-requests/${customerId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      );
      if (response.ok) {
          const data = await response.json();
          // console.log("order req: ", data)
          return data;
      } else {
          throw new Error(`Failed to fetch customer product data: ${response.statusText}`);
      }
  } catch (error) {
      console.error('Error fetching customer product data:', error);
      return null;
  }
};



export const getCustomerDetails = async (customerId: string | null, token: string | null) => {
  try {
      const response = await fetch(
        `${apiUrl}/account-details/${customerId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      );
      if (response.ok) {
          const data = await response.json();
          // console.log("order req: ", data)
          return data;
      } else {
          throw new Error(`Failed to fetch customer product data: ${response.statusText}`);
      }
  } catch (error) {
      console.error('Error fetching customer product data:', error);
      return null;
  }
};
