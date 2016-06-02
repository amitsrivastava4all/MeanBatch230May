module.exports=function(grunt){
    grunt.loadNpmTasks('grunt-karma');
    grunt.initConfig({
        karma: {
            unit: {
            configFile: 'karma.conf.js'
            }
        }
    });
    
    grunt.registerTask("default",["karma"]);
    
}