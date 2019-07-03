import { Producto } from '../model/producto';

// export interface Pedido {
//     advance: number;
//   client: string;
//   clientAddress: string;
//   id: string;
//   // enterpriseName: string;
//   // RFC: string;
//   // address: string;
//   remissionNumber: number;
//   shippingDate: string;
//   // status: string;
//   subOrders: Producto[];
//   totalGeneral: number;
// }

export interface Pedido {
  client: string;
  clientAddress: string;
  remissionNumber: number;
  shippingDate: string;
  subOrders: Producto[];
  totalGeneral: number;
  ingenioId: string;
  advance: number;
}






