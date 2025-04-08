import { first } from "rxjs";
import { Product } from "./Product";

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
    products?: Product[];
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
    },
    {
      id: "2",
      firstname: "Admin",
      lastname: "Péter",
      user_name: "adminuser",
      email: "admin@admin.com",
      password: "admin1",
    }
];
