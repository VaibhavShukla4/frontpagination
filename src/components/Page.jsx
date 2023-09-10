import React, { useState, useEffect } from "react";
import axios from "axios";
import { TbFidgetSpinner } from "react-icons/tb";
import "../App.css";
import { SerialIdFunction } from "./SerialIdFunction";
import Pagination from "./Pagination";

const Page = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [fetch, setFetch] = useState(false);
  const itemsPerPage = 8;
  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage]);

  const fetchItems = async (page) => {
    setFetch(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/items?page=${page}`
      );
      setItems(response.data.items);
      setTotalPages(response.data.totalPages);
      setFetch(false);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="main">
      {fetch ? (
        <TbFidgetSpinner />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? (
              items.map((item, index) => (
                <tr key={index}>
                  <td>
                    {SerialIdFunction(
                      (currentPage - 1) * itemsPerPage + index + 1
                    )}
                  </td>
                  <td>{item.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No Data</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        pageNumbers={pageNumbers}
      />
    </div>
  );
};

export default Page;
