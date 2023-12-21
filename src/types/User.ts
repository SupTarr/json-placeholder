type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

const getAddressStringFromUser = (user: User): string => {
  return (
    (user.address.street === "" ? "" : `${user.address.street} ST `) +
    (user.address.suite === "" ? "" : `${user.address.suite} `) +
    (user.address.city === "" ? "" : `${user.address.city} `) +
    (user.address.zipcode === "" ? "" : `${user.address.zipcode} `)
  );
};

export type { User };
export { getAddressStringFromUser };
