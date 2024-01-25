import React, { useState, useEffect } from 'react';
import "./vendorList.css"

function VendorList() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetch('/cloudvendor')
      .then((response) => response.json())
      .then((data) => setVendors(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="vendor-list-container">Cloud Vendors</h1>
       {vendors.length === 0 ? (
        <div className="empty-message">No vendors available.</div>
      ) : (
        vendors.map((vendor) => (
          <div className="vendor-details-container" key={vendor.vendorId}>
            <h3>{vendor.vendorName}</h3>
            <p>Address: {vendor.vendorAddress}</p>
            <p>Phone Number: {vendor.vendorPhoneNumber}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default VendorList;