import React, { useState } from "react";

// --- Icons ---
const IconMobile = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="82"
    height="91"
    fill="none"
    viewBox="0 0 82 91"
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.2 91c-1.705 0-3.164-.608-4.378-1.823C.607 87.962 0 86.502 0 84.795V6.206C0 4.55.62 3.102 1.86 1.86 3.1.621 4.547 0 6.2 0h45.26c1.705 0 3.165.607 4.38 1.822 1.213 1.215 1.82 2.676 1.82 4.383v15.51c1.24.208 2.273.792 3.1 1.754S62 25.52 62 26.739v7.696c0 1.31-.413 2.448-1.24 3.413-.827.965-1.86 1.55-3.1 1.758v45.19c0 1.706-.607 3.166-1.82 4.38C54.624 90.393 53.164 91 51.46 91H6.2Zm0-6.204h45.26V6.205H6.2v78.59Z"
    />
    <path
      fill="currentColor"
      d="M72.31 7c1.567 0 2.91.56 4.026 1.682 1.116 1.122 1.674 2.47 1.674 4.045v14.319c1.14.19 2.09.73 2.85 1.617.76.888 1.14 1.895 1.14 3.02v7.103c0 1.21-.38 2.26-1.14 3.15-.76.891-1.71 1.433-2.85 1.624v41.712c0 1.575-.558 2.924-1.674 4.045C75.219 90.44 73.877 91 72.31 91H30.7c-1.567 0-2.91-.56-4.025-1.683-1.117-1.12-1.675-2.47-1.675-4.044V85h5.7v.272h41.61V12.728H51.442V7H72.31Z"
    />
  </svg>
);

const IconCalendar = (props) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 2V6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 2V6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 10H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconUser = (props) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconHandshake = (props) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 22V20C22 18.9391 21.5786 17.9217 20.8284 17.1716C20.0783 16.4214 19.0609 16 18 16H6C4.93913 16 3.92172 16.4214 3.17157 17.1716C2.42143 17.9217 2 18.9391 2 20V22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconBusiness = (props) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 21H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 21V7L13 3V21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 21V11L13 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 9V9.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 13V13.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 17V17.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconOther = (props) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 16V12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8H12.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    handsets: "",
    contract: "",
    businessType: "",
    businessName: "",
    postcode: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const totalSteps = 5;

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelection = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const validateStep = (currentStep) => {
    if (currentStep === 1 && !formData.handsets) {
      alert("Please select an option.");
      return false;
    }
    if (currentStep === 2 && !formData.contract) {
      alert("Please select an option.");
      return false;
    }
    if (currentStep === 3 && !formData.businessType) {
      alert("Please select an option.");
      return false;
    }
    if (currentStep === 4) {
      if (!formData.businessName) {
        alert("Please enter your business name.");
        return false;
      }
      if (!formData.postcode) {
        alert("Please enter your postcode.");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Get Nonce from global WP object if available
      const nonce = window.wpApiSettings?.nonce || "";

      const res = await fetch("/wp-json/bh/v1/submit-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": nonce, // Important for security/permission checks
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Redirect on success
        window.location.href = data.redirect_url;
      } else {
        // Handle API errors
        alert(data.message || "Something went wrong. Please try again.");
        console.error("Submission Error:", data);
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("An error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- UI Helper Components ---
  const SelectionCard = ({ field, value, label, Icon, labelClassName }) => (
    <div
      onClick={() => handleSelection(field, value)}
      className={`cursor-pointer rounded-[15px] border-2 p-6 flex flex-col items-center justify-center text-center transition-all duration-200 h-[180px] shadow-sm
        ${
          formData[field] === value
            ? "border-[#53a336] bg-[#53a336] text-white"
            : "border-gray-200 bg-white hover:border-[#53a336] text-[#92D93E]"
        }`}
    >
      {/* Display Icon */}
      <div className="mb-4">
        <Icon className="h-[55px] lg:h-[100px] w-auto" />
      </div>
      <span
        className={`font-bold ${labelClassName} ${
          formData[field] === value ? "text-white" : "text-[#359327]"
        }`}
      >
        {label}
      </span>
    </div>
  );

  const ProgressBar = () => (
    <div className="w-full max-w-[712px] mx-auto mb-8">
      <div className="text-center text-[#f0b53f] font-bold uppercase text-xs tracking-wider mb-2">
        {step === 5
          ? "AND FINALLY"
          : step === 4
          ? "VERY CLOSE NOW..."
          : step === 3
          ? "YOU'RE NEARLY THERE"
          : "IT TAKES 1 MINUTE TO COMPLETE"}
      </div>
      <div className="h-[18px] bg-[#F4F6F2] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#92D93E] transition-all duration-500 ease-out"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  // --- Render Steps ---
  return (
    <div className="bg-[#F7F9F6] flex justify-center items-center w-full rounded-[18px] lg:max-w-[1434px] mx-auto h-[735px] pt-[56px] pb-[80px] px-[99px] lg:mt-[61px] lg:mb-[90px]">
      <div className="max-w-[1236px] mx-auto w-full">
        <ProgressBar />

        {/* STEP 1: Handsets */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-[#237017] text-center mb-2">
              How many handsets or SIMs do you require?
            </h2>
            <p className="text-center text-gray-500 font-bold mb-10">
              Please select below
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <SelectionCard
                field="handsets"
                value="1-2"
                label="1 - 2"
                Icon={IconMobile}
                labelClassName="text-[24px] lg:text-[40px]"
              />
              <SelectionCard
                field="handsets"
                value="3-4"
                label="3 - 4"
                Icon={IconMobile}
                labelClassName="text-[24px] lg:text-[40px]"
              />
              <SelectionCard
                field="handsets"
                value="5-9"
                label="5 - 9"
                Icon={IconMobile}
                labelClassName="text-[24px] lg:text-[40px]"
              />
              <SelectionCard
                field="handsets"
                value="10+"
                label="10+"
                Icon={IconMobile}
                labelClassName="text-[24px] lg:text-[40px]"
              />
            </div>
          </div>
        )}

        {/* STEP 2: Contract */}
        {step === 2 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-[#237017] text-center mb-2">
              When does your current contract expire?
            </h2>
            <p className="text-center text-gray-500 font-bold mb-10">
              Please select below
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <SelectionCard
                field="contract"
                value="Out of contract"
                label="Out of contract"
                Icon={IconCalendar}
                labelClassName="text-[16px] lg:text-[27px]"
              />
              <SelectionCard
                field="contract"
                value="Under 3 months"
                label="Under 3 months"
                Icon={IconCalendar}
                labelClassName="text-[16px] lg:text-[27px]"
              />
              <SelectionCard
                field="contract"
                value="3 months +"
                label="3 months +"
                Icon={IconCalendar}
                labelClassName="text-[16px] lg:text-[27px]"
              />
              <SelectionCard
                field="contract"
                value="Not sure"
                label="Not sure"
                Icon={IconOther}
                labelClassName="text-[16px] lg:text-[27px]"
              />
            </div>
          </div>
        )}

        {/* STEP 3: Business Type */}
        {step === 3 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-[#237017] text-center mb-2">
              What type of business are you?
            </h2>
            <p className="text-center text-gray-500 font-bold mb-10">
              Please select below
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <SelectionCard
                field="businessType"
                value="Sole trader"
                label="Sole trader"
                Icon={IconUser}
                labelClassName="text-[16px] lg:text-[27px]"
              />
              <SelectionCard
                field="businessType"
                value="Partnership"
                label="Partnership"
                Icon={IconHandshake}
                labelClassName="text-[16px] lg:text-[27px]"
              />
              <SelectionCard
                field="businessType"
                value="LTD company"
                label="LTD company"
                Icon={IconBusiness}
                labelClassName="text-[16px] lg:text-[27px]"
              />
              <SelectionCard
                field="businessType"
                value="Other"
                label="Other"
                Icon={IconOther}
                labelClassName="text-[16px] lg:text-[27px]"
              />
            </div>
          </div>
        )}

        {/* STEP 4: Business Info */}
        {step === 4 && (
          <div className="animate-fade-in max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#237017] text-center mb-10">
              Tell us about your business
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#237017] font-bold mb-2">
                  Your business name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Your business name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#72c865] focus:ring-2 focus:ring-[#72c865] outline-none bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-[#237017] font-bold mb-2">
                  Enter your postcode *
                </label>
                <input
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  placeholder="Postcode"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#72c865] focus:ring-2 focus:ring-[#72c865] outline-none bg-gray-50"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: Contact Info */}
        {step === 5 && (
          <div className="animate-fade-in max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#237017] text-center mb-10">
              Tell us about you
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#237017] font-bold mb-2">
                  First name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#72c865] focus:ring-2 focus:ring-[#72c865] outline-none bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-[#237017] font-bold mb-2">
                  Last name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#72c865] focus:ring-2 focus:ring-[#72c865] outline-none bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-[#237017] font-bold mb-2">
                  Business email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Business email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#72c865] focus:ring-2 focus:ring-[#72c865] outline-none bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-[#237017] font-bold mb-2">
                  Contact number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contact number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#72c865] focus:ring-2 focus:ring-[#72c865] outline-none bg-gray-50"
                />
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-10 flex justify-center gap-4">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="w-12 h-12 rounded-full bg-[#72c865] text-white flex items-center justify-center font-bold text-xl hover:bg-[#5bb350] transition-colors"
            >
              &lt;
            </button>
          )}

          {step < 5 ? (
            <button
              onClick={nextStep}
              className="bg-[#ffdc46] text-[#002115] font-extrabold py-3 px-12 rounded-full hover:bg-[#f0cd35] transition-colors shadow-md"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-[#ffdc46] text-[#002115] font-extrabold py-3 px-12 rounded-full hover:bg-[#f0cd35] transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          )}
        </div>

        {/* Footer Text */}
        {step < 5 && (
          <p className="text-center text-[#72c865] font-bold mt-6 text-sm">
            We compare all major UK networks so you don't have to
          </p>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
