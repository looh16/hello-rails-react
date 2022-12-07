import http from "../http-common";

const getAllMessages = () => {
  return http.get("/messages");
};

const MessageService = {
    getAllMessages
  };

export default MessageService;