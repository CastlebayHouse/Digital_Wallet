angular.module("main",[])
  .controller('mainCtrl', MainCtrl);

function MainCtrl($scope) {
  $scope.transactions = transactions;
  $scope.balances = balances;
  $scope.activeCard = 0;
  $scope.setActiveCard = setActiveCard;
  $scope.getBalanceDollars = getBalanceDollars;
  $scope.getBalanceCents = getBalanceCents;

  function setActiveCard(whichCard) {
    $scope.activeCard = whichCard;
  }

  function getBalanceDollars() {
    return balances[$scope.activeCard].balanceDollars;
  }

  function getBalanceCents() {
    return balances[$scope.activeCard].balanceCents;
  }
}
