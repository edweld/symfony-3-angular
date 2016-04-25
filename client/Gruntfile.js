module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),  
    compass: {                  // Task
      dist: {
        options: {
           config: '<%=pkg.sass.config%>',  // css_dir = 'dev/css' @TODO: move bootstrap gem to grunt sass
           sassDir: '<%=pkg.sass.src%>',
           cssDir: '<%=pkg.output%>/css/'
	}
      }
    },
    uglify: {
      app: {
        options: {
          mangle: true
        },
        files: {
          '<%=pkg.output%>/js/app.min.js': ['app/js/app.js', 'app/js/controllers/*.js','app/js/services/*.js', 'app/js/filters/*.js','app/js/directives/*.js']
        }
      },
      lib: {
        options: {
          mangle: true
        },
        files: {
          '<%=pkg.output%>/js/lib.min.js' : [
            'app/lib/angular/angular.js',
            'app/lib/angular/angular-route.js',
            'app/lib/angular/angular-cookies.js',
            'app/lib/angular/angular-animate.js'
          ]
        } 
      }
    },
    copy: {
      main: {
	  expand: true,
          cwd: 'app/partials/',
          src: '*',
          dest: '<%=pkg.output%>/partials/' 
      },
      images: {
          /** @TODO: gzip images **/
	  expand: true,
          cwd: 'app/images/',
          src: '*',
          dest: '<%=pkg.output%>/images/' 
      },
      fonts: {
          expand: true,
          cwd: 'app/',
          src: 'fonts/bootstrap/*',
          dest: '<%=pkg.output%>/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['compass','uglify','copy']);
};
