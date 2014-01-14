// creamos el controlador (funcion) listCtrl
function listaCtrl($scope){
    // creamos algunos metodos del controlador
    $scope.totalLista = 10;
    $scope.sumaLista  = $scope.totalLista + 8;

    // Creamos una lista  que la mostraremos en la vista (HTML) 
    $scope.listas      = [
        { nombre: "Tareas", clasificada: false },
        { nombre: "proveedores", clasificada: false },
        { nombre: "Utiles", clasificada: false },
        { nombre: "Nombres", clasificada: false },
        { nombre: "Lenguajes", clasificada: false },
    ];

}