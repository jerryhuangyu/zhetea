import { Order } from "@/types";
import { teaProducts } from "@/assets/data";
import dayjs from "dayjs";

const now = dayjs();

const orders: Order[] = [
  {
    id: 23123,
    created_at: now.subtract(1, "hour").toISOString(),
    total: 31.4,
    status: "Preparing",
    user_id: "1",
    order_items: [
      {
        id: 1,
        order_id: 23123,
        amount: "二兩",
        quantity: 2,
        product_id: teaProducts[0].id,
        product: teaProducts[0],
      },
      {
        id: 2,
        order_id: 23123,
        amount: "四兩",
        quantity: 1,
        product_id: teaProducts[1].id,
        product: teaProducts[1],
      },
    ],
  },
  {
    id: 32145,
    created_at: now.subtract(3, "days").toISOString(),
    total: 11.4,
    status: "Delivered",
    user_id: "1",
    order_items: [
      {
        id: 1,
        order_id: 32145,
        amount: "二兩",
        quantity: 2,
        product_id: teaProducts[3].id,
        product: teaProducts[3],
      },
    ],
  },
  {
    id: 23445,
    created_at: now.subtract(3, "weeks").toISOString(),
    total: 11.4,
    status: "Delivered",
    user_id: "1",
    order_items: [
      {
        id: 1,
        order_id: 23445,
        amount: "四兩",
        quantity: 1,
        product_id: teaProducts[3].id,
        product: teaProducts[3],
      },
      {
        id: 2,
        order_id: 23445,
        amount: "四兩",
        quantity: 1,
        product_id: teaProducts[7].id,
        product: teaProducts[7],
      },
      {
        id: 3,
        order_id: 23445,
        amount: "一斤",
        quantity: 1,
        product_id: teaProducts[8].id,
        product: teaProducts[8],
      },
      {
        id: 4,
        order_id: 23445,
        amount: "四兩",
        quantity: 1,
        product_id: teaProducts[10].id,
        product: teaProducts[10],
      },
      {
        id: 5,
        order_id: 23445,
        amount: "四兩",
        quantity: 1,
        product_id: teaProducts[4].id,
        product: teaProducts[4],
      },
      {
        id: 6,
        order_id: 23445,
        amount: "一斤",
        quantity: 1,
        product_id: teaProducts[11].id,
        product: teaProducts[11],
      },
    ],
  },
];

export default orders;
