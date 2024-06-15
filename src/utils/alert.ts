import { toast } from "react-toastify";

export class Alert {
  static message(message: string) {
    toast(message, {
      type: "success",
      position: "bottom-center",
      closeButton: true,
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      theme: "dark",
    });
  }

  static error(message: string) {
    toast(message, {
      type: "error",
      position: "bottom-center",
      closeButton: true,
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      theme: "dark",
    });
  }
}
