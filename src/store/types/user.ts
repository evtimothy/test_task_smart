export interface IUser {
  id: number;
  username: string;
  name: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IGeo {
  lat: string;
  lng: string;
}

// STATE TYPE
export interface IUserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}
