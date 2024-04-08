import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
export function SignUp(props) {
  // Array of countries for the nationality input field
  const country_list = [
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
  const formOneObj = {
    mobile: "",
    email: "",
    userName: "",
    password: "",
    cnfPassword: "",
    fName: "",
    lName: "",
    DOB: "",
    nationality: "",
  };
  const [formOne, setFormOne] = useState(formOneObj);
  const [errors, setErrors] = useState({
    mobile: false,
    email: false,
    userName: false,
    password: false,
    cnfPassword: false,
    fName: false,
    lName: false,
    DOB: false,
    nationality: false,
  });

  // State for form validation and password visibility
  const [formValid, setFormValid] = useState(false);
  const mobRef = useRef();
  const navigateLogin = useNavigate();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [passType, setPassType] = useState("password");

  // Effect to focus on mobile input field on component mount
  useEffect(() => {
    mobRef.current.focus();
  }, []);

  // Function to handle input changes in the form
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormOne({ ...formOne, [name]: value });
  };

  // Function to handle input validation and form submission
  const handleInputCondition = () => {
    const newErrors = { ...errors };
    let isFormValid = true;

    // Check each form field for empty value
    for (const key in formOne) {
      if (formOne[key].trim() === "") {
        newErrors[key] = true;
        isFormValid = false;
      } else {
        newErrors[key] = false;
      }
    }

    // Update errors and form validity
    setErrors(newErrors);
    setFormValid(isFormValid);

    // Proceed if form is valid
    if (isFormValid) {
      if (formOne.password === formOne.cnfPassword) {
        // Validate password format
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,12}$/;
        if (passwordRegex.test(formOne.cnfPassword)) {
          // Save form data to localStorage and navigate to next page
          const formData = JSON.stringify(formOne);
          window.localStorage.setItem("loginInfo", formData);
          navigate("/signupform2");
        } else {
          alert(
            "Your password must contain at least one number, one uppercase letter, one lowercase letter, and one special character. It should be between 8 to 12 characters long."          );
        }
      } else if (formOne.password !== formOne.cnfPassword) {
        alert("Oops! The passwords you entered do not match.");
      }
    }
  };

  // Function to navigate back to login page
  const navigateToLogin = () => {
    navigateLogin("/login");
  };

  // Function to toggle password visibility
  const togglePassword = () => {
    setShow(!show);
    if (passType === "password") {
      setPassType("text");
    } else {
      setPassType("password");
    }
  };

  return (
    <>
      <div
        className="w-full  flex flex-col flex-wrap items-center justify-center p-10"
        style={{ height: "100%" }}
      >
        <div className=" w-[350px] border-2 flex flex-col flex-wrap items-center bg-white rounded-xl p-10 md:p-[70px] md:px-[80px]  hover:border-purple-600 md:w-[376px]">
          <div>
            <input
              type="text"
              placeholder="Mobile Number"
              className="outline-none border-b-2 text-center font-bold focus:border-red-600"
              ref={mobRef}
              maxLength={10}
              minLength={10}
              name="mobile"
              value={formOne.mobile}
              onChange={inputHandler}
            />
            {errors.mobile && (
              <p className="text-red-500 text-center">Mobile No is Mandatory</p>
            )}
          </div>
          <div className="mt-5">
            <input
              type="email"
              placeholder="Email Id"
              className="outline-none border-b-2 text-center font-bold  focus:border-red-600"
              name="email"
              value={formOne.email}
              onChange={inputHandler}
            />
            {errors.email && (
              <p className="text-red-500 text-center">Email is Mandatory</p>
            )}
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="UserName"
              className="outline-none border-b-2 text-center font-bold  focus:border-red-600"
              name="userName"
              value={formOne.userName}
              onChange={inputHandler}
            />
            {errors.userName && (
              <p className="text-red-500 text-center">Username is Mandatory</p>
            )}
          </div>
          <div className="mt-5">
            <p className="flex flex-row">
              <input
                type={passType}
                placeholder="Password"
                className="outline-none border-b-2 text-center font-bold  focus:border-red-600"
                name="password"
                value={formOne.password}
                onChange={inputHandler}
              />
              <span className="cursor-pointer mt-2" onClick={togglePassword}>
                {show ? <FaEye /> : <FaEyeSlash />}
              </span>
            </p>
            {errors.password && (
              <p className="text-red-500 text-center">Password is Mandatory</p>
            )}
          </div>
          <div className="mt-5">
            <input
              type="password"
              placeholder="Confirm Password"
              className="outline-none border-b-2 text-center font-bold  focus:border-red-600"
              name="cnfPassword"
              value={formOne.cnfPassword}
              onChange={inputHandler}
            />
            {errors.cnfPassword && (
              <p className="text-red-500 text-center">
                Confirm Password is Mandatory
              </p>
            )}
          </div>
          <div className="flex flex-row flex-wrap text-center mt-5">
            <input
              type="text"
              placeholder="First Name"
              className="outline-none text-center items-center font-bold border-b-2 w-24 me-1  focus:border-red-600"
              maxLength={10}
              name="fName"
              value={formOne.fName}
              onChange={inputHandler}
            />
            {errors.fName && (
              <p className="text-red-500 text-center">
                First Name is Mandatory
              </p>
            )}
            <input
              type="text"
              placeholder="Last Name"
              className="outline-none text-center font-bold border-b-2 w-24 ms-1  focus:border-red-600"
              maxLength={10}
              name="lName"
              value={formOne.lName}
              onChange={inputHandler}
            />
            {errors.lName && (
              <p className="text-red-500 text-center">Last Name is Mandatory</p>
            )}
          </div>
          <div className="mt-5 ">
            <span className="text-gray-400 border-b-2 p-[2px] font-bold">
              DOB :
            </span>
            <input
              type="date"
              className="outline-none text-center font-bold  border-b-2 ms-1 focus:border-red-600"
              name="DOB"
              value={formOne.DOB}
              onChange={inputHandler}
            />
            {errors.DOB && (
              <p className="text-red-500 text-center">
                Date of Birth is Mandatory
              </p>
            )}
          </div>
          <div className="mt-5">
            <input
              list="nationality"
              placeholder="Nationality"
              className="outline-none text-center font-bold  border-b-2 ms-1  focus:border-red-600"
              name="nationality"
              value={formOne.nationality}
              onChange={inputHandler}
            />
            {errors.nationality && (
              <p className="text-red-500 text-center">
                Nationality is Mandatory
              </p>
            )}
            <datalist id="nationality">
              {country_list.map((country, ind) => {
                return <option key={ind}>{country}</option>;
              })}
            </datalist>
          </div>
          <div className="mt-5 flex flex-row">
            <button
              className="p-2 px-4 border-2 rounded-lg me-4 hover:bg-blue-600 hover:text-white"
              onClick={navigateToLogin}
            >
              Back
            </button>
            <button
              className="p-2 px-4 border-2 rounded-lg ms-4 hover:bg-red-600 hover:text-white"
              onClick={handleInputCondition}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <p className="d-hidden">{formValid}</p>
    </>
  );
}
