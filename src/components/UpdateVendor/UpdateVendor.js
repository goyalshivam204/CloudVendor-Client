import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import "./updateVendor.css";

function UpdateVendor() {
  const { id } = useParams();
  const history = useHistory();
  const [vendorData, setVendorData] = useState({
    vendorId: id,
    vendorName: '',
    vendorAddress: '',
    vendorPhoneNumber: '',
  });
  
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(vendorData);
    fetch(`/cloudvendor`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vendorData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        // Handle success or display a success message
        history.push('/vendors/' + id); // Redirect to the vendor details page
      })
      .catch((error) => {
        console.log(error);
        // Handle error or display an error message
      });
  };

  const handleChange = (event) => {
    setVendorData({
      ...vendorData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="update-vendor-container">
      <h1>Update Vendor</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Vendor Name:
          <input
            type="text"
            name="vendorName"
            value={vendorData.vendorName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Vendor Address:
          <input
            type="text"
            name="vendorAddress"
            value={vendorData.vendorAddress}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Vendor Phone Number:
          <input
            type="text"
            name="vendorPhoneNumber"
            value={vendorData.vendorPhoneNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateVendor;
