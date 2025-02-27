import axios from "axios";
import config from "./config";

const AVMembersService = {
  addMember: async (memberData) => {
    try {
      const response = await axios.post(
        `${config.API_URL}/AvAddMembers`,
        memberData
      );
      return response.data;
    } catch (error) {
      console.error("Error adding member:", error);
      throw error;
    }
  },

  getMembersList: async () => {
    try {
      const response = await axios.get(`${config.API_URL}/AvMembersList`);
      return response.data;
    } catch (error) {
      console.error("Error fetching members list:", error);
      throw error;
    }
  },

  getMemberById: async (memberId) => {
    try {
      const response = await axios.get(
        `${config.API_URL}/get-AvMember/${memberId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching member:", error);
      throw error;
    }
  },

  updateMember: async (memberId, memberData) => {
    try {
      const response = await axios.put(
        `${config.API_URL}/update-AvMember/${memberId}`,
        memberData
      );
      return response.data;
    } catch (error) {
      console.error("Error updating member:", error);
      throw error;
    }
  },

  deleteAllMembers: async () => {
    try {
      const response = await axios.delete(
        `${config.API_URL}/AvDeleteAllMemberss`
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting all members:", error);
      throw error;
    }
  },

  deleteMemberById: async (memberId) => {
    try {
      const response = await axios.delete(
        `${config.API_URL}/AvDeleteAMember/${memberId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting member:", error);
      throw error;
    }
  },
};

export default AVMembersService;
