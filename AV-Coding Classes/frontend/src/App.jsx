import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io("https://av-coding-classes.onrender.com");

function App() {
  const [mic, setMic] = useState(true);
  const [video, setVideo] = useState(true);

  const localVideo = useRef(null);
  const remoteVideo = useRef(null);
  const pc = useRef(null);
  const localStream = useRef(null);

  const roomId = "123"; // static room for now

  useEffect(() => {
    async function init() {
      const pc = new RTCPeerConnection({
        iceServers: [
          { urls: "stun:stun.l.google.com:19302" }, // Google STUN
          {
            urls: "turn:openrelay.metered.ca:80",
            username: "openrelayproject",
            credential: "openrelayproject"
          }
        ]
      });


      // Local stream
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      localStream.current = stream;
      localVideo.current.srcObject = stream;

      stream.getTracks().forEach((track) => {
        pc.current.addTrack(track, stream);
      });

      // Remote stream
      pc.current.ontrack = (event) => {
        remoteVideo.current.srcObject = event.streams[0];
      };

      // ICE candidates
      pc.current.onicecandidate = (event) => {
        if (event.candidate) {
          socket.emit("ice-candidate", roomId, event.candidate);
        }
      };

      // Join room
      socket.emit("join-room", roomId);

      // When someone else joins → send offer
      socket.on("user-joined", async () => {
        const offer = await pc.current.createOffer();
        await pc.current.setLocalDescription(offer);
        socket.emit("offer", roomId, offer);
      });

      socket.on("offer", async (offer) => {
        await pc.current.setRemoteDescription(new RTCSessionDescription(offer));
        const answer = await pc.current.createAnswer();
        await pc.current.setLocalDescription(answer);
        socket.emit("answer", roomId, answer);
      });

      socket.on("answer", async (answer) => {
        await pc.current.setRemoteDescription(new RTCSessionDescription(answer));
      });

      socket.on("ice-candidate", async (candidate) => {
        try {
          await pc.current.addIceCandidate(new RTCIceCandidate(candidate));
        } catch (err) {
          console.error("Error adding received ICE candidate", err);
        }
      });

      // Debug logs
      pc.current.onconnectionstatechange = () => {
        console.log("Connection state:", pc.current.connectionState);
      };
      pc.current.oniceconnectionstatechange = () => {
        console.log("ICE state:", pc.current.iceConnectionState);
      };
    }

    init();
  }, [roomId]);

  // Toggle mic
  const toggleMic = () => {
    localStream.current.getAudioTracks().forEach(
      (track) => (track.enabled = !track.enabled)
    );
    setMic((prev) => !prev);
  };

  // Toggle video
  const toggleVideo = () => {
    localStream.current.getVideoTracks().forEach(
      (track) => (track.enabled = !track.enabled)
    );
    setVideo((prev) => !prev);
  };

  return (
    <div>
      <h2>Simple Video Call</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <video
          ref={localVideo}
          autoPlay
          muted
          playsInline
          style={{ width: "45%", border: "1px solid black" }}
        />
        <video
          ref={remoteVideo}
          autoPlay
          playsInline
          style={{ width: "45%", border: "1px solid black" }}
        />
      </div>
      <div>
        <button onClick={toggleMic}>{mic ? "Mute Mic" : "Unmute Mic"}</button>
        <button onClick={toggleVideo}>
          {video ? "Turn Off Video" : "Turn On Video"}
        </button>
      </div>
    </div>
  );
}

export default App;
