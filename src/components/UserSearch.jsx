/** @format */

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAllUsers = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3000/api/alluser?page=${currentPage}`,
        );
        setAllUsers(response.data.usersList);
        setTotalPages(response.data.totalPages);
        setError(null);
      } catch (error) {
        console.error('Error fetching all users:', error);
        setAllUsers([]);
        setError('An error occurred while fetching all users.');
      } finally {
        setIsLoading(false);
      }
    };

    handleSearch();
    fetchAllUsers();
  }, [currentPage, searchTerm]);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      let response;
      if (searchTerm.trim() === '') {
        // Fetch all users when the search term is empty
        response = await axios.get(
          `http://localhost:3000/api/alluser?page=${currentPage}`,
        );
      } else {
        response = await axios.get(
          `http://localhost:3000/api/users?name=${searchTerm}&page=${currentPage}`,
        );
      }

      setSearchResults(response.data.usersList);
      setTotalPages(response.data.totalPages);
      setError(null);
    } catch (error) {
      console.error('Error searching users:', error);
      setSearchResults([]);
      setError('An error occurred while searching for users.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div>
      <h2>User Search</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleChange}
      />

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {searchResults?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          disabled={currentPage === 1 || isLoading}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages || isLoading}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UserSearch;
