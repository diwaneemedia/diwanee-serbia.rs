<template>
  <div>
    <div class="work-details">
      <div class="container">
        <h6 class="work-details-tag">JOBS</h6>

        <h2 class="work-details-title">{{job.title}}</h2>
        <workDetails v-for='(work_detail, index) in job.work_details'
          :key="index"
          :title="work_detail.title"
          :list_items="work_detail.list"
         />
        <p class="work-details-outro">
          <span class="playfair">If you have please share with us a git repositories links.</span>
          <br>
          <br>This is a full-time, in-house position. If you are someone who enjoys challenges, who is curious, always
          searching for
          new solutions, evolving technologies, and you have the required qualifications, please send us your CV
          on-line:
          <span class="text--bold">posao@diwanee-serbia.com</span>
          <br>
          <br>Due to high volume of job applications, we cannot respond to your application individually, only successful
          applicants
          will be contacted.
        </p>
        <a href='mailto:posao@diwanee-serbia.com' class="button">Apply now</a>
      </div>
    </div>

  </div>
</template>
<script>
import workDetails from "~/components/work/WorkDetails.vue";
export default {
  components: {
    workDetails    
  },
  layout: "work",

  asyncData(context){
    return new Promise((resolve, reject) => {
      resolve({
        job:[
          {
            id:"fe",
            title: "Frontend Developer",
            work_details:[
              {
                title: "Job Requirements",
                list: [
                   "3+ years of relevant working experience ",
                   "Proficient knowledge of HTML5 and CSS",
                   "Experience using CSS preprocessors (SASS, LESS)",
                   "Good understanding of client-side scripting",
                   "Knowledge of either Angular, React, Vue.js",
                   "Experience using NodeJS modules for application build cycle (Webpack/Gulp)",
                   "Experience using some of testing frameworks (Jest, Jasmine, Mocha …) is a plus",
                   "Experience with Git",
                   "Knowledge of server side language (Java, PHP, etc.) is a plus",
                   "Creating responsive, fluid, and maintainable interfaces",
                   "Knowledge of cross-device compatibility issues and solutions"
                ]
              },
              {
                title: "Responsibilites",
                list: [
                  "Work as part of team",
                  "Write'clean and well designed code",
                  "Contribute in all phases of development lifecycle",
                  "Develop and deploy new features to facilitate related procedures and tools if necessary",
                  "Produce, update and/or maintain accurate project documentation"
                ]
              },
              {
                title: "Following Will Be Considered As An Asset",
                list: [
                  "jQuery",
                  "Other programming languages, please state the level of proficiency",
                  "Please state which Framework you’ve worked with",
                ]
              },
              {
                title: "We Look Forward To Your Aplication, Which Should Include",
                list: [
                  "CV",
                  "Current and desired salary",
                  "Your start date",
                  "Other interests"
                ]
              },
            ]
          },
          {
            id:"php",
            title: "PHP Developer",
            work_details:[
              {
                title: "Job Requirements",
                list: [
                   "More than 2 years’ experience with any of listed PHP framework (Laravel, Yii, Symphony, Slim, Lumen)",
                   "Strong understanding of OOP concepts",
                   "MySQL",
                   "Smarty template engine (or state which template you use)",
                   "Memcached",
                   "ElasticSearch",
                   "Git",
                   "Composer",
                   "Apache",
                   "NginX",
                   "Work on Linux OS (Mac OS X)",
                   "English language"
                ]
              },
              {
                title: "Responsibilites",
                list: [
                  "Work as part of team",
                  "Write'clean and well designed code",
                  "Contribute in all phases of development lifecycle",
                  "Develop and deploy new features to facilitate related procedures and tools if necessary",
                  "Produce, update and/or maintain accurate project documentation"
                ]
              },
              {
                title: "Following Will Be Considered As An Asset",
                list: [
                  "NoSQL databases (Redis, Neo4J ..)",
                  "Varnish",
                  "APC",
                  "JavaScript, jQuery",
                  "Ext JS",
                  "Other programming languages, please state the level of proficiency",
                  "Please state which Framework you’ve worked with"
                ]
              },
              {
                title: "We Look Forward To Your Aplication, Which Should Include",
                list: [
                  "CV",
                  "Current and desired salary",
                  "Your start date",
                  "Other interests"
                ]
              },
            ]
          },
          {
            id:"web",
            title: "Web Designer",
            work_details:[
              {
                title: "Job Requirements",
                list: [
                   "Experience in projects as UI/UX designer",
                   "Portfolio or/and link to your portfolio",
                   "Sketch app and Adobe experience design (Xd)",
                   "Adobe Illustrator and Photoshop",
                   "Up-to-date knowledge of new technologies and trends in the Internet industry and software development",
                   "English language"
                ]
              },
              {
                title: "Responsibilites",
                list: [
                  "Ability to produce RWD as well as design for native applications (Android and IOS)",
                  "To develop and maintain designer system",
                  "Strong commitment to high quality",
                ]
              },
              {
                title: "Following Will Be Considered As An Asset",
                list: [
                  "Any additional knowledge in web development",
                ]
              },
              {
                title: "We Look Forward To Your Aplication, Which Should Include",
                list: [
                  "CV",
                  "Current and desired salary",
                  "Your start date",
                  "Other interests"
                ]
              },
            ]
          },
          {
            id:"pm",
            title: "Project Manager",
            work_details:[
              {
                title: "Job Requirements",
                list: [
                   "At least 2 years of experience managing projects in a creative setting",
                   "English language, please state the level of proficiency",
                   "Experience using CSS preprocessors (SASS, LESS)",
                   "Google Analytics, Tag Manager, Webmaster Tools, etc",
                   "Experience in communicating with clients in various ways",
                   "Knowledge about the development and design of online sites",
                   "Ability to manage many different jobs and meet deadlines consistently",
                   "Excellent verbal and written communication skills",
                   "PHP, HTML, please state any additional knowledge in web development",
                   "Other languages, please state the level of proficiency"
                ]
              },
              {
                title: "Responsibilites",
                list: [
                  "Coordination and delivery of commercial online projects.",
                  "Produce work plans and coordinate the efforts of the creative team, development teams and technical staff",
                  "Ability to lead the team of developers and set priorities",
                  "Ensure the integrated elements of digital projects come together on time and meet client’s expectations"
                ]
              },
              {
                title: "We Look Forward To Your Aplication, Which Should Include",
                list: [
                  "CV",
                  "Current and desired salary",
                  "Your start date",
                  "Other interests"
                ]
              },
            ]
          },
          {
          id:"js",
          title: "JavaScript Developer",
          work_details:[
            {
              title: "Job requirements",
              list: [
                 "2+ years’ experience in JS/FE",
                 "Experience with at least one of the listed frameworks/libraries: VueJS, ReactJS, NuxtJS, AngularJS, EmberJS, BackboneJS",
                 "Experience with development of both the client application and the server application (SPA / Universal) using JavaScript frameworks/libraries",
                 "Creating responsive, fluid, and maintainable interfaces",
                 "Experience with Git, Webpack, package manager (yarn, npm)",
                 "Knowledge of cross-device compatibility issues and solutions",
                 "Proficiency in spoken and written English",
              ]
            },
            {
              title: "Following will be considered as an asset",
              list: [
                "Experience with NodeJS",
                "Experience with ES6",
                "Genuinely curious and constantly strive to learn.",
                "Have good communication skills"
              ]
            },
            {
              title: "We look forward to your aplication, which should include",
              list: [
                "CV",
                "Your start date",
                "Other interests"
              ]
            },
            {
              title: "Benefits",
              list: [
                "Competitive salary",
                "Good work/life balance",
                "Engaging projects",
                "Friendly atmosphere",
                "Work from home options"
                ]
              },
            ]
          }
        ].find(el => el.id === context.params.id)
      })
    })
  }

};
</script>
<style lang="scss">

</style>
