"use client";
import { MagnifyingGlass } from "react-loader-spinner";

type Props = {};

function Loading({}: Props) {
  return (
    <div className="flex items-center justify-center">
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
}

export default Loading;
