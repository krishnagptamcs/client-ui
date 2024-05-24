"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

// defining the topping data type
export type Topping = {
  id: string;
  name: string;
  price: number;
  image: string;
  isAvailable: boolean;
};

// the prop which is pass inside this component , there type is defing here
type PropType = {
  topping: Topping;
  selectedToppings: Topping[];
  handleCheckBoxCheck: (topping: Topping) => void; // for any function describe it as void , and the parameter which is passing inside this fn , you should also have to define its type  jsut like here ---> topping: Topping
};
const ToppingCard = ({
  topping,
  selectedToppings,
  handleCheckBoxCheck,
}: PropType) => {
  const isCurrentSelected = selectedToppings.some(
    (element) => element.id === topping.id
  );

  return (
    <Button
      onClick={() => handleCheckBoxCheck(topping)}
      variant={"outline"}
      // using shadcn , when you want to impliment class on conditioanl like any logic , then inside curly braces first class should be written , in string and afterwards its logic based class should be written
      className={cn(
        "flex flex-col h-42 relative",
        isCurrentSelected ? "border-primary" : ""
      )}
    >
      <Image src={topping.image} width={80} height={80} alt={topping.name} />
      <h4>{topping.name}</h4>
      <p>&#8377;{topping.price}</p>
      {/* logic to show the checkbox  */}
      {isCurrentSelected && (
        <CircleCheck className="absolute top-1 right-1 text-primary" />
      )}
    </Button>
  );
};

export default ToppingCard;
