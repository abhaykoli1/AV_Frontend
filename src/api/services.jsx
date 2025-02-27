import axios from "axios";
import config from "./config";

const AVServiceAPI = {
  getServiceList: async () => {
    try {
      const response = await axios.get(`${config.API_URL}/AvServiceList`);
      return response.data;
    } catch (error) {
      console.error("Error fetching service list:", error);
      throw error;
    }
  },
};

export default AVServiceAPI;
