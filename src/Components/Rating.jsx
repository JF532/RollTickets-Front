import { Rating as RatingFlowbite, RatingStar } from "flowbite-react";

export default function Rating( {valor} ) {
  const estrelas = Math.round(valor / 2); 

  return (
    <RatingFlowbite>
      {Array.from({ length: estrelas }).map((_, index) => (
        <RatingStar key={index} />
      ))}
    </RatingFlowbite>
  );
}
