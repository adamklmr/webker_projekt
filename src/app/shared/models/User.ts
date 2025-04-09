import { first } from "rxjs";
import { Product } from "./Product";
import { ProductsComponent } from "../../pages/products/products.component";
import { eventNames } from "process";

export interface User {
    id: string;
    avatar?: string;
    name: {
        firstname: string;
        lastname: string;
    };
    user_name?: string;
    email: string;
    password: string;
    ordersNumber: number;
    eventsNumber: number;
}
  export const ProfileObject = [
    {
      id: "1",
      avatar: "M",
      firstname: "Márk",
      lastname: "Márton",
      user_name: "marokmarton",
      email: "marok@gamil.com",
      password: "marok1",
      ordersNumber: 2,
      eventsNumber: 1,
    },
    {
      id: "2",
      avatar: "A",
      firstname: "Admin",
      lastname: "Péter",
      user_name: "adminuser",
      email: "admin@admin.com",
      password: "admin1",
    }
];
