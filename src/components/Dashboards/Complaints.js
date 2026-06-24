import React from "react";
import { CiBellOn } from "react-icons/ci";
import "../../styles/Complaints.css";

const Complaints = () => {
  return (
    <div>
      <div className="complaints">
        <div>
          <div>
            <h4>Support / Raise Complaints </h4>
          </div>
          <div className="placebulk-heading">
            <div className="">
              <h4>Raise Complaints</h4>
              <p>Report Damage, Quality Issue, or Delivery Problems</p>
            </div>
            <div className="placebulk-heading-btn">
              <button>
                <CiBellOn />
              </button>
              <button>KS</button>
            </div>
          </div>
        </div>
        <div>
          <div className="complaint-evidence">
            <div className="complaint-container">
              <h5>Complaint Details</h5>
              <div>
                <h5>Complaint Type</h5>
                <select>
                  <option>Damaged packaging</option>
                  <option>Contaminated or impure product</option>
                  <option>Poor germination / Low quality seeds</option>
                  <option>Moisture damage / Mould growth</option>
                  <option>Infestation / Presence of pests</option>
                  <option>Near-expiry or expired stock delivered</option>
                </select>
                <h5>Related Order</h5>
                <select>
                  <option>Damaged packaging</option>
                  <option>Contaminated or impure product</option>
                  <option>Poor germination / Low quality seeds</option>
                  <option>Moisture damage / Mould growth</option>
                  <option>Infestation / Presence of pests</option>
                  <option>Near-expiry or expired stock delivered</option>
                </select>
                <h5>Lot/ Batch Number(If applicable)</h5>
                <input type="text" placeholder="e.g. SVA-2026-Gold-1" />
                <h5>Complaint Title</h5>
                <input type="text" placeholder="damaged packing" />
                <h5>Detailed Description</h5>
                <textarea className="complaint-container-1"
                  type="text"
                  placeholder="EX: 15 packets out of 40 received had torn outer packaging"
                />
              </div>
            </div>
            <div className="evidence-container">
              <div className="evidence-header">
                <h2>Upload evidence</h2>
              </div>
              <div className="upload-box">
                <input type="file" multiple accept="image/jpeg, image/png" />
                <p className="upload-title">Upload photos of damage</p>
                <p className="upload-subtitle">
                  JPG, PNG — up to 5 files, 5 MB each
                </p>
              </div>
              <div className="upload-box">
                <input type="file" accept="application/pdf, image/*" />
                <p className="upload-title">
                  Upload delivery receipt / invoice
                </p>
                <p className="upload-subtitle">PDF or image</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
