import axios from 'axios';

const TOKEN = '6246414340:AAH4BdxhsUayAjUMc2CrkylznxfDzN10PKI';
const CHAT_ID = '-826633706';
axios.defaults.baseURL = 'https://api.telegram.org';

export const submitInfo = async message => {
  const response = await axios.post(`/bot${TOKEN}/sendMessage`, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message,
  });
  return response.data;
};
