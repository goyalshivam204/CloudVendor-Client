import React, { useState } from 'react';
import "./createVendor.css";


function CreateVendor() {
  const [vendorData, setVendorData] = useState({
    vendorId: '',
    vendorName: '',
    vendorAddress: '',
    vendorPhoneNumber: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/cloudvendor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vendorData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        // Handle success or display a success message
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
    <div className="create-vendor-container">
      <h1>Create Vendor</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Vendor ID:
          <input
            type="text"
            name="vendorId"
            value={vendorData.vendorId}
            onChange={handleChange}
          />
        </label>
        <br />
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateVendor;