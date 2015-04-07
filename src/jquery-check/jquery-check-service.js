import angular from 'angular';

export default function () {
    return {
        getApplicationElement
    };

    function getApplicationElement() {
        return angular.element('[ng-app]')[0];
    }
}
