import MuiModal from "@mui/material/Modal";
import { FaTimes } from "react-icons/fa";
import { useRecoilState, useRecoilValue } from "recoil";
import useAuth from "@/cHooks/useAuth";
import { modalState, productState } from "@/states/searchState";
import { Prod } from "@/types";


function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const product = useRecoilValue(productState)


  const handleModal = () => {
    setShowModal(false);
  };

  return (
    <MuiModal
      open={showModal}
      onClose={handleModal}
      className=" !top-10 !left-0 !right-0 !mx-auto rounded-md !max-w-4xl w-full overflow-hidden overflow-y-scroll scrollbar-hide z-50 "
    >
      <>
        <button
          className="absolute buttonModal hover:bg-white top-5 right-5 bg-white !z-40 h-9 w-9 border-none"
          onClick={handleModal}
        >
          <FaTimes className="h-6 w-6 text-black" />
        </button>

        <div className="relative pt-[56.25%] bg-white">
          <div className="absolute flex items-center w-full justify-between space-x-6 px-10 bottom-10">
            <img src={product?.image} className="w-80" alt="" />
            <div className=" bg-white text-black flex flex-col items-center space-y-6">
                <h1 className="font-bold text-lg">{product?.brand}</h1>
                <h2 className="font-light text-sm">{product?.name}</h2>
                <p>
                    {product?.description}
                </p>
              <button className=" !px-4 !py-1 bg-orange-400 rounded-lg w-80 text-black">
                Add "{product?.name}" to cart?
              </button>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
}

export default Modal;
