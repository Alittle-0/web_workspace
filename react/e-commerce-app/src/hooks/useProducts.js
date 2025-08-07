import { useState, useEffect } from "react";
import {
  fetchProducts,
  fetchCategories,
  fetchProductById,
} from "../services/api";

// Custom hook for managing products
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch products and categories in parallel
        const [productsData, categoriesData] = await Promise.all([
          fetchProducts(),
          fetchCategories(),
        ]);

        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        setError(err.message);
        console.error("Error loading data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return {
    products,
    categories,
    loading,
    error,
    refetch: () => {
      const loadData = async () => {
        try {
          setLoading(true);
          setError(null);
          const [productsData, categoriesData] = await Promise.all([
            fetchProducts(),
            fetchCategories(),
          ]);
          setProducts(productsData);
          setCategories(categoriesData);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      loadData();
    },
  };
};

// Custom hook for single product
export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const loadProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const productData = await fetchProductById(id);
        setProduct(productData);
      } catch (err) {
        setError(err.message);
        console.error("Error loading product:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  return {
    product,
    loading,
    error,
    refetch: () => {
      if (!id) return;
      const loadProduct = async () => {
        try {
          setLoading(true);
          setError(null);
          const productData = await fetchProductById(id);
          setProduct(productData);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      loadProduct();
    },
  };
};
