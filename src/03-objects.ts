interface ICar {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;
  [key: string]: unknown;
}

const car: ICar = {
  wheels: 4,
  brand: "Audi",
  type: "Q8",
  //   isNew: true,
};

car.brand = "sdlsdskldk";

const car2: ICar = {
  wheels: 4,
  brand: "",
  type: "",
};

car.go = true;
