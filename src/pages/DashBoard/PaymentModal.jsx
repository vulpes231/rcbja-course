import React from "react";
import { motion } from "framer-motion";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

import { FiShield, FiCalendar, FiCreditCard } from "react-icons/fi";

const PaymentModal = ({ onClose, course }) => {
  return (
    <Modal
      isOpen={true}
      toggle={onClose}
      centered
      contentClassName="border-0 rounded-4 overflow-scroll shadow-2xl w-screen h-screen bg-black/60 top-0 fixed p-6"
    >
      <div className="bg-white w-95 md:w-100 mx-auto">
        <ModalHeader
          toggle={onClose}
          className="border-0 bg-slate-900 text-white py-4 px-5"
        >
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl">
              <FiShield className="text-xl" />
            </div>

            <div>
              <h2 className="text-lg font-semibold m-0">
                Complete Your Application
              </h2>

              <small className="text-slate-300">Secure admission process</small>
            </div>
          </div>
        </ModalHeader>

        <ModalBody className="bg-slate-50 p-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-5"
          >
            {/* Success Banner */}
            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-4">
              <p className="text-slate-700 leading-7 m-0">
                Your request to enroll in the{" "}
                <span className="font-semibold text-slate-900">
                  Private Investigator Course
                </span>{" "}
                has been successfully accepted.
              </p>
            </div>

            {/* Payment Info */}
            <div className="bg-white rounded-3xl border border-slate-200 p-5 flex flex-col gap-4 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-slate-900 text-white p-3 rounded-2xl">
                  <FiCreditCard className="text-xl" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">
                    Tuition Payment
                  </h3>

                  <p className="text-slate-500 text-sm mt-1">
                    Contact your dependent to complete payment processing.
                  </p>
                </div>
              </div>

              <div className="bg-slate-100 rounded-2xl p-4 flex items-center justify-between">
                <span className="text-slate-500 font-medium">Tuition Fee</span>

                <span className="text-2xl font-bold text-blue-600">$1,000</span>
              </div>
            </div>

            {/* Deadline */}
            <div className="bg-amber-50 border border-amber-100 rounded-3xl p-4 flex items-start gap-4">
              <div className="bg-amber-500 text-white p-3 rounded-2xl">
                <FiCalendar className="text-lg" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Submission Deadline
                </h3>

                <p className="text-slate-600 mt-1 leading-7">
                  Submit your payment confirmation and reference letter before{" "}
                  <span className="font-semibold">July 31, 2026</span>.
                </p>
              </div>
            </div>

            {/* Notice */}
            <div className="bg-red-50 border border-red-100 rounded-3xl p-4">
              <p className="text-sm text-slate-700 leading-6 m-0">
                Failure to complete the required admission process before the
                deadline may result in forfeiture of your admission slot.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-2">
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-2xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default PaymentModal;
