import React from 'react';
function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(245,245,245)", paddingBottom: "20px" }}> 

      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.png" style={{ width: "190px",height:"70px",borderRadius:"10px"}} />
            <br />
            <p>© 2023 - 2024, Not Zerogro Broking Ltd.<br />All rights reserved.</p>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="#" style={{ textDecoration: "none", color: "black", opacity: "0.5", display: "block", marginBottom: "8px" }}>About</a>
            <a href="#" style={{ textDecoration: "none", color: "black", opacity: "0.5", display: "block", marginBottom: "8px" }}>Products</a>
            <a href="#" style={{ textDecoration: "none", color: "black", opacity: "0.5", display: "block", marginBottom: "8px" }}>Pricing</a>
            <a href="#" style={{ textDecoration: "none", color: "black", opacity: "0.5", display: "block", marginBottom: "8px" }}>Referral Programme</a>
            <a href="#" style={{ textDecoration: "none", color: "black", opacity: "0.5", display: "block", marginBottom: "8px" }}>Careers</a>
            <a href="#" style={{ textDecoration: "none", color: "black", opacity: "0.5", display: "block", marginBottom: "8px" }}>Zerogro.tech</a>
            <a href="#" style={{ textDecoration: "none", color: "black", opacity: "0.5", display: "block", marginBottom: "8px" }}>Press & Media</a>
            <a href="#" style={{ textDecoration: "none", color: "black", opacity: "0.5", display: "block", marginBottom: "8px" }}>Zerogro Cares (CSR)</a>
          </div>
          <div className="col">
            <p>Support</p>
            <a href="#" style={{ textDecoration: "none", color: "black", opacity: "0.5", display: "block", marginBottom: "8px" }}>Contact</a>
            <a href="#" style={{ textDecoration: "none", color: "black", opacity: "0.5", display: "block", marginBottom: "8px" }}>Support Portal</a>
            <a href="#" style={{ textDecoration: "none", color: "black", opacity: "0.5", display: "block", marginBottom: "8px" }}>Z-Connect Blog</a>
            <a href="#" style={{ textDecoration: "none", color: "black", opacity: "0.5", display: "block", marginBottom: "8px" }}>List of Charges</a>
            <a href="#" style={{ textDecoration: "none", color: "black", opacity: "0.5", display: "block", marginBottom: "8px" }}>Downloads & Resources</a>
            <a href="#" style={{ textDecoration: "none", color: "black", opacity: "0.5", display: "block", marginBottom: "8px" }}>Free Demo</a>
          </div>
          <div className="col">
            <p>Account</p>
            <a href="#" style={{ textDecoration: "none", color: "black", opacity: "0.5", display: "block", marginBottom: "8px" }}>Open an Account</a>
            <a href="#" style={{ textDecoration: "none", color: "black", opacity: "0.5", display: "block", marginBottom: "8px" }}>Fund Transfer</a>
            <a href="#" style={{ textDecoration: "none", color: "black", opacity: "0.5", display: "block", marginBottom: "8px" }}>90 Day Challenge</a>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "13px" }}>
          <p>
            Zerogro Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerogro Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerogro Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerogro Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Mumbai - 560078, Maharashtra , India. For any complaints pertaining to securities broking please write to complaints@zerogro.com, for DP related to dp@zerogro.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on <a href="#">SEBI SCORES:</a> Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
          </p>
          <a href="#"> Smart Online Dispute Resolution | Grievances Redressal Mechanism </a>
          <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1. Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2024. 2. Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3. Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month
          </p>
        </div>
        <div className="footer-graveyard-links text-center" style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap",fontSize:"14px"}}>
          <a href="https://nseindia.com" style={{ textDecoration: "none", color: "black", opacity: "0.5",margibBottom:"20px" }}>NSE</a>
          <a href="https://www.bseindia.com" style={{ textDecoration: "none", color: "black", opacity: "0.5",margibBottom:"20px" }}>BSE</a>
          <a href="https://www.mcxindia.com" style={{ textDecoration: "none", color: "black", opacity: "0.5",margibBottom:"20px" }}>MCX</a>
          <a href="https://zerodha.com/terms-and-conditions/" style={{ textDecoration: "none", color: "black", opacity: "0.5",margibBottom:"20px"}}>Terms &amp; conditions</a>
          <a href="https://zerodha.com/policies-and-procedures/" style={{ textDecoration: "none", color: "black", opacity: "0.5",margibBottom:"20px" }}>Policies &amp; procedures</a>
          <a href="https://zerodha.com/privacy-policy/" style={{ textDecoration: "none", color: "black", opacity: "0.5",margibBottom:"20px" }}>Privacy policy</a>
          <a href="https://zerodha.com/disclosure/" style={{ textDecoration: "none", color: "black", opacity: "0.5",margibBottom:"20px" }}>Disclosure</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
