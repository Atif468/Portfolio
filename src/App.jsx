import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import Navbar from "./nav";
import { Analytics } from '@vercel/analytics/react';

function App() {
  const sigCanvas = useRef({});
  const print = useRef({});

  const clear = () => {
    sigCanvas.current.clear();
  };

  return (
    <>
    <Analytics />
      <style>
        {`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-container, .print-container * {
            visibility: visible;
          }
          .print-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
          }
        }
        `}
      </style>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 overflow-hidden">
        <Popup
          trigger={
            <button className="h-16 w-40 rounded-md bg-orange-500 text-white">
              Open Signature Pad
            </button>
          }
          closeOnDocumentClick={false}
          modal
        >
          {(close) => (
            <div className="flex items-center justify-center min-h-screen p-4 overflow-hidden">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto w-full overflow-hidden">
                <h1 className="text-2xl font-bold mb-4 text-center">You can write here👇</h1>
                <div
                  ref={print}
                  className="print-container border-2 border-gray-300 p-4 rounded-lg w-full h-80 sm:h-96 overflow-hidden"
                >
                  <SignaturePad
                    ref={sigCanvas}
                    canvasProps={{
                      className: "sigCanvas h-full w-full",
                    }}
                  />
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-4">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md w-full sm:w-auto"
                    onClick={clear}
                  >
                    Clear
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md w-full sm:w-auto"
                    onClick={close}
                  >
                    Close
                  </button>
                  <ReactToPrint
                    trigger={() => {
                      return (
                        <button
                          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full sm:w-auto"
                        >
                          Download
                        </button>
                      );
                    }}
                    content={() => print.current}
                  />
                </div>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </>
  );
}

export default App;
