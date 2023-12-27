import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Badge,
} from "@nextui-org/react";
import imgPhoto from "../../assets/img/imgShopping.png";

import ProductShoppingCart from "../Home/ProductShoppingCart.jsx";

export default function   ShoppingCart({ data }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [subtotal, setSubtotal] = useState(0);
  const [customShipping, setCustomShipping] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);

  const showData = () => {
    return data.map((item, index) => (
      <ProductShoppingCart
        data={item}
        key={index}
      />
    ));
  };

  const calculateTotals = () => {
    const subtotalCalculated = data.reduce((acc, item) => acc + item.price, 0);
    setSubtotal(subtotalCalculated.toFixed(2));

    const parsedCustomShipping = parseFloat(customShipping);
    const costShipping =
      !isNaN(parsedCustomShipping) && parsedCustomShipping >= 0
        ? parsedCustomShipping
        : 0;

    setShipping(costShipping);

    const totalCalculated = subtotalCalculated + costShipping;
    setTotal(totalCalculated.toFixed(2));
  };

  useEffect(() => {
    calculateTotals();
  }, [data, customShipping]);

  return (
    <>
      <Badge
        content={data.length}
        color="primary"
      >
        <Button className="w-10 bg-transparent" onPress={onOpen}><img width="100%" src={imgPhoto} alt="Photo" /></Button>
      </Badge>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Selected products
              </ModalHeader>
              <ModalBody className="max-h-60 overflow-scroll">
                {showData()}
              </ModalBody>
              <ModalFooter className="flex flex-col">
                <div className="flex justify-between">
                  <h1 className="font-bold">Subtotal</h1>
                  <p>${subtotal}</p>
                </div>
                <div className="flex justify-between">
                  <h1 className="font-bold">Shipping</h1>
                  <Input
                    type="number"
                    className="w-14"
                    value={customShipping}
                    onChange={(e) => setCustomShipping(e.target.value)}
                  />
                </div>
                <div className="flex justify-between">
                  <h1 className="font-bold">Total</h1>
                  <p>${total}</p>
                </div>
                <div className="flex justify-center">
                  <Button
                    color="danger"
                    variant="light"
                    onPress={onClose}
                    className="w-full text-white bg-green-500 hover:bg-green-700"
                  >
                    PROCEED TO CHECKOUT
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
