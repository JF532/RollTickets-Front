import React from "react";
import { Card as CardFlowbite } from "flowbite-react";
import teste from '../IMG/Coringa.jpg'

export default function Card() {
  return (
    <div>
      <CardFlowbite
        className="max-w-sm"
        renderImage={() => (
          <img width={500} height={500} src={teste} alt="image 1" />
        )}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </CardFlowbite>
    </div>
  );
}
