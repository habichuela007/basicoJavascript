var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
for(var i = 0; i < estudiantes.length;i++){
    //console.log(estudiantes[i]);
    saludarEstudiantes(estudiantes[i]);
}

var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
for(var estudiante of estudiantes){
    //console.log(estudiantes[i]);
    saludarEstudiantes(estudiante);
}

var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}