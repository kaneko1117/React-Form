import { useState } from "react";

//useStateはnullが入力される可能性があるため下記のような型指定。
export const useSetName = () => {
  const [firstNameValue, setFirstNameValue] = useState<string | null>("");

  const [lastNameValue, setLastNameValue] = useState<string | null>("");

  const onChangeFirstName = (e: any) => {
    setFirstNameValue(e.target.value);
  };

  const onChangeLastName = (e: any) => {
    setLastNameValue(e.target.value);
  };
  return { firstNameValue, lastNameValue, onChangeFirstName, onChangeLastName };
};
