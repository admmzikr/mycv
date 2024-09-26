<template>
  <div class="container mx-auto p-4 min-h-screen">
    <!-- Northern Lights Header -->
    <header class="northern-lights-header">
  <nav class="flex justify-between items-center p-4">
    <div></div> <!-- Empty for alignment purposes -->
    <ul class="flex space-x-8">
      <li><a href="#home" class="text-white">Home</a></li>
      <li><a href="#about" class="text-white">About</a></li>
      <li><a href="#contact" class="text-white">Contact</a></li>
    </ul>
  </nav>
  <div class="flex justify-center items-center text-center text-white p-8 min-h-screen">
    <h1 class="text-9xl font-bold text-white">Hello</h1>
    <h2 class="text-4xl font-semibold mt-4 text-white">I'm Adam Zikri Cahyadi</h2>
  </div>
</header>

    <!-- Custom Cursor -->
        <div id="custom-cursor" class="custom-cursor"></div>

     <!-- About Section -->
    <section id="about" class="my-12 p-8 flex items-center" :style="{
      background: 'rgba(255, 255, 255, 0.5)', 
      backdropFilter: 'blur(10px)', 
      borderRadius: '10px', 
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }">
      <div class="flex-1">
        <h2 class="text-3xl font-bold text-white mb-4">About Me</h2>
        <p class="text-gray-600 leading-relaxed">
          I am a passionate web developer with expertise in HTML, CSS, JavaScript, and Vue.js,
          dedicated to creating dynamic, interactive websites. As a designer, I craft visually engaging,
          user-friendly interfaces, and as a content creator, I produce compelling multimedia content.
          I am committed to continuously improving my skills to deliver top-quality results for every project.
        </p>
      </div>
    </section>

    <!-- Skills Section -->
    <section 
  id="skills" 
  class="my-12 p-8" 
  :style="{
    background: 'rgba(255, 255, 255, 0.5)', 
    backdropFilter: 'blur(10px)', 
    borderRadius: '10px', 
    border: '1px solid rgba(255, 255, 255, 0.2)'
  }"
>
      <h2 class="text-3xl font-bold text-white mb-4">Skills</h2>
      <ul class="list-none grid grid-cols-2 gap-4 text-gray-600">
        <li class="flex items-center">
          <span class="mr-2 text-gray-600">✓</span> HTML5, CSS3, JavaScript
        </li>
        <li class="flex items-center">
          <span class="mr-2 text-gray-600">✓</span> Capcut, Canva, Procreate
        </li>
        <li class="flex items-center">
          <span class="mr-2 text-gray-600">✓</span> vue.js, C++, MySQL
        </li>
        <li class="flex items-center">
          <span class="mr-2 text-gray-600">✓</span> Figma, Adobe Illustrator, Adobe Photoshop
        </li>
        <li class="flex items-center">
          <span class="mr-2 text-gray-600">✓</span> Node.js, Git, Github
        </li>
      </ul>
    </section>

    <section 
  id="experience" 
  class="my-12 p-8"
  :style="{
    background: 'rgba(255, 255, 255, 0.5)', 
    backdropFilter: 'blur(10px)', 
    borderRadius: '10px', 
    border: '1px solid rgba(255, 255, 255, 0.2)'
  }"
>
  <h2 class="text-3xl font-bold text-gray-800 mb-4">Organizational Experience</h2>
  <div class="mt-4">
    <h3 class="text-2xl font-semibold text-gray-700">Digital Branding & Product Innovation Staff / Mahasiswa Wirausaha</h3>
    <p class="text-gray-500 mb-2">January 2024 – Present</p>
    <ul class="list-disc ml-5 text-gray-600 leading-relaxed">
      <li>Created designs for Instagram posts based on specific requests.</li>
      <li>Planned and coordinated color schemes for Instagram feed layouts.</li>
      <li>Developed and refined designs for small businesses around Malang as part of the Level Up project.</li>
    </ul>
  </div>
  <div class="mt-4">
    <h3 class="text-2xl font-semibold text-gray-700">Vice Chair of Puskominfo / Student Executive Body (BEM), Vocational Faculty, Universitas Brawijaya</h3>
    <p class="text-gray-500 mb-2">January 2024 – Present</p>
    <ul class="list-disc ml-5 text-gray-600 leading-relaxed">
      <li>Designed kits and logos for each ministry at the start of the cabinet term.</li>
      <li>Managed Instagram, TikTok, and the UI/UX of the official BEM website for the Vocational Faculty.</li>
      <li>Coordinated the planning and execution of Puskominfo’s tasks and programs for the BEM of the Vocational Faculty.</li>
    </ul>
  </div>
  <div class="mt-4">
    <h3 class="text-2xl font-semibold text-gray-700">Puskominfo Staff / Student Executive Body (BEM), Vocational Faculty, Universitas Brawijaya</h3>
    <p class="text-gray-500 mb-2">September 2023 – December 2023</p>
    <ul class="list-disc ml-5 text-gray-600 leading-relaxed">
      <li>Managed the Instagram feeds for the Student Resource Development and Puskominfo ministries of the BEM.</li>
      <li>Coordinated the design aspects of Puskominfo’s programs.</li>
      <li>Handled social media postings for BEM, Vocational Faculty, Universitas Brawijaya.</li>
    </ul>
  </div>
  <div class="mt-4">
    <h3 class="text-2xl font-semibold text-gray-700">DDM / Inclusive Future Leader</h3>
    <p class="text-gray-500 mb-2">October 2023</p>
    <ul class="list-disc ml-5 text-gray-600 leading-relaxed">
      <li>Coordinated the system operations.</li>
      <li>Planned social media posts, stories, and branding for Inclusive Future Leader.</li>
      <li>Served as the photographer for the Inclusive Future Leader event.</li>
    </ul>
  </div>
  <div class="mt-4">
    <h3 class="text-2xl font-semibold text-gray-700">DDM / National Business Forum of BUM-PT</h3>
    <p class="text-gray-500 mb-2">July 2024</p>
    <ul class="list-disc ml-5 text-gray-600 leading-relaxed">
      <li>Designed Instagram feeds and stories from start to finish for the event.</li>
      <li>Worked as the videographer for the National Business Forum of BUM-PT event.</li>
    </ul>
  </div>
</section>

   <!-- Portfolio Section -->
<section 
  id="portfolio" 
  class="my-12 p-8" 
  :style="{
    background: 'rgba(255, 255, 255, 0.5)', 
    backdropFilter: 'blur(10px)', 
    borderRadius: '10px', 
    border: '1px solid rgba(255, 255, 255, 0.2)'
  }"
>
  <h2 class="text-3xl font-bold text-gray-800 mb-4">Portfolio</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
    <div class="border rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg bg-white">
      <img src="/portfolio1.jpg" alt="Project 1" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold text-gray-800">SpotQ: Easy Cafe Booking</h3>
        <p class="text-gray-500 mt-2">Easily find and reserve a seat at your favorite cafe.</p>
      </div>
    </div>
    <div class="border rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg bg-white">
      <img src="/portfolio2.jpg" alt="Project 2" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold text-gray-800">Professional Design</h3>
        <p class="text-gray-500 mt-2">Eye-catching visual designs to enhance the image of student entrepreneurs on Instagram.</p>
      </div>
    </div>
    <div class="border rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg bg-white">
      <img src="/portfolio3.jpg" alt="Project 3" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold text-gray-800">12 Years of Achievement Logo</h3>
        <p class="text-gray-500 mt-2">A logo celebrating the 12th anniversary of the Brawijaya University student entrepreneurship community.</p>
      </div>
    </div>
  </div>
</section>


    <!-- Contact Section -->
<section id="contact" class="my-12 p-8">
  <div class="text-center">
    <h2 class="text-4xl font-bold text-gray-800 mb-4">Contact Me</h2>
    <p class="text-gray-600 mt-2">Feel free to reach out via social media or email!</p>
    <div class="flex justify-center space-x-4 mt-4">
      <a href="https://linkedin.com/in/adamzikricahyadi" class="text-blue-500 hover:underline" target="_blank">LinkedIn</a>
      <a href="mailto:adamzikricahyadi@example.com" class="text-blue-500 hover:underline">Email</a>
    </div>
  </div>
</section>

    <!-- Footer -->
    <footer class="text-center my-12 text-gray-500">
      &copy; 2024 Adam Zikri Cahyadi. All Rights Reserved.
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  mounted() {
    this.removeCursorListener = this.initCustomCursor();
  },
  beforeDestroy() {
    if (this.removeCursorListener) {
      this.removeCursorListener(); // Cleanup the event listener
    }
  },
  methods: {
    handleSubmit() {
      // Here you can handle the form submission
      alert(`Message sent by ${this.name}!`);
    },
    initCustomCursor() {
      const cursor = document.getElementById('custom-cursor');

      const updateCursor = (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
      };

      document.addEventListener('mousemove', updateCursor);

      return () => {
        document.removeEventListener('mousemove', updateCursor);
      };
    }
  }
}
</script>


<style scoped>
.container {
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-image: url('/bg-web.jpg');
  background-size: cover;
  background-position: center;
  display: block;
  flex-direction: column;
  align-items: center; 

}

h1 {
  font-family: 'Poppins', sans-serif;
}

h2 {
  color: #2c3e50;
}

h3 {
  color: #34495e;
}

img {
  transition: transform 0.3s ease-in-out;
}


/* Add hover effect to portfolio items */
.portfolio-item {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.portfolio-item:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

/* Style for the profile picture */
.profile-img {
  width: 160px; /* Ukuran lebar persegi */
  height: 160px; /* Ukuran tinggi persegi */
  border-radius: 15px; /* Menentukan seberapa melengkung sudutnya */
  border: 4px solid #3490dc; /* Warna border biru */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Bayangan untuk efek kedalaman */
  overflow: hidden; /* Menyembunyikan bagian gambar yang melebihi kontainer */
}

.custom-cursor {
  position: fixed; /* Fixed positioning to follow the mouse */
  width: 30px; /* Width of the cursor */
  height: 30px; /* Height of the cursor */
  border-radius: 50%; /* Make it circular */
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(230, 230, 230, 0.6)); /* Light gradient white */
  pointer-events: none; /* Prevent the cursor from blocking mouse events */
  transition: transform 0.2s ease; /* Add a smooth transform effect */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  z-index: 9999; /* Ensure it appears above other elements */
}
</style>

