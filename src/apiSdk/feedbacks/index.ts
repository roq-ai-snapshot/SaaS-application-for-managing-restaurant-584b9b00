import axios from 'axios';
import { FeedbacksInterface } from 'interfaces/feedbacks';

export const getFeedbacks = async () => {
  const response = await axios.get(`/api/feedbacks`);
  return response.data;
};

export const createFeedbacks = async (feedbacks: FeedbacksInterface) => {
  const response = await axios.post('/api/feedbacks', feedbacks);
  return response.data;
};

export const updateFeedbacksById = async (id: string, feedbacks: FeedbacksInterface) => {
  const response = await axios.put(`/api/feedbacks/${id}`, feedbacks);
  return response.data;
};

export const getFeedbacksById = async (id: string) => {
  const response = await axios.get(`/api/feedbacks/${id}`);
  return response.data;
};
