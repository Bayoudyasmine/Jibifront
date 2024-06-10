export interface ClientDTO {
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  phonenumber: string;
  password: string;
  cinRectoPath: Uint8Array;
  cinVersoPath: Uint8Array;
  firstLogin: boolean;
}
