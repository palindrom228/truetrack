export interface Client {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  telegram_id: string;
}

export interface ClientWithoutId extends Omit<Client, "id"> {}
