import {IMenuItemSelect} from "src/shared/components/UI/SprykerSelect/types";

export const createQuantityVariants = (quantity: number | null):  Array<IMenuItemSelect> | null => {
  if (!quantity) {
    return null;
  }

  const arr = Array(quantity);
  for (let ii = 0; ii < quantity; ii++) {
    arr[ii] = ii + 1;
  }

  const data: Array<IMenuItemSelect> = [];
  arr.forEach((value: string) => {
    data.push(
      {
        value,
        name: value,
      },
    );
  });

  return data;
};
