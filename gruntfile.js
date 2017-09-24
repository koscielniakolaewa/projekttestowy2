module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'main.css': 'main.sass'
  			}
  		}
  	},

  	imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'images/',
  				src: ['**/*.{png,jpg,gif,jpeg}'],
  				dest: 'build/'
  			}]
  		}
  	}


  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');git add -A
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).

  grunt.registerTask('default', ['sass', 'imagemin']);
};