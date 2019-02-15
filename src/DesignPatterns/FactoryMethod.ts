// Design Patterns | (Factory Method)
export namespace VehicleFactoryMethodPattern {
  enum VehicleType {
    twoWheeler,
    threeWheeler,
    fourWheeler
  }

  interface IVehicle {
    printVehicle(): string;
  }

  class TwoWheeler implements IVehicle {
    public printVehicle(): string {
      return "I am two wheeler";
    }
  }

  class ThreeWheeler implements IVehicle {
    public printVehicle(): string {
      return "I am three wheeler";
    }
  }

  class FourWheeler implements IVehicle {
    public printVehicle(): string {
      return "I am four wheeler";
    }
  }

  class VehicleFactory {
    public static create(type: VehicleType): IVehicle {
      if (type === VehicleType.twoWheeler) {
        return new TwoWheeler();
      } else if (type === VehicleType.threeWheeler) {
        return new ThreeWheeler();
      } else if (type === VehicleType.fourWheeler) {
        return new FourWheeler();
      }
      return null;
    }
  }

  export function getVehicle(): void {
    const motoVehicle: IVehicle = VehicleFactory.create(VehicleType.twoWheeler);
    console.log(motoVehicle.printVehicle());
    return motoVehicle.printVehicle();
  }
}
