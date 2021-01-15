let chunks = [];

onmessage = function (e) {
  if (e.data[1] === "start") {
    chunks.push(e.data[0]);
  } else if (e.data[1] === "stop") {
    const blob = new Blob(chunks, { type: "video/mp4" }); // other types are available such as 'video/webm' for instance, see the doc for more info
    chunks = [];
    postMessage(blob);
  }
};
