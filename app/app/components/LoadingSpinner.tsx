import {  TailSpin } from "react-loading-icons";


export default function ({ size, color }: { size: number, color: string }) {
  return (
    <>
      <TailSpin style={{width: `${size}px`, height: `${size}px`  }}   stroke={color} />
    </>
  );
}
