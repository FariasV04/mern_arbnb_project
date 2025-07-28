import React from "react";
import Records from "../assets/Punk_Records.webp";

const Item = () => {
  return (
    <a href="/" className="gap-2S flex flex-col">
      <img
        src={Records}
        alt="Imagem da Acomodação"
        className="aspect-square rounded-2xl object-cover"
      />
      <div>
        <h3 className="text-2xl font-semibold">Cabo Frio rio de Janeiro</h3>
        <p className="truncate text-gray-600">
          Lorem ipsum dolor sit amet. Hic illo quaerat sit doloribus voluptatum
          aut nihil sint et natus consequatur qui corrupti exercitationem non
          sunt sapiente. Hic assumenda totam ex earum soluta At quia totam est
          repudiandae consequuntur. Qui molestias quos qui dignissimos culpa 33
          laboriosam mollitia non accusantium unde eum velit ipsa et voluptas
          itaque in assumenda repellendus? Aut harum voluptas sed libero
          reiciendis id fugiat consequatur nam cupiditate illo et atque nobis.
          Et libero minima est esse ratione eum soluta pariatur qui ipsum
          consequatur et odio libero ex repellendus eius At unde omnis! Et
          explicabo enim non dolorum fuga qui maiores aliquam ea tempora
          delectus vel enim voluptate.
        </p>
      </div>
      <p>
        <span className="font-semibold">R$ 550</span> por noite
      </p>
    </a>
  );
};

export default Item;
