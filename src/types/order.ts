import { SongOrder } from "./song";

export type PaymentStatus = "pending" | "refused" | "approved";

export class Order {
  id: string = "";
  songs: SongOrder[] = [];
  paymentStatus: PaymentStatus = "pending";
}
