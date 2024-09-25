<template>
  <div class="container mx-auto p-4 min-h-screen">
    <!-- Header -->
    <header class="text-center my-12">
      <div class="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
         <img src="/profile-picture.jpg" alt="Profile Picture" class="w-full h-full object-cover">
      </div>
      <h1 class="text-5xl font-extrabold text-white tracking-tight mt-6">Adam Zikri Cahyadi</h1>
      <p class="text-xl text-gray-500 mt-2">Web Developer | Designer | Content Creator</p>
      <div class="mt-6">
        <a href="#portfolio" class="text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full shadow-lg transition duration-300 ease-in-out">View My Portfolio</a>
      </div>
    </header>

    <!-- About Section -->
    <section 
  id="about" 
  class="my-12 p-8" 
  :style="{
    background: 'rgba(255, 255, 255, 0.5)', 
    backdropFilter: 'blur(10px)', 
    borderRadius: '10px', 
    border: '1px solid rgba(255, 255, 255, 0.2)'
  }"
>
      <h2 class="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
      <p class="text-gray-600 leading-relaxed">
        I am a passionate web developer with expertise in HTML, CSS, JavaScript, and Vue.js,
        dedicated to creating dynamic, interactive websites. As a designer, I craft visually engaging,
        user-friendly interfaces, and as a content creator, I produce compelling multimedia content.
        I am committed to continuously improving my skills to deliver top-quality results for every project.
      </p>
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
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Skills</h2>
      <ul class="list-none grid grid-cols-2 gap-4 text-gray-600">
        <li class="flex items-center">
          <span class="mr-2 text-blue-500">✓</span> HTML5, CSS3, JavaScript
        </li>
        <li class="flex items-center">
          <span class="mr-2 text-blue-500">✓</span> Capcut, Canva, Procreate
        </li>
        <li class="flex items-center">
          <span class="mr-2 text-blue-500">✓</span> vue.js, C++, MySQL
        </li>
        <li class="flex items-center">
          <span class="mr-2 text-blue-500">✓</span> Figma, Adobe Illustrator, Adobe Photoshop
        </li>
        <li class="flex items-center">
          <span class="mr-2 text-blue-500">✓</span> Node.js, Git, Github
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
    <section id="portfolio" class="my-12 bg-white shadow-md rounded-lg p-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Portfolio</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        <div class="border rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
          <img src="/portfolio1.jpg" alt="Project 1" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800">SpotQ: Easy Cafe Booking</h3>
            <p class="text-gray-500 mt-2">Easily find and reserve a seat at your favorite cafe.</p>
          </div>
        </div>
        <div class="border rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
          <img src="/portfolio2.jpg" alt="Project 2" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800">Professional Design</h3>
            <p class="text-gray-500 mt-2">Eye-catching visual designs to enhance the image of student entrepreneurs on Instagram.</p>
          </div>
        </div>
        <div class="border rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
          <img src="/portfolio3.jpg" alt="Project 3" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800">12 Years of Achievement Logo</h3>
            <p class="text-gray-500 mt-2">A logo celebrating the 12th anniversary of the Brawijaya University student entrepreneurship community.</p>
          </div>
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
  name: 'App',
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-image: url('/bg-web.jpg');
  background-size: cover;
  background-position: center;
  display:block;
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
.w-40.h-40 {
  border-radius: 50%;
  border: 4px solid #3490dc;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>