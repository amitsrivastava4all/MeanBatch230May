
//******************Using FS Module **************************************
var fs = require("fs");
var path = require("path");

/*fs.stat(__filename,function(err,stat){
    console.log("Stat ",stat);
    console.log("IsFile ",stat.isFile());
    console.log("IsDir ",stat.isDirectory());
    console.log("IsBlock Device ",stat.isBlockDevice());

});*/

/*console.log("Current File Path is ",__filename);
console.log("Current Dir Path is ",__dirname);
// Scanning a Folder
var newPath = path.normalize(__dirname+"/..");
console.log("New Path ",newPath);
fs.readdir(newPath,function(err,folders){
   console.log(folders);
});*/
/*fs.open("abcd.txt","r",function(error,fd){
    console.log("file open ",fd);
    if(fd){
    fs.readFile("abcd.txt",function(error,content){
            console.log("content is "+content);
    });
    }
    fs.close(fd,function(error){
        console.log("File Close")
    });
});*/

/*console.log("Before File Read...");
var x = fs.readFileSync("abcd.txt");
console.log("*********** File Content is "+x);
console.log("***************************************************")
var a= 10;
var b = 20;
var c = a + b;
console.log("Sum is ",c);*/
/*
console.log("Before File Read");
fs.readFile(__filename,function(error,content){
    if(error){

    }
    else
    {
        console.log("After Asynch Read "+content);
    }
});
console.log("After File Read.....");
*/

//Writing in a File
/*var data ='this is a sample data to write in a file...';
fs.writeFile('Test.txt',data,function(error){
if(error){
    console.log("Error During Writing in a File ",error);
}
else{
    console.log("Data Written SuccessFully...");
}

});*/

//Delete a File
fs.unlink('Test.txt', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("File deleted successfully!");
});

// Creating Directory
fs.mkdir('/tmp/test',function(err){
    if (err) {
        return console.error(err);
    }
    console.log("Directory created successfully!");
});

// Reading Directory
fs.readdir("/tmp/",function(err, files){
    if (err) {
        return console.error(err);
    }
    files.forEach( function (file){
        console.log( file );
    });
});

fs.rmdir("/tmp/test",function(err) {
    if (err) {
        return console.error(err);
    }
    else{
        console.log("Remove Directory Done...");
    }
});

// Open a File and then read/write in a File
*/
