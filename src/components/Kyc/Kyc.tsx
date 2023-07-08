import { useState, useCallback, useRef, useContext, useEffect } from "react";
import Webcam from "react-webcam";
import { ContextManager } from "../../contexts/all-context";
import { useNavigate } from "react-router-dom";
// const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};
const Kyc = () => {
  const _context: any = ContextManager();
  const navigate = useNavigate();
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const [url, setUrl] = useState<string | null>(null);
  const webcamRef = useRef<Webcam>(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc && _context) {
      /**save face image to context */
      _context.setFaceImage(imageSrc);
      setUrl(imageSrc);
      setCaptureEnable(false);
    }
  }, [webcamRef]);

  useEffect(() => {
    console.log(isCaptureEnable);
    setCaptureEnable(true);
  }, []);

  return (
    <>
      <header>
        <h1>Please Scan You Face for Verification</h1>
      </header>
      {/* {isCaptureEnable || (
        <button onClick={() => setCaptureEnable(true)}>start</button>
      )} */}
      {isCaptureEnable && (
        <>
          {/* <div>
            <button
              onClick={() => {
                setCaptureEnable(false);
              }}
            >
              end{" "}
            </button>
          </div> */}
          <div>
            <Webcam
              audio={false}
              width={540}
              height={360}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
          <button onClick={capture}>capture</button>
        </>
      )}
      {url && (
        <>
          <div>
            <img src={url} alt="Screenshot" />
          </div>
          <div>
            <button
              onClick={() => {
                setCaptureEnable(true);
                setUrl(null);
              }}
            >
              Retake
            </button>
          </div>
        </>
      )}
    </>
  );
};
export default Kyc;
