import axios from "axios";
import config from "./config";

const AVProductAPI = {
  addProduct: async (productData) => {
    try {
      const response = await axios.post(
        `${config.API_URL}/AvAddProduct`,
        productData
      );
      return response.data;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  },

  getProductList: async () => {
    try {
      const response = await axios.get(`${config.API_URL}/AvProductList`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product list:", error);
      throw error;
    }
  },

  getProductById: async (productId) => {
    try {
      const response = await axios.get(
        `${config.API_URL}/get-AvProduct/${productId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  },

  updateProduct: async (productId, productData) => {
    try {
      const response = await axios.put(
        `${config.API_URL}/update-AvProduct/${productId}`,
        productData
      );
      return response.data;
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  },

  deleteAllProducts: async () => {
    try {
      const response = await axios.delete(
        `${config.API_URL}/AvDeleteAllProducts`
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting all products:", error);
      throw error;
    }
  },

  deleteProductById: async (productId) => {
    try {
      const response = await axios.delete(
        `${config.API_URL}/AvDeleteAProduct/${productId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  },
};

export default AVProductAPI;
