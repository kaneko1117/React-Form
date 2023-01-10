import axios from "axios";
import { useState } from "react";

export const useGetPostNumber = () => {
  const [address, setAddress] = useState<string | null>("");
  const [errorNumber, setErrow] = useState<string | null>("");
  const [zip, setZip] = useState<string | null>("");

  const onGetPostAdress = () => {
    axios
      .get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zip}`)
      .then((res) => {
        if (res.data.results) {
          const result = res.data.results[0];
          setAddress(`${result.address1}${result.address2}${result.address3}`);
          setErrow("");
        } else if (res.status !== 200) {
          setAddress("");
          setErrow("郵便番号が存在しません");
        } else if (res.data.results == null) {
          setAddress("");
          setErrow("郵便番号が存在しません");
        }
      });
  };
  return { address, errorNumber, zip, setZip, onGetPostAdress };
};
