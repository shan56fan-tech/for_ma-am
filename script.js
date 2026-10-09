// Screen Navigation
function goToScreen(screenNumber) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  
  const targetScreen = document.getElementById(`screen-${screenNumber}`);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }
}

// Reveal Lesson Cards on Screen 3
function revealLesson(cardElement) {
  cardElement.classList.toggle('revealed');
}

// Photo Carousel Data for Screen 4
const classroomPhotos = [
  {
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
    caption: "Guidance & Inspiration 📖",
    counter: "01 / 03"
  },
  {
    url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop",
    caption: "Encouragement & Growth 🌱",
    counter: "02 / 03"
  },
  {
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop",
    caption: "Lifelong Lessons 🎓",
    counter: "03 / 03"
  }
];

let photoIndex = 0;

function nextPhoto() {
  photoIndex = (photoIndex + 1) % classroomPhotos.length;
  
  const imgElement = document.getElementById('carousel-img');
  const captionElement = document.getElementById('carousel-caption');
  const counterElement = document.getElementById('photo-counter');

  if (imgElement && captionElement && counterElement) {
    imgElement.src = classroomPhotos[photoIndex].url;
    captionElement.innerText = classroomPhotos[photoIndex].caption;
    counterElement.innerText = classroomPhotos[photoIndex].counter;
  }
}
