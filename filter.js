const videoPanels = document.getElementsByClassName(
  'yt-simple-endpoint style-scope ytd-grid-video-renderer'
);

const videoCard = document.getElementsByClassName(
  'style-scope ytd-grid-renderer'
);

const filter = ['Hate you', 'isles', 'NHL'];

for (let index = 0; index < videoPanels.length; index++) {
  if (
    filter.some((v) =>
      videoPanels[index].innerHTML.toLowerCase().includes(v.toLowerCase())
    )
  ) {
    videoCard[index + 2].style.display = 'none';
  }
}
