import {React, useState} from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

export default function Product({ productsSelect, data }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <Card className="py-4 sm:w-full md:w-2/5 lg:w-64 mt-5">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start h-40 object-top overflow-hidden">
        <Image
          isZoomed
          alt="Card background"
          className="object-contain rounded-xl h-32 w-96"
          src={data.image}
          width={270}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <h5 className="font-bold pb-5  min-h-24 text-base">{data.title}</h5>
        <div className="w-32">
          <p className="uppercase text-center font-bold pt-1 pb-1 bg-gray-800 text-white rounded-md text-xs">
            {data.category}
          </p>
        </div>
        <div className="flex pt-5 justify-end">
          <Input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-16"
            size="small"
          />
          <Button
            onClick={() => productsSelect(data)}
            size="sm"
            className="text-white bg-green-600"
            radius="small"
          >
            Add to Card
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
