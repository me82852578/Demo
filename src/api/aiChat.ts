import axios from "axios";

export const getAIChatToken = async (username: string, password: string) =>
  axios.post("https://ai-chat.jay-studio.net/apis/auth/login", {
    username,
    password,
  });
