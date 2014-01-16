//Frutas iniciales en la lista
function listaCtrl($scope) {            
	$scope.frutas = [                            
		{nombre: 'manzana'},                            
		{nombre: 'naranja'},                           
	 	{nombre: 'pera' },                            
	 ];            
	 
	 //Insertamos al final de la lista de frutas
	 $scope.insertFruta= function(nombre) {                
	 	$scope.frutas.splice($scope.frutas.length,0,{nombre: nombre});            
	 }        
}