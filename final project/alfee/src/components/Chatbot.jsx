import React, { useState } from 'react';

const botScriptM = [
    { mid: 1, BOTScript: "Hi! My name is Alfie", scriptfor: "TDR" },
    { mid: 2, BOTScript: "Hope you are doing well, I am here to help you with your investments", scriptfor: "TDR" },
    { mid: 3, BOTScript: "May I know how much you save per month?", scriptfor: "TDR" },
    { mid: 4, BOTScript: "No issue we wish you a very good day!", scriptfor: "TDR" },
    { mid: 5, BOTScript: "Considering your monthly savings of xxxxx you can invest in:", scriptfor: "TDR" },
    { mid: 6, BOTScript: "Considering your XXX savings how much do you want to invest to get Max return.", scriptfor: "TDR" },
    { mid: 7, BOTScript: "At what payment frequency you want to invest", scriptfor: "TDR" },
    { mid: 8, BOTScript: "", scriptfor: "TDR" },
    { mid: 9, BOTScript: "Based on your savings, frequency & tenure selection your return would be XXX", scriptfor: "TDR" },
    { mid: 10, BOTScript: "Please confirm your TDR booking for (X Tenure) with return off saving (XXX)", scriptfor: "TDR" },
    { mid: 11, BOTScript: "Congratulations your TDR has been booked. Happy Savings! :)", scriptfor: "TDR" },
    { mid: 12, BOTScript: "Own Your Dream Car Module", scriptfor: "Auto" }
];

const botScriptD = [
    { cid: 1, mid: 2, options: "Yes", parent_mid: 3, remarks: null },
    { cid: 2, mid: 2, options: "No", parent_mid: 4, remarks: null },
    { cid: 3, mid: 3, options: "Input invest amount", parent_mid: 5, remarks: null },
    { cid: 4, mid: 5, options: "Multiply your savings", parent_mid: 6, remarks: null },
    { cid: 5, mid: 5, options: "Own your dream Car", parent_mid: 12, remarks: null },
    { cid: 6, mid: 5, options: "Not Interested", parent_mid: 4, remarks: null },
    { cid: 7, mid: 6, options: "do you want to invest to get Max return (input)", parent_mid: 7, remarks: null },
    { cid: 8, mid: 7, options: "Monthly", parent_mid: 9, remarks: null },
    { cid: 9, mid: 7, options: "At Maturity", parent_mid: 9, remarks: null },
    { cid: 10, mid: 9, options: "3 Months Returns", parent_mid: 10, remarks: null },
    { cid: 11, mid: 9, options: "6 Months Returns", parent_mid: 10, remarks: null },
    { cid: 12, mid: 9, options: "1 Year Returns", parent_mid: 10, remarks: null },
    { cid: 13, mid: 9, options: "Not Interested", parent_mid: 4, remarks: null },
    { cid: 14, mid: 4, options: "Quit", parent_mid: null, remarks: null },
    { cid: 15, mid: 11, options: "Thanks", parent_mid: null, remarks: null },
    { cid: 16, mid: 10, options: "Yes", parent_mid: 11, remarks: null },
    { cid: 17, mid: 10, options: "No", parent_mid: 11, remarks: null }
];

const Chatbot = () => {
    const [currentMid, setCurrentMid] = useState(1);
    const [chatHistory, setChatHistory] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isInputSubmitted, setIsInputSubmitted] = useState(false);
    const [investmentAmount, setInvestmentAmount] = useState('');

    const handleOptionClick = (optionText, parentMid) => {
        if (parentMid) {
            setChatHistory([...chatHistory, { BOTScript: botScriptM.find(script => script.mid === currentMid).BOTScript, userResponse: optionText }]);
            setCurrentMid(parentMid);
        }
    };

    const handleInputSubmit = () => {
        setIsInputSubmitted(true);
        setChatHistory([...chatHistory, { BOTScript: botScriptM.find(script => script.mid === currentMid).BOTScript, userResponse: userInput }]);
        setCurrentMid(2);
        setUserInput('');
    };

    const handleInvestmentSubmit = () => {
        setChatHistory([...chatHistory, { BOTScript: botScriptM.find(script => script.mid === currentMid).BOTScript, userResponse: investmentAmount }]);
        setCurrentMid(5);  // Assuming 5 is the next mid to proceed with
    };

    const currentScript = botScriptM.find(script => script.mid === currentMid);
    const options = botScriptD.filter(option => option.mid === currentMid);

    const formatScript = (script) => {
        return script.replace('xxxxx', investmentAmount).replace('XXX', investmentAmount);
    };

    return (
        <div className="Chatbot">
            <h1>Alfee Chatbot</h1>
            <div className="chat-history">
                {chatHistory.map((entry, index) => (
                    <div key={index}>
                        <div className="bot-message"><strong>Bot:</strong> {formatScript(entry.BOTScript)}</div>
                        <div className="user-message"><strong>You:</strong> {entry.userResponse}</div>
                    </div>
                ))}
            </div>
            {!isInputSubmitted && (
                <div>
                    <div className="bot-message"><strong>Bot:</strong> {currentScript.BOTScript}</div>
                    <input 
                        type="text" 
                        value={userInput} 
                        onChange={(e) => setUserInput(e.target.value)} 
                        placeholder="Type your response..." 
                    />
                    <button onClick={handleInputSubmit}>Submit</button>
                </div>
            )}
            {isInputSubmitted && (
                <div>
                    <div className="bot-message"><strong>Bot:</strong> {currentScript.BOTScript}</div>
                    {currentMid === 3 ? (
                        <div>
                            <input 
                                type="text" 
                                value={investmentAmount} 
                                onChange={(e) => setInvestmentAmount(e.target.value)} 
                                placeholder="Enter investment amount..." 
                            />
                            <button onClick={handleInvestmentSubmit}>Submit</button>
                        </div>
                    ) : (
                        options.map(option => (
                            <button key={option.cid} onClick={() => handleOptionClick(option.options, option.parent_mid)}>
                                {option.options}
                            </button>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Chatbot;
