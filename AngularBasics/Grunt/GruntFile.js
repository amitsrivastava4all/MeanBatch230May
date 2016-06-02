module.exports=function(grunt){   // this is the Wrapper Function
    grunt.loadNpmTasks('grunt-contrib-concat'); // Load the Plugin
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // this is the area where you configure grunt plugins things.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
                options: {
                    separator: ';',
                    },
                dist: {
                    src: ['js/controller/*.js','js/models/*.js','js/utils/*.js'],
                    dest: 'dist/built.js',
                },
  },
        uglify: {
    my_target: {
      files: {
        'dest/build.min.js': ['dist/built.js']
      }
    }
  }
    });
    grunt.registerTask("default",["concat","uglify"]); //WorkFlow
    /*grunt.registerTask("default",function(){
        grunt.log.write('Hello Grunt Task');
    });*/
}