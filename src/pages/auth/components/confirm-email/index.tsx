import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { CONFIRM_TOKEN_QUERY } from "../../../../constants/queries/auth";
import handshake from "../../../../assets/images/handshake.png";
import { confirmEmailAction } from "../../../../store/actions/auth.action";
import { useState } from "react";
import { useAppDispatch } from "../../../../setup/app-hooks";

interface IConfirmEmailQueryString {
  query: string;
  variables: {
    input: {
      token: string | undefined;
    };
  };
}

interface IInputValues {
  token: string;
}

export const ConfirmEmail = () => {
  const { authToken } = useParams<{ authToken?: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onhandleSubmit = async () => {
    const inputValue = {
      token: authToken,
    };

    const details: IConfirmEmailQueryString = {
      query: CONFIRM_TOKEN_QUERY,
      variables: {
        input: inputValue,
      },
    };

    let res: any = await dispatch(confirmEmailAction(details));

    setIsSubmitting(true);
    if (res.payload.success) {
      setIsSubmitting(false);
      navigate("/login");
    }

    if (!res.payload.success) {
      setIsSubmitting(false);
      navigate("/");
    }
  };

  return (
    <div className="mt-5 bg-white border mx-5 sm:mx-auto md:mx-auto rounded-md p-3  w-[100%] max-w-[600px]">
      <div className="my-10 w-full flex flex-col justify-center items-center ">
        <h3 className="px-auto text-[2.7rem] font-bold tracking-widest">
          Welcome!
        </h3>
        <img src={handshake} alt="welcome" className="h-28 w-28 mt-4" />
      </div>
      <div className="gap-2 hidden">
        <input name="token" type="text" placeholder="Enter token:" />
      </div>
      <button
        className={`mt-5 w-auto flex mx-auto self-center justify-center items-center gap-3 bg-blue-500 text-white font-[500] hover:bg-blue-600 py-2 px-8 rounded-md cursor-pointer`}
        onClick={onhandleSubmit}
      >
        {isSubmitting && <FaSpinner className="animate-spin" />} Confirm Account
      </button>
    </div>
  );
};
