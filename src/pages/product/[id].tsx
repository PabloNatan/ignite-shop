import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          libero tempora accusamus atque dolorem modi, facilis voluptatem, odio
          aut velit aliquid dolores labore excepturi. Adipisci quo odio a error
          ex?
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
