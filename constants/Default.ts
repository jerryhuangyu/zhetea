import { Amount, OrderStatus } from "@/types";

const Amounts: Amount[] = ["二兩", "四兩", "半斤", "一斤"];
const Statuses: OrderStatus[] = ["New", "Preparing", "Delivering", "Delivered"];
const teaImage = "https://picsum.photos/id/99/400";

export default {
  Amounts,
  teaImage,
  Statuses,
};
