// Design Patterns | (Factory Method)
import { VehicleFactoryMethodPattern } from "./DesignPatterns/FactoryMethod";

document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
  <p>${VehicleFactoryMethodPattern.getVehicle()}</p>
</div>
`;
