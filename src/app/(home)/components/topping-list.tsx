'use client';
import React from 'react';
import ToppingCard, { Topping } from './topping-card';

const toppings = [
    { id: '1', name: 'Chicken', image: 'https://saya.net.in/api/images/testing/1/sampleReport.png', price: 50, isAvailable: true },
    { id: '2', name: 'jelapeno', image: 'https://saya.net.in/api/images/testing/1/sampleReport.png', price: 50, isAvailable: true },
    { id: '3', name: 'Cheese', image: 'https://saya.net.in/api/images/testing/1/sampleReport.png', price: 50, isAvailable: true },
];

const ToppingList = () => {
    const [selectedToppings, setSelectedToppings] = React.useState([toppings[0]]); // using the use state then use client in the top

    // Handler to check the component and add the border on it ,  and the parametr wich is passed inside this fn it type should also define , like here ------> topping: Topping
    const handleCheckBoxCheck = (topping: Topping) => {
        // checking that selected element is topping array
        const isAlreadyExists = selectedToppings.some((element) => element.id === topping.id);

        // if found already exsist then pass in state "selectedToppings" 
        if (isAlreadyExists) {
            setSelectedToppings((prev) => prev.filter((elm) => elm.id !== topping.id));
            return;
        }

        setSelectedToppings((prev) => [...prev, topping]);
    };

    return (
        <section className="mt-6">
            <h3>Extra toppings</h3>
            <div className="grid grid-cols-3 gap-4 mt-2">
                {toppings.map((topping) => {
                    return (
                        <ToppingCard
                            topping={topping} // passing the toppings array
                            key={topping.id}
                            selectedToppings={selectedToppings} // passing the selected topings
                            handleCheckBoxCheck={handleCheckBoxCheck} // fn to check the checkbox, passing this fn which can changes the sate from chil to parent 
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default ToppingList;