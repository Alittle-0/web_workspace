// API service for Fake Store API
const BASE_URL = "https://fakestoreapi.com";

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();

    // Map Fake Store API data to our expected format
    return data.map((product) => ({
      id: product.id,
      name: product.title,
      price: Math.round(product.price), // Round to nearest dollar
      category: product.category,
      description: product.description,
      image: product.image,
      rating: product.rating,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Fetch single product by ID
export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const product = await response.json();

    // Map to our expected format
    return {
      id: product.id,
      name: product.title,
      price: Math.round(product.price),
      category: product.category,
      description: product.description,
      image: product.image,
      rating: product.rating,
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

// Fetch all categories
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`);
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const categories = await response.json();

    // Capitalize first letter of each category and add "All" option
    const formattedCategories = categories.map(
      (cat) => cat.charAt(0).toUpperCase() + cat.slice(1)
    );

    return ["All", ...formattedCategories];
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

// Fetch products by category
export const fetchProductsByCategory = async (category) => {
  try {
    const url =
      category.toLowerCase() === "all"
        ? `${BASE_URL}/products`
        : `${BASE_URL}/products/category/${category.toLowerCase()}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch products by category");
    }
    const data = await response.json();

    // Map to our expected format
    return data.map((product) => ({
      id: product.id,
      name: product.title,
      price: Math.round(product.price),
      category: product.category,
      description: product.description,
      image: product.image,
      rating: product.rating,
    }));
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
};
