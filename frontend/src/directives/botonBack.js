function botonBack() {
	return {
		controller: function($scope, $rootScope, $state) {

			var user = $rootScope.userAuth;

			$scope.transitionToState = function() {
				$state.go('reporte_buscador', {supervisorId: user.id});
			}
		},
		template: `
		<style>
			.btn-circle {
			  width: 30px;
			  height: 30px;
			  text-align: center;
			  padding: 6px 0;
			  font-size: 12px;
			  line-height: 1.428571429;
			  border-radius: 15px;
			}
			.btn-circle.btn-lg {
			  width: 50px;
			  height: 50px;
			  padding: 10px 16px;
			  font-size: 18px;
			  line-height: 1.33;
			  border-radius: 25px;
			}
			.btn-circle.btn-xl {
			  width: 70px;
			  height: 70px;
			  padding: 10px 16px;
			  font-size: 24px;
			  line-height: 1.33;
			  border-radius: 35px;
			}
			#back_button{
				position: absolute;
				top: 80px;
				left: 20px;
			}
		</style>
		<button 
			id="back_button"
			type="button"
			title="volver"
			ng-click="transitionToState()"
			class="btn btn-default btn-circle btn-lg">
			<i class="glyphicon glyphicon-search"></i>
		</button>
		`
	}
}

module.exports = {
	name: 'botonBack',
	func: botonBack
};