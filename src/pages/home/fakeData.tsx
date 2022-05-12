interface Product {
  id: string;
  name: string;
  img: string;
  category: string;
  tags: string[];
  description: string;
  regularPrice: number;
  salePrice: number;
  stock: number;
}

export const makeFakeProducts = (len: number): Product[] => {
  const product: Product = {
    id: "",
    name: "Product",
    img: "https://mui.com/static/images/cards/live-from-space.jpg",
    category: "",
    tags: [""],
    description: "",
    regularPrice: 2019,
    salePrice: 2022,
    stock: 0,
  };

  let products = [];

  for (let i = 0; i < len - 1; i++) {
    products.push({ ...product, id: `${i}` });
  }

  return products;
};

export const makeFakeSkills = () => {
  return [
    {
      id: "0",
      title: "React.js",
      description: "Version 18",
      img: "https://www.svgrepo.com/show/354259/react.svg",
    },
    {
      id: "1",
      title: "TypeScript",
      description: "Attractive magic.",
      img: "https://www.svgrepo.com/show/349540/typescript.svg",
    },
    {
      id: "2",
      title: "Node.js",
      description: "With express.",
      img: "https://www.svgrepo.com/show/373929/node.svg",
    },
    {
      id: "3",
      title: "MongoDB",
      description: "NoSQL.",
      img: "https://www.svgrepo.com/show/373845/mongo.svg",
    },
  ];
};
