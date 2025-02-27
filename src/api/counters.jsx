import axios from "axios";
import config from "./config";

const AVCountersService = {
  addCounter: async (counterData) => {
    try {
      const response = await axios.post(
        `${config.API_URL}/add-avcounters`,
        counterData
      );
      return response.data;
    } catch (error) {
      console.error("Error adding counter:", error);
      throw error;
    }
  },

  getAllCounters: async () => {
    try {
      const response = await axios.get(`${config.API_URL}/get-all-avcounters`);
      return response.data;
    } catch (error) {
      console.error("Error fetching counters:", error);
      throw error;
    }
  },

  updateCounter: async (counterId, counterData) => {
    try {
      const response = await axios.put(
        `${config.API_URL}/update-avcounters/${counterId}`,
        counterData
      );
      return response.data;
    } catch (error) {
      console.error("Error updating counter:", error);
      throw error;
    }
  },

  deleteAllCounters: async () => {
    try {
      const response = await axios.delete(`${config.API_URL}/deleteAvCounters`);
      return response.data;
    } catch (error) {
      console.error("Error deleting counters:", error);
      throw error;
    }
  },
};

export default AVCountersService;
