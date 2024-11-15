import React, { useState } from "react";
import Head from "next/head";

const Chatbot: React.FC = () => {
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string>("");

  const handleUserInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleChatbotSend = () => {
    if (!userInput.trim()) return;

    setChatMessages((prevMessages) => [...prevMessages, `User: ${userInput}`]);
    setUserInput("");
    const botResponse = getBotResponse(userInput);
    setTimeout(() => {
      setChatMessages((prevMessages) => [...prevMessages, `TFI: ${botResponse}`]);
    }, 500);
  };

  const getBotResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();

  if (lowerInput.includes("hi") || lowerInput.includes("hello")) {
    return "Hello! How can I assist you today?";
  } else if (lowerInput.includes("driver name")) {
    return "Your driver's name is John Doe. He'll be there soon!";
  } else if (lowerInput.includes("support") || lowerInput.includes("customer support")) {
    return "I'm here to help! If you need further assistance, contact support at support@example.com.";
  } else if (lowerInput.includes("payment")) {
    return "Update payment methods under Settings > Payment Methods.";
  } else if (lowerInput.includes("ride history")) {
    return "Go to Profile > Ride History to see past rides.";
  } else if (lowerInput.includes("account")) {
    return "Update profile information in Account Settings.";
  } else if (lowerInput.includes("book a ride")) {
    return "To book a ride, enter your pickup and destination locations, then click 'Find Rides'.";
  } else if (lowerInput.includes("cancel ride")) {
    return "To cancel a ride, go to the Ride Details page and select 'Cancel Ride'.";
  } else if (lowerInput.includes("eta")) {
    return "The estimated arrival time will be displayed on the ride tracking screen.";
  } else if (lowerInput.includes("destination")) {
    return "Enter your destination to get available ride options.";
  } else if (lowerInput.includes("pickup location")) {
    return "Please enter your pickup location in the app to start.";
  } else if (lowerInput.includes("promo code") || lowerInput.includes("discount")) {
    return "You can apply promo codes at checkout for discounts.";
  } else if (lowerInput.includes("loyalty program")) {
    return "Join our loyalty program under Rewards for exclusive benefits.";
  } else if (lowerInput.includes("safety features")) {
    return "Our rides include safety features such as GPS tracking and emergency assistance.";
  } else if (lowerInput.includes("change destination")) {
    return "To change your destination, go to the Ride Details page and update it.";
  } else if (lowerInput.includes("tip driver")) {
    return "You can tip the driver after the ride in the Ride Summary.";
  } else if (lowerInput.includes("feedback")) {
    return "We appreciate your feedback! Submit feedback in the app under Ride History.";
  } else if (lowerInput.includes("lost item")) {
    return "Report a lost item by going to Profile > Lost & Found.";
  } else if (lowerInput.includes("driver rating")) {
    return "Rate your driver after the ride in the Ride Summary.";
  } else if (lowerInput.includes("ride options")) {
    return "Choose from options like economy, premium, or shared rides.";
  } else if (lowerInput.includes("help") || lowerInput.includes("assist")) {
    return "I'm here to assist! Please ask me about rides, payments, or settings.";
  } else if (lowerInput.includes("covid")) {
    return "Our drivers follow safety protocols, including mask-wearing and sanitization.";
  } else if (lowerInput.includes("app update")) {
    return "Check your app store for the latest updates to improve your experience.";
  } else if (lowerInput.includes("gps")) {
    return "Enable GPS to get accurate pickup and drop-off locations.";
  } else if (lowerInput.includes("vehicle")) {
    return "Our fleet includes cars, bikes, and shared vehicles for different needs.";
  } else if (lowerInput.includes("night mode")) {
    return "You can enable Night Mode under Settings > Display.";
  } else if (lowerInput.includes("language")) {
    return "Change the language in Settings > Language Preferences.";
  } else if (lowerInput.includes("notifications")) {
    return "Manage notifications in Settings > Notifications.";
  } else if (lowerInput.includes("emergency contact")) {
    return "Add emergency contacts in Profile > Emergency Contacts.";
  } else if (lowerInput.includes("support languages")) {
    return "We currently support English, Spanish, French, and more.";
  } else if (lowerInput.includes("referral program")) {
    return "Refer a friend under Profile > Referral Program to earn rewards.";
  } else if (lowerInput.includes("map")) {
    return "The map shows your location and nearby drivers.";
  } else if (lowerInput.includes("destination ETA")) {
    return "The estimated time of arrival updates based on traffic conditions.";
  } else if (lowerInput.includes("fare estimate")) {
    return "Get a fare estimate by entering your pickup and destination locations.";
  } else if (lowerInput.includes("weather")) {
    return "Check the local weather forecast in-app for better planning.";
  } else if (lowerInput.includes("nearest driver")) {
    return "The app automatically assigns the nearest driver to your location.";
  } else if (lowerInput.includes("receipt")) {
    return "Access your ride receipts under Profile > Ride History.";
  } else if (lowerInput.includes("book later")) {
    return "Schedule rides in advance by selecting 'Book Later' in the app.";
  } else if (lowerInput.includes("connect with driver")) {
    return "Contact the driver through the app once your ride is confirmed.";
  } else if (lowerInput.includes("app feedback")) {
    return "Share app feedback in Settings > Feedback.";
  } else if (lowerInput.includes("preferences")) {
    return "Set preferences like vehicle type in Settings > Preferences.";
  } else if (lowerInput.includes("dark mode")) {
    return "Enable dark mode in Settings > Appearance.";
  } else if (lowerInput.includes("battery saver")) {
    return "Switch to Battery Saver mode in Settings for extended usage.";
  } else if (lowerInput.includes("cancel account")) {
    return "To cancel your account, contact support at support@example.com.";
  } else if (lowerInput.includes("safety tips")) {
    return "View safety tips under Profile > Safety Tips.";
  } else if (lowerInput.includes("ride insurance")) {
    return "Rides come with insurance coverage for safety.";
  } else if (lowerInput.includes("choose seat")) {
    return "Request specific seating arrangements with the driver after booking.";
  } else if (lowerInput.includes("car model")) {
    return "Our fleet includes Toyota, Honda, and other reliable car models.";
  } else if (lowerInput.includes("wait time")) {
    return "Estimated wait time depends on traffic and driver availability.";
  }
  else if(lowerInput.includes("fuck you")){
    return "don't use bad words i am very innocent"
  }
  else {
    return "I'm here to help! Ask me about booking rides, payments, or other app features.";
  }
};


  return (
    <>
      <Head>
        <title>Journey Mate Chatbot</title>
      </Head>
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="w-full max-w-md bg-gray-800 text-white rounded-lg shadow-lg flex flex-col overflow-hidden">
          <header className="bg-gray-700 p-4 text-center text-lg font-semibold">
            Journey Mate Chatbot
          </header>
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 p-3 rounded-lg ${
                  message.startsWith("User")
                    ? "bg-gray-300 text-gray-800 self-end text-right"
                    : "bg-gray-200 text-gray-800 self-start text-left"
                }`}
              >
                {message}
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-gray-700 bg-gray-800 flex">
            <input
              type="text"
              placeholder="Ask a question..."
              className="flex-1 p-2 bg-gray-700 text-white rounded focus:outline-none placeholder-gray-400"
              value={userInput}
              onChange={handleUserInputChange}
              onKeyDown={(e) => e.key === "Enter" && handleChatbotSend()}
            />
            <button
              onClick={handleChatbotSend}
              className="ml-2 p-2 bg-blue-600 hover:bg-blue-500 text-white rounded transition"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
