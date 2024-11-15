import React, { useState, useEffect } from 'react';
import { fakeUsers } from '../lib/api-util';
import { useRouter } from 'next/router';

const ConfirmationPage: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [selectedUser, setSelectedUser] = useState<typeof fakeUsers[0] | null>(null);
  const [isCancelMode, setIsCancelMode] = useState(false);
  const [cancelReason, setCancelReason] = useState<string | null>(null);
  const [showCancelSuccess, setShowCancelSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const acceptanceTimeout = setTimeout(() => {
      setIsAccepted(true);
      const randomUser = fakeUsers[Math.floor(Math.random() * fakeUsers.length)];
      setSelectedUser(randomUser);
    }, 3000);

    return () => clearTimeout(acceptanceTimeout);
  }, []);

  const handleProceed = () => router.push('/');
  const handleCancelClick = () => setIsCancelMode(true);

  const handleConfirmCancel = () => {
    setShowCancelSuccess(true);
    setTimeout(() => router.push('/'), 2000); // Redirect to home after 2 seconds
  };

  const cancelReasons = [
    "Changed my mind",
    "Found another ride",
    "Driver taking too long",
    "Incorrect pickup location",
  ];

  return (
    <div className="flex h-screen">
      {/* Left Side - Ride Confirmation Content */}
      <div className="w-1/2 flex flex-col justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-xl w-full h-[650px] p-10 rounded-xl flex flex-col justify-center items-center">
          {!isAccepted ? (
            <h2 className="text-3xl text-gray-600 font-semibold text-center mb-12">
              Waiting for Acceptance...
            </h2>
          ) : (
            selectedUser && (
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-semibold text-green-500 mb-4">
                  Driver Accepted!
                </h2>
                <img
                  src={selectedUser.avatar}
                  alt={`${selectedUser.name}'s avatar`}
                  className="w-32 h-32 rounded-full mx-auto mb-6"
                />
                <h3 className="text-2xl font-semibold text-gray-800">{selectedUser.name}</h3>
                <div className="w-full mt-6 space-y-4">
                  <div className="flex justify-between text-lg text-gray-600">
                    <p className="font-semibold">Username:</p>
                    <p className="text-right">{selectedUser.username}</p>
                  </div>
                  <div className="flex justify-between text-lg text-gray-600">
                    <p className="font-semibold">Email:</p>
                    <p className="text-right">{selectedUser.email}</p>
                  </div>
                  <div className="flex justify-between text-lg text-gray-600">
                    <p className="font-semibold">Phone:</p>
                    <p className="text-right">{selectedUser.phone}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Right Side - Action Buttons or Cancellation Options */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100 p-6">
        <div className="bg-white shadow-xl w-full h-auto p-10 rounded-xl">
          {!isCancelMode ? (
            <div className="space-y-6 text-center">
              <button
                onClick={handleProceed}
                className="bg-blue-500 text-white text-xl font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 w-full"
              >    
              Proceed
              </button>
              <button
                onClick={handleCancelClick}
                className="bg-red-500 text-white text-xl font-semibold py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300 w-full"
              >
                Cancel Ride
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
                Why do you want to cancel the ride?
              </h3>
              <div className="space-y-2">
                {cancelReasons.map((reason, index) => (
                  <button
                    key={index}
                    onClick={() => setCancelReason(reason)}
                    className={`py-2 px-4 rounded-lg text-left w-full transition duration-200 ${
                      cancelReason === reason ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {reason}
                  </button>
                ))}
              </div>
              <button
                onClick={handleConfirmCancel}
                disabled={!cancelReason}
                className={`bg-red-500 text-white text-lg font-semibold py-2 px-6 mt-4 rounded-lg hover:bg-red-600 transition duration-300 w-full ${
                  !cancelReason && 'opacity-50 cursor-not-allowed'
                }`}
              >
                Confirm Cancellation
              </button>
            </div>
          )}

          {/* Success Message */}
          {showCancelSuccess && (
            <p className="text-center text-green-500 font-semibold mt-6">
              Successfully cancelled. Redirecting...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
