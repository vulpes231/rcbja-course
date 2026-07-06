import { useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { Card, Spinner } from "reactstrap";
import { SECURITY_PIN } from "../../constants";
import Toast from "../../components/Toast";

const Landing = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const inputRefs = useRef([]);

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      pin1: "",
      pin2: "",
      pin3: "",
      pin4: "",
    },

    onSubmit: (values) => {
      setIsLoading(true);

      const otp = values.pin1 + values.pin2 + values.pin3 + values.pin4;

      if (otp.length < 4) {
        setError("Enter your 4 digit PIN!");
        setIsLoading(false);
        return;
      }

      if (otp !== SECURITY_PIN) {
        setError("Invalid security PIN!");
        setIsLoading(false);
        return;
      }

      const user = {
        firstname: "briyene",
        lastname: "duterne",
        regDate: new Date("7/3/2026"),
        username: "briyenne32",
        email: null,
        phone: null,
        address: "720 Tidewater Cir Apt 19G Macon Georgia 31211",
      };

      sessionStorage.setItem("otpVerified", 1);
      sessionStorage.setItem("user", JSON.stringify(user));

      setTimeout(() => {
        setIsLoading(false);
        window.location.href = "/dashboard";
      }, 2000);
    },
  });

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");

    validation.setFieldValue(`pin${index + 1}`, value);

    // Move to next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move back on delete/backspace
    if (
      e.key === "Backspace" &&
      !validation.values[`pin${index + 1}`] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (error) {
      const tmt = setTimeout(() => {
        setError("");
      }, 2000);

      return () => clearTimeout(tmt);
    }
  }, [error]);

  return (
    <React.Fragment>
      <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
        <Card className="w-full max-w-md bg-white shadow-sm border border-slate-200 rounded-2xl p-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
            }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-slate-900">
                Welcome back
              </h2>

              <p className="text-sm text-slate-500">
                Enter your security PIN to continue.
              </p>
            </div>

            <div className="flex items-center justify-between gap-3">
              {[0, 1, 2, 3].map((item) => (
                <input
                  key={item}
                  ref={(el) => (inputRefs.current[item] = el)}
                  type="password"
                  inputMode="numeric"
                  maxLength={1}
                  name={`pin${item + 1}`}
                  value={validation.values[`pin${item + 1}`]}
                  onChange={(e) => handleChange(e, item)}
                  onKeyDown={(e) => handleKeyDown(e, item)}
                  className="
                    w-16 h-16
                    text-center text-2xl font-semibold
                    border border-slate-300
                    rounded-xl
                    outline-none
                    transition-all
                    focus:border-slate-900
                    focus:ring-2
                    focus:ring-slate-200
                  "
                  autoComplete="off"
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="
                h-12
                bg-slate-900
                hover:bg-slate-800
                transition-colors
                text-white
                rounded-xl
                font-medium
                flex items-center
                justify-center
                gap-2
                disabled:opacity-70
              "
            >
              {/* {isLoading && <Spinner size="sm" />} */}

              {isLoading ? "Verifying..." : "Continue"}
            </button>
          </form>
        </Card>
      </div>

      {error && (
        <Toast
          message={error}
          type="error"
          onClose={() => {
            setError("");
            setIsLoading(false);
          }}
        />
      )}
    </React.Fragment>
  );
};

export default Landing;
