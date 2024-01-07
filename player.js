//data
let infoPlayList = {
  title: "Hip-Hop Hits",
  coverImageUrl: "playList.jpg",
  info: {
    totalTrackCount: 4,
    totalTrackDurationInSeconds: 733,
  },
  tracks: [
    {
      artistName: "Eminem",
      title: "Rap God",
      fileUrl: "Eminem_-_Rap_God_b64f0d364.mp3",
      isHot: false,
    },
    {
      artistName: "50 Cent",
      title: "In Da Club",
      fileUrl: "50-Cent_-_In_Da_Club_b64f0d193.mp3",
      isHot: true,
    },
  ],
};
let infoPlayList2 = {
  title: "Hip-Hop Hits",
  coverImageUrl: "playList.jpg",
  info: {
    totalTrackCount: 4,
    totalTrackDurationInSeconds: 733,
  },
  tracks: [
    {
      artistName: "Eminem",
      title: "Rap God",
      fileUrl: "Eminem_-_Rap_God_b64f0d364.mp3",
      isHot: false,
    },
    {
      artistName: "50 Cent",
      title: "In Da Club",
      fileUrl: "50-Cent_-_In_Da_Club_b64f0d193.mp3",
      isHot: true,
    },
  ],
};

//render
renderPlayList(infoPlayList);
renderPlayList(infoPlayList2);

function renderPlayList(playListForRendering) {

  renderPlaylistHeader(playListForRendering);

  // let trackListEl = document.createElement("ul");

  renderTrack(playListForRendering.tracks[0]);
  renderTrack(playListForRendering.tracks[1]);

  // trackListEl.append(track_1_El);
  // trackListEl.append(track_2_El);

  // document.body.append(trackListEl);
}

function renderPlaylistHeader(playListForRendering) {
  // здесь логика отрисовки шапки "входного" плейлиста
  const titleImagetEl = document.createElement("img");
  titleImagetEl.src = playListForRendering.coverImageUrl;
  document.body.append(titleImagetEl);

  let titlePlayListEl = document.createElement("h1");
  titlePlayListEl.append(playListForRendering.title);
  document.body.append(titlePlayListEl);
}

function renderTrack(inputTrackForRendering) {
  // здесь логика отрисовки "входного" трека

  let track_1_El = document.createElement("div");
  track_1_El.append(
    inputTrackForRendering.artistName + " - " + inputTrackForRendering.title
  );
  let playerEl = document.createElement('audio')
  playerEl.src = inputTrackForRendering.fileUrl

  playerEl.controls = true
  document.body.append(playerEl)


  document.body.append(track_1_El)
}
