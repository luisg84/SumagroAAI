export interface Orden {
  id: string;
  client: string;
  clientAddress: string;
  remissionNumber: number;
  shippingDate: string;
  subOrders: subOrders[];
  totalGeneral: number;
  ingenioId: string;
  advance: number;
  status: string;
}

export interface subOrders {
  description: string;
  quantity: number;
  total: number;
  unit: string;
  unitPrice: number;
  status: boolean;
}

export interface Ingenio {
  address: string;
  email: string;
  id: string;
  name: string;
}

export interface Status {
  status: string;
}


