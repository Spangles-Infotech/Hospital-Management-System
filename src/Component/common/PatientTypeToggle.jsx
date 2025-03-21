import { useForm } from "../../context/FormContext";

export const PatientTypeToggle = () => {
    const { formData, handleChange } = useForm()
    return (
        <label
          htmlFor="check"
          className="bg-white border border-primary relative w-20 h-10 rounded-full flex items-center cursor-pointer"
        >
          <div className="flex w-full justify-between px-3">
            <span className={formData?.patientType === "OP" ? "font-bold" : ""}>
              OP
            </span>
            <span className={formData?.patientType === "IP" ? "font-bold" : ""}>
              IP
            </span>
          </div>
  
          <input
            type="checkbox"
            id="check"
            className="sr-only peer"
            name="patientType"
            checked={formData?.patientType === "IP"} // Controlled by formData
            onChange={(e) =>
              handleChange({
                target: {
                  name: "patientType",
                  value: e.target.checked ? "IP" : "OP",
                },
              })
            }
          />
  
          <span
            className={`w-2/5 h-4/5 bg-primary absolute rounded-full left-1 transition-all duration-300 ease-in-out ${
              formData?.patientType === "IP" ? "translate-x-10" : ""
            }`}
          ></span>
        </label>
    );
  };
  