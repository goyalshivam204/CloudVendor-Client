import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./vendorDetails.css";

function VendorDetails() {
  const { id } = useParams();
  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    fetch(`/cloudvendor/${id}`)
      .then((response) => { 
            // console.log(response);
            return response.json();
        }).then((data) => {
            // console.log(data);   
            setVendor(data.data)
        }).catch((error) => console.log(error));
  }, [id]);

  if (!vendor) {
    return <div className="loading">Loading vendor details...</div>;
  }

  return (
    <div className="vendor-details-container">
      <h1>Vendor Details</h1>
      <h3>{vendor.vendorName}</h3>
      <p>Address: {vendor.vendorAddress}</p>
      <p>Phone Number: {vendor.vendorPhoneNumber}</p>
    </div>
  );
}

export default VendorDetails;