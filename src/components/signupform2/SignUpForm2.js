import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function SignUpForm2(props) {
  // Array of countries for the country input field
  var country_list = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  // Initial state for form fields and errors
  const signUpForm2Obj = {
    residency: "",
    street: "",
    area: "",
    country: "",
    pin: "",
    state: "",
    city: "",
    postOffice: "",
  };
  const errorsObj = {
    residency: false,
    country: false,
    pin: false,
    state: false,
    city: false,
    postOffice: false,
  };
  const Residency = useRef();
  const goToLoginPage = useNavigate();
  const [signUpForm2, setSignUpForm2] = useState(signUpForm2Obj);
  const [errors, setErrors] = useState(errorsObj);
  const [formValid, setFormValid] = useState(false);

  // useEffect for focusing the first element automatically
  useEffect(() => {
    Residency.current.focus();
  }, []);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setSignUpForm2({ ...signUpForm2, [name]: value });
  };

  const inputConditionHandler = () => {
    const errorsObj = { ...errors };
    let isValid = true;

    // Check each form field for empty value (except street and area)
    for (const key in signUpForm2) {
      if (
        signUpForm2[key].trim() === "" &&
        key !== "street" &&
        key !== "area"
      ) {
        errorsObj[key] = true;
        isValid = false;
      } else {
        errorsObj[key] = false;
      }
    }

    setErrors(errorsObj);
    setFormValid(isValid);

    if (isValid) {
      goToLoginPage("/login");
    }
  };
  return (
    <>
      <div
        className="flex flex-wrap flex-col items-center w-full justify-center p-10"
        style={{ height: "100%" }}
      >
        {" "}
        <div className="w-[350px] bg-white border-2 p-10 rounded-xl  md:p-[70] md:px-[80px] flex flex-col flex-wrap items-center hover:border-purple-600 md:w-[376px] mt-4  justify-center">
          <div className="mt-5">
            <input
              ref={Residency}
              type="text"
              placeholder="Residency Address"
              className="outline-none border-b-2 text-center font-bold  focus:border-red-600"
              value={signUpForm2.residency}
              name="residency"
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            {errors.residency && (
              <p className="text-center text-red-500">
                Residency Address Is Mandatory
              </p>
            )}
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Street(optional)"
              className="outline-none border-b-2 text-center font-bold  focus:border-red-600"
              value={signUpForm2.street}
              name="street"
              onChange={(e) => {
                inputHandler(e);
              }}
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Area(optional)"
              className="outline-none border-b-2 text-center font-bold  focus:border-red-600"
              value={signUpForm2.area}
              name="area"
              onChange={(e) => {
                inputHandler(e);
              }}
            />
          </div>
          <div className="mt-5">
            <input
              placeholder="Select Country"
              list="country"
              className="outline-none border-b-2 text-center font-bold  focus:border-red-600"
              value={signUpForm2.country}
              name="country"
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            {errors.country && (
              <p className="text-center text-red-500">Country Is Mandatory</p>
            )}
            <datalist id="country">
              {country_list.map((country, ind) => {
                return <option key={ind}>{country}</option>;
              })}
            </datalist>
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Pin Code"
              className="outline-none border-b-2 text-center font-bold  focus:border-red-600"
              value={signUpForm2.pin}
              name="pin"
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            {errors.pin && (
              <p className="text-center text-red-500">Pin Code Is Mandatory</p>
            )}
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="State"
              className="outline-none border-b-2 text-center font-bold  focus:border-red-600"
              value={signUpForm2.state}
              name="state"
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            {errors.state && (
              <p className="text-center text-red-500">State Is Mandatory</p>
            )}
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="City"
              className="outline-none border-b-2 text-center font-bold  focus:border-red-600"
              value={signUpForm2.city}
              name="city"
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            {errors.city && (
              <p className="text-center text-red-500">City Is Mandatory</p>
            )}
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Post Office"
              className="outline-none border-b-2 text-center font-bold  focus:border-red-600"
              value={signUpForm2.postOffice}
              name="postOffice"
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            {errors.postOffice && (
              <p className="text-center text-red-500">
                Post Office Is Mandatory
              </p>
            )}
          </div>
          <div className="flex flex-row items-center mt-8">
            <button className="p-2 px-4 border-2 rounded-lg me-4 hover:bg-blue-600 hover:text-white">
              <Link to="/login"> Back</Link>
            </button>
            <button
              className="border-2 p-2 px-4 rounded-lg me-4 hover:bg-blue-600 hover:text-white"
              onClick={inputConditionHandler}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <p className="d-hidden">{formValid}</p>
    </>
  );
}
