import React, { useRef } from "react";
import { useState } from "react";
import { BsThreeDotsVertical, BsFillEyeFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import GlobalModal from "../modals/GlobalModal";
import { FormatDateToDDMMYYYY } from "../../utils/formatDate";
import { useNavigate } from "react-router-dom";
import { PageNavigation, Pagination } from "../pagenation/Pagination";

//add a filter method to filter data using names

type Props = {
  data: any;
  showAction: boolean;
  showPagination: boolean;
};

const AppointmentTable = ({
  data,
  showAction = true,
  showPagination = true,
}: Props) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const closeModalRef = useRef<HTMLInputElement>(null);

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const myData = new Pagination(data, itemsPerPage);

  const changeItemsPerPage = (e: { target: { value: any } }) => {
    const num = e.target.value;
    setItemsPerPage(+num);
  };

  const totalPages = myData.getTotalPages();

  const handleClose = () => {
    if (closeModalRef.current) {
      closeModalRef.current?.click();
    }
  };

  const onSubmit = () => {
    handleClose();
  };

  return (
    <div className="flex flex-col  overflow-x-auto">
      <table className="table overflow-x-auto w-full">
        <thead className="mx-2 bg-blue-300 w-full ">
          <tr className="text-left px-2">
            <th className="px-2">Patient Name</th>
            <th className="px-2">Patient Email</th>
            <th className="px-2">Patient Phone</th>
            <th className="px-2">Doctor's Name</th>
            <th className="px-2">Time</th>
            <th className="px-2">Date</th>
            <th className="px-2">Department</th>
            <th className="px-2">Status</th>
            <th className="px-2">Fees</th>
            {showAction && <th className="px-2">Action</th>}
          </tr>
        </thead>
        <tbody>
          {myData?.getPage(currentPage).map((appnt: any, index: any) => {
            return (
              <tr className="" key={index}>
                <td className="px-2 py-2">{`${appnt.patient_firstname} ${appnt.patient_lastname}`}</td>
                <td className="px-2 py-2">{appnt.patient_email}</td>
                <td className="px-2 py-2">{appnt.patient_phone}</td>
                <td className="px-2 py-2">{appnt.patient_phone}</td>
                <td className="px-2 py-2">{appnt.time}</td>
                <td className="px-2 py-2">
                  {FormatDateToDDMMYYYY(appnt.date)}
                </td>
                <td className="px-2 py-2">{appnt.department}</td>
                <td className="px-2 py-2">{appnt.status}</td>
                <td className="px-2 py-2">{appnt.fees}</td>
                {showAction && (
                  <td className="px-2 py-2">
                    <div className="dropdown dropdown-left">
                      <label tabIndex={0} className=" m-1 cursor-pointer">
                        <BsThreeDotsVertical />
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu shadow bg-gray-100 py-1 rounded-sm w-24 flex items-center justify-center"
                      >
                        <li
                          onClick={() =>
                            navigate(`/patient/single-appointment/${appnt.id}`)
                          }
                        >
                          <label htmlFor="my-modal-3" className="modal-button">
                            <BsFillEyeFill className="text" />
                          </label>
                        </li>
                        <li>
                          <a>
                            <MdDeleteForever className="text" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>

      {showPagination && (
        <>
          <div className="bg-white w-[150px] mt-12 px-3 h-[50px] py-2 ">
            <select onChange={changeItemsPerPage}>
              <option>select size</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>
          <PageNavigation
            nextPageHandler={nextPage}
            previousPageHandler={previousPage}
            currentPage={currentPage}
            totalPages={totalPages}
          ></PageNavigation>
        </>
      )}

      <GlobalModal id="my-modal-3" ref={closeModalRef}>
        <h2>opening one appointment</h2>

        <input type="text" className="w-full my-2" />
        <input type="text" className="w-full my-2" />
        <button onClick={onSubmit} className="btn">
          Submit
        </button>
      </GlobalModal>
    </div>
  );
};

export default AppointmentTable;
