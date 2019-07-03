export interface Orden {
  id: string;
  client: string;
  clientAddress: string;
  remissionNumber: number;
  shippingDate: string;
  subObders: SubObder[];
  totalGeneral: number;
  ingenioId: string;
  advance: number;
  status: string;
}

export interface SubObder {
  description: string;
  quantity: number;
  total: number;
  unit: string;
  unitPrice: number;
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


