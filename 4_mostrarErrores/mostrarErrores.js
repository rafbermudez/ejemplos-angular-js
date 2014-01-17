function headerController($scope) {
	$scope.isError = false;
	$scope.isWarning = false;
	$scope.showError = function() {
		$scope.messageText = 'Esto es un error';
		$scope.isError = true;
		$scope.isWarning = false;
	};
	$scope.showWarning = function() {
		$scope.messageText = 'Esto es un warning';
		$scope.isWarning = true;
		$scope.isError = false;
	};
}