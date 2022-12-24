import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import ThreeDots from "../assets/ThreeDots.svg";

const Checker = (props) => {
  const [data, setData] = useState(null);

  return (
    <div className="flex gap-11 p-10 ">
      <div className=" bg-[#141d2f]/50 p-5 flex-1 drop-shadow-2xl rounded-xl">
        <QrReader
          className="w-full h-full bg-transparent"
          onResult={(result, error) => {
            if (result) {
              setData(JSON.parse(result?.text));
              console.log("done");
              console.log(result);
            }

            if (error) {
              console.info(error);
            }
          }}
        />
      </div>
      <div className=" bg-[#141d2f]/50 p-[120px] flex-1 drop-shadow-2xl rounded-xl">
        <div className="card card-side bg-base-100 shadow-2xl">
          <figure>
            {data?.user_image ? (
              data?.user_image
            ) : (
              <img
                className="w-32 h-32 rounded-full"
                src="https://www.svgrepo.com/show/1356/man.svg"
                sizes="50px"
                alt="Person"
              />
            )}
          </figure>
          <div className="card-body">
            {/* <div className="card-actions justify-end">
              <button className="btn btn-square btn-xs bg-transparent ">
                <img
                  src={ThreeDots}
                  className="text-white hover:bg-white hover:rounded-lg "
                  sizes="50px"
                  color="white"
                  alt="ThreeDots"
                />
              </button>
            </div> */}
            <h2 className="card-title ">Student informations</h2>
            <p className="card-subtitle ">
              User cin:&nbsp;
              <span className="text-white">
                {data?.user_cin ? data?.user_cin : "00000000"}
              </span>
            </p>
            <p className="card-subtitle">
              User name:&nbsp;
              <span className="text-white">
                {" "}
                {data?.user_name ? data?.user_name : "Jhon Doe"}
              </span>
            </p>

            <p className="card-subtitle">
              User role:&nbsp;
              <span className="text-white">
                {data?.user_role ? data?.user_role : "student"}
              </span>
            </p>
            <p className="card-subtitle">
              User tickets:&nbsp;
              <span className="text-white">
                {data?.nbrTekke ? data?.nbrTekke : "10"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checker;
